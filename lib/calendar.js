/**
 * RFC 5545 iCalendar (.ics) and Web Calendar Link Generator
 * Native implementation with zero external dependencies.
 */

function formatIcsDate(date) {
  const d = new Date(date);
  return d.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
}

function escapeIcsText(text) {
  if (!text) return '';
  return text
    .replace(/\\/g, '\\\\')
    .replace(/;/g, '\\;')
    .replace(/,/g, '\\,')
    .replace(/\n/g, '\\n');
}

/**
 * Generate an .ics calendar file for a scheduled Demo Walkthrough
 */
export function generateDemoIcs({
  leadName = 'Valued Prospect',
  company = 'Enterprise',
  module = 'Platform Core',
  startTime = null,
  endTime = null,
  leadUid = 'demo',
}) {
  const now = new Date();
  // Default to tomorrow 3:00 PM IST if no date provided
  const start = startTime ? new Date(startTime) : new Date(Date.now() + 24 * 60 * 60 * 1000);
  if (!startTime) {
    start.setHours(15, 0, 0, 0); // 3:00 PM
  }
  const end = endTime ? new Date(endTime) : new Date(start.getTime() + 45 * 60 * 1000); // 45 min walkthrough

  const summary = `yfy® Walkthrough: ${module} for ${company}`;
  const description = `Operational statutory compliance walkthrough tailored for ${company} (${leadName}).\\n\\nTopic: ${module} Engine & Verification\\nPlatform: Google Meet / Teams link will be shared by the compliance architect.\\nContact: sales@yfy.ai | https://yfy.ai`;
  const location = `Virtual Meeting (Google Meet / Video Conference)`;

  const ics = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Finnovo Tech Functional Pvt Ltd//yfy.ai Platform//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:REQUEST',
    'BEGIN:VEVENT',
    `UID:yfy-demo-${leadUid}-${Date.now()}@yfy.ai`,
    `DTSTAMP:${formatIcsDate(now)}`,
    `DTSTART:${formatIcsDate(start)}`,
    `DTEND:${formatIcsDate(end)}`,
    `SUMMARY:${escapeIcsText(summary)}`,
    `DESCRIPTION:${escapeIcsText(description)}`,
    `LOCATION:${escapeIcsText(location)}`,
    'ORGANIZER;CN=yfy.ai Compliance Operations:mailto:sales@yfy.ai',
    'STATUS:CONFIRMED',
    'BEGIN:VALARM',
    'TRIGGER:-PT15M',
    'ACTION:DISPLAY',
    'DESCRIPTION:Reminder: yfy Platform Walkthrough in 15 minutes',
    'END:VALARM',
    'END:VEVENT',
    'END:VCALENDAR',
  ].join('\r\n');

  return ics;
}

/**
 * Generate a 1-click Google Calendar add link
 */
export function generateGoogleCalendarUrl({
  leadName = 'Valued Prospect',
  company = 'Enterprise',
  module = 'Platform Core',
  startTime = null,
  endTime = null,
}) {
  const start = startTime ? new Date(startTime) : new Date(Date.now() + 24 * 60 * 60 * 1000);
  if (!startTime) {
    start.setHours(15, 0, 0, 0);
  }
  const end = endTime ? new Date(endTime) : new Date(start.getTime() + 45 * 60 * 1000);

  const startStr = formatIcsDate(start);
  const endStr = formatIcsDate(end);

  const title = `yfy® Walkthrough: ${module} (${company})`;
  const details = `Tailored statutory compliance & workforce verification walkthrough for ${company} (${leadName}).\n\nModule: ${module}\nCoordinator: yfy Compliance Architect (sales@yfy.ai)`;
  const location = 'Virtual Conference / Google Meet';

  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
    title
  )}&dates=${startStr}/${endStr}&details=${encodeURIComponent(details)}&location=${encodeURIComponent(location)}`;
}

/**
 * Generate a statutory compliance due dates subscription calendar (.ics)
 */
export function generateComplianceCalendarIcs(events = []) {
  const now = new Date();
  const calendarLines = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Finnovo Tech Functional Pvt Ltd//yfy Statutory Calendar//EN',
    'X-WR-CALNAME:Indian Statutory Compliance Deadlines (yfy.ai)',
    'X-WR-TIMEZONE:Asia/Kolkata',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
  ];

  for (const ev of events) {
    const dueDate = new Date(ev.due_date || ev.date || Date.now());
    const startStr = formatIcsDate(dueDate);
    const endStr = formatIcsDate(new Date(dueDate.getTime() + 2 * 60 * 60 * 1000));
    const freq = (ev.frequency || 'monthly').toLowerCase().trim();
    const dueDay = ev.dueDateDay || ev.due_date_day || 15;
    const dueMonth = ev.dueMonth || ev.due_month || null;

    let rrule = '';
    if (freq === 'monthly') {
      rrule = `RRULE:FREQ=MONTHLY;BYMONTHDAY=${dueDay}`;
    } else if (freq === 'quarterly') {
      rrule = `RRULE:FREQ=MONTHLY;INTERVAL=3;BYMONTHDAY=${dueDay}`;
    } else if (freq === 'half_yearly') {
      rrule = dueMonth ? `RRULE:FREQ=MONTHLY;INTERVAL=6;BYMONTHDAY=${dueDay}` : `RRULE:FREQ=MONTHLY;INTERVAL=6;BYMONTHDAY=${dueDay}`;
    } else if (freq === 'annual') {
      rrule = dueMonth ? `RRULE:FREQ=YEARLY;BYMONTH=${dueMonth};BYMONTHDAY=${dueDay}` : `RRULE:FREQ=YEARLY;BYMONTHDAY=${dueDay}`;
    }

    const eventLines = [
      'BEGIN:VEVENT',
      `UID:compliance-${ev.id || Math.random().toString(36)}@yfy.ai`,
      `DTSTAMP:${formatIcsDate(now)}`,
      `DTSTART:${startStr}`,
      `DTEND:${endStr}`,
    ];

    if (rrule) {
      eventLines.push(rrule);
    }

    eventLines.push(
      `SUMMARY:${escapeIcsText(`[Statutory Due Date] ${ev.title || ev.act_name}`)}`,
      `DESCRIPTION:${escapeIcsText(
        `Act: ${ev.act_name || ev.type || 'Labour Law'}\\nFrequency: ${freq.toUpperCase()}\\nState: ${ev.state || 'All India'}\\nForm: ${ev.form_number || 'N/A'}\\nPenalty Risk: ${ev.penalty_clause || 'Statutory Interest'}\\n\\nMaintained by yfy.ai`
      )}`,
      `LOCATION:${escapeIcsText(ev.state || 'All India')}`,
      'STATUS:CONFIRMED',
      'END:VEVENT'
    );

    calendarLines.push(...eventLines);
  }

  calendarLines.push('END:VCALENDAR');
  return calendarLines.join('\r\n');
}
