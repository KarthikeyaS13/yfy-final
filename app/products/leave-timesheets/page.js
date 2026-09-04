import Link from 'next/link';
import {
  ArrowRight,
  Clock,
  ShieldCheck,
  Scale,
  Building2,
  Calendar,
  CheckCircle2,
  AlertTriangle,
  FileText,
  Layers,
  Smartphone,
  History,
  UserCheck,
  Users
} from 'lucide-react';
import styles from './page.module.css';

export const metadata = {
  title: 'Leave & Timesheet Software for Multi-State India | yfy®',
  description:
    'Leave entitlement is set by statute, and the statute changes at the state border. Statutory floor resolved per state and establishment act before company policy is layered, feeding payroll with zero disconnect.',
  alternates: { canonical: '/products/leave-timesheets' },
  keywords: [
    'leave management software India',
    'statutory leave rules by state India',
    'Factories Act leave rules section 79',
    'shops and establishments leave entitlement',
    'hours worked tracking software India',
    'loss of pay payroll calculation India',
    'overtime calculation factories act section 59'
  ],
  openGraph: {
    title: 'Leave & Timesheet Software for Multi-State India | yfy®',
    description:
      'Leave entitlement is set by statute, and the statute changes at the state border. Statutory floor resolved per state before company policy is layered.',
    url: 'https://yfy.ai/products/leave-timesheets',
    siteName: 'yfy.ai',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Leave & Timesheet Software for Multi-State India | yfy®',
    description:
      'Leave entitlement is set by statute, and the statute changes at the state border. Joined directly into payroll.',
  },
};

const statutoryFloorData = [
  {
    state: 'Maharashtra',
    el: '1 day per 20 days worked (min 21 days after 240 days)',
    sl: '8 days (accumulates up to 45 days)',
    cl: 'Included in EL / casual pool',
    holidays: '4 mandatory + 4 optional (min 8)',
    source: 'Maharashtra Shops & Establishments Act 2017',
  },
  {
    state: 'Karnataka',
    el: '1 day per 20 days worked',
    sl: '12 days sickness / accident',
    cl: '12 days casual',
    holidays: '10 festival holidays (4 mandatory: Republic Day, May Day, Independence Day, Gandhi Jayanti)',
    source: 'Karnataka Shops & Commercial Establishments Act 1961',
  },
  {
    state: 'Tamil Nadu',
    el: '1 day per 20 days worked (min 12 days)',
    sl: '12 days sickness',
    cl: '12 days casual',
    holidays: '9 festival holidays (4 mandatory)',
    source: 'Tamil Nadu Shops & Establishments Act 1947',
  },
  {
    state: 'Telangana',
    el: '1 day per 20 days worked (min 15 days)',
    sl: '12 days sickness',
    cl: '12 days casual',
    holidays: '8 festival holidays (5 mandatory)',
    source: 'Telangana Shops & Establishments Act 1988',
  },
  {
    state: 'Factories Act 1948 (All India)',
    el: '1 day per 20 days worked (adults), 1 per 15 (children) after 240 days',
    sl: 'Covered under ESI where applicable; else standing orders',
    cl: 'As per certified standing orders',
    holidays: 'Subject to state festival holiday acts',
    source: 'Factories Act 1948 §79',
  },
];

const payrollJoinData = [
  {
    event: 'Loss of Pay (LOP)',
    hrSees: 'Employee absent without approved leave',
    payrollComputes: 'Deducts from gross wages for the exact number of calendar or working days per company pay-days rule',
    risk: 'LOP entered manually into payroll after payroll cutoff. Either the employee is overpaid and recovered next month (illegal under Payment of Wages Act without consent), or underpaid and disgruntled.',
  },
  {
    event: 'Leave encashment at exit',
    hrSees: 'Remaining earned leave balance at separation',
    payrollComputes: 'Encashment value computed on basic + DA (or gross, depending on employment contract and state rule); tax exemption calculated under §10(10AA)',
    risk: "Balance tracked in HR software doesn't match the muster roll. Excess encashment paid (company loss) or statutory minimum underpaid (recovery claim under Shops Act).",
  },
  {
    event: 'Half-day leave',
    hrSees: 'Employee takes half-day casual leave',
    payrollComputes: 'Half-day basic paid; half-day deducted. Shift hours verified against minimum threshold for half-day credit',
    risk: 'Half-day recorded as full day absent or full day present. Affects PF wage ceiling if basic crosses the ₹15,000 threshold because of the deduction.',
  },
  {
    event: 'Maternity leave',
    hrSees: '26 weeks paid leave under Maternity Benefit Act 1961',
    payrollComputes: 'Full wage paid during leave period; ESI maternity benefit coordinated if covered under ESI Act',
    risk: 'Salary paid through payroll without claiming ESI reimbursement where applicable; or leave granted for 12 weeks instead of 26 (statutory violation under Central Act).',
  },
];

export default function LeaveTimesheetsPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'SoftwareApplication',
        name: 'yfy Leave & Timesheets Engine',
        provider: {
          '@type': 'Organization',
          name: 'yfy.ai (Finnovo Tech Functional Pvt Ltd)',
          url: 'https://yfy.ai',
        },
        description:
          'Statutory floor-first leave and hours tracking engine resolving state Shops and Factories Act requirements directly into Indian payroll calculations.',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web Browser (Desktop & Mobile)',
        areaServed: 'IN',
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'How does yfy handle state-by-state leave rules in India?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'The software resolves the statutory floor per registered establishment under the applicable State Shops and Establishments Act or Factories Act 1948 before applying employer policy.',
            },
          },
          {
            '@type': 'Question',
            name: 'Does yfy do project billable timesheets for IT services?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No. yfy tracks hours worked, statutory spread-over, and overtime under Factories Act §59 for payroll and compliance, not agency client billable timesheets.',
            },
          },
          {
            '@type': 'Question',
            name: 'How does leave connect to payroll and loss of pay (LOP)?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'The approved muster roll directly feeds the payroll calculation. Unapproved absences, half-days, and encashment are processed without manual file transfers or disconnected spreadsheets.',
            },
          },
        ],
      },
    ],
  };

  return (
    <div className={styles.wrapper}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* SECTION 1: HERO */}
      <header className={styles.hero}>
        <div className={styles.kicker}>
          <span className={styles.kickerDot} />
          Core HR & Payroll · Leave & Timesheets
        </div>

        <h1 className={styles.title}>
          Leave entitlement is set by statute,<br />
          <span className="text-gradient">and the statute changes at the state border.</span>
        </h1>

        <div className={styles.lead}>
          <p style={{ marginBottom: '1.25rem' }}>
            In most HR software, leave is a policy the company decides and an employee requests. In India, leave is a statutory floor set by the Act the establishment is registered under — Factories Act 1948 or state Shops & Commercial Establishment Acts — differing in earned-leave accrual, sick leave carry-forward, casual leave lapse rules, and national festival holidays.
          </p>
          <p style={{ margin: 0, fontWeight: 500, color: '#E2D9F3' }}>
            Here, the statutory floor is resolved per state and per registered establishment before the company's policy is layered on top. And the approved leave record feeds the payroll run directly — because an unapproved absence is a loss-of-pay calculation, and a miscalculated loss-of-pay is an incorrect PF wage.
          </p>
        </div>

        <div className={styles.ctaGroup}>
          <Link href="/coverage" className="btn btn-primary btn-lg">
            Check statutory leave rules by state <ArrowRight size={18} />
          </Link>
          <Link href="/platform/migration" className="btn btn-outline btn-lg">
            Replay last month's leave against payroll
          </Link>
          <Link href="/platform/demo?module=leave-timesheets&cta=timesheets_header_demo&persona=hr&source=/products/leave-timesheets" className={styles.tertiaryLink}>
            Book a walk-through →
          </Link>
        </div>

        <div>
          <span className={styles.trustStrip}>
            Finnovo Tech Functional Pvt Ltd · Madhapur, Hyderabad · Statutory floor resolved before company policy is applied
          </span>
        </div>
      </header>

      {/* SECTION 2: THE STATUTORY FLOOR — WHAT CHANGES ACROSS STATES */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionKicker}>Statutory Variations</span>
          <h2 className={styles.sectionTitle}>Leave is not an HR policy. It is a state-by-state statute.</h2>
          <p className={styles.sectionLead}>
            Every state sets its own minimum for privilege/earned leave, casual leave, sick leave, and paid festival holidays. Company policy can only exceed this floor, never undercut it.
          </p>
        </div>

        <div className={styles.tableContainer}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>State / Act</th>
                <th>Earned / Privilege Leave</th>
                <th>Sick Leave</th>
                <th>Casual Leave</th>
                <th>National & Festival Holidays</th>
                <th>Statutory Source</th>
              </tr>
            </thead>
            <tbody>
              {statutoryFloorData.map((row, idx) => (
                <tr key={idx}>
                  <td><strong>{row.state}</strong></td>
                  <td>{row.el}</td>
                  <td>{row.sl}</td>
                  <td>{row.cl}</td>
                  <td>{row.holidays}</td>
                  <td style={{ fontSize: '0.85rem', color: '#B3A1C9' }}>{row.source}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className={styles.statementBand}>
          <p>
            When an employee transfers from Bengaluru to Hyderabad, their leave rule changes on the day the transfer takes effect. Their accrued leave does not evaporate, their carry-forward limit adjusts to the Telangana ceiling, and their festival holiday calendar switches from Karnataka's 10 days to Telangana's 8. If your software does this by manual HR override, someone will forget, and the first time anyone notices is the final settlement or a labour inspection.
          </p>
        </div>
      </section>

      {/* SECTION 3: HOW THE SOFTWARE RESOLVES IT */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionKicker}>Resolution Engine</span>
          <h2 className={styles.sectionTitle}>Establishment-act-first resolution</h2>
          <p className={styles.sectionLead}>
            How yfy resolves every leave rule before company policy is applied.
          </p>
        </div>

        <div className={styles.grid4}>
          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <Building2 size={22} />
            </div>
            <h3 className={styles.cardTitle}>1 · Establishment registration lookup</h3>
            <p className={styles.cardDesc}>
              The employee's work location is tied to an establishment registration number — not a city name. The system identifies whether that establishment is registered under the Factories Act, the state Shops & Establishments Act, or a specific exemption.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <Scale size={22} />
            </div>
            <h3 className={styles.cardTitle}>2 · Statutory floor loaded</h3>
            <p className={styles.cardDesc}>
              The minimum entitlement, maximum accumulation, carry-forward rules, and mandatory festival holidays for that Act are loaded as the floor. The company cannot set a policy below these values.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <Layers size={22} />
            </div>
            <h3 className={styles.cardTitle}>3 · Company policy layered</h3>
            <p className={styles.cardDesc}>
              The employer's policy — if it offers more than statute — is applied on top. Additional days, optional holidays from a configured list, and special leave categories (bereavement, paternity) sit above the statutory minimum.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <History size={22} />
            </div>
            <h3 className={styles.cardTitle}>4 · Transfer-aware carry-forward</h3>
            <p className={styles.cardDesc}>
              When an employee moves between states or between factory and office entities, the system applies the statutory transition rule: accrued days carry over at the earned value; the destination state's accumulation cap applies to future accruals.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 4: THE JOIN INTO PAYROLL */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionKicker}>Payroll Integration</span>
          <h2 className={styles.sectionTitle}>Why leave errors become payroll penalties</h2>
          <p className={styles.sectionLead}>
            A leave record is not an attendance log. It is a payroll input that directly affects gross pay, statutory wage ceilings, and employee liability.
          </p>
        </div>

        <div className={styles.tableContainer}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Leave Event</th>
                <th>What HR Sees</th>
                <th>What Payroll Computes</th>
                <th>What Goes Wrong If Disconnected</th>
              </tr>
            </thead>
            <tbody>
              {payrollJoinData.map((row, idx) => (
                <tr key={idx}>
                  <td><strong>{row.event}</strong></td>
                  <td>{row.hrSees}</td>
                  <td>{row.payrollComputes}</td>
                  <td style={{ color: '#E2D9F3' }}>{row.risk}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className={styles.statementBandHigh}>
          <p>
            <strong>The leave record and the payroll record are the same record.</strong> There is no export from leave management and import into payroll. When the muster roll is approved for the cycle, the loss-of-pay days, leave encashment days, and paid leave days are already the numbers payroll computes on.
          </p>
        </div>
      </section>

      {/* SECTION 5: ATTENDANCE, MUSTER, AND THE DESKLESS WORKFORCE */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionKicker}>Workforce Attendance</span>
          <h2 className={styles.sectionTitle}>For the deskless worker, leave starts with attendance</h2>
          <p className={styles.sectionLead}>
            White-collar leave is requested in advance. Blue-collar and grey-collar leave is often an absence that needs to be regularised, a shift swap, or a rest-day substitution.
          </p>
        </div>

        <div className={styles.grid3}>
          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <UserCheck size={22} />
            </div>
            <h3 className={styles.cardTitle}>Biometric and geofenced punch integration</h3>
            <p className={styles.cardDesc}>
              Attendance from biometric devices, GPS-fenced mobile punches, or supervisor muster rolls feeds directly into the daily attendance record. No middle-tier data re-entry.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <Clock size={22} />
            </div>
            <h3 className={styles.cardTitle}>Shift-pattern-aware rest-day tracking</h3>
            <p className={styles.cardDesc}>
              The system tracks the statutory weekly off (mandatory under both Factories Act §52 and all Shops Acts). If a worker works on their scheduled rest day, the compensatory off is tracked and must be granted within the statutory window (typically within the same month or as prescribed by the state Act).
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <FileText size={22} />
            </div>
            <h3 className={styles.cardTitle}>Muster roll to Form D / Form T generation</h3>
            <p className={styles.cardDesc}>
              Attendance and leave records generate statutory registers — Form D (attendance register under central rules), Form T (under state rules), or state-specific muster roll formats — without manual compilation.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 6: TIMESHEETS FOR BUSINESSES THAT TRACK HOURS */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionKicker}>Hours & Overtime</span>
          <h2 className={styles.sectionTitle}>Hours-worked records, not billable-hour timesheets</h2>
          <p className={styles.sectionLead}>
            A critical distinction: we do not offer IT project billing timesheets with task codes and client invoicing rates.
          </p>
        </div>

        <div className={styles.calloutBox}>
          <h3 className={styles.calloutTitle}>What we track is hours worked for statutory compliance and payroll computation:</h3>
          <p className={styles.calloutText}>
            • <strong>Actual hours worked per shift</strong> — verified against scheduled shift duration
          </p>
          <p className={styles.calloutText}>
            • <strong>Spread-over tracking</strong> — ensuring total spread (work hours + rest intervals) does not exceed the statutory maximum (typically 10.5 to 12 hours depending on the state Act)
          </p>
          <p className={styles.calloutText}>
            • <strong>Overtime computation</strong> — hours beyond the normal daily limit (typically 8 or 9 hours) or weekly limit (typically 48 hours), computed at the statutory double-rate under Factories Act §59 or applicable Shops Act provisions
          </p>
          <p className={styles.calloutText}>
            • <strong>Night shift allowances</strong> — shifts extending past midnight or into early morning hours, where statutory rules require specific amenities, transport provisions, or wage premiums
          </p>
          <p style={{ marginTop: '1.25rem', color: '#D4C5ED', fontSize: '0.92rem', fontStyle: 'italic' }}>
            If your business needs project billing timesheets — where consultants log hours against client codes for invoice generation — that is not what this module does. This module tracks time for the worker's right to statutory wages and the employer's defense against compliance claims.
          </p>
        </div>
      </section>

      {/* SECTION 7: THE EMPLOYEE EXPERIENCE */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionKicker}>Self-Service</span>
          <h2 className={styles.sectionTitle}>Clear to the worker, verifiable by HR</h2>
          <p className={styles.sectionLead}>
            Transparency for employees reduces disputes at month-end and final settlement.
          </p>
        </div>

        <div className={styles.grid3}>
          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <Smartphone size={22} />
            </div>
            <h3 className={styles.cardTitle}>Mobile-first leave balance view</h3>
            <p className={styles.cardDesc}>
              Employees see their leave balance broken down by type: earned, casual, sick, optional holiday. For each type: accrued, used, pending approval, and balance available. No mystery deductions on payday.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <Users size={22} />
            </div>
            <h3 className={styles.cardTitle}>Multi-tier approval workflows</h3>
            <p className={styles.cardDesc}>
              Leave requests route to reporting managers, site supervisors, or project leads based on employee category. Configurable auto-escalation if requests are not acted on within a defined window.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <Calendar size={22} />
            </div>
            <h3 className={styles.cardTitle}>Holiday calendar by establishment</h3>
            <p className={styles.cardDesc}>
              Employees see only the holidays that apply to their registered establishment and state. No confusion between the head-office holiday list and the factory holiday list.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 8: WHAT THIS MODULE DOES NOT DO */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionKicker}>Honest Boundaries</span>
          <h2 className={styles.sectionTitle}>Honest limits on leave & timesheets</h2>
          <p className={styles.sectionLead}>
            Clear architectural boundaries prevent misaligned expectations and maintain compliance integrity.
          </p>
        </div>

        <div className={styles.limitsBox}>
          <ul className={styles.limitsList}>
            <li className={styles.limitItem}>
              <span className={styles.limitIcon}>✕</span>
              <span><strong>No IT project billing timesheets</strong> — We do not do client-billable hour logging, task codes, or time-and-materials billing. This is workforce time tracking for payroll and compliance, not agency client billing.</span>
            </li>
            <li className={styles.limitItem}>
              <span className={styles.limitIcon}>✕</span>
              <span><strong>No automated shift scheduling</strong> — We track attendance against assigned shifts and muster rolls; we do not auto-generate shift schedules based on demand forecasting or algorithmic optimisation.</span>
            </li>
            <li className={styles.limitItem}>
              <span className={styles.limitIcon}>✕</span>
              <span><strong>No native mobile app download required</strong> — Leave requests, approvals, and balance checks run on any mobile browser. We do not require workers to install an app that consumes phone storage and requires permissions.</span>
            </li>
            <li className={styles.limitItem}>
              <span className={styles.limitIcon}>✕</span>
              <span><strong>No informal leave tracking</strong> — If your company tracks leave on a whiteboard, in WhatsApp messages, or by verbal agreement without system recording, that leave cannot feed payroll. The system requires an approved record.</span>
            </li>
            <li className={styles.limitItem}>
              <span className={styles.limitIcon}>✕</span>
              <span><strong>No retrospective policy overrides without audit trail</strong> — When an HR admin overrides a leave balance or adjusts an absence, the system logs who did it, when, and the reason. Back-dated changes without documentation are flagged in the compliance log.</span>
            </li>
            <li className={styles.limitItem}>
              <span className={styles.limitIcon}>✕</span>
              <span><strong>No compensatory off banking beyond statutory limits</strong> — If state law requires compensatory rest within 30 days, the system does not allow banking it indefinitely as accumulated leave.</span>
            </li>
            <li className={styles.limitItem}>
              <span className={styles.limitIcon}>✕</span>
              <span><strong>No substitute for certified standing orders</strong> — For establishments with certified standing orders under the Industrial Employment (Standing Orders) Act 1946, those standing orders govern where they provide greater benefit than the statutory floor. The system can be configured to match them, but the employer must provide the certified terms.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* SECTION 10: THE OFFER */}
      <section className={styles.section} style={{ paddingTop: '1rem' }}>
        <div className={styles.offerSection}>
          <h2 className={styles.offerTitle}>Know your statutory leave exposure across every state.</h2>
          <p className={styles.offerLead}>
            If your company operates across multiple states or runs both factory and office establishments, your leave rules are probably inconsistent. We'll run a leave rule audit against your current headcount and show you where your policy is below the statutory floor — or where your payroll is computing LOP on the wrong basis.
          </p>

          <div className={styles.offerConditions}>
            No software purchase required. Delivered as a structured report within 3 business days.
          </div>

          <div className={styles.ctaGroup}>
            <Link href="/coverage" className="btn btn-primary btn-lg">
              Check statutory leave rules by state <ArrowRight size={18} />
            </Link>
            <Link href="/platform/migration" className="btn btn-outline btn-lg">
              Replay last month's leave against payroll
            </Link>
            <Link href="/platform/demo?module=leave-timesheets&cta=timesheets_bottom_demo&persona=hr&source=/products/leave-timesheets" className={styles.tertiaryLink}>
              Book a walk-through →
            </Link>
          </div>
        </div>

        <div className={styles.reviewDate}>
          Statutory references reviewed: September 2026 · Finnovo Tech Functional Pvt Ltd · Madhapur, Hyderabad
        </div>
      </section>

      {/* Mobile Sticky CTA Bar */}
      <div className={styles.mobileStickyBar}>
        <Link href="/coverage" className={`btn btn-primary ${styles.mobileStickyBtn}`}>
          Check statutory leave rules by state <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
}
