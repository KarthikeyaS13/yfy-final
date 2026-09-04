import Link from 'next/link';
import { 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  AlertTriangle, 
  FileText, 
  FileCheck, 
  Lock, 
  Eye, 
  XCircle, 
  Check, 
  ChevronRight, 
  Calendar, 
  ShieldCheck, 
  Zap, 
  Smartphone, 
  MapPin, 
  WifiOff, 
  UserCheck, 
  Layers, 
  DollarSign, 
  Building2, 
  FileSpreadsheet,
  ArrowDown
} from 'lucide-react';
import RosterFaq from './RosterFaq';
import styles from './page.module.css';

export const metadata = {
  title: 'Site Muster & Roster Software for Staffing and Facility Management | yfy®',
  description:
    'Capture attendance at the gate with no app install, offline-capable and geo-tagged. One approved day drives worker payroll, statutory liability, client billing and the GST invoice.',
  alternates: { canonical: '/products/roster-site-muster' },
  keywords: [
    'site muster software India',
    'attendance software for security agencies',
    'facility management roster software',
    'manpower deployment attendance app',
    'offline attendance capture India',
    'guard muster roll software',
    'multi client worker attendance billing'
  ],
  openGraph: {
    title: 'Site Muster & Roster Software for Staffing and Facility Management | yfy®',
    description:
      'Capture attendance at the gate with no app install, offline-capable and geo-tagged. One approved day drives worker payroll, statutory liability, client billing and the GST invoice.',
    url: 'https://yfy.ai/products/roster-site-muster',
    siteName: 'yfy.ai',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Site Muster & Roster Software for Staffing and Facility Management | yfy®',
    description: 'One approved day. Four systems read it.',
  },
};

const faqData = [
  {
    q: 'Our supervisors will not install anything, and half of them change every quarter. Is that a problem?',
    a: 'No, and it is the exact case the muster was designed for. A supervisor receives a link by SMS and marks attendance in a browser. There is nothing to install, no app store account to manage and nothing to un-install when they leave. Onboarding a replacement supervisor is simply sending them the site link.'
  },
  {
    q: 'What happens at a site with no signal?',
    a: 'Marks are held on the device local storage and sync automatically when connectivity returns. Each mark saves as it is made rather than on submit, so nothing is lost if the browser tab closes or the network connection drops mid-muster.'
  },
  {
    q: 'How do you stop a supervisor marking attendance from home?',
    a: 'Every mark is timestamped and geo-tagged against the client site coordinates. Configurable policies allow you to either flag out-of-radius marks for operations manager review, or block submission when GPS drift exceeds the site boundary.'
  },
  {
    q: 'We already have biometric devices at our larger sites. Do we replace them?',
    a: 'No. They feed the same unified muster. The magic-link browser muster covers the sites where dedicated biometric hardware is not economic — which, across security guarding and facility management, is the vast majority of sites.'
  },
  {
    q: 'A worker covered someone else\'s shift at a different client site. How is that handled?',
    a: 'Recorded at the gate as a cover deployment against the site actually worked. The worker\'s month is aggregated across all sites for statutory ceilings (PF/ESI/PT), and the cost is apportioned proportionally so the client whose site was manned receives the bill.'
  },
  {
    q: 'Can our client see the muster?',
    a: 'Only if you grant it, and strictly limited to their own contract. A principal employer given portal access sees only their assigned deployments, attendance, and statutory proofs — never another client’s data.'
  },
  {
    q: 'How long does the muster take to roll out across 300 sites?',
    a: 'Typically 7 to 10 working days. Site locations and worker rosters are imported via template, and supervisors receive SMS magic links with an introductory 3-minute video guide. Zero client-side software configuration.'
  },
  {
    q: 'Does this replace our existing payroll?',
    a: 'Not necessarily. The roster and muster can run alongside your current payroll, with approved days exported cleanly. However, most staffing agencies eventually consolidate because eliminating the drift between billed and paid days is where margin is recovered.'
  }
];

export default function RosterSiteMusterPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'SoftwareApplication',
        name: 'yfy® Roster & Site Muster',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'All modern web browsers (mobile and desktop)',
        description:
          'Site attendance capture with no app install, offline sync, geo-tagging, and 4-system unification: worker payroll, statutory liability, client billing, and GST invoicing.',
        provider: {
          '@type': 'Organization',
          name: 'yfy.ai (Finnovo Tech Functional Pvt Ltd)',
          url: 'https://yfy.ai',
        },
      },
      {
        '@type': 'FAQPage',
        mainEntity: faqData.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: {
            '@type': 'Answer',
            text: f.a,
          },
        })),
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
          Staffing Operations
        </div>

        <h1 className={styles.title}>
          One approved day.<br />
          <span className="text-gradient">Four systems read it.</span>
        </h1>

        <div className={styles.lead}>
          <p style={{ marginBottom: '1.25rem' }}>
            The roster is the spine of a manpower business. Get the day right and payroll, statutory liability, client billing and the GST invoice all follow from the same row. Get it wrong — or capture it in one place and re-key it into three others — and the gap between billed days and paid days becomes your margin.
          </p>
          <p style={{ margin: 0, fontWeight: 500, color: '#E2D9F3' }}>
            yfy captures the muster at the site, approves it once, and lets everything downstream read that record instead of a copy of it.
          </p>
        </div>

        <div className={styles.ctaGroup}>
          <Link href="/compliance-proof-pack" className="btn btn-primary btn-lg">
            Get your compliance proof pack <ArrowRight size={18} />
          </Link>
          <Link href="/products/staffing" className="btn btn-outline btn-lg">
            See the full staffing operation
          </Link>
          <Link href="/platform/demo?module=roster-site-muster&cta=roster_header_demo&persona=agency&source=/products/roster-site-muster" className={styles.tertiaryLink}>
            Book a demo →
          </Link>
        </div>

        <div>
          <span className={styles.trustStrip}>
            Finnovo Tech Functional Pvt Ltd · Hyderabad · Works offline · No app install for supervisors · Billing starts at go-live
          </span>
        </div>
      </header>

      {/* SECTION 2: THE SPINE */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionKicker}>Why this module matters</span>
          <h2 className={styles.sectionTitle}>The record, and the four things that read it</h2>
          <p className={styles.sectionLead}>
            One approved assignment-day row drives worker payroll, statutory liability, client billing and the GST invoice simultaneously.
          </p>
        </div>

        {/* Visual Anchor: The Spine Component */}
        <div className={styles.spineContainer}>
          <div className={styles.spineVisual}>
            <div className={styles.spineInputBox}>
              <div className={styles.spineInputLabel}>The Single Input Record</div>
              <div className={styles.spineInputTitle}>Approved Assignment-Day Row</div>
              <div className={styles.spineInputMeta}>
                • Worker ID &amp; Aadhaar/UAN<br />
                • Client Contract &amp; Site<br />
                • State, Zone &amp; Skill Category<br />
                • Shift Hours &amp; Overtime<br />
                • Supervisor Signature &amp; Timestamp
              </div>
            </div>

            <div className={styles.spineConnector}>
              <ArrowRight size={32} />
            </div>

            <div className={styles.spineOutputsGrid}>
              <div className={styles.spineOutputCard}>
                <div className={styles.spineOutputHeader}>
                  <span className={styles.spineOutputNum}>1</span>
                  <span className={styles.spineOutputTitle}>Worker Payroll</span>
                </div>
                <p className={styles.spineOutputDesc}>
                  Days present, shift, overtime, client site worked, and applicable minimum wage floor.
                </p>
              </div>

              <div className={styles.spineOutputCard}>
                <div className={styles.spineOutputHeader}>
                  <span className={styles.spineOutputNum}>2</span>
                  <span className={styles.spineOutputTitle}>Statutory Liability</span>
                </div>
                <p className={styles.spineOutputDesc}>
                  The wage base for PF, ESI, PT, LWF, bonus and gratuity — all yours as employer of record.
                </p>
              </div>

              <div className={styles.spineOutputCard}>
                <div className={styles.spineOutputHeader}>
                  <span className={styles.spineOutputNum}>3</span>
                  <span className={styles.spineOutputTitle}>Client Billing</span>
                </div>
                <p className={styles.spineOutputDesc}>
                  The billable days or units, computed at the agreed rate card for that contract.
                </p>
              </div>

              <div className={styles.spineOutputCard}>
                <div className={styles.spineOutputHeader}>
                  <span className={styles.spineOutputNum}>4</span>
                  <span className={styles.spineOutputTitle}>GST Invoice</span>
                </div>
                <p className={styles.spineOutputDesc}>
                  The line item on the invoice, with contemporaneous attendance evidence attached.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.statementBand}>
            <p>
              <strong>Billed days cannot drift from paid days, because they are the same row.</strong> In a four-system operation those two numbers are calculated separately, from different sources, by different people. The gap is your margin, and nobody sees it until the year closes.
            </p>
          </div>

          <p style={{ marginTop: '1.5rem', fontSize: '0.92rem', color: '#D1C5E2', lineHeight: 1.6, textAlign: 'center', margin: '1.5rem 0 0' }}>
            The approval is the moment of truth. Before it, the day is a claim. After it, it is the basis on which a person is paid, a statute is computed, a client is billed and an invoice is raised — so the approval carries a name, a timestamp and an audit row.
          </p>
        </div>
      </section>

      {/* SECTION 3: THE ROSTER */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionKicker}>Planning</span>
          <h2 className={styles.sectionTitle}>Rostering starts from what the site contracted for</h2>
          <p className={styles.sectionLead}>
            Not from who happens to be free. Each client contract carries a required headcount by skill, by shift and by day — and the roster is built against that requirement, so a shortfall is visible before the shift starts.
          </p>
        </div>

        <div className={styles.grid4}>
          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <Calendar size={22} />
            </div>
            <h3 className={styles.cardTitle}>Demand-first duty roster</h3>
            <p className={styles.cardDesc}>
              Built from site requirements: headcount by skill category, shift, and day. The plan and the contract obligation are the same object.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <Layers size={22} />
            </div>
            <h3 className={styles.cardTitle}>Bulk assignment</h3>
            <p className={styles.cardDesc}>
              Deploy hundreds of staff to sites in one action. The client contract, state, zone, and skill category attach automatically with the correct minimum wage floor.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <Clock size={22} />
            </div>
            <h3 className={styles.cardTitle}>Week-ahead fill forecasting</h3>
            <p className={styles.cardDesc}>
              Predict which shifts will run short next week while you can still deploy cover. Fill rate is your primary renewal metric — manage it as a number.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <AlertTriangle size={22} />
            </div>
            <h3 className={styles.cardTitle}>Exception-first control</h3>
            <p className={styles.cardDesc}>
              The screen highlights what needs a human decision, not a wall of shifts that are already staffed. For an operator with 400 sites, clean views save hours.
            </p>
          </div>
        </div>

        <p style={{ marginTop: '1.5rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
          <strong>Per-contract SLA tracking:</strong> Headcount fill commitments and response windows are held directly against client contract records.
        </p>
      </section>

      {/* SECTION 4: THE SITE MUSTER */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionKicker}>Capture</span>
          <h2 className={styles.sectionTitle}>The best attendance system is the one that gets used at 6am</h2>
          <p className={styles.sectionLead}>
            Your supervisor is standing at a gate. It is early, it is raining, there is one bar of signal, and they have thirty people to mark. Every design decision below follows from that reality.
          </p>
        </div>

        <div className={styles.tableContainer}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th style={{ width: '30%' }}>Ergonomic Feature</th>
                <th style={{ width: '70%' }}>How It Works at the Gate</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>No app to install</strong></td>
                <td>A magic link sent via SMS. No download, no app store credentials, no IT tickets, and no device policy arguments. A supervisor who joins tomorrow needs a link, not a training day.</td>
              </tr>
              <tr>
                <td><strong>Works offline</strong></td>
                <td>Attendance marks are stored locally on the device and sync when network signal returns. A low-connectivity zone delays the sync, never the muster.</td>
              </tr>
              <tr>
                <td><strong>Saves on every tap</strong></td>
                <td>There is no submit button to forget and no session timeout to lose. Each tap saves instantly, so a dropped connection costs zero work.</td>
              </tr>
              <tr>
                <td><strong>Cover and replacement in one tap</strong></td>
                <td>When a regular guard or cleaner is absent, the supervisor records who stepped in on the spot, rather than reconstructing memory at month-end.</td>
              </tr>
              <tr>
                <td><strong>Geo-tagged and timestamped</strong></td>
                <td>Tied to the client site coordinates. A man-day is evidenced rather than asserted, whether questioned by a client auditor or an inspector.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className={styles.statementBand}>
          <p>
            <strong>A record created at the gate and a register compiled for a hearing are not the same document.</strong> The first is contemporaneous evidence. The second is a reconstruction, and everybody in the room knows it.
          </p>
        </div>

        <p style={{ marginTop: '1.5rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
          <strong>Existing biometric hardware:</strong> Large sites with biometric turnstiles (Essl, ZKTeco, Matrix) sync seamlessly via automated push APIs and scheduled data feeds into the same muster record.
        </p>
      </section>

      {/* SECTION 5: APPROVAL, AND WHAT IT LOCKS */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionKicker}>The control point</span>
          <h2 className={styles.sectionTitle}>One approval, four consequences</h2>
          <p className={styles.sectionLead}>
            Because a single record drives pay, statute, billing and invoicing, approving it is a financial control rather than an administrative step.
          </p>
        </div>

        <div className={styles.grid4}>
          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <UserCheck size={22} />
            </div>
            <h3 className={styles.cardTitle}>Named approver audit</h3>
            <p className={styles.cardDesc}>
              Records exactly who approved which site’s muster and when, stored on an immutable tamper-evident audit ledger.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <AlertTriangle size={22} />
            </div>
            <h3 className={styles.cardTitle}>Exceptions surfaced first</h3>
            <p className={styles.cardDesc}>
              Absences without cover, double-marked staff across two locations, and uncontracted overtime are raised for human decision prior to approval.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <FileCheck size={22} />
            </div>
            <h3 className={styles.cardTitle}>Amendments leave a trail</h3>
            <p className={styles.cardDesc}>
              A corrected day supersedes rather than overwrites. A query three months later displays both the original entry and the reasoned edit.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <Lock size={22} />
            </div>
            <h3 className={styles.cardTitle}>Downstream reads approved</h3>
            <p className={styles.cardDesc}>
              Payroll, statutory computations, and billing consume only approved records. An unapproved day is never accidentally invoiced.
            </p>
          </div>
        </div>

        <p style={{ marginTop: '1.5rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
          <strong>Configurable hierarchy:</strong> Supports multi-tier sign-off workflows (Site Supervisor → Cluster/Area Manager → Operations Head) tailored per client agreement.
        </p>
      </section>

      {/* SECTION 6: MULTI-CLIENT, MULTI-STATE, ONE WORKER */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionKicker}>The hard case</span>
          <h2 className={styles.sectionTitle}>One guard. Three client sites. Three rates. One month.</h2>
          <p className={styles.sectionLead}>
            This is the operational reality that breaks generic software and spreadsheets — and in facility management and security, it is a routine month.
          </p>
        </div>

        <div className={styles.hardCaseBox}>
          <div className={styles.hardCaseStep}>
            <div className={styles.hardCaseStepNum}>1</div>
            <div>
              <div className={styles.hardCaseStepTitle}>Multi-Site Deployment Capture</div>
              <p className={styles.hardCaseStepText}>
                The record logs exactly which client site the worker stood at each day, the wage rate for that contract, the notified minimum wage floor for that state, and the relevant branch registration.
              </p>
            </div>
          </div>

          <div className={styles.hardCaseStep}>
            <div className={styles.hardCaseStepNum}>2</div>
            <div>
              <div className={styles.hardCaseStepTitle}>Monthly Aggregation Across Sites</div>
              <p className={styles.hardCaseStepText}>
                The worker's total monthly earnings are <strong>aggregated first</strong>. The statutory ceiling (e.g. ₹15,000 for EPF, ₹21,000 for ESI) is applied <strong>once against the aggregate total</strong>, preventing illegal over-deductions.
              </p>
            </div>
          </div>

          <div className={styles.hardCaseStep}>
            <div className={styles.hardCaseStepNum}>3</div>
            <div>
              <div className={styles.hardCaseStepTitle}>Proportional Apportionment to Client Invoices</div>
              <p className={styles.hardCaseStepText}>
                The employer statutory contribution is then <strong>apportioned proportionally</strong> across the client billing lines. Each client pays their exact statutory share, and the agency never absorbs unbilled employer liabilities.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.statementBandHigh}>
          <p>
            <strong>This is the single calculation that most distinguishes an agency that scales from one that gets a notice.</strong> Ask any vendor you are evaluating to walk through a worker who moved between two client sites mid-month. The pause tells you everything.
          </p>
        </div>

        <div style={{ marginTop: '1.5rem', textAlign: 'right' }}>
          <Link href="/products/staffing" className={styles.tertiaryLink}>
            Explore Multi-Client Payroll on Staffing Operations →
          </Link>
        </div>
      </section>

      {/* SECTION 7: WHAT THE MUSTER PROVES LATER */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionKicker}>Evidence</span>
          <h2 className={styles.sectionTitle}>The muster is a compliance record, not just an input</h2>
          <p className={styles.sectionLead}>
            Attendance is the first document requested in an inspection, client audit, or section 33C(2) wage dispute. Capture it as though it will be read by a hostile party.
          </p>
        </div>

        <div className={styles.grid3}>
          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <FileCheck size={22} />
            </div>
            <h3 className={styles.cardTitle}>For a client audit</h3>
            <p className={styles.cardDesc}>
              The attendance record per worker per day, geo-tagged, forms part of the monthly compliance pack alongside wage registers and establishment-filtered PF/ESI returns.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <ShieldCheck size={22} />
            </div>
            <h3 className={styles.cardTitle}>For a labour inspection</h3>
            <p className={styles.cardDesc}>
              Muster and wage registers generate directly from the run that paid, under the applicable state Shops or Factories Act, and file into the evidence vault.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <Building2 size={22} />
            </div>
            <h3 className={styles.cardTitle}>For principal employers</h3>
            <p className={styles.cardDesc}>
              If your client runs yfy's principal employer lens, your approved muster matches their bill verification record. Deduction disputes stop before they start.
            </p>
          </div>
        </div>

        <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
          <Link href="/compliance-proof-pack" className="btn btn-outline btn-md">
            See the Compliance Proof Pack →
          </Link>
        </div>
      </section>

      {/* SECTION 8: FOR PRINCIPAL EMPLOYERS */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionKicker}>The other side</span>
          <h2 className={styles.sectionTitle}>If you engage contract labour, the muster is yours, not theirs</h2>
          <p className={styles.sectionLead}>
            A contractor-supplied attendance sheet cannot trim a contractor-supplied bill. That is why principal employers maintain their own independent gate records.
          </p>
        </div>

        <div className={styles.tableContainer}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th style={{ width: '35%' }}>Principal Employer Principle</th>
                <th style={{ width: '65%' }}>How the Platform Enforces It</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Your gate is your evidence</strong></td>
                <td>Biometric turnstiles and gate access logs feed a muster you own, independent of contractor self-reporting.</td>
              </tr>
              <tr>
                <td><strong>Propose, then confirm</strong></td>
                <td>The agency proposes a deployment roster; your site supervisor confirms it. No worker enters the premises in the system without prior acceptance.</td>
              </tr>
              <tr>
                <td><strong>Supervisor scope</strong></td>
                <td>A site supervisor sees only the facility they oversee, preventing data spill across plants.</td>
              </tr>
              <tr>
                <td><strong>Feeds the billing trim</strong></td>
                <td>Claimed man-days on the agency invoice are capped at your gate record, per worker, per shift — the first calculation in eligible-to-pay.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div style={{ textAlign: 'right', marginTop: '1rem' }}>
          <Link href="/for/principal-employers" className={styles.tertiaryLink}>
            Explore the Principal Employer Lens →
          </Link>
        </div>
      </section>

      {/* SECTION 9: HONEST LIMITS */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Honest limits: What we do not do</h2>
          <p className={styles.sectionLead}>
            We state our operational boundaries clearly so expectations align before you trial the product.
          </p>
        </div>

        <div className={styles.limitsBox}>
          <ul className={styles.limitsList}>
            <li className={styles.limitItem}>
              <XCircle size={18} className={styles.limitIcon} />
              <span>
                <strong>This is not a predictive workforce-management suite.</strong> No footfall forecasting, no algorithmic auto-scheduling based on store traffic, and no shift-bidding marketplace. The roster is built from your contracted headcount obligations.
              </span>
            </li>
            <li className={styles.limitItem}>
              <XCircle size={18} className={styles.limitIcon} />
              <span>
                <strong>We do not supply biometric hardware.</strong> We ingest from devices you already own (Essl, ZKTeco, Matrix, etc.) via open APIs or scheduled file drops.
              </span>
            </li>
            <li className={styles.limitItem}>
              <XCircle size={18} className={styles.limitIcon} />
              <span>
                <strong>Native mobile applications are in progress.</strong> The site muster and worker self-service are mobile-first in modern web browsers today and require zero app installs.
              </span>
            </li>
            <li className={styles.limitItem}>
              <XCircle size={18} className={styles.limitIcon} />
              <span>
                <strong>We do not do facial recognition or liveness detection.</strong> Attendance is authenticated via secure supervisor credentials, SMS magic links, or external biometric device feeds.
              </span>
            </li>
            <li className={styles.limitItem}>
              <XCircle size={18} className={styles.limitIcon} />
              <span>
                <strong>We do not source or recruit candidates.</strong> Onboarding through to deployment, payroll and billing, yes. Sourcing talent remains your operational function.
              </span>
            </li>
            <li className={styles.limitItem}>
              <XCircle size={18} className={styles.limitIcon} />
              <span>
                <strong>India only.</strong> Built specifically for Indian labour laws, state minimum wage zones, and multi-state compliance.
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* SECTION 10: FREQUENTLY ASKED QUESTIONS */}
      <section className={styles.section}>
        <div className={styles.sectionHeader} style={{ textAlign: 'center', margin: '0 auto 2.5rem' }}>
          <span className={styles.sectionKicker}>Frequently Asked Questions</span>
          <h2 className={styles.sectionTitle}>Muster capture, multi-client scaling &amp; implementation</h2>
        </div>

        <RosterFaq items={faqData} />
      </section>

      {/* SECTION 11: OFFER */}
      <section className={styles.section}>
        <div className={styles.offerSection}>
          <h2 className={styles.offerTitle}>Reconcile one month against your own records</h2>
          
          <p className={styles.offerLead}>
            Send one month: your deployed roster with client sites, that month's payroll register, one client invoice, and your PF and ESI challans. We reconcile paid days against billed days per client site, test wages against the notified floor for each site's state and skill, and show you where the gaps are. Then we show you the compliance pack you could hand that client every month instead.
          </p>

          <div className={styles.offerConditions}>
            Two weeks · under NDA · read-only · nothing installed, nothing migrated, no workers moved
          </div>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/compliance-proof-pack" className="btn btn-primary btn-lg">
              Get your compliance proof pack <ArrowRight size={18} />
            </Link>
            <Link href="/platform/demo?module=roster-site-muster&cta=roster_bottom_demo&persona=agency&source=/products/roster-site-muster" className="btn btn-outline btn-lg">
              Book a live demo
            </Link>
            <Link href="/products/staffing" className={styles.tertiaryLink} style={{ alignSelf: 'center' }}>
              See the full staffing operation →
            </Link>
          </div>
        </div>

        <div className={styles.reviewDate}>
          Statutory references reviewed: September 2026 · Finnovo Tech Functional Pvt Ltd · Madhapur, Hyderabad
        </div>
      </section>

      {/* MOBILE STICKY CTA BAR (< 768px) */}
      <div className={styles.mobileStickyBar}>
        <Link href="/compliance-proof-pack" className={`btn btn-primary btn-md ${styles.mobileStickyBtn}`}>
          Get Compliance Proof Pack <ArrowRight size={16} />
        </Link>
      </div>

    </div>
  );
}
