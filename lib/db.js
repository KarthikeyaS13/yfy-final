import { DatabaseSync } from 'node:sqlite';
import path from 'path';
import fs from 'fs';

const DB_DIR = process.env.DB_DIR || (
  (process.env.VERCEL || process.env.AWS_LAMBDA_FUNCTION_NAME) 
    ? path.join('/tmp', 'yfy_data') 
    : path.join(process.cwd(), 'data')
);
const DB_PATH = process.env.DB_PATH || path.join(DB_DIR, 'yfy.db');

// Ensure data directory exists
try {
  if (!fs.existsSync(DB_DIR)) {
    fs.mkdirSync(DB_DIR, { recursive: true });
  }
} catch (err) {
  console.warn('[DB WARNING] Could not create DB_DIR:', err.message);
}

let dbInstance = null;

export function getDb() {
  if (!dbInstance) {
    dbInstance = new DatabaseSync(DB_PATH);
    initTables(dbInstance);
  }
  return dbInstance;
}

function initTables(db) {
  // 1. Leads table with full sales attribution
  db.exec(`
    CREATE TABLE IF NOT EXISTS leads (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      lead_uid TEXT UNIQUE,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      phone TEXT,
      company TEXT,
      employee_count TEXT,
      persona TEXT,
      interested_module TEXT,
      cta_id TEXT,
      source_page TEXT,
      first_touch_page TEXT,
      referrer TEXT,
      utm_params TEXT,
      notes TEXT,
      commercial_intent TEXT,
      status TEXT DEFAULT 'new',
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );
  `);

  try { db.exec(`ALTER TABLE leads ADD COLUMN notes TEXT;`); } catch {}
  try { db.exec(`ALTER TABLE leads ADD COLUMN commercial_intent TEXT;`); } catch {}

  // 2. Newsletter & Compliance Subscribers
  db.exec(`
    CREATE TABLE IF NOT EXISTS subscribers (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      email TEXT UNIQUE NOT NULL,
      frequency TEXT DEFAULT 'monthly_calendar',
      status TEXT DEFAULT 'active',
      subscribed_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );
  `);

  // 3. Compliance Events & Statutory Deadlines
  db.exec(`
    CREATE TABLE IF NOT EXISTS compliance_events (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      event_id TEXT UNIQUE,
      title TEXT NOT NULL,
      act_name TEXT,
      state TEXT DEFAULT 'All India',
      due_date TEXT NOT NULL,
      due_date_day INTEGER,
      due_month INTEGER,
      frequency TEXT DEFAULT 'monthly',
      form_number TEXT,
      penalty_clause TEXT,
      description TEXT,
      last_updated DATETIME DEFAULT CURRENT_TIMESTAMP
    );
  `);

  try { db.exec(`ALTER TABLE compliance_events ADD COLUMN due_date_day INTEGER;`); } catch {}
  try { db.exec(`ALTER TABLE compliance_events ADD COLUMN due_month INTEGER;`); } catch {}

  // 4. Email / Notification Audit Log
  db.exec(`
    CREATE TABLE IF NOT EXISTS email_logs (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      to_email TEXT NOT NULL,
      subject TEXT NOT NULL,
      template_name TEXT NOT NULL,
      status TEXT NOT NULL,
      payload TEXT,
      sent_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );
  `);

  // Auto-seed initial compliance events from compliance.json if table is empty
  try {
    const countRow = db.prepare(`SELECT COUNT(*) as count FROM compliance_events`).get();
    if (countRow && countRow.count === 0) {
      const jsonPath = path.join(DB_DIR, 'compliance.json');
      if (fs.existsSync(jsonPath)) {
        const raw = fs.readFileSync(jsonPath, 'utf8');
        const defaultEvents = JSON.parse(raw);
        if (Array.isArray(defaultEvents) && defaultEvents.length > 0) {
          saveComplianceEvents(defaultEvents, false);
        }
      }
    }
  } catch {}
}

// ─── Lead Operations ──────────────────────────────────────────

export function insertLead(data) {
  const db = getDb();
  const leadUid = `lead_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
  const utmString = typeof data.utmParams === 'object' ? JSON.stringify(data.utmParams) : (data.utmParams || null);

  const stmt = db.prepare(`
    INSERT INTO leads (
      lead_uid, name, email, phone, company, employee_count, persona,
      interested_module, cta_id, source_page, first_touch_page, referrer, utm_params, notes, commercial_intent, status
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `);

  stmt.run(
    leadUid,
    data.name || `${data.firstName || ''} ${data.lastName || ''}`.trim(),
    data.workEmail || data.email,
    data.phone || null,
    data.company || null,
    data.employeeCount || null,
    data.persona || null,
    data.interestedModule || 'Platform Core',
    data.ctaOrigin || data.ctaId || 'direct_form',
    data.sourcePage || '/platform/demo',
    data.firstTouchPage || null,
    data.referrer || null,
    utmString,
    data.notes || null,
    data.commercialIntent || null,
    'new'
  );

  return { leadUid, email: data.workEmail || data.email };
}

export function getLeads(limit = 100) {
  const db = getDb();
  const stmt = db.prepare(`
    SELECT * FROM leads ORDER BY created_at DESC LIMIT ?
  `);
  return stmt.all(limit);
}

export function updateLeadStatus(leadUid, status) {
  const db = getDb();
  const stmt = db.prepare(`
    UPDATE leads SET status = ? WHERE lead_uid = ?
  `);
  stmt.run(status, leadUid);
  return { success: true, leadUid, status };
}

// ─── Subscriber Operations ────────────────────────────────────

export function insertSubscriber(email, frequency = 'monthly_calendar') {
  const db = getDb();
  const checkStmt = db.prepare(`SELECT id, status FROM subscribers WHERE email = ?`);
  const existing = checkStmt.get(email.toLowerCase().trim());

  if (existing) {
    if (existing.status !== 'active') {
      const updateStmt = db.prepare(`UPDATE subscribers SET status = 'active' WHERE id = ?`);
      updateStmt.run(existing.id);
    }
    return { status: 'already_subscribed', email };
  }

  const stmt = db.prepare(`
    INSERT INTO subscribers (email, frequency, status) VALUES (?, ?, 'active')
  `);
  stmt.run(email.toLowerCase().trim(), frequency);
  return { status: 'subscribed', email };
}

export function getActiveSubscribers() {
  const db = getDb();
  const stmt = db.prepare(`
    SELECT email, frequency FROM subscribers WHERE status = 'active'
  `);
  return stmt.all();
}

// ─── Compliance Event Operations ──────────────────────────────

export function clearComplianceEvents() {
  const db = getDb();
  db.exec(`DELETE FROM compliance_events`);
}

export function saveComplianceEvents(events, replace = false) {
  const db = getDb();
  if (replace) {
    clearComplianceEvents();
  }

  const upsertStmt = db.prepare(`
    INSERT INTO compliance_events (
      event_id, title, act_name, state, due_date, due_date_day, due_month, frequency, form_number, penalty_clause, description, last_updated
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, CURRENT_TIMESTAMP)
    ON CONFLICT(event_id) DO UPDATE SET
      title = excluded.title,
      act_name = excluded.act_name,
      state = excluded.state,
      due_date = excluded.due_date,
      due_date_day = excluded.due_date_day,
      due_month = excluded.due_month,
      frequency = excluded.frequency,
      form_number = excluded.form_number,
      penalty_clause = excluded.penalty_clause,
      description = excluded.description,
      last_updated = CURRENT_TIMESTAMP
  `);

  let count = 0;
  for (const ev of events) {
    const dueDay = ev.dueDateDay || ev.due_date_day || parseInt(ev.due_day) || 15;
    const dueMonth = ev.dueMonth || ev.due_month ? parseInt(ev.dueMonth || ev.due_month) : null;
    const freq = (ev.frequency || 'monthly').toLowerCase().trim();
    
    let derivedDate = ev.due_date || ev.date || '';
    if (!derivedDate) {
      const year = new Date().getFullYear();
      const monthIdx = dueMonth ? dueMonth - 1 : new Date().getMonth();
      derivedDate = `${year}-${String(monthIdx + 1).padStart(2, '0')}-${String(dueDay).padStart(2, '0')}`;
    }

    const eventId = ev.id || ev.event_id || `${(ev.act_name || ev.type || 'statute').toLowerCase().replace(/\s+/g, '_')}_${freq}_${dueDay}_${dueMonth || 'all'}_${count}`;

    upsertStmt.run(
      eventId,
      ev.title || ev.name || 'Statutory Compliance Due Date',
      ev.act_name || ev.type || ev.act || null,
      ev.state || 'All India',
      derivedDate,
      dueDay,
      dueMonth,
      freq,
      ev.form_number || ev.form || null,
      ev.penalty_clause || ev.penalty || null,
      ev.description || null
    );
    count++;
  }
  return count;
}

export function getComplianceEvents() {
  const db = getDb();
  try {
    const stmt = db.prepare(`
      SELECT * FROM compliance_events ORDER BY due_date_day ASC, due_date ASC
    `);
    return stmt.all();
  } catch (err) {
    try {
      db.exec(`ALTER TABLE compliance_events ADD COLUMN due_date_day INTEGER;`);
      db.exec(`ALTER TABLE compliance_events ADD COLUMN due_month INTEGER;`);
      const stmt = db.prepare(`
        SELECT * FROM compliance_events ORDER BY due_date ASC
      `);
      return stmt.all();
    } catch {
      const fallbackStmt = db.prepare(`SELECT * FROM compliance_events`);
      return fallbackStmt.all();
    }
  }
}

// ─── Email Logging Operations ─────────────────────────────────

export function logEmail(toEmail, subject, templateName, status, payload = null) {
  const db = getDb();
  const payloadStr = typeof payload === 'object' ? JSON.stringify(payload) : (payload || null);
  const stmt = db.prepare(`
    INSERT INTO email_logs (to_email, subject, template_name, status, payload)
    VALUES (?, ?, ?, ?, ?)
  `);
  stmt.run(toEmail, subject, templateName, status, payloadStr);
}

export function getEmailLogs(limit = 50) {
  const db = getDb();
  const stmt = db.prepare(`
    SELECT * FROM email_logs ORDER BY sent_at DESC LIMIT ?
  `);
  return stmt.all(limit);
}
