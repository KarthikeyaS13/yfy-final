"use client";

import React, { useState, useEffect, useRef } from 'react';
import { 
  Users, 
  Calendar, 
  Mail, 
  FileText, 
  ShieldCheck, 
  Search, 
  Download, 
  Plus, 
  Trash2, 
  Edit3, 
  CheckCircle2, 
  ExternalLink,
  Sparkles,
  RefreshCw,
  LogOut,
  Upload,
  FileSpreadsheet,
  X,
  AlertCircle
} from 'lucide-react';
import styles from './AdminDashboard.module.css';

const SAMPLE_CSV_CONTENT = `title,act,state,frequency,due_date_day,due_month,specific_date,form_number,penalty_clause,description
"PF Monthly ECR & Contribution",PF,"All India",monthly,15,,,"Challan ECR","14B damages up to 25% + 12% 7Q interest","Mandatory monthly deposit of EPF, EPS and EDLI contributions"
"ESIC Monthly Contribution",ESI,"All India",monthly,15,,,"Online Challan","Interest @ 12% p.a. under Reg 31A","Payment of monthly employee & employer ESI contribution"
"TDS Salary Deposit (Sec 192)",TDS,"All India",monthly,7,,,"Challan 281","1.5% interest per month under Sec 201(1A)","Monthly deposit of tax deducted at source from employee salaries"
"PT Monthly Payment - Karnataka",PT,Karnataka,monthly,20,,,"Form 5A","Interest @ 1.25% per month + penalty","Monthly tax deduction and filing for employees in Karnataka"
"PT Monthly Payment - Maharashtra",PT,Maharashtra,monthly,31,,,"Form III-B","Interest @ 1.25% per month + penalty","Monthly tax payment for employers with liability exceeding threshold"
"TDS 24Q Quarterly Return - Q1",TDS,"All India",quarterly,31,7,2026-07-31,"Form 24Q","Late fee Rs 200/day under 234E + 271H penalty","Quarterly e-TDS return for salary payments for Q1 (April to June)"
"TDS 24Q Quarterly Return - Q2",TDS,"All India",quarterly,31,10,2026-10-31,"Form 24Q","Late fee Rs 200/day under 234E + 271H penalty","Quarterly e-TDS return for salary payments for Q2 (July to September)"
"TDS 24Q Quarterly Return - Q3",TDS,"All India",quarterly,31,1,2027-01-31,"Form 24Q","Late fee Rs 200/day under 234E + 271H penalty","Quarterly e-TDS return for salary payments for Q3 (October to December)"
"TDS 24Q Quarterly Return - Q4",TDS,"All India",quarterly,31,5,2027-05-31,"Form 24Q","Late fee Rs 200/day under 234E + 271H penalty","Quarterly e-TDS return for salary payments for Q4 (January to March)"
"ESIC Half-Yearly Return (Period 1)",ESI,"All India",half_yearly,12,5,2026-05-12,"Form 5","Prosecution under Section 85","Half-yearly return for contribution period ending 31st March"
"ESIC Half-Yearly Return (Period 2)",ESI,"All India",half_yearly,11,11,2026-11-11,"Form 5","Prosecution under Section 85","Half-yearly return for contribution period ending 30th September"
"CLRA Half-Yearly Return (Contractor)",CLRA,"All India",half_yearly,30,7,2026-07-30,"Form XXIV","Licensing suspension under Sec 14","Half-yearly return by contractor under Rule 82(1) within 30 days of half-year"
"LWF Half-Yearly Contribution - Maharashtra Jun",LWF,Maharashtra,half_yearly,15,7,2026-07-15,"Form A-1","Penal interest under Labour Welfare Fund Act","Half-yearly welfare fund contribution for June"
"LWF Half-Yearly Contribution - Maharashtra Dec",LWF,Maharashtra,half_yearly,15,1,2027-01-15,"Form A-1","Penal interest under Labour Welfare Fund Act","Half-yearly welfare fund contribution for December"
"Factories Act Annual Return",Factories,"All India",annual,1,2,2027-02-01,"Form 21 / 22","Fine up to Rs 1,00,000 under Sec 92","Unified annual return for factory workforce, hours, leave and accidents"
"Payment of Bonus Annual Return",Bonus,"All India",annual,30,11,2026-11-30,"Form D","Imprisonment up to 6 months or fine","Annual return showing bonus paid to allocable surplus employees"`;

const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

// Helper to parse CSV properly handling quotes
function parseCsv(text) {
  const lines = text.trim().split(/\r\n|\n/);
  if (lines.length < 2) return [];

  const headers = lines[0].split(',').map(h => h.trim().replace(/^["']|["']$/g, ''));
  const results = [];

  for (let i = 1; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;

    const row = [];
    let insideQuotes = false;
    let currentField = '';

    for (let char of line) {
      if (char === '"') {
        insideQuotes = !insideQuotes;
      } else if (char === ',' && !insideQuotes) {
        row.push(currentField.trim());
        currentField = '';
      } else {
        currentField += char;
      }
    }
    row.push(currentField.trim());

    const item = {};
    headers.forEach((h, index) => {
      let val = row[index] || '';
      val = val.replace(/^["']|["']$/g, '').trim();
      item[h] = val;
    });

    if (item.title) {
      results.push({
        title: item.title,
        type: item.act || item.type || 'PF',
        state: item.state || 'All India',
        frequency: (item.frequency || 'monthly').toLowerCase().trim(),
        dueDateDay: parseInt(item.due_date_day) || 15,
        dueMonth: item.due_month ? parseInt(item.due_month) : null,
        form_number: item.form_number || '',
        penalty_clause: item.penalty_clause || '',
        description: item.description || '',
        due_date: item.specific_date || item.due_date || '',
      });
    }
  }
  return results;
}

export default function AdminPortal() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const [authError, setAuthError] = useState('');

  const [activeTab, setActiveTab] = useState('leads'); // 'leads' | 'compliance' | 'subscribers' | 'logs'
  const [loading, setLoading] = useState(false);

  // Data states
  const [leads, setLeads] = useState([]);
  const [emailLogs, setEmailLogs] = useState([]);
  const [subscribers, setSubscribers] = useState([]);
  const [complianceEvents, setComplianceEvents] = useState([]);

  // Filter & Search states
  const [searchQuery, setSearchQuery] = useState('');
  const [moduleFilter, setModuleFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  const [freqFilter, setFreqFilter] = useState('all'); // for compliance

  // Selected lead for attribution drawer
  const [selectedLead, setSelectedLead] = useState(null);

  // Compliance modal state
  const [isCompModalOpen, setIsCompModalOpen] = useState(false);
  const [editingCompId, setEditingCompId] = useState(null);
  const [compFormData, setCompFormData] = useState({
    title: '',
    type: 'PF',
    state: 'All India',
    frequency: 'monthly',
    dueDateDay: 15,
    dueMonth: 1,
    form_number: '',
    penalty_clause: '',
    description: '',
    due_date: ''
  });

  // Bulk Upload state
  const [isBulkModalOpen, setIsBulkModalOpen] = useState(false);
  const [bulkParsed, setBulkParsed] = useState([]);
  const [bulkReplace, setBulkReplace] = useState(true);
  const [bulkNotify, setBulkNotify] = useState(false);
  const [bulkError, setBulkError] = useState('');
  const [importing, setImporting] = useState(false);
  const fileInputRef = useRef(null);

  // Check existing session
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const stored = sessionStorage.getItem('yfy_admin_authed');
      if (stored === 'true') {
        setIsAuthenticated(true);
      }
    }
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      fetchAllData();
    }
  }, [isAuthenticated]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setAuthError('');
    try {
      const res = await fetch('/api/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password: passwordInput })
      });
      if (res.ok) {
        setIsAuthenticated(true);
        if (typeof window !== 'undefined') {
          sessionStorage.setItem('yfy_admin_authed', 'true');
        }
      } else {
        setAuthError('Incorrect master admin password. Please verify and try again.');
      }
    } catch {
      if (passwordInput === 'yfyadmin2026') {
        setIsAuthenticated(true);
        if (typeof window !== 'undefined') {
          sessionStorage.setItem('yfy_admin_authed', 'true');
        }
      } else {
        setAuthError('Incorrect password. Please verify and try again.');
      }
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    if (typeof window !== 'undefined') {
      sessionStorage.removeItem('yfy_admin_authed');
    }
  };

  const fetchAllData = async () => {
    setLoading(true);
    try {
      // 1. Fetch leads and email logs
      const leadsRes = await fetch('/api/demo?token=yfyadmin2026');
      if (leadsRes.ok) {
        const leadsData = await leadsRes.json();
        setLeads(leadsData.leads || []);
        setEmailLogs(leadsData.logs || []);
      }

      // 2. Fetch subscribers
      const subsRes = await fetch('/api/newsletter', {
        headers: { Authorization: 'Bearer yfyadmin2026' }
      });
      if (subsRes.ok) {
        const subsData = await subsRes.json();
        setSubscribers(subsData.subscribers || []);
      }

      // 3. Fetch compliance calendar
      const compRes = await fetch('/api/compliance');
      if (compRes.ok) {
        const compData = await compRes.json();
        setComplianceEvents(compData || []);
      }
    } catch (err) {
      console.error('Failed to fetch admin data:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleStatusChange = async (leadUid, newStatus) => {
    try {
      const res = await fetch('/api/demo?token=yfyadmin2026', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ leadUid, status: newStatus })
      });
      if (res.ok) {
        setLeads(prev => prev.map(l => l.lead_uid === leadUid ? { ...l, status: newStatus } : l));
        if (selectedLead && selectedLead.lead_uid === leadUid) {
          setSelectedLead(prev => ({ ...prev, status: newStatus }));
        }
      }
    } catch (err) {
      console.error('Status update failed:', err);
    }
  };

  // Single Item Compliance Save
  const handleSaveCompliance = async () => {
    let updated = [...complianceEvents];
    if (editingCompId) {
      updated = updated.map(item => item.id === editingCompId ? { ...compFormData, id: editingCompId } : item);
    } else {
      updated.push({ ...compFormData, id: `c_${Date.now()}` });
    }

    try {
      await fetch('/api/compliance?token=yfyadmin2026', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer yfyadmin2026'
        },
        body: JSON.stringify({
          events: updated,
          replace: true,
          notify: false // silent single edit
        })
      });
      setComplianceEvents(updated);
      setIsCompModalOpen(false);
      fetchAllData();
    } catch (err) {
      console.error('Compliance save error:', err);
    }
  };

  const handleDeleteCompliance = async (id) => {
    if (!confirm('Are you sure you want to delete this statutory deadline?')) return;
    const updated = complianceEvents.filter(item => item.id !== id);
    try {
      await fetch('/api/compliance?token=yfyadmin2026', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer yfyadmin2026'
        },
        body: JSON.stringify({
          events: updated,
          replace: true,
          notify: false
        })
      });
      setComplianceEvents(updated);
    } catch (err) {
      console.error('Delete error:', err);
    }
  };

  // Bulk Upload File Handler
  const handleFileUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setBulkError('');
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const text = event.target.result;
        const parsed = parseCsv(text);
        if (parsed.length === 0) {
          setBulkError('No valid statutory compliance rows found. Please check CSV format.');
        } else {
          setBulkParsed(parsed);
        }
      } catch {
        setBulkError('Failed to parse CSV file. Please verify syntax.');
      }
    };
    reader.readAsText(file);
  };

  const executeBulkImport = async () => {
    if (!bulkParsed.length) return;
    setImporting(true);
    setBulkError('');

    try {
      let finalEvents = bulkReplace ? bulkParsed : [...complianceEvents, ...bulkParsed];

      const res = await fetch('/api/compliance?token=yfyadmin2026', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer yfyadmin2026'
        },
        body: JSON.stringify({
          events: finalEvents,
          replace: bulkReplace,
          notify: bulkNotify
        })
      });

      const data = await res.json();
      if (res.ok) {
        setIsBulkModalOpen(false);
        setBulkParsed([]);
        fetchAllData();
        alert(`Successfully imported ${bulkParsed.length} statutory deadlines!`);
      } else {
        setBulkError(data.error || 'Bulk import failed.');
      }
    } catch {
      setBulkError('Network error during bulk import.');
    } finally {
      setImporting(false);
    }
  };

  const downloadSampleTemplate = () => {
    const blob = new Blob([SAMPLE_CSV_CONTENT], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'yfy_statutory_compliance_template.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // CSV Exporters
  const exportLeadsToCsv = () => {
    if (!leads.length) return;
    const headers = ['UID', 'Date', 'Name', 'Email', 'Phone', 'Company', 'Size', 'Persona', 'Module', 'CTA', 'Source Page', 'First Touch', 'Referrer', 'UTM', 'Status'];
    const rows = filteredLeads.map(l => [
      l.lead_uid,
      l.created_at,
      `"${l.name || ''}"`,
      l.email,
      `"${l.phone || ''}"`,
      `"${l.company || ''}"`,
      l.employee_count || '',
      l.persona || '',
      `"${l.interested_module || ''}"`,
      `"${l.cta_id || ''}"`,
      `"${l.source_page || ''}"`,
      `"${l.first_touch_page || ''}"`,
      `"${l.referrer || ''}"`,
      `"${(l.utm_params || '').replace(/"/g, '""')}"`,
      l.status
    ]);
    const csvContent = [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `yfy-leads-${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const exportSubscribersToCsv = () => {
    if (!subscribers.length) return;
    const headers = ['Email', 'Frequency', 'Status'];
    const rows = subscribers.map(s => [s.email, s.frequency || 'monthly_calendar', s.status || 'active']);
    const csvContent = [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `yfy-subscribers-${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Filtered Leads
  const filteredLeads = leads.filter(lead => {
    const q = searchQuery.toLowerCase();
    const matchesSearch = 
      !q || 
      (lead.name && lead.name.toLowerCase().includes(q)) ||
      (lead.email && lead.email.toLowerCase().includes(q)) ||
      (lead.company && lead.company.toLowerCase().includes(q)) ||
      (lead.interested_module && lead.interested_module.toLowerCase().includes(q));

    const matchesModule = moduleFilter === 'all' || lead.interested_module === moduleFilter;
    const matchesStatus = statusFilter === 'all' || lead.status === statusFilter;

    return matchesSearch && matchesModule && matchesStatus;
  });

  // Filtered Compliance Events
  const filteredCompliance = complianceEvents.filter(ev => {
    if (freqFilter === 'all') return true;
    return (ev.frequency || 'monthly').toLowerCase() === freqFilter;
  });

  // Authentication View
  if (!isAuthenticated) {
    return (
      <div className={styles.adminPage}>
        <div className={styles.authContainer}>
          <div className={styles.authBadge}>
            <ShieldCheck size={16} />
            <span>OPERATIONS CONTROL</span>
          </div>
          <h1 className={styles.authTitle}>yfy® Command Center</h1>
          <p className={styles.authSubtitle}>
            Access statutory due dates, high-intent demo requests, visitor sales funnel attribution, and subscriber records.
          </p>

          <form onSubmit={handleLogin} className={styles.authForm}>
            <input 
              type="password" 
              placeholder="Enter master admin password"
              value={passwordInput}
              onChange={(e) => setPasswordInput(e.target.value)}
              className={styles.authInput}
              autoFocus
              required
            />
            <button type="submit" className={styles.authBtn}>
              Unlock Admin Portal
            </button>
          </form>

          {authError && <div className={styles.authError}>{authError}</div>}
        </div>
      </div>
    );
  }

  // Metrics calculation
  const newLeadsCount = leads.filter(l => l.status === 'new').length;

  return (
    <div className={styles.adminPage}>
      <div className="container-fluid" style={{ maxWidth: '1440px', margin: '0 auto' }}>
        
        {/* Header */}
        <div className={styles.dashboardHeader}>
          <div>
            <h1 className={styles.headerTitle}>
              <ShieldCheck color="var(--brand-xlight)" size={32} />
              <span>yfy® Management Console</span>
            </h1>
            <p className={styles.headerSubtitle}>
              SQLite Database Active · Full Sales Funnel Attribution · Native Mail &amp; Calendar Engine
            </p>
          </div>

          <div className={styles.headerActions}>
            <button onClick={fetchAllData} className={styles.actionBtnOutline} title="Refresh Data">
              <RefreshCw size={16} className={loading ? 'spin' : ''} />
              <span>Refresh</span>
            </button>
            <button onClick={handleLogout} className={styles.logoutBtn} title="Log Out">
              <LogOut size={16} />
              <span>Exit Console</span>
            </button>
          </div>
        </div>

        {/* Metric Cards */}
        <div className={styles.metricsGrid}>
          <div className={styles.metricCard}>
            <div className={styles.metricLabel}>Total Pipeline Leads</div>
            <div className={styles.metricValue}>{leads.length}</div>
            <div className={styles.metricSub}>{newLeadsCount} Pending Review</div>
          </div>

          <div className={styles.metricCard}>
            <div className={styles.metricLabel}>Active Subscribers</div>
            <div className={styles.metricValue}>{subscribers.length}</div>
            <div className={styles.metricSub}>Monthly Statutory Alerts</div>
          </div>

          <div className={styles.metricCard}>
            <div className={styles.metricLabel}>Statutory Deadlines</div>
            <div className={styles.metricValue}>{complianceEvents.length}</div>
            <div className={styles.metricSub}>Monthly, Quarterly &amp; Annual</div>
          </div>

          <div className={styles.metricCard}>
            <div className={styles.metricLabel}>Email Outbox Audit</div>
            <div className={styles.metricValue}>{emailLogs.length}</div>
            <div className={styles.metricSub}>Dispatches &amp; Simulations</div>
          </div>
        </div>

        {/* Tabs */}
        <div className={styles.tabsContainer}>
          <button 
            className={`${styles.tabBtn} ${activeTab === 'leads' ? styles.activeTab : ''}`}
            onClick={() => setActiveTab('leads')}
          >
            <Users size={18} />
            <span>Leads &amp; Funnel Attribution</span>
            <span className={styles.tabBadge}>{leads.length}</span>
          </button>

          <button 
            className={`${styles.tabBtn} ${activeTab === 'compliance' ? styles.activeTab : ''}`}
            onClick={() => setActiveTab('compliance')}
          >
            <Calendar size={18} />
            <span>Statutory Due Dates</span>
            <span className={styles.tabBadge}>{complianceEvents.length}</span>
          </button>

          <button 
            className={`${styles.tabBtn} ${activeTab === 'subscribers' ? styles.activeTab : ''}`}
            onClick={() => setActiveTab('subscribers')}
          >
            <Mail size={18} />
            <span>Subscribers</span>
            <span className={styles.tabBadge}>{subscribers.length}</span>
          </button>

          <button 
            className={`${styles.tabBtn} ${activeTab === 'logs' ? styles.activeTab : ''}`}
            onClick={() => setActiveTab('logs')}
          >
            <FileText size={18} />
            <span>Email Audit Logs</span>
            <span className={styles.tabBadge}>{emailLogs.length}</span>
          </button>
        </div>

        {/* Tab Content */}
        <div className={styles.tabContent}>

          {/* 1. LEADS TAB */}
          {activeTab === 'leads' && (
            <div>
              <div className={styles.tableToolbar}>
                <div className={styles.searchFilterGroup}>
                  <input 
                    type="text"
                    placeholder="Search by name, company, email..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className={styles.searchInput}
                  />

                  <select 
                    value={moduleFilter} 
                    onChange={(e) => setModuleFilter(e.target.value)}
                    className={styles.filterSelect}
                  >
                    <option value="all">All Modules</option>
                    <option value="Roster & Site Muster">Roster &amp; Site Muster</option>
                    <option value="Client Billing & GST">Client Billing &amp; GST</option>
                    <option value="Agency Profitability">Agency Profitability</option>
                    <option value="Leave & Timesheets">Leave &amp; Timesheets</option>
                    <option value="Service Desk">Service Desk</option>
                    <option value="Contractor Exposure Forensic Report">Forensic Exposure Report</option>
                    <option value="Compliance Proof Pack Assessment">Compliance Proof Pack</option>
                    <option value="Platform Core">Platform Core</option>
                  </select>

                  <select 
                    value={statusFilter} 
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className={styles.filterSelect}
                  >
                    <option value="all">All Statuses</option>
                    <option value="new">New</option>
                    <option value="contacted">Contacted</option>
                    <option value="demo_completed">Demo Completed</option>
                    <option value="closed">Closed</option>
                  </select>
                </div>

                <div>
                  <button onClick={exportLeadsToCsv} className={styles.actionBtnOutline}>
                    <Download size={16} />
                    <span>Export CSV</span>
                  </button>
                </div>
              </div>

              <div className={styles.tableWrap}>
                <table className={styles.dataTable}>
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>Prospect</th>
                      <th>Company</th>
                      <th>Workforce</th>
                      <th>Module of Interest</th>
                      <th>Origin CTA / Source</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredLeads.map((lead) => (
                      <tr key={lead.id || lead.lead_uid}>
                        <td style={{ whiteSpace: 'nowrap', color: 'var(--text-muted)' }}>
                          {lead.created_at ? lead.created_at.slice(0, 16) : 'N/A'}
                        </td>
                        <td>
                          <div style={{ fontWeight: 700, color: '#fff' }}>{lead.name}</div>
                          <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{lead.email}</div>
                          {lead.phone && <div style={{ fontSize: '0.75rem', color: 'var(--brand-xlight)' }}>{lead.phone}</div>}
                        </td>
                        <td>
                          <div style={{ fontWeight: 600 }}>{lead.company || 'N/A'}</div>
                          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Persona: {lead.persona || 'General'}</div>
                        </td>
                        <td>{lead.employee_count || 'Enterprise'}</td>
                        <td>
                          <span className={styles.moduleTag}>
                            {lead.interested_module || 'Platform Core'}
                          </span>
                          {lead.commercial_intent === 'ready_to_pay' && (
                            <div style={{ marginTop: '4px', display: 'block', background: 'rgba(34, 211, 160, 0.15)', border: '1px solid rgba(34, 211, 160, 0.4)', color: '#34d399', fontSize: '0.72rem', fontWeight: 700, padding: '2px 8px', borderRadius: '4px', width: 'fit-content' }}>
                              💰 Ready to Pay ₹2.5L
                            </div>
                          )}
                          {lead.commercial_intent === 'enterprise_complimentary' && (
                            <div style={{ marginTop: '4px', display: 'block', background: 'rgba(56, 189, 248, 0.15)', border: '1px solid rgba(56, 189, 248, 0.4)', color: '#38bdf8', fontSize: '0.72rem', fontWeight: 700, padding: '2px 8px', borderRadius: '4px', width: 'fit-content' }}>
                              🏢 Complimentary (2k+)
                            </div>
                          )}
                          {lead.commercial_intent === 'sow_budget_approval' && (
                            <div style={{ marginTop: '4px', display: 'block', background: 'rgba(245, 200, 66, 0.15)', border: '1px solid rgba(245, 200, 66, 0.4)', color: '#f5c842', fontSize: '0.72rem', fontWeight: 700, padding: '2px 8px', borderRadius: '4px', width: 'fit-content' }}>
                              📋 SOW Required
                            </div>
                          )}
                          {lead.commercial_intent === 'exploring_discussion' && (
                            <div style={{ marginTop: '4px', display: 'block', background: 'rgba(192, 126, 240, 0.15)', border: '1px solid rgba(192, 126, 240, 0.4)', color: '#e0aaff', fontSize: '0.72rem', fontWeight: 700, padding: '2px 8px', borderRadius: '4px', width: 'fit-content' }}>
                              💬 Intro Call
                            </div>
                          )}
                        </td>
                        <td>
                          <div style={{ fontWeight: 600, color: '#fff', fontSize: '0.8rem' }}>
                            {lead.cta_id || 'Direct Form'}
                          </div>
                          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                            {lead.source_page || '/platform/demo'}
                          </div>
                        </td>
                        <td>
                          <select 
                            value={lead.status || 'new'}
                            onChange={(e) => handleStatusChange(lead.lead_uid, e.target.value)}
                            className={styles.filterSelect}
                            style={{ padding: '4px 8px', fontSize: '0.8rem' }}
                          >
                            <option value="new">New</option>
                            <option value="contacted">Contacted</option>
                            <option value="demo_completed">Demo Done</option>
                            <option value="closed">Closed</option>
                          </select>
                        </td>
                        <td>
                          <button 
                            onClick={() => setSelectedLead(lead)} 
                            className={styles.actionBtnOutline}
                            style={{ padding: '4px 10px', fontSize: '0.75rem' }}
                          >
                            Attribution
                          </button>
                        </td>
                      </tr>
                    ))}
                    {filteredLeads.length === 0 && (
                      <tr>
                        <td colSpan={8} style={{ textAlign: 'center', padding: '2.5rem', color: 'var(--text-muted)' }}>
                          No leads matching current search/filter criteria.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* 2. STATUTORY DUE DATES TAB */}
          {activeTab === 'compliance' && (
            <div>
              <div className={styles.tableToolbar}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <h3 style={{ fontSize: '1.15rem', color: '#fff', fontWeight: 700 }}>
                    Statutory Compliance Calendar Management
                  </h3>
                  
                  {/* Frequency Filter Tabs */}
                  <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                    {['all', 'monthly', 'quarterly', 'half_yearly', 'annual'].map((f) => (
                      <button
                        key={f}
                        onClick={() => setFreqFilter(f)}
                        style={{
                          background: freqFilter === f ? 'var(--brand-primary)' : 'rgba(255,255,255,0.06)',
                          color: freqFilter === f ? '#fff' : 'var(--text-secondary)',
                          border: '1px solid rgba(255,255,255,0.1)',
                          padding: '4px 12px',
                          borderRadius: '6px',
                          fontSize: '0.75rem',
                          fontWeight: 600,
                          cursor: 'pointer',
                          textTransform: 'capitalize'
                        }}
                      >
                        {f === 'all' ? 'All Frequencies' : f.replace('_', ' ')}
                      </button>
                    ))}
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                  <button onClick={downloadSampleTemplate} className={styles.actionBtnOutline} title="Download standard Indian statutory template">
                    <FileSpreadsheet size={16} />
                    <span>Sample Template</span>
                  </button>

                  <button 
                    onClick={() => {
                      setBulkParsed([]);
                      setBulkError('');
                      setIsBulkModalOpen(true);
                    }} 
                    className={styles.actionBtnOutline}
                  >
                    <Upload size={16} />
                    <span>Bulk Import (.CSV)</span>
                  </button>

                  <button 
                    onClick={() => {
                      setEditingCompId(null);
                      setCompFormData({ 
                        title: '', 
                        type: 'PF', 
                        state: 'All India', 
                        frequency: 'monthly',
                        dueDateDay: 15, 
                        dueMonth: 1,
                        form_number: '',
                        penalty_clause: '',
                        description: '',
                        due_date: ''
                      });
                      setIsCompModalOpen(true);
                    }} 
                    className={styles.actionBtn}
                  >
                    <Plus size={16} />
                    <span>Add Return</span>
                  </button>
                </div>
              </div>

              <div className={styles.tableWrap}>
                <table className={styles.dataTable}>
                  <thead>
                    <tr>
                      <th>Frequency</th>
                      <th>Due Schedule</th>
                      <th>Title &amp; Return</th>
                      <th>Form / Return</th>
                      <th>Act</th>
                      <th>Jurisdiction</th>
                      <th>Penalty Clause</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredCompliance.map((item) => {
                      const freq = (item.frequency || 'monthly').toLowerCase();
                      let freqBadgeClass = styles.freqMonthly;
                      if (freq === 'quarterly') freqBadgeClass = styles.freqQuarterly;
                      else if (freq === 'half_yearly') freqBadgeClass = styles.freqHalfYearly;
                      else if (freq === 'annual') freqBadgeClass = styles.freqAnnual;

                      let dueDisplay = `Day ${item.dueDateDay || 15}`;
                      if (freq === 'annual' && item.dueMonth) {
                        dueDisplay = `${MONTH_NAMES[item.dueMonth - 1] || ''} ${item.dueDateDay || 1}`;
                      } else if (freq === 'quarterly' && item.dueMonth) {
                        dueDisplay = `Quarter ending ${MONTH_NAMES[item.dueMonth - 1] || ''} (Day ${item.dueDateDay || 31})`;
                      }

                      return (
                        <tr key={item.id}>
                          <td>
                            <span className={`${styles.freqBadge} ${freqBadgeClass}`}>
                              {freq.replace('_', '-')}
                            </span>
                          </td>
                          <td style={{ fontWeight: 700, color: 'var(--brand-xlight)' }}>
                            {dueDisplay}
                          </td>
                          <td>
                            <div style={{ fontWeight: 700, color: '#fff' }}>{item.title}</div>
                            {item.description && (
                              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', maxWidth: '280px' }}>
                                {item.description}
                              </div>
                            )}
                          </td>
                          <td>
                            {item.form_number ? (
                              <span style={{ fontFamily: 'monospace', background: 'rgba(255,255,255,0.06)', padding: '2px 6px', borderRadius: '4px', fontSize: '0.75rem' }}>
                                {item.form_number}
                              </span>
                            ) : (
                              <span style={{ color: 'var(--text-muted)' }}>—</span>
                            )}
                          </td>
                          <td>
                            <span className={styles.moduleTag}>{item.type || 'Statute'}</span>
                          </td>
                          <td>{item.state || 'All India'}</td>
                          <td style={{ color: '#f87171', fontSize: '0.8rem', maxWidth: '220px' }}>
                            {item.penalty_clause || 'Statutory Interest'}
                          </td>
                          <td>
                            <div style={{ display: 'flex', gap: '8px' }}>
                              <button 
                                onClick={() => {
                                  setEditingCompId(item.id);
                                  setCompFormData({
                                    title: item.title,
                                    type: item.type || 'PF',
                                    state: item.state || 'All India',
                                    frequency: item.frequency || 'monthly',
                                    dueDateDay: item.dueDateDay || 15,
                                    dueMonth: item.dueMonth || 1,
                                    form_number: item.form_number || '',
                                    penalty_clause: item.penalty_clause || '',
                                    description: item.description || '',
                                    due_date: item.due_date || ''
                                  });
                                  setIsCompModalOpen(true);
                                }}
                                className={styles.actionBtnOutline}
                                style={{ padding: '4px 8px' }}
                                title="Edit"
                              >
                                <Edit3 size={14} />
                              </button>
                              <button 
                                onClick={() => handleDeleteCompliance(item.id)}
                                className={styles.actionBtnOutline}
                                style={{ padding: '4px 8px', color: '#f87171' }}
                                title="Delete"
                              >
                                <Trash2 size={14} />
                              </button>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                    {filteredCompliance.length === 0 && (
                      <tr>
                        <td colSpan={8} style={{ textAlign: 'center', padding: '2.5rem', color: 'var(--text-muted)' }}>
                          No statutory compliance returns found matching current filter.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* 3. SUBSCRIBERS TAB */}
          {activeTab === 'subscribers' && (
            <div>
              <div className={styles.tableToolbar}>
                <div>
                  <h3 style={{ fontSize: '1.15rem', color: '#fff', fontWeight: 700 }}>
                    Active Compliance Calendar &amp; Newsletter Subscribers
                  </h3>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                    Recipients who receive automated statutory broadcast alerts whenever Indian labour laws or deadlines are updated.
                  </p>
                </div>

                <div>
                  <button onClick={exportSubscribersToCsv} className={styles.actionBtnOutline}>
                    <Download size={16} />
                    <span>Export CSV</span>
                  </button>
                </div>
              </div>

              <div className={styles.tableWrap}>
                <table className={styles.dataTable}>
                  <thead>
                    <tr>
                      <th>Subscriber Email</th>
                      <th>Frequency</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {subscribers.map((sub, i) => (
                      <tr key={i}>
                        <td style={{ fontWeight: 600, color: '#fff' }}>{sub.email}</td>
                        <td style={{ color: 'var(--text-muted)' }}>{sub.frequency || 'monthly_calendar'}</td>
                        <td>
                          <span className={`${styles.statusPill} ${styles.statusCompleted}`}>
                            {sub.status || 'Active'}
                          </span>
                        </td>
                      </tr>
                    ))}
                    {subscribers.length === 0 && (
                      <tr>
                        <td colSpan={3} style={{ textAlign: 'center', padding: '2.5rem', color: 'var(--text-muted)' }}>
                          No active subscribers found in SQLite database.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* 4. EMAIL LOGS TAB */}
          {activeTab === 'logs' && (
            <div>
              <div className={styles.tableToolbar}>
                <div>
                  <h3 style={{ fontSize: '1.15rem', color: '#fff', fontWeight: 700 }}>
                    Email Dispatcher &amp; Outbox Audit Trail
                  </h3>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                    Complete audit log of prospect confirmation notices, sales lead notifications, and subscriber broadcast alerts.
                  </p>
                </div>
              </div>

              <div className={styles.tableWrap}>
                <table className={styles.dataTable}>
                  <thead>
                    <tr>
                      <th>Sent At</th>
                      <th>Recipient(s)</th>
                      <th>Subject</th>
                      <th>Template</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {emailLogs.map((log) => (
                      <tr key={log.id}>
                        <td style={{ color: 'var(--text-muted)', whiteSpace: 'nowrap' }}>
                          {log.sent_at}
                        </td>
                        <td style={{ fontWeight: 600, color: '#fff' }}>{log.to_email}</td>
                        <td>{log.subject}</td>
                        <td>
                          <span className={styles.moduleTag}>{log.template_name}</span>
                        </td>
                        <td>
                          <span className={`${styles.statusPill} ${log.status === 'sent' ? styles.statusCompleted : styles.statusContacted}`}>
                            {log.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                    {emailLogs.length === 0 && (
                      <tr>
                        <td colSpan={5} style={{ textAlign: 'center', padding: '2.5rem', color: 'var(--text-muted)' }}>
                          No email audit records yet.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}

        </div>

        {/* ATTRIBUTION DRAWER / MODAL */}
        {selectedLead && (
          <div className={styles.modalBackdrop} onClick={() => setSelectedLead(null)}>
            <div className={styles.modalCard} onClick={(e) => e.stopPropagation()}>
              <div className={styles.modalHeader}>
                <div>
                  <div className={styles.modalTitle}>{selectedLead.name}</div>
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                    {selectedLead.company || 'Enterprise'} · Ref UID: {selectedLead.lead_uid}
                  </div>
                </div>
                <button onClick={() => setSelectedLead(null)} className={styles.closeBtn}>
                  <X size={20} />
                </button>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <div className={styles.detailRow}>
                  <span className={styles.detailLabel}>Email Address</span>
                  <span className={styles.detailVal}>{selectedLead.email}</span>
                </div>
                <div className={styles.detailRow}>
                  <span className={styles.detailLabel}>Phone</span>
                  <span className={styles.detailVal}>{selectedLead.phone || 'N/A'}</span>
                </div>
                <div className={styles.detailRow}>
                  <span className={styles.detailLabel}>Headcount</span>
                  <span className={styles.detailVal}>{selectedLead.employee_count || 'N/A'}</span>
                </div>
                <div className={styles.detailRow}>
                  <span className={styles.detailLabel}>Persona Model</span>
                  <span className={styles.detailVal}>{selectedLead.persona || 'N/A'}</span>
                </div>
                <div className={styles.detailRow}>
                  <span className={styles.detailLabel}>Interested Module</span>
                  <span className={styles.detailVal} style={{ color: 'var(--brand-xlight)', fontWeight: 700 }}>
                    {selectedLead.interested_module || 'Platform Core'}
                  </span>
                </div>
                <div className={styles.detailRow}>
                  <span className={styles.detailLabel}>Commercial Readiness</span>
                  <span className={styles.detailVal} style={{ color: selectedLead.commercial_intent === 'ready_to_pay' ? '#34d399' : '#f5c842', fontWeight: 700 }}>
                    {selectedLead.commercial_intent ? selectedLead.commercial_intent.toUpperCase() : 'STANDARD'}
                  </span>
                </div>

                <div style={{ margin: '1rem 0 0.5rem', fontWeight: 700, color: '#fff', fontSize: '0.9rem' }}>
                  🎯 Sales Funnel Attribution Details
                </div>

                <div className={styles.detailRow}>
                  <span className={styles.detailLabel}>Triggered CTA</span>
                  <span className={styles.detailVal} style={{ color: '#38bdf8', fontWeight: 600 }}>
                    {selectedLead.cta_id || 'N/A'}
                  </span>
                </div>
                <div className={styles.detailRow}>
                  <span className={styles.detailLabel}>Source Landing Page</span>
                  <span className={styles.detailVal}>{selectedLead.source_page || 'N/A'}</span>
                </div>
                <div className={styles.detailRow}>
                  <span className={styles.detailLabel}>First Touch Page</span>
                  <span className={styles.detailVal}>{selectedLead.first_touch_page || 'N/A'}</span>
                </div>
                <div className={styles.detailRow}>
                  <span className={styles.detailLabel}>Original Referrer</span>
                  <span className={styles.detailVal}>{selectedLead.referrer || 'Direct / Organic'}</span>
                </div>
                <div className={styles.detailRow}>
                  <span className={styles.detailLabel}>UTM Tags</span>
                  <span className={styles.detailVal} style={{ fontFamily: 'monospace', fontSize: '0.8rem' }}>
                    {selectedLead.utm_params || 'None'}
                  </span>
                </div>

                {selectedLead.notes && (
                  <div style={{ marginTop: '1rem', background: 'rgba(255,255,255,0.03)', padding: '12px', borderRadius: '8px' }}>
                    <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-secondary)', marginBottom: '4px' }}>
                      Additional Prospect Notes / Specific Requirements:
                    </div>
                    <div style={{ fontSize: '0.85rem', color: '#fff', whiteSpace: 'pre-wrap' }}>
                      {selectedLead.notes}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* SINGLE COMPLIANCE EVENT MODAL */}
        {isCompModalOpen && (
          <div className={styles.modalBackdrop} onClick={() => setIsCompModalOpen(false)}>
            <div className={styles.modalCard} onClick={(e) => e.stopPropagation()}>
              <div className={styles.modalHeader}>
                <h3 className={styles.modalTitle}>
                  {editingCompId ? 'Edit Statutory Return Deadline' : 'Add Statutory Return Obligation'}
                </h3>
                <button onClick={() => setIsCompModalOpen(false)} className={styles.closeBtn}>
                  <X size={20} />
                </button>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '6px' }}>
                    Obligation / Return Title *
                  </label>
                  <input 
                    type="text" 
                    value={compFormData.title} 
                    onChange={(e) => setCompFormData({ ...compFormData, title: e.target.value })}
                    className={styles.authInput}
                    placeholder="e.g. TDS Quarterly Salary Return (Q1)"
                    required
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '6px' }}>
                      Return Frequency *
                    </label>
                    <select 
                      value={compFormData.frequency} 
                      onChange={(e) => setCompFormData({ ...compFormData, frequency: e.target.value })}
                      className={styles.authInput}
                    >
                      <option value="monthly">Monthly</option>
                      <option value="quarterly">Quarterly</option>
                      <option value="half_yearly">Half-Yearly</option>
                      <option value="annual">Annual</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '6px' }}>
                      Statutory Act *
                    </label>
                    <select 
                      value={compFormData.type} 
                      onChange={(e) => setCompFormData({ ...compFormData, type: e.target.value })}
                      className={styles.authInput}
                    >
                      <option value="PF">EPF (Provident Fund)</option>
                      <option value="ESI">ESIC (Employee State Insurance)</option>
                      <option value="TDS">Income Tax / TDS (Sec 192)</option>
                      <option value="PT">Professional Tax (PT)</option>
                      <option value="CLRA">Contract Labour (CLRA §21)</option>
                      <option value="Factories">Factories Act 1948</option>
                      <option value="LWF">Labour Welfare Fund (LWF)</option>
                      <option value="Bonus">Payment of Bonus Act</option>
                      <option value="Gratuity">Payment of Gratuity Act</option>
                      <option value="Minimum Wages">Minimum Wages Act</option>
                    </select>
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: compFormData.frequency !== 'monthly' ? '1fr 1fr' : '1fr', gap: '12px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '6px' }}>
                      Due Date Day of Month (1 - 31) *
                    </label>
                    <input 
                      type="number" 
                      min="1" 
                      max="31"
                      value={compFormData.dueDateDay} 
                      onChange={(e) => setCompFormData({ ...compFormData, dueDateDay: parseInt(e.target.value) || 1 })}
                      className={styles.authInput}
                    />
                  </div>

                  {compFormData.frequency !== 'monthly' && (
                    <div>
                      <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '6px' }}>
                        Filing Month ({compFormData.frequency})
                      </label>
                      <select 
                        value={compFormData.dueMonth || 1}
                        onChange={(e) => setCompFormData({ ...compFormData, dueMonth: parseInt(e.target.value) })}
                        className={styles.authInput}
                      >
                        {MONTH_NAMES.map((m, idx) => (
                          <option key={idx} value={idx + 1}>{m} (Month {idx + 1})</option>
                        ))}
                      </select>
                    </div>
                  )}
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '6px' }}>
                      Form / Return Number
                    </label>
                    <input 
                      type="text" 
                      value={compFormData.form_number} 
                      onChange={(e) => setCompFormData({ ...compFormData, form_number: e.target.value })}
                      className={styles.authInput}
                      placeholder="e.g. Form 24Q, Form 5, Form XXIV, Form D"
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '6px' }}>
                      Jurisdiction / State
                    </label>
                    <input 
                      type="text" 
                      value={compFormData.state} 
                      onChange={(e) => setCompFormData({ ...compFormData, state: e.target.value })}
                      className={styles.authInput}
                      placeholder="All India, Karnataka, Maharashtra..."
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '6px' }}>
                    Penalty Clause / Non-Filing Consequence
                  </label>
                  <input 
                    type="text"
                    value={compFormData.penalty_clause} 
                    onChange={(e) => setCompFormData({ ...compFormData, penalty_clause: e.target.value })}
                    className={styles.authInput}
                    placeholder="e.g. Late fee Rs 200/day under 234E or Section 14B damages"
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '6px' }}>
                    Return Description &amp; Requirements
                  </label>
                  <textarea 
                    rows={2}
                    value={compFormData.description} 
                    onChange={(e) => setCompFormData({ ...compFormData, description: e.target.value })}
                    className={styles.authInput}
                    placeholder="Brief description of the filing requirement..."
                  />
                </div>

                <div style={{ display: 'flex', gap: '10px', marginTop: '1rem' }}>
                  <button onClick={handleSaveCompliance} className={styles.authBtn} style={{ flex: 1 }}>
                    Save &amp; Sync Calendar
                  </button>
                  <button onClick={() => setIsCompModalOpen(false)} className={styles.actionBtnOutline}>
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* BULK UPLOAD MODAL */}
        {isBulkModalOpen && (
          <div className={styles.modalBackdrop} onClick={() => setIsBulkModalOpen(false)}>
            <div className={styles.modalCardLg} onClick={(e) => e.stopPropagation()}>
              <div className={styles.modalHeader}>
                <div>
                  <h3 className={styles.modalTitle}>Bulk Import Statutory Returns (.CSV)</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', marginTop: '2px' }}>
                    Upload monthly, quarterly, half-yearly, and annual compliance returns at once.
                  </p>
                </div>
                <button onClick={() => setIsBulkModalOpen(false)} className={styles.closeBtn}>
                  <X size={20} />
                </button>
              </div>

              {/* Dropzone */}
              <input 
                type="file" 
                ref={fileInputRef}
                accept=".csv"
                style={{ display: 'none' }}
                onChange={handleFileUpload}
              />

              <div className={styles.dropzone} onClick={() => fileInputRef.current?.click()}>
                <Upload size={36} className={styles.dropzoneIcon} />
                <div className={styles.dropzoneTitle}>Click to Select or Drop CSV File</div>
                <div className={styles.dropzoneSub}>
                  Supports standard columns: <code>title, act, state, frequency, due_date_day, due_month, form_number, penalty_clause, description</code>
                </div>
              </div>

              {bulkError && (
                <div style={{ background: 'rgba(239, 68, 68, 0.15)', color: '#fca5a5', padding: '10px 14px', borderRadius: '8px', fontSize: '0.85rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <AlertCircle size={16} />
                  <span>{bulkError}</span>
                </div>
              )}

              {/* Parsed Preview */}
              {bulkParsed.length > 0 && (
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                    <div style={{ fontWeight: 700, color: '#fff', fontSize: '0.9rem' }}>
                      Preview: {bulkParsed.length} Returns Detected
                    </div>
                    <button 
                      onClick={() => setBulkParsed([])} 
                      className={styles.actionBtnOutline} 
                      style={{ padding: '2px 8px', fontSize: '0.75rem' }}
                    >
                      Clear File
                    </button>
                  </div>

                  <div className={styles.previewWrap}>
                    <table className={styles.dataTable}>
                      <thead>
                        <tr>
                          <th>Freq</th>
                          <th>Due Day</th>
                          <th>Act</th>
                          <th>Title</th>
                          <th>Form</th>
                          <th>Jurisdiction</th>
                        </tr>
                      </thead>
                      <tbody>
                        {bulkParsed.map((r, i) => (
                          <tr key={i}>
                            <td>
                              <span className={styles.freqBadge} style={{ background: 'rgba(155,61,216,0.2)', color: '#e0aaff' }}>
                                {r.frequency}
                              </span>
                            </td>
                            <td style={{ color: '#38bdf8', fontWeight: 600 }}>
                              Day {r.dueDateDay} {r.dueMonth ? `(M${r.dueMonth})` : ''}
                            </td>
                            <td>{r.type}</td>
                            <td style={{ fontWeight: 600, color: '#fff' }}>{r.title}</td>
                            <td>{r.form_number || '—'}</td>
                            <td>{r.state}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Options */}
                  <div className={styles.bulkOptions}>
                    <label className={styles.checkboxLabel}>
                      <input 
                        type="radio" 
                        name="importMode" 
                        checked={bulkReplace} 
                        onChange={() => setBulkReplace(true)} 
                      />
                      <span>Replace existing calendar (Replaces current statutory events with this clean list)</span>
                    </label>

                    <label className={styles.checkboxLabel}>
                      <input 
                        type="radio" 
                        name="importMode" 
                        checked={!bulkReplace} 
                        onChange={() => setBulkReplace(false)} 
                      />
                      <span>Append to existing calendar (Keep current items and add these on top)</span>
                    </label>

                    <label className={styles.checkboxLabel} style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '8px', marginTop: '4px' }}>
                      <input 
                        type="checkbox" 
                        checked={bulkNotify} 
                        onChange={(e) => setBulkNotify(e.target.checked)} 
                      />
                      <span>Broadcast notification email to all {subscribers.length} active subscribers after import</span>
                    </label>
                  </div>
                </div>
              )}

              <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end', marginTop: '1.25rem' }}>
                <button onClick={downloadSampleTemplate} className={styles.actionBtnOutline}>
                  <Download size={14} />
                  <span>Download Sample Template</span>
                </button>

                {bulkParsed.length > 0 && (
                  <button 
                    onClick={executeBulkImport} 
                    className={styles.authBtn} 
                    disabled={importing}
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}
                  >
                    {importing ? <RefreshCw size={16} className="spin" /> : <Upload size={16} />}
                    <span>Confirm &amp; Import {bulkParsed.length} Deadlines</span>
                  </button>
                )}

                <button onClick={() => setIsBulkModalOpen(false)} className={styles.actionBtnOutline}>
                  Close
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </div>
  );
}
