/**
 * Pluggable Transactional & Broadcast Email Dispatcher
 * Supports:
 * 1. Resend API (HTTP REST, zero-dependency)
 * 2. SMTP (via custom fetch/transport if configured)
 * 3. Safe Simulation Mode: When API keys are not present, logs full rendered emails
 *    to the SQLite `email_logs` table and console for frictionless local testing.
 */

import nodemailer from 'nodemailer';
import { logEmail } from './db.js';

// Hostinger / Standard SMTP Configuration
const SMTP_HOST = process.env.SMTP_HOST || 'smtp.hostinger.com';
const SMTP_PORT = parseInt(process.env.SMTP_PORT || '465');
const SMTP_SECURE = process.env.SMTP_SECURE ? process.env.SMTP_SECURE === 'true' : SMTP_PORT === 465;
const SMTP_USER = process.env.SMTP_USER || null;
const SMTP_PASS = process.env.SMTP_PASS || null;

// Alternative: Resend HTTP API
const RESEND_API_KEY = process.env.RESEND_API_KEY || null;

const FROM_EMAIL = process.env.FROM_EMAIL || (SMTP_USER ? `yfy.ai Compliance Team <${SMTP_USER}>` : 'yfy.ai Compliance Team <notifications@yfy.ai>');
const SALES_EMAIL = process.env.SALES_EMAIL || 'sales@yfy.ai';

let smtpTransporter = null;

function getSmtpTransporter() {
  if (!smtpTransporter && SMTP_USER && SMTP_PASS) {
    smtpTransporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: SMTP_PORT,
      secure: SMTP_SECURE,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    });
  }
  return smtpTransporter;
}

async function dispatchEmail({ to, subject, html, text, templateName, attachments = [] }) {
  // 1. Hostinger / Standard SMTP Mode
  if (SMTP_USER && SMTP_PASS) {
    try {
      const transporter = getSmtpTransporter();
      const recipient = Array.isArray(to) ? to.join(', ') : to;
      const info = await transporter.sendMail({
        from: FROM_EMAIL,
        to: recipient,
        subject,
        html,
        text,
        attachments: attachments.map(a => ({
          filename: a.filename,
          content: a.content,
        })),
      });

      console.log(`[MAIL DISPATCH: HOSTINGER SMTP] Sent to ${recipient}. MessageId: ${info.messageId}`);
      logEmail(recipient, subject, templateName, 'sent_smtp', { messageId: info.messageId });
      return { success: true, messageId: info.messageId, provider: 'smtp' };
    } catch (err) {
      console.error('[MAIL ERROR: HOSTINGER SMTP]', err);
      logEmail(Array.isArray(to) ? to.join(', ') : to, subject, templateName, 'failed_smtp', { error: err.message });
      return { success: false, error: err.message, provider: 'smtp' };
    }
  }

  // 2. Resend API Mode
  if (RESEND_API_KEY) {
    try {
      const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: FROM_EMAIL,
          to: Array.isArray(to) ? to : [to],
          subject,
          html,
          text,
          attachments: attachments.map(a => ({
            filename: a.filename,
            content: Buffer.from(a.content).toString('base64'),
          })),
        }),
      });

      if (!response.ok) {
        const errText = await response.text();
        console.error('[MAIL ERROR: RESEND]', errText);
        logEmail(Array.isArray(to) ? to.join(', ') : to, subject, templateName, 'failed_resend', { error: errText });
        return { success: false, error: errText };
      }

      const resData = await response.json();
      logEmail(Array.isArray(to) ? to.join(', ') : to, subject, templateName, 'sent_resend', resData);
      return { success: true, id: resData.id };
    } catch (err) {
      console.error('[MAIL EXCEPTION]', err);
      logEmail(Array.isArray(to) ? to.join(', ') : to, subject, templateName, 'exception', { error: err.message });
      return { success: false, error: err.message };
    }
  }

  // Safe Simulation Mode (Default in Local Dev)
  const recipient = Array.isArray(to) ? to.join(', ') : to;
  console.log('\n╔══════════════════════════════════════════════════════════════════');
  console.log('║ [EMAIL SIMULATOR: DISPATCHED]');
  console.log(`║ To: ${recipient}`);
  console.log(`║ Subject: ${subject}`);
  console.log(`║ Template: ${templateName}`);
  console.log(`║ Status: Logged to SQLite (email_logs table)`);
  console.log('╚══════════════════════════════════════════════════════════════════\n');

  logEmail(recipient, subject, templateName, 'simulated', {
    textSummary: text ? text.substring(0, 300) : null,
    hasAttachments: attachments.length > 0,
  });

  return { success: true, mode: 'simulated' };
}

/**
 * 1. Prospect Demo Confirmation with Calendar Booking
 */
export async function sendDemoConfirmation({ lead, calendarUrl, icsContent }) {
  const subject = `Your yfy® Walkthrough Request: ${lead.interestedModule || 'Platform Demo'}`;
  
  const html = `
    <div style="font-family: Arial, sans-serif; background-color: #0E0618; color: #F0E8FF; padding: 40px 20px;">
      <div style="max-width: 600px; margin: 0 auto; background: #1A0A2E; border: 1px solid rgba(155,61,216,0.4); border-radius: 16px; padding: 32px;">
        <div style="margin-bottom: 24px;">
          <span style="font-size: 20px; font-weight: 800; color: #C07EF0; letter-spacing: -0.02em;">yfy®</span>
          <span style="font-size: 13px; color: #B0A0CC; margin-left: 8px;">Statutory Compliance Engine</span>
        </div>
        
        <h1 style="font-size: 24px; color: #FFFFFF; margin-bottom: 16px;">Demo Request Received</h1>
        
        <p style="font-size: 15px; line-height: 1.6; color: #E2D9F3; margin-bottom: 20px;">
          Hi ${lead.name || 'there'},
        </p>
        
        <p style="font-size: 15px; line-height: 1.6; color: #E2D9F3; margin-bottom: 20px;">
          Thank you for requesting a demonstration of yfy.ai. We have received your request for <strong>${lead.interestedModule || 'Enterprise Compliance'}</strong> for <strong>${lead.company || 'your organization'}</strong>.
        </p>

        <div style="background: rgba(107,31,162,0.2); border: 1px solid rgba(192,126,240,0.3); border-radius: 12px; padding: 18px; margin: 24px 0;">
          <strong style="color: #FFFFFF; display: block; margin-bottom: 8px;">Scheduled Walkthrough Details:</strong>
          <p style="margin: 4px 0; font-size: 14px; color: #E2D9F3;">• <strong>Module:</strong> ${lead.interestedModule || 'Core Platform'}</p>
          <p style="margin: 4px 0; font-size: 14px; color: #E2D9F3;">• <strong>Coordinator:</strong> Dedicated Compliance Architect</p>
          <p style="margin: 4px 0; font-size: 14px; color: #E2D9F3;">• <strong>Next Step:</strong> Our team will confirm the video conference link within 2 business hours.</p>
        </div>

        <div style="text-align: center; margin: 30px 0;">
          <a href="${calendarUrl}" style="background: linear-gradient(135deg, #9B3DD8 0%, #6B1FA2 100%); color: #FFFFFF; text-decoration: none; padding: 12px 28px; border-radius: 9999px; font-weight: bold; font-size: 14px; display: inline-block;">
            📅 Add Walkthrough Hold to Google Calendar
          </a>
        </div>

        <p style="font-size: 13px; color: #7A6A9A; line-height: 1.5; border-top: 1px solid rgba(255,255,255,0.08); padding-top: 20px; margin-top: 30px;">
          Finnovo Tech Functional Private Limited · Plot No. 12, Hitec City, Madhapur, Hyderabad, Telangana 500081<br />
          Need immediate support? Reply directly to this email or reach us at <a href="mailto:sales@yfy.ai" style="color: #C07EF0;">sales@yfy.ai</a>.
        </p>
      </div>
    </div>
  `;

  const attachments = icsContent ? [{ filename: 'yfy-walkthrough.ics', content: icsContent }] : [];

  return dispatchEmail({
    to: lead.email,
    subject,
    html,
    text: `Hi ${lead.name}, your demo request for ${lead.interestedModule} has been received. Our compliance architect will reach out shortly. Add to Google Calendar: ${calendarUrl}`,
    templateName: 'demo_confirmation_prospect',
    attachments,
  });
}

/**
 * 2. Sales Alert to Internal Sales Team (sales@yfy.ai) with Full CTA Attribution
 */
export async function sendSalesLeadAlert({ lead }) {
  let priorityPrefix = '🔥 High-Intent Lead';
  if (lead.commercialIntent === 'ready_to_pay') {
    priorityPrefix = '🚨 READY TO PAY ₹2.5L';
  } else if (lead.commercialIntent === 'enterprise_complimentary' || lead.isComplimentary) {
    priorityPrefix = '🏢 ENTERPRISE COMPLIMENTARY (2,000+ Workforce)';
  } else if (lead.commercialIntent === 'sow_budget_approval') {
    priorityPrefix = '📋 SOW & BUDGET CLEARANCE REQUIRED';
  }
  const subject = `${priorityPrefix}: ${lead.name} (${lead.company || 'Enterprise'}) · [${lead.interestedModule || 'General'}]`;

  const html = `
    <div style="font-family: Arial, sans-serif; background-color: #0E0618; color: #F0E8FF; padding: 30px 20px;">
      <div style="max-width: 650px; margin: 0 auto; background: #1A0A2E; border: 2px solid ${lead.commercialIntent === 'ready_to_pay' ? '#34D399' : '#C07EF0'}; border-radius: 16px; padding: 28px;">
        <h2 style="color: ${lead.commercialIntent === 'ready_to_pay' ? '#34D399' : '#F5C842'}; margin-top: 0; font-size: 20px;">
          ${lead.commercialIntent === 'ready_to_pay' ? '💰 HIGH-PRIORITY: Ready to Pay ₹2.5L Diagnostic Lead' : '⚡ New Lead Captured with Full Attribution'}
        </h2>
        
        <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
          <tr>
            <td style="padding: 8px 0; color: #B0A0CC; font-size: 14px; width: 35%;">Prospect Name:</td>
            <td style="padding: 8px 0; color: #FFFFFF; font-weight: bold; font-size: 15px;">${lead.name}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #B0A0CC; font-size: 14px;">Work Email:</td>
            <td style="padding: 8px 0; color: #C07EF0; font-weight: bold; font-size: 15px;">
              <a href="mailto:${lead.email}" style="color: #C07EF0;">${lead.email}</a>
            </td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #B0A0CC; font-size: 14px;">Phone:</td>
            <td style="padding: 8px 0; color: #FFFFFF; font-size: 14px;">${lead.phone || 'N/A'}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #B0A0CC; font-size: 14px;">Company:</td>
            <td style="padding: 8px 0; color: #FFFFFF; font-weight: bold; font-size: 15px;">${lead.company || 'N/A'}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #B0A0CC; font-size: 14px;">Employee Count:</td>
            <td style="padding: 8px 0; color: #FFFFFF; font-size: 14px;">${lead.employeeCount || 'N/A'}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #B0A0CC; font-size: 14px;">Commercial Intent:</td>
            <td style="padding: 8px 0; color: ${lead.commercialIntent === 'ready_to_pay' ? '#34D399' : '#F5C842'}; font-weight: bold; font-size: 14px;">
              ${lead.commercialIntent ? lead.commercialIntent.toUpperCase() : 'STANDARD'}
            </td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #B0A0CC; font-size: 14px;">Persona:</td>
            <td style="padding: 8px 0; color: #FFFFFF; font-size: 14px;">${lead.persona || 'N/A'}</td>
          </tr>
        </table>

        ${lead.notes ? `
          <div style="margin-top: 16px; background: rgba(0,0,0,0.3); border: 1px solid rgba(255,255,255,0.1); border-radius: 8px; padding: 12px; font-size: 13px; color: #CBD5E1; line-height: 1.5;">
            <strong style="color: #FFFFFF; display: block; margin-bottom: 4px;">📝 Intake Notes &amp; Scope:</strong>
            ${lead.notes}
          </div>
        ` : ''}

        <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid rgba(255,255,255,0.1);">
          <h3 style="color: #FFFFFF; font-size: 15px; margin-bottom: 12px;">📊 Sales Funnel &amp; CTA Attribution</h3>
          
          <div style="background: rgba(20,8,36,0.8); border: 1px solid rgba(192,126,240,0.3); border-radius: 8px; padding: 14px;">
            <p style="margin: 4px 0; font-size: 13px; color: #E2D9F3;">🎯 <strong>Interested Module:</strong> <span style="color: #C07EF0; font-weight: bold;">${lead.interestedModule || 'Platform Core'}</span></p>
            <p style="margin: 4px 0; font-size: 13px; color: #E2D9F3;">🔘 <strong>Origin CTA:</strong> ${lead.ctaOrigin || lead.ctaId || 'direct_form'}</p>
            <p style="margin: 4px 0; font-size: 13px; color: #E2D9F3;">📍 <strong>Converting Page:</strong> ${lead.sourcePage || '/platform/demo'}</p>
            <p style="margin: 4px 0; font-size: 13px; color: #E2D9F3;">🚪 <strong>First Touch Landing Page:</strong> ${lead.firstTouchPage || 'Direct / Unknown'}</p>
            <p style="margin: 4px 0; font-size: 13px; color: #E2D9F3;">🔗 <strong>Referrer:</strong> ${lead.referrer || 'None'}</p>
            ${lead.utmParams ? `<p style="margin: 4px 0; font-size: 13px; color: #E2D9F3;">🏷️ <strong>UTM Campaign:</strong> ${typeof lead.utmParams === 'object' ? JSON.stringify(lead.utmParams) : lead.utmParams}</p>` : ''}
          </div>
        </div>

        <div style="margin-top: 24px; text-align: center;">
          <a href="mailto:${lead.email}?subject=yfy%20Compliance%20Walkthrough%20Follow-up" style="background: #22D3A0; color: #0E0618; text-decoration: none; padding: 10px 24px; border-radius: 6px; font-weight: bold; font-size: 14px; display: inline-block;">
            ✉️ Reply to Prospect Directly
          </a>
        </div>
      </div>
    </div>
  `;

  return dispatchEmail({
    to: SALES_EMAIL,
    subject,
    html,
    text: `New Demo Lead: ${lead.name} from ${lead.company} (${lead.email}). Interested in: ${lead.interestedModule}. Origin CTA: ${lead.ctaOrigin} on ${lead.sourcePage}.`,
    templateName: 'sales_lead_alert',
  });
}

/**
 * 3. Broadcast Compliance Calendar Updates to Subscribers
 */
export async function sendComplianceUpdateAlert({ subscribers = [], updatedEvents = [] }) {
  if (subscribers.length === 0 || updatedEvents.length === 0) {
    return { success: true, count: 0 };
  }

  const subject = `⚠️ Statutory Compliance Calendar Update: ${updatedEvents.length} Deadlines Updated`;

  const eventsListHtml = updatedEvents.slice(0, 5).map(ev => `
    <li style="margin-bottom: 8px; font-size: 14px; color: #E2D9F3;">
      <strong>${ev.due_date || ev.date || 'Upcoming'}:</strong> ${ev.title || ev.act_name} (${ev.state || 'All India'})
    </li>
  `).join('');

  const html = `
    <div style="font-family: Arial, sans-serif; background-color: #0E0618; color: #F0E8FF; padding: 32px 16px;">
      <div style="max-width: 600px; margin: 0 auto; background: #1A0A2E; border: 1px solid rgba(155,61,216,0.4); border-radius: 14px; padding: 28px;">
        <span style="color: #C07EF0; font-weight: bold; font-size: 14px;">yfy® Statutory Alert</span>
        <h2 style="color: #FFFFFF; font-size: 20px; margin: 12px 0 16px;">Compliance Calendar Revisions</h2>
        <p style="font-size: 14px; color: #E2D9F3; line-height: 1.6;">
          New statutory due dates and filing notifications have been updated in your compliance calendar:
        </p>
        <ul style="padding-left: 20px; margin: 16px 0;">
          ${eventsListHtml}
        </ul>
        <div style="margin: 24px 0;">
          <a href="https://yfy.ai/resources/compliance-calendar" style="background: #9B3DD8; color: #FFFFFF; text-decoration: none; padding: 10px 22px; border-radius: 9999px; font-size: 13px; font-weight: bold; display: inline-block;">
            View Complete Statutory Calendar →
          </a>
        </div>
      </div>
    </div>
  `;

  // In production, dispatch in batches or bcc
  const recipientEmails = subscribers.map(s => s.email);
  return dispatchEmail({
    to: recipientEmails,
    subject,
    html,
    text: `Statutory Compliance Calendar Update: ${updatedEvents.length} events have been updated. View at https://yfy.ai/resources/compliance-calendar`,
    templateName: 'compliance_update_broadcast',
  });
}

/**
 * 4. Instant Welcome & Confirmation Email when a user subscribes
 */
export async function sendComplianceSubscriptionWelcome({ email, metadata = {}, events = [], icsContent = null }) {
  const subject = `✅ Subscribed: yfy® Statutory Compliance Calendar & Due Date Alerts`;

  const topEventsHtml = (events.slice(0, 6)).map(ev => `
    <tr style="border-bottom: 1px solid rgba(255,255,255,0.06);">
      <td style="padding: 8px 6px; font-weight: bold; color: #C07EF0; font-size: 13px;">
        Day ${ev.dueDateDay || ev.due_date_day || 15}
      </td>
      <td style="padding: 8px 6px; color: #FFFFFF; font-size: 13px;">
        <strong>${ev.title || ev.name}</strong>
        ${ev.form_number ? `<span style="display: inline-block; font-size: 11px; background: rgba(255,255,255,0.1); padding: 1px 5px; border-radius: 4px; margin-left: 6px;">${ev.form_number}</span>` : ''}
        <div style="font-size: 11px; color: #B0A0CC;">${ev.type || ev.act_name || 'Statute'} · ${ev.state || 'All India'}</div>
      </td>
      <td style="padding: 8px 6px; color: #38BDF8; font-size: 12px; text-transform: capitalize;">
        ${(ev.frequency || 'monthly').replace('_', '-')}
      </td>
    </tr>
  `).join('');

  const html = `
    <div style="font-family: Arial, sans-serif; background-color: #0E0618; color: #F0E8FF; padding: 40px 20px;">
      <div style="max-width: 600px; margin: 0 auto; background: #1A0A2E; border: 1px solid rgba(155,61,216,0.4); border-radius: 16px; padding: 32px;">
        <div style="margin-bottom: 24px;">
          <span style="font-size: 20px; font-weight: 800; color: #C07EF0; letter-spacing: -0.02em;">yfy®</span>
          <span style="font-size: 13px; color: #B0A0CC; margin-left: 8px;">Statutory Compliance Engine</span>
        </div>
        
        <h1 style="font-size: 22px; color: #FFFFFF; margin-bottom: 12px;">You're Subscribed to Statutory Compliance Alerts</h1>
        
        <p style="font-size: 14px; line-height: 1.6; color: #E2D9F3; margin-bottom: 20px;">
          Hi ${metadata.name || 'there'},
        </p>
        
        <p style="font-size: 14px; line-height: 1.6; color: #E2D9F3; margin-bottom: 20px;">
          Thank you for subscribing to the <strong>yfy® Indian Statutory Compliance Calendar</strong> for <strong>${metadata.company || 'your organization'}</strong>. You will now receive timely reminder notifications before monthly, quarterly, and annual return deadlines under EPF, ESIC, TDS, PT, CLRA, and the Indian Labour Codes.
        </p>

        <div style="background: rgba(107,31,162,0.15); border: 1px solid rgba(192,126,240,0.25); border-radius: 12px; padding: 18px; margin: 24px 0;">
          <strong style="color: #FFFFFF; display: block; margin-bottom: 12px; font-size: 14px;">Upcoming Key Statutory Return Deadlines:</strong>
          <table style="width: 100%; border-collapse: collapse;">
            <thead>
              <tr style="text-align: left; font-size: 11px; color: #B0A0CC; text-transform: uppercase;">
                <th style="padding: 4px 6px;">Due Day</th>
                <th style="padding: 4px 6px;">Return / Form</th>
                <th style="padding: 4px 6px;">Frequency</th>
              </tr>
            </thead>
            <tbody>
              ${topEventsHtml}
            </tbody>
          </table>
        </div>

        <div style="text-align: center; margin: 28px 0;">
          <a href="https://yfy.ai/resources/compliance-calendar" style="background: linear-gradient(135deg, #9B3DD8 0%, #6B1FA2 100%); color: #FFFFFF; text-decoration: none; padding: 12px 28px; border-radius: 9999px; font-weight: bold; font-size: 14px; display: inline-block;">
            📅 Open Live Interactive Calendar
          </a>
        </div>

        <p style="font-size: 12px; color: #7A6A9A; line-height: 1.5; border-top: 1px solid rgba(255,255,255,0.08); padding-top: 20px; margin-top: 28px;">
          We have attached an RFC 5545 <code>.ics</code> calendar feed file to this email so you can sync these obligations directly with your Microsoft Outlook, Google Calendar, or Apple Calendar.<br /><br />
          Finnovo Tech Functional Private Limited · Hitec City, Hyderabad, Telangana 500081<br />
          Need assistance? Reach out to our compliance operations team at <a href="mailto:sales@yfy.ai" style="color: #C07EF0;">sales@yfy.ai</a>.
        </p>
      </div>
    </div>
  `;

  const attachments = icsContent ? [{ filename: 'yfy-statutory-compliance-calendar.ics', content: icsContent }] : [];

  return dispatchEmail({
    to: email,
    subject,
    html,
    text: `You have successfully subscribed to yfy® statutory compliance calendar alerts for ${email}. View live deadlines at https://yfy.ai/resources/compliance-calendar`,
    templateName: 'compliance_subscription_welcome',
    attachments,
  });
}

