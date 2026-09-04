import Link from 'next/link';
import { 
  ArrowRight, 
  ShieldAlert, 
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
  Users, 
  Calendar, 
  Scale, 
  ShieldCheck, 
  Zap, 
  Smartphone, 
  UserCheck, 
  Layers, 
  Building2,
  HelpCircle,
  MessageSquare
} from 'lucide-react';
import HrFaq from './HrFaq';
import styles from './page.module.css';

export const metadata = {
  title: 'Payroll, Statutory & IR Records for HR and IR Leaders in India | yfy®',
  description:
    'Contemporaneous muster and wage records, effective-dated job history, per-state applicability that recomputes on commit, and a contract labour boundary your records keep legible.',
  alternates: { canonical: '/roles/hr' },
  keywords: [
    'industrial relations records software India',
    'muster roll wage register software',
    'contract labour IR compliance',
    'multi-state statutory HR software',
    'domestic enquiry records',
    'Section 33C 2 recovery application evidence',
    'CLRA section 21 sham contracting defense'
  ],
  openGraph: {
    title: 'Payroll, Statutory & IR Records for HR and IR Leaders in India | yfy®',
    description:
      'Contemporaneous muster and wage records, effective-dated job history, per-state applicability that recomputes on commit, and a contract labour boundary your records keep legible.',
    url: 'https://yfy.ai/roles/hr',
    siteName: 'yfy.ai',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Payroll, Statutory & IR Records for HR and IR Leaders in India | yfy®',
    description: 'When it goes wrong, it goes wrong on your desk.',
  },
};

const faqData = [
  {
    q: 'Do we have to replace our existing HRMS?',
    a: 'No. Most customers start with the compliance and contract labour layer alongside what they already run, because that is the part their HRMS was not built for. Payroll consolidation, if it happens, happens later and on evidence — we re-compute months you have already paid and show you every variance first.'
  },
  {
    q: 'What is the risk to a live payroll while we implement?',
    a: 'Sequenced to be very low, and deliberately so. First a replay, which writes nothing anywhere. Then one entity or one location in parallel with your current system for two full cycles, both producing output for the same month, reconciled. Only then live. And go-live is a one-way door, so nobody can later unpick the opening balances.'
  },
  {
    q: 'Our supervisors will not use an app. What then?',
    a: 'They do not need one. The site muster is a link sent by SMS — no download, no store account, no IT ticket. It works offline, syncs when signal returns, and saves on every tap so a dropped connection loses nothing. Where you already have biometric devices, those feed the same muster.'
  },
  {
    q: 'A tribunal has asked for a muster roll and wage register from three years ago. Can we produce it?',
    a: 'That is the case the record model is built for. Attendance is held as captured with its timestamp; wage registers regenerate from the run that paid; the statutory registration each record filed under is stamped for that wage month and never re-derived. What you produce is what existed then, not a reconstruction.'
  },
  {
    q: 'How do you handle a union asking about contract workers’ wages?',
    a: 'The verification record shows, per worker per month, what the contractor claimed, what your attendance supported, what the statute required for that site’s state, zone and skill category, and what was released. The distinction between the contractor’s submission and your check is preserved in the records rather than collapsed into one figure.'
  },
  {
    q: 'We have contract labour across nine states. Is applicability really per state?',
    a: 'Yes, and it has to be. CLRA counts contract workers, the Factories Act counts everyone on premises, everything else counts your own rolls — three different bases. And a state amendment to a threshold is evaluated against that state’s deployments, not your national total. A worker deployed in two states counts in both establishments.'
  },
  {
    q: 'Who at our end actually needs to be trained?',
    a: 'Payroll and compliance administrators for the run and the register (2 to 3 days of walkthrough), site supervisors for the muster (needs zero formal training beyond an SMS link and 5-minute video), and approvers for sign-off steps (1 hour on the approval workflow).'
  },
  {
    q: 'What does support look like around the payroll window?',
    a: 'During your designated pay cycle (e.g. 24th to 1st), your account enters Priority Pay Window SLA: 15-minute response on P1 blockers, direct access to named statutory architects via dedicated Slack/Teams or bridge line, and extended standby through bank cut-off hours.'
  }
];

export default function HrRolePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: 'Payroll, Statutory Compliance & Industrial Relations Records Software',
        provider: {
          '@type': 'Organization',
          name: 'yfy.ai (Finnovo Tech Functional Pvt Ltd)',
          url: 'https://yfy.ai',
        },
        description:
          'Contemporaneous muster and wage records, effective-dated job history, per-state statutory applicability ratchets, and contract labour boundary controls for HR and IR leaders.',
        serviceType: 'Workforce & Statutory Records Software',
        areaServed: 'IN',
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
          HR &amp; IR Leaders
        </div>

        <h1 className={styles.title}>
          When it goes wrong,<br />
          <span className="text-gradient">it goes wrong on your desk.</span>
        </h1>

        <div className={styles.lead}>
          <p style={{ marginBottom: '1.25rem' }}>
            Nobody thanks you for a payroll that ran. Everybody remembers the one that did not. The inspector's notice comes to you. So does the union's question about a contract worker's wage, and the tribunal's request for a muster roll from three years ago.
          </p>
          <p style={{ margin: 0, fontWeight: 500, color: '#E2D9F3' }}>
            yfy is built so those moments are answered from a record rather than reconstructed from folders — across every state you operate in, for your own employees and the contract workforce you are held responsible for.
          </p>
        </div>

        <div className={styles.ctaGroup}>
          <Link href="/platform/migration" className="btn btn-primary btn-lg">
            Replay three months you have already paid <ArrowRight size={18} />
          </Link>
          <Link href="/coverage" className="btn btn-outline btn-lg">
            Check your state coverage
          </Link>
          <Link href="/roles/finance" className={styles.tertiaryLink}>
            Send the CFO version to your CFO →
          </Link>
        </div>

        <div>
          <span className={styles.trustStrip}>
            Finnovo Tech Functional Pvt Ltd · Hyderabad · ISO 9001:2015 · ISO 27001:2022 · ISO/IEC 27701:2019 · Sits alongside your existing ERP or HRMS
          </span>
        </div>
      </header>

      {/* SECTION 2: FIVE THINGS THAT LAND ON YOUR DESK */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionKicker}>What this is about</span>
          <h2 className={styles.sectionTitle}>Five recurring problems, and how much of each is really a records problem</h2>
          <p className={styles.sectionLead}>
            When pressure mounts from enforcement agencies, unions, or employees, documentary integrity is your entire defense.
          </p>
        </div>

        <div className={styles.problemTableContainer}>
          <table className={styles.problemTable}>
            <thead>
              <tr>
                <th style={{ width: '40%' }}>What lands on your desk</th>
                <th style={{ width: '40%' }}>What it actually is</th>
                <th style={{ width: '20%' }}>System defense</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>1. An inspection or a notice</strong></td>
                <td>An evidence retrieval problem, under time pressure</td>
                <td>
                  <a href="#dispute-records" className={styles.problemLink}>
                    View evidence vault →
                  </a>
                </td>
              </tr>
              <tr>
                <td><strong>2. A dispute, domestic enquiry, or tribunal reference</strong></td>
                <td>A question about what your records show, and when they were created</td>
                <td>
                  <a href="#dispute-records" className={styles.problemLink}>
                    Contemporaneous proof →
                  </a>
                </td>
              </tr>
              <tr>
                <td><strong>3. A question about a contract worker you did not employ</strong></td>
                <td>A boundary problem — who directed, who paid, whose muster</td>
                <td>
                  <a href="#contract-boundary" className={styles.problemLink}>
                    Contract boundary →
                  </a>
                </td>
              </tr>
              <tr>
                <td><strong>4. A payroll error, in public</strong></td>
                <td>A control problem that surfaces as a reputation problem</td>
                <td>
                  <a href="#payroll-reputation" className={styles.problemLink}>
                    Payroll simulation →
                  </a>
                </td>
              </tr>
              <tr>
                <td><strong>5. A statutory change nobody flagged</strong></td>
                <td>An applicability problem, discovered late</td>
                <td>
                  <a href="#statutory-change" className={styles.problemLink}>
                    Inline ratchets →
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* SECTION 3: THE RECORD THAT ANSWERS A DISPUTE */}
      <section className={styles.section} id="dispute-records">
        <div className={styles.sectionHeader}>
          <span className={styles.sectionKicker}>Industrial Relations</span>
          <h2 className={styles.sectionTitle}>In a dispute, your records are your case</h2>
          <p className={styles.sectionLead}>
            A conciliation meeting, a domestic enquiry, a section 33C(2) recovery application, a tribunal reference — every one of them turns on documents. Not on what happened, but on what you can show happened, and when the record was made.
          </p>
        </div>

        <div className={styles.grid4}>
          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <Clock size={22} />
            </div>
            <h3 className={styles.cardTitle}>Muster not written afterwards</h3>
            <p className={styles.cardDesc}>
              Attendance captured at site, timestamped and geo-tagged as each mark is made. The evidentiary difference between a record made on the day and a register compiled for a hearing is everything.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <Calendar size={22} />
            </div>
            <h3 className={styles.cardTitle}>Effective-dated job history</h3>
            <p className={styles.cardDesc}>
              A promotion, transfer, or grade change is a new dated record, not an overwrite. &quot;What was their grade in March 2024&quot; has a reproducible answer that requires zero reconstruction.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <FileCheck size={22} />
            </div>
            <h3 className={styles.cardTitle}>Figures reproduce as filed</h3>
            <p className={styles.cardDesc}>
              Every per-employee figure is fixed at computation time with stamped registration codes. Change a branch mapping today, and last year’s return still regenerates exactly as filed.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <Lock size={22} />
            </div>
            <h3 className={styles.cardTitle}>Audit trail nobody can edit</h3>
            <p className={styles.cardDesc}>
              Document and filing events write to an append-only, hash-chained ledger. Obligation dismissals require a substantive written reason, are audited, and re-surface before hearings.
            </p>
          </div>
        </div>

        <div className={styles.statementBand}>
          <p>
            <strong>The two questions that decide a documentary dispute are &quot;what does the record say&quot; and &quot;when was it made.&quot;</strong> Most HR systems answer the first and cannot answer the second, because they overwrite. This one is built not to.
          </p>
        </div>
      </section>

      {/* SECTION 4: THE CONTRACT LABOUR BOUNDARY */}
      <section className={styles.section} id="contract-boundary">
        <div className={styles.sectionHeader}>
          <span className={styles.sectionKicker}>The hardest part of the job</span>
          <h2 className={styles.sectionTitle}>The statutory shortfall is the smaller risk</h2>
          <p className={styles.sectionLead}>
            Every IR manager who handles contract labour knows the bigger exposure is not a wage shortfall. It is a claim that the arrangement was not genuine contracting at all — that the workers were, in substance, yours.
          </p>
        </div>

        {/* High-Emphasis Tension Callout Box */}
        <div className={styles.tensionBox}>
          <span className={styles.tensionTag}>The tension, stated plainly</span>
          <h3 className={styles.tensionTitle}>
            To protect yourself under CLRA §21, EPF §8A and ESI §40, you have to check what your contractor paid. But the more you direct, supervise and control, the more you look like the employer.
          </h3>
          <p className={styles.tensionText}>
            The answer is not to check less. It is to keep the records unambiguous about <strong>who did what</strong>.
          </p>
        </div>

        <div className={styles.tableContainer}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th style={{ width: '35%' }}>Boundary Principle</th>
                <th style={{ width: '65%' }}>How the Platform Keeps the Boundary Legible</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Two separate records, two provenances</strong></td>
                <td>The contractor's reported wage and muster are the contractor's submission, held as such. Your gate and biometric record is yours, held separately. The verification compares them; it does not merge them into one record of your making.</td>
              </tr>
              <tr>
                <td><strong>The contractor remains the computing party</strong></td>
                <td>The design rule is written into every service: <em>the principal employer didn't compute the wage — the contractor reports it, the principal employer checks it.</em> The platform does not run your contractor's payroll and does not let you set their wage.</td>
              </tr>
              <tr>
                <td><strong>Deployment is proposed, then confirmed</strong></td>
                <td>The contractor proposes who is deployed; your site confirms. The record shows a contractor decision and a principal employer acceptance, not a principal employer instruction.</td>
              </tr>
              <tr>
                <td><strong>Vendor scoping is unconditional</strong></td>
                <td>A contractor in the portal reaches only their own roster and their own documents. It is not a setting an administrator could switch off.</td>
              </tr>
              <tr>
                <td><strong>Every override is named and reasoned</strong></td>
                <td>Payment above the verified figure requires an explicit human decision with a recorded justification — which is a governance record, not an instruction to a worker.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div style={{ marginTop: '1.5rem', padding: '1.5rem 1.75rem', background: 'rgba(255, 255, 255, 0.02)', borderRadius: '14px', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
          <p style={{ fontSize: '0.95rem', color: '#D1C5E2', lineHeight: 1.65, margin: 0 }}>
            <strong>Honest operational boundary:</strong> Whether an arrangement is genuine contracting is a legal question decided on the facts of your operation, and it is your counsel's call. What we can do is make sure the facts are recorded clearly, separately and contemporaneously, instead of being reconstructed years later from a shared spreadsheet. <em>We will not tell you this eliminates a permanency claim, because no software can.</em>
          </p>
        </div>
      </section>

      {/* SECTION 5: PAYROLL YOUR REPUTATION SURVIVES */}
      <section className={styles.section} id="payroll-reputation">
        <div className={styles.sectionHeader}>
          <span className={styles.sectionKicker}>The monthly event</span>
          <h2 className={styles.sectionTitle}>Simulation, separation, and a run that resumes instead of restarting</h2>
          <p className={styles.sectionLead}>
            Controls that prevent gross-to-net surprises before salary hits employee bank accounts.
          </p>
        </div>

        <div className={styles.grid4}>
          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <Eye size={22} />
            </div>
            <h3 className={styles.cardTitle}>Full trial run that pays nobody</h3>
            <p className={styles.cardDesc}>
              Simulation is a first-class run type — every employee computed, variance compared against the last cycle, nothing disbursed. Promotion to live is a flag flip, not a recomputation.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <ShieldCheck size={22} />
            </div>
            <h3 className={styles.cardTitle}>Four signatures on the money path</h3>
            <p className={styles.cardDesc}>
              Compute, approve figures, approve payment, disburse — four verbs, four roles, plus a check that the person who approved payroll cannot approve its payment.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <Zap size={22} />
            </div>
            <h3 className={styles.cardTitle}>A run that resumes</h3>
            <p className={styles.cardDesc}>
              Processing chunks at 500 employees with a commit per chunk. A failure resumes rather than restarts, and registers compute per segment so errors are isolated.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <Calendar size={22} />
            </div>
            <h3 className={styles.cardTitle}>Right FY, automatically</h3>
            <p className={styles.cardDesc}>
              The financial year derives from the pay period rather than a global current-year setting — so an arrears run for a prior year computes on that year’s slabs automatically.
            </p>
          </div>
        </div>

        <div className={styles.statementBand}>
          <p>
            <strong>Every per-employee figure is an immutable snapshot at computation time.</strong> A later change to a salary structure or a statutory rate cannot silently alter a payslip you already issued — which means a query three months later has one answer, not two.
          </p>
        </div>
      </section>

      {/* SECTION 6: STATUTORY CHANGE YOU DO NOT WANT TO DISCOVER LATE */}
      <section className={styles.section} id="statutory-change">
        <div className={styles.sectionHeader}>
          <span className={styles.sectionKicker}>Applicability</span>
          <h2 className={styles.sectionTitle}>Your obligations change the moment your data does</h2>
          <p className={styles.sectionLead}>
            Add a location, cross a headcount threshold, register a new establishment, or take on a contract deployment — and your obligations change immediately.
          </p>
        </div>

        <div className={styles.grid4}>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Recompute on commit</h3>
            <p className={styles.cardDesc}>
              Add a Tamil Nadu location and the labour welfare fund obligation appears before the page finishes reloading, with the screen telling you your edit raised it.
            </p>
          </div>

          <div className={styles.card}>
            <h3 className={styles.cardTitle}>A ratchet, not a cliff</h3>
            <p className={styles.cardDesc}>
              Applicability evaluates against the higher of live and declared headcount and holds once crossed. Seasonal ramp-down does not un-apply an obligation you legally still carry.
            </p>
          </div>

          <div className={styles.card}>
            <h3 className={styles.cardTitle}>State amendments per state</h3>
            <p className={styles.cardDesc}>
              A national threshold is suppressed only where every operating state has amended it. Partial coverage keeps the central rule and names the amended states.
            </p>
          </div>

          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Dismissals that expire</h3>
            <p className={styles.cardDesc}>
              Compliance debt you cannot yet verify can be set aside only with a written reason, is audited, and re-surfaces automatically at the statutory deadline.
            </p>
          </div>
        </div>

        <div style={{ marginTop: '2rem', padding: '1.5rem 1.75rem', background: 'rgba(107, 31, 162, 0.1)', borderRadius: '14px', border: '1px solid rgba(155, 61, 216, 0.3)' }}>
          <h4 style={{ color: '#fff', fontSize: '1rem', marginBottom: '0.5rem' }}>On the Labour Codes, stated honestly:</h4>
          <p style={{ color: '#D1C5E2', fontSize: '0.92rem', lineHeight: 1.65, margin: 0 }}>
            Thresholds differ between legacy acts and the four Codes, and states are framing rules at different speeds. The engine keeps the <strong>lower, stricter threshold binding</strong> and shows the Code figure alongside it, because flipping globally would understate your obligations in states still operating the old acts. You see both, and you are held to the stricter one.
          </p>
        </div>
      </section>

      {/* SECTION 7: WHAT COMES OFF YOUR TEAM'S PLATE */}
      <section className={styles.section} id="team-load">
        <div className={styles.sectionHeader}>
          <span className={styles.sectionKicker}>The administrative load</span>
          <h2 className={styles.sectionTitle}>Your team should be doing IR, not data entry</h2>
          <p className={styles.sectionLead}>
            The reason your HR team has no time for employee relations is that it spends the month reconciling attendance, chasing challans and assembling documents for people who ask.
          </p>
        </div>

        <div className={styles.loadTableContainer}>
          <table className={styles.loadTable}>
            <thead>
              <tr>
                <th style={{ width: '45%' }}>Currently manual &amp; reactive</th>
                <th style={{ width: '55%' }}>What replaces it in yfy</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Keying supervisor attendance sheets</td>
                <td>Site muster over an SMS link — no app install, works offline, saves on every tap, cover recorded on the spot</td>
              </tr>
              <tr>
                <td>Assembling a compliance pack when someone asks</td>
                <td>Generated per contract, per month, from records the month already created</td>
              </tr>
              <tr>
                <td>Answering the same payslip and leave-balance questions</td>
                <td>Self-service with plain-language payslip and leave summaries, so the queue shortens</td>
              </tr>
              <tr>
                <td>Rebuilding a document set for an audit</td>
                <td>One governed vault, filed automatically by head, financial year, state and wage month at upload</td>
              </tr>
              <tr>
                <td>Tracking licence and registration expiry in a spreadsheet</td>
                <td>Expiry surfaced in a work queue before it lapses</td>
              </tr>
              <tr>
                <td>Chasing a manager for a review or approval</td>
                <td>Workflow with escalation, and an SLA clock that pauses when the ball is with the requester</td>
              </tr>
              <tr>
                <td>Re-keying a new joiner from ATS into payroll</td>
                <td>Requisition to employee record inside one tenant, with no re-entry of a PAN or bank account</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p style={{ marginTop: '1.75rem', fontSize: '1rem', color: '#F0E8FF', fontWeight: 600, textAlign: 'center' }}>
          None of this is glamorous and all of it is the month. Removing it is the difference between an HR function that reacts and one that has time to get ahead of a dispute.
        </p>
      </section>

      {/* SECTION 8: GRIEVANCE, POSH AND TRAINING */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionKicker}>What you are accountable for</span>
          <h2 className={styles.sectionTitle}>The obligations that are yours personally</h2>
          <p className={styles.sectionLead}>
            Personal compliance exposures tracked directly inside the compliance register rather than loose email threads.
          </p>
        </div>

        <div className={styles.grid3}>
          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <MessageSquare size={22} />
            </div>
            <h3 className={styles.cardTitle}>Grievance desk that cannot swallow requests</h3>
            <p className={styles.cardDesc}>
              A request routing rules cannot place is refused at creation rather than lost in an unowned queue. An agent resolves and only the requester closes. The SLA clock runs in working time.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <ShieldAlert size={22} />
            </div>
            <h3 className={styles.cardTitle}>POSH as a tracked obligation</h3>
            <p className={styles.cardDesc}>
              The internal committee, annual return and training requirement appear in the compliance register with due dates. Training completion satisfies the obligation and files the certificate into the vault.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <AlertTriangle size={22} />
            </div>
            <h3 className={styles.cardTitle}>Certification lapses that raise themselves</h3>
            <p className={styles.cardDesc}>
              A lapsed statutory certification (POSH, factory safety, GMP) raises an obligation in the register, assigns the renewal, and files the certificate as evidence upon completion.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 9: SHIFTS, ROSTERS & GATE WORKFORCE */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionKicker}>The operational layer</span>
          <h2 className={styles.sectionTitle}>Built for people who clock in at a gate</h2>
          <p className={styles.sectionLead}>
            Engineered for physical plants and 24/7 continuous operations.
          </p>
        </div>

        <div className={styles.grid4}>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Shift &amp; roster</h3>
            <p className={styles.cardDesc}>
              Continuous operations rosters with weekly-off and spread-over constraints visible rather than discovered at audit.
            </p>
          </div>

          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Biometric device ingestion</h3>
            <p className={styles.cardDesc}>
              Turnstiles, face recognition and gate access records feeding the same unified muster as supervisor marks.
            </p>
          </div>

          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Geo-attendance &amp; SMS muster</h3>
            <p className={styles.cardDesc}>
              Instant verification for remote sites and yards where a native app install will never happen.
            </p>
          </div>

          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Multiple pay calendars</h3>
            <p className={styles.cardDesc}>
              Plant runs 26th to 25th while head office runs 1st to 31st — handled as separate derived periods, not manual workarounds.
            </p>
          </div>
        </div>

        <div style={{ marginTop: '1.5rem', padding: '1rem 1.5rem', background: 'rgba(255, 255, 255, 0.02)', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
          <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', margin: 0 }}>
            <strong>Honest architecture note:</strong> Native mobile applications are in progress. The site muster and employee self-service surfaces are mobile-first web today and work seamlessly in any browser without an install.
          </p>
        </div>
      </section>

      {/* SECTION 10: TAKE IT TO YOUR CFO (DESIGNED HANDOFF BAND) */}
      <section className={styles.section}>
        <div className={styles.cfoHandoffBand}>
          <span className={styles.cfoKicker}>The internal case</span>
          <h2 className={styles.cfoTitle}>You are probably the champion, not the signatory</h2>
          <p className={styles.cfoLead}>
            The budget for this usually sits with Finance or the plant head. So here is the version written for them — the same platform, argued in balance-sheet, ICFR controls, and audit evidence language.
          </p>

          <div className={styles.cfoFeaturesList}>
            <div className={styles.cfoFeature}>
              <Check size={16} color="#F5C842" />
              <span>Unrecognised contractor liability sizing (CLRA §21)</span>
            </div>
            <div className={styles.cfoFeature}>
              <Check size={16} color="#F5C842" />
              <span>System-enforced four-eyes ICFR separation of duties</span>
            </div>
            <div className={styles.cfoFeature}>
              <Check size={16} color="#F5C842" />
              <span>CARO 2020 statutory dues evidence (not bank slips)</span>
            </div>
            <div className={styles.cfoFeature}>
              <Check size={16} color="#F5C842" />
              <span>Section 36(1)(va) permanent tax disallowance protection</span>
            </div>
          </div>

          <div className={styles.cfoCtas}>
            <Link href="/roles/finance" className="btn btn-primary btn-lg">
              Open the CFO version <ArrowRight size={18} />
            </Link>
            <Link href="/exposure-report" className="btn btn-outline btn-lg">
              Or send them the exposure assessment offer →
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 11: HONEST LIMITS */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Honest limits: What we do not do</h2>
          <p className={styles.sectionLead}>
            We state our operational boundaries clearly so expectations align before you champion us internally.
          </p>
        </div>

        <div className={styles.limitsBox}>
          <ul className={styles.limitsList}>
            <li className={styles.limitItem}>
              <XCircle size={18} className={styles.limitIcon} />
              <span>
                <strong>We do not give IR or legal advice.</strong> Whether an arrangement is genuine contracting, whether a domestic enquiry was properly conducted, whether a notice of change was required — all your counsel's calls. We keep the contemporaneous records.
              </span>
            </li>
            <li className={styles.limitItem}>
              <XCircle size={18} className={styles.limitIcon} />
              <span>
                <strong>We do not manage union negotiations or settlements.</strong> A long-term settlement's commercial terms configure into pay structures once agreed. Getting to the agreement is your job.
              </span>
            </li>
            <li className={styles.limitItem}>
              <XCircle size={18} className={styles.limitIcon} />
              <span>
                <strong>Recruitment is not a sourcing product.</strong> Requisition through to employee record inside one tenant, yes. Native posting to Naukri, LinkedIn and Indeed is not live.
              </span>
            </li>
            <li className={styles.limitItem}>
              <XCircle size={18} className={styles.limitIcon} />
              <span>
                <strong>Learning is not a content library.</strong> Course assignment, completion tracking and certificate evidence, yes. The curriculum is yours or your partner's.
              </span>
            </li>
            <li className={styles.limitItem}>
              <XCircle size={18} className={styles.limitIcon} />
              <span>
                <strong>Native mobile apps are in progress.</strong> Mobile-first browser surfaces today.
              </span>
            </li>
            <li className={styles.limitItem}>
              <XCircle size={18} className={styles.limitIcon} />
              <span>
                <strong>We do not run your contractors' payroll.</strong> They do, and they should — that is what makes them the employer. We check what they report against what the statute required.
              </span>
            </li>
            <li className={styles.limitItem}>
              <XCircle size={18} className={styles.limitIcon} />
              <span>
                <strong>India only.</strong> Deliberately. The depth in state minimum wage, professional tax, labour welfare fund and CLRA exists because we did not spread across jurisdictions.
              </span>
            </li>
            <li className={styles.limitItem}>
              <XCircle size={18} className={styles.limitIcon} />
              <span>
                <strong>Three ISO certifications, few public references.</strong> We would rather replay three months of your own payroll than show you someone else's logo.
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* SECTION 12: FREQUENTLY ASKED QUESTIONS */}
      <section className={styles.section}>
        <div className={styles.sectionHeader} style={{ textAlign: 'center', margin: '0 auto 2.5rem' }}>
          <span className={styles.sectionKicker}>Frequently Asked Questions</span>
          <h2 className={styles.sectionTitle}>Operations, implementation and tribunal records</h2>
        </div>

        <HrFaq items={faqData} />
      </section>

      {/* SECTION 13: OFFER */}
      <section className={styles.section}>
        <div className={styles.offerSection}>
          <h2 className={styles.offerTitle}>Replay a payroll you have already run</h2>
          
          <p className={styles.offerLead}>
            Send three months you have already paid. We re-compute them on our engine and report every figure where we disagree with your current system — per employee, per head, per state, with the statutory basis for our number. It writes nothing to anything live. There is no version of this that costs you a live payroll.
          </p>

          <div className={styles.outcomesGrid}>
            <div className={styles.outcomeCard}>
              <h3 className={styles.outcomeTitle}>1. We agree across the board</h3>
              <p className={styles.outcomeText}>
                You have a validated baseline and the trust conversation is over.
              </p>
            </div>
            <div className={styles.outcomeCard}>
              <h3 className={styles.outcomeTitle}>2. We disagree and we are right</h3>
              <p className={styles.outcomeText}>
                You found a missing LWF deduction, a minimum wage shortfall, or a misfiled registration while it is still fixable.
              </p>
            </div>
            <div className={styles.outcomeCard}>
              <h3 className={styles.outcomeTitle}>3. We disagree and we are wrong</h3>
              <p className={styles.outcomeText}>
                You found a bug in our engine for free, before anyone's pay depended on it.
              </p>
            </div>
          </div>
          
          <div className={styles.offerConditions}>
            Two weeks · under NDA · read-only · nothing installed, nothing migrated
          </div>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/platform/migration" className="btn btn-primary btn-lg">
              Request a payroll replay <ArrowRight size={18} />
            </Link>
            <Link href="/coverage" className="btn btn-outline btn-lg">
              Check your state coverage first →
            </Link>
            <Link href="/roles/finance" className="btn btn-outline btn-lg" style={{ borderColor: 'rgba(245, 200, 66, 0.4)', color: '#F5C842' }}>
              Send CFO version to Finance →
            </Link>
          </div>
        </div>

        <div className={styles.reviewDate}>
          Statutory references reviewed: September 2026 · Finnovo Tech Functional Pvt Ltd · Madhapur, Hyderabad
        </div>
      </section>

      {/* MOBILE STICKY CTA BAR (< 768px) */}
      <div className={styles.mobileStickyBar}>
        <Link href="/platform/migration" className={`btn btn-primary btn-md ${styles.mobileStickyBtn}`}>
          Request Payroll Replay <ArrowRight size={16} />
        </Link>
      </div>

    </div>
  );
}
