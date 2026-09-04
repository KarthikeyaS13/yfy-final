import Link from 'next/link';
import { 
  ArrowRight, 
  ShieldAlert, 
  CheckCircle2, 
  Clock, 
  AlertTriangle, 
  FileText, 
  FileCheck, 
  Coins, 
  Lock, 
  Eye, 
  XCircle, 
  Check, 
  ChevronRight,
  TrendingDown,
  Building,
  Scale,
  ShieldCheck,
  Zap,
  DollarSign,
  Users,
  Calendar
} from 'lucide-react';
import FinanceFaq from './FinanceFaq';
import styles from './page.module.css';

export const metadata = {
  title: 'Contractor Liability, Statutory Dues & Payroll Controls for CFOs | yfy®',
  description:
    'Size your unrecognised contractor liability under CLRA §21, EPF §8A and ESI §40. System-enforced separation of duties on the payroll and vendor payment path, and statutory dues evidenced for audit.',
  alternates: { canonical: '/roles/finance' },
  keywords: [
    'contractor liability principal employer India',
    'statutory dues audit evidence',
    'payroll segregation of duties India',
    'CLRA section 21 liability provision',
    'internal financial controls payroll',
    'CARO 2020 statutory dues undisputed arrears',
    'Section 36 1 va Checkmate Services PF disallowance'
  ],
  openGraph: {
    title: 'Contractor Liability, Statutory Dues & Payroll Controls for CFOs | yfy®',
    description:
      'Size your unrecognised contractor liability under CLRA §21, EPF §8A and ESI §40. System-enforced separation of duties on the payroll and vendor payment path, and statutory dues evidenced for audit.',
    url: 'https://yfy.ai/roles/finance',
    siteName: 'yfy.ai',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contractor Liability, Statutory Dues & Payroll Controls for CFOs | yfy®',
    description: 'The liability is on your balance sheet. The control is not.',
  },
};

const faqData = [
  {
    q: 'How is this different from our compliance consultancy?',
    a: 'Timing and position. A consultancy audits and reports — genuinely useful, and many of our customers keep theirs. But the report arrives three to six months after the cash left. We sit in the payment path and cap the release before it happens. Audit after, control before.'
  },
  {
    q: "Our ERP does three-way matching on vendor invoices. Isn't that the control?",
    a: 'It matches the invoice to the purchase order and the goods or service receipt. That confirms you ordered the service and received it. It says nothing about whether the wage underneath met the notified minimum for that state, whether the PF challan covered the workers at your establishment, or whether overtime was billed at the rate the Factories Act requires. Those are the four components that become your liability.'
  },
  {
    q: 'Will this help with our ICFR documentation and testing?',
    a: 'It gives you system-enforced segregation on the payroll and vendor payment cycles, a documented verb-and-role matrix, an override log with recorded reasons, immutable per-employee snapshots and a tamper-evident audit ledger. What it does not do is write your risk-control matrix or perform your testing — that is your internal audit function’s work, and we will not pretend otherwise.'
  },
  {
    q: 'What do we hand our statutory auditor?',
    a: 'The statutory dues position per registration, per head and per period, split by computed, filed, paid and evidenced; the acknowledged returns and payment receipts held against the correct wage month; the applicability history showing what was in force when; and the coverage matrix showing where we generate a return file and where we compute and evidence instead.'
  },
  {
    q: 'Can we quantify the exposure before we buy anything?',
    a: 'That is the recommended first step. Send three months of contractor invoices, your attendance records, your site list with states and the challans your contractors gave you. We return claimed versus statutorily eligible per contractor and per site, with the residual liability sized. Two to three weeks, under NDA, read-only, nothing installed.'
  },
  {
    q: 'What is the risk to a live payroll during implementation?',
    a: 'Sequenced to be near zero. We replay months you have already paid and report variances, writing nothing. Then you run one entity or one location in parallel with your existing system for two full cycles, both producing output for the same month, reconciled. Only then does anything go live — and go-live is a one-way door, so the opening balances cannot later be unpicked by anyone.'
  },
  {
    q: 'Do you handle multi-entity consolidation?',
    a: 'Segmentation is configurable per tenant — legal entity, location, cost centre or business unit — with one register per segment and an enforced partition invariant, so no employee is paid twice or missed across segments. Consolidated reporting sits on the same shared schema.'
  },
  {
    q: 'What happens to our data if we leave?',
    a: 'Document export is a first-class operation, and on the dedicated storage tier with your own encryption key, scheduling the key for deletion renders the bucket unreadable. Standard tenant offboarding provides full JSON and tabular exports, accompanied by cryptographic verification proofs of ledger integrity.'
  }
];

export default function FinanceRolePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: 'Payroll & Statutory Compliance Internal Financial Controls (ICFR)',
        provider: {
          '@type': 'Organization',
          name: 'yfy.ai (Finnovo Tech Functional Pvt Ltd)',
          url: 'https://yfy.ai',
        },
        description:
          'Contractor liability sizing under CLRA §21, EPF §8A, ESI §40, person-level payroll segregation of duties, and statutory dues audit evidence for CFOs.',
        serviceType: 'Financial Controls & Statutory Compliance Engine',
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
          Finance &amp; CFO
        </div>

        <h1 className={styles.title}>
          The liability is on your balance sheet.<br />
          <span className="text-gradient">The control is not.</span>
        </h1>

        <div className={styles.lead}>
          <p style={{ marginBottom: '1.25rem' }}>
            Your contractors compute wages you are liable for. Your payroll pays across jurisdictions your system resolves by guesswork. Your statutory dues are deposited by a process nobody has evidenced end to end.
          </p>
          <p style={{ marginBottom: '1.25rem' }}>
            None of that shows up as a variance. It shows up as a notice, a disallowance, a provision you did not plan for, or a question from your auditor you cannot answer from a system.
          </p>
          <p style={{ margin: 0, fontWeight: 500, color: '#E2D9F3' }}>
            yfy puts a control in the payment path, sizes the exposure you are carrying, and produces the evidence your auditor asks for.
          </p>
        </div>

        <div className={styles.ctaGroup}>
          <Link href="/exposure-report" className="btn btn-primary btn-lg">
            Size your exposure on three months of data <ArrowRight size={18} />
          </Link>
          <Link href="/tools/exposure-calculator" className="btn btn-outline btn-lg">
            Model it first
          </Link>
          <Link href="/trust" className={styles.tertiaryLink}>
            See the control architecture →
          </Link>
        </div>

        <div>
          <span className={styles.trustStrip}>
            Finnovo Tech Functional Pvt Ltd · Hyderabad · ISO 9001:2015 · ISO 27001:2022 · ISO/IEC 27701:2019 · Sits alongside your ERP · Billing starts at go-live
          </span>
        </div>
      </header>

      {/* SECTION 2: THE FOUR QUESTIONS */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionKicker}>What you actually need answered</span>
          <h2 className={styles.sectionTitle}>Four questions, and no current system answers more than one</h2>
          <p className={styles.sectionLead}>
            Your HRMS answers none of these. Your ERP answers the fourth, partially. Your compliance consultancy answers the third, six months late.
          </p>
        </div>

        <div className={styles.questionsGrid}>
          <a href="#q1-liability" className={styles.questionCard}>
            <div className={styles.questionNum}>1</div>
            <div className={styles.questionContent}>
              <h3 className={styles.questionTitle}>What is my unrecognised statutory liability?</h3>
              <p className={styles.questionBite}>
                Contractor defaults you are the payer of last resort for; provisions and contingent liability disclosure under Ind AS 37.
              </p>
              <span className={styles.questionLink}>Jump to Question 1 →</span>
            </div>
          </a>

          <a href="#q2-controls" className={styles.questionCard}>
            <div className={styles.questionNum}>2</div>
            <div className={styles.questionContent}>
              <h3 className={styles.questionTitle}>Can I sign for internal financial controls?</h3>
              <p className={styles.questionBite}>
                Directors' responsibility statement; ICFR testing on the payroll and vendor payment path; person-level segregation of duties.
              </p>
              <span className={styles.questionLink}>Jump to Question 2 →</span>
            </div>
          </a>

          <a href="#q3-audit" className={styles.questionCard}>
            <div className={styles.questionNum}>3</div>
            <div className={styles.questionContent}>
              <h3 className={styles.questionTitle}>Can I answer what my auditor will ask about statutory dues?</h3>
              <p className={styles.questionBite}>
                CARO reporting on undisputed statutory dues and arrears beyond 6 months; evidenced status versus bank statements.
              </p>
              <span className={styles.questionLink}>Jump to Question 3 →</span>
            </div>
          </a>

          <a href="#q4-cash" className={styles.questionCard}>
            <div className={styles.questionNum}>4</div>
            <div className={styles.questionContent}>
              <h3 className={styles.questionTitle}>Where is cash leaking, and how much working capital is stuck?</h3>
              <p className={styles.questionBite}>
                Overbilled contractor invoices; billed-versus-paid drift; receivables held over incomplete compliance proof packs.
              </p>
              <span className={styles.questionLink}>Jump to Question 4 →</span>
            </div>
          </a>
        </div>
      </section>

      {/* SECTION 3: QUESTION 1 - LIABILITY */}
      <section className={styles.section} id="q1-liability">
        <div className={styles.sectionHeader}>
          <span className={styles.sectionKicker}>Balance Sheet</span>
          <h2 className={styles.sectionTitle}>You are the payer of last resort for arithmetic you never saw</h2>
          <p className={styles.sectionLead}>
            Under CLRA §21, EPF §8A and ESI §40, when a labour contractor fails to pay wages or fails to remit provident fund and ESI, the principal employer pays. You did not compute the wage. You are still liable for it, plus interest and damages.
          </p>
        </div>

        <div className={styles.tableContainer}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th style={{ width: '35%' }}>Component</th>
                <th style={{ width: '65%' }}>Basis of Liability</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Wage shortfall</strong></td>
                <td>Where the contractor paid below the notified minimum wage for that site's state, zone and skill category.</td>
              </tr>
              <tr>
                <td><strong>Unremitted PF and ESI</strong></td>
                <td>Where the challan you were given does not actually cover the workers deployed at your establishment.</td>
              </tr>
              <tr>
                <td><strong>Interest and damages</strong></td>
                <td>Interest under EPF §7Q and damages under §14B accrue on delayed remittance, independent of the principal amount.</td>
              </tr>
              <tr>
                <td><strong>Statutory bonus and overtime</strong></td>
                <td>Bonus under the 1965 Act, and overtime which the Factories Act requires at double the ordinary rate.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className={styles.statementBand}>
          <p>
            <strong>None of this is visible in an invoice total, and an ERP three-way match will never find it.</strong> The purchase order was for a service. The invoice matched the purchase order. The money left. What nobody checked was whether the wage underneath it met the statute for that state.
          </p>
        </div>

        <div className={styles.noteBox}>
          <div className={styles.noteTitle}>
            <Scale size={18} />
            Ind AS 37 &amp; Audit Committee Measurement
          </div>
          <p className={styles.noteText}>
            Whether contractor statutory exposure is provided for or disclosed turns on whether an outflow is probable and whether it can be reliably estimated. Most finance teams cannot currently estimate it, which forces a judgement call under Ind AS 37 with no measurement behind it. Sizing it does not create the liability — it was always there on your balance sheet. Measuring it makes your disclosure defensible.
          </p>
        </div>
      </section>

      {/* SECTION 4: QUESTION 2 - CONTROLS */}
      <section className={styles.section} id="q2-controls">
        <div className={styles.sectionHeader}>
          <span className={styles.sectionKicker}>Internal Financial Controls</span>
          <h2 className={styles.sectionTitle}>Four signatures on the money path, and a person-level check on top</h2>
          <p className={styles.sectionLead}>
            Payroll is usually the largest single cash outflow a company makes each month, and in most organisations it runs on a control that would not survive being described out loud: one team prepares it and one person approves everything.
          </p>
        </div>

        <div className={styles.tableContainer}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th style={{ width: '25%' }}>Verb</th>
                <th style={{ width: '35%' }}>Role</th>
                <th style={{ width: '40%' }}>Decision</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><span className={styles.verbCode}>run_process</span></td>
                <td>Payroll Admin</td>
                <td>Compute the register</td>
              </tr>
              <tr>
                <td><span className={styles.verbCode}>approve</span></td>
                <td>Payroll Approver</td>
                <td>The figures are right — accept the liability</td>
              </tr>
              <tr>
                <td><span className={styles.verbCode}>approve_payment</span></td>
                <td>Payment Approver</td>
                <td>Money may leave the bank account</td>
              </tr>
              <tr>
                <td><span className={styles.verbCode}>disburse</span></td>
                <td>Treasury</td>
                <td>Execute and reconcile bank file</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className={styles.statementBandHigh}>
          <p>
            <strong>Grant-level separation stops one account holding two verbs. Only a person check stops one human making both decisions.</strong> We added the fourth verb after finding that two roles could both carry a single approval grant — which meant a four-eyes control became two eyes in practice. The payment-approval endpoint structurally refuses when the caller is the person who already approved the payroll. It is the kind of finding an ICFR walkthrough is supposed to produce.
          </p>
        </div>

        <div style={{ marginTop: '2.5rem', marginBottom: '2.5rem' }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#fff', marginBottom: '0.75rem' }}>On the vendor payment side:</h3>
          <p style={{ fontSize: '0.98rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
            The contractor release control is the same idea applied to accounts payable. The system computes an <strong>eligible-to-pay figure</strong> — verified wages plus statutory add-backs plus agreed margin plus GST — and payment above it requires an explicit human override with a recorded justification. Not a warning. A recorded decision with a name against it.
          </p>
        </div>

        <div className={styles.grid4}>
          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <Lock size={22} />
            </div>
            <h3 className={styles.cardTitle}>Period locks &amp; immutable snapshots</h3>
            <p className={styles.cardDesc}>
              Every per-employee figure is fixed at computation time. A later change to a salary structure or statutory rate cannot silently alter a payslip already issued.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <ShieldCheck size={22} />
            </div>
            <h3 className={styles.cardTitle}>Append-only evidence ledger</h3>
            <p className={styles.cardDesc}>
              Filing and document events write to a tamper-evident ledger with hash verification. Holds no personal data, so it creates zero privacy liabilities.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <Zap size={22} />
            </div>
            <h3 className={styles.cardTitle}>Readiness gate before a run</h3>
            <p className={styles.cardDesc}>
              A payroll run that is not fit to compute (missing pan, unmapped branch, broken threshold) is blocked, and any override is recorded.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <CheckCircle2 size={22} />
            </div>
            <h3 className={styles.cardTitle}>Migration that cannot be unpicked</h3>
            <p className={styles.cardDesc}>
              Go-live after data migration is a one-way door — imported history cannot be undone, and opening balances stay permanent opening balances.
            </p>
          </div>
        </div>

        <p style={{ marginTop: '2rem', fontSize: '0.92rem', color: 'var(--text-muted)', fontStyle: 'italic' }}>
          These are the artefacts an ICFR walkthrough asks for on payroll and vendor payment cycles: a documented segregation matrix, evidence it is enforced by the system, and an audit trail that cannot be edited after the fact.
        </p>
      </section>

      {/* SECTION 5: QUESTION 3 - AUDIT */}
      <section className={styles.section} id="q3-audit">
        <div className={styles.sectionHeader}>
          <span className={styles.sectionKicker}>Audit</span>
          <h2 className={styles.sectionTitle}>Statutory dues, evidenced — not asserted</h2>
          <p className={styles.sectionLead}>
            Your statutory auditor is required to report on whether undisputed statutory dues — provident fund, ESI, income tax, GST, cess and other statutory dues — have been regularly deposited, and on any arrears outstanding beyond six months. Most finance teams answer this from a bank statement and a spreadsheet.
          </p>
        </div>

        <div className={styles.tableContainer}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th style={{ width: '22%' }}>State</th>
                <th style={{ width: '45%' }}>What it means</th>
                <th style={{ width: '33%' }}>What an auditor accepts</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><span className={styles.badgeGrey}>Computed</span></td>
                <td>The liability is calculated for that state and wage month.</td>
                <td style={{ color: 'var(--text-muted)' }}>Not sufficient on its own</td>
              </tr>
              <tr>
                <td><span className={styles.badgeGrey}>Filed</span></td>
                <td>The return was submitted, with figures frozen at submission.</td>
                <td style={{ color: 'var(--text-muted)' }}>Partial</td>
              </tr>
              <tr>
                <td><span className={styles.badgeGold}>Paid</span></td>
                <td>Marked remitted for that state and those months.</td>
                <td style={{ color: '#F5C842' }}>A bank statement is not evidence of what it discharged</td>
              </tr>
              <tr>
                <td><span className={styles.badgeViolet}>Evidenced</span></td>
                <td>The acknowledged return <strong>and</strong> the payment receipt are both held against the right head, state and wage month.</td>
                <td style={{ color: '#C07EF0', fontWeight: 700 }}>This is the state that survives an audit</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className={styles.statementBand}>
          <p>
            <strong>Most compliance dashboards show what is due. Ours also shows the gap between &quot;we paid it&quot; and &quot;here is the proof.&quot;</strong> Missing evidence is its own work queue, per registration, per head, per period — because the difference between paid and provable is exactly the difference between a clean CARO report and a qualification.
          </p>
        </div>

        <div className={styles.auditQA}>
          <div className={styles.auditQACard}>
            <h3 className={styles.auditQuestion}>&quot;Which registration did this file under?&quot;</h3>
            <p className={styles.auditAnswer}>
              Every PF, ESI and PT record is stamped with the registration in force for that wage month and never re-derived. Change a branch mapping in October and April still regenerates exactly the return you filed in April — so an auditor asking for the return as filed and the return as computed today gets the same document.
            </p>
          </div>

          <div className={styles.auditQACard}>
            <h3 className={styles.auditQuestion}>&quot;How do you know your applicability is current?&quot;</h3>
            <p className={styles.auditAnswer}>
              Statutory applicability recomputes inline when master data changes, against live headcount, with a ratchet. Obligations the engine can verify are closed automatically; anything dismissed by a human requires a written reason, is audited, and re-surfaces at the statutory deadline.
            </p>
          </div>

          <div className={styles.auditQACard}>
            <h3 className={styles.auditQuestion}>&quot;What is your coverage, and how do you know it is current?&quot;</h3>
            <p className={styles.auditAnswer}>
              We publish a state-by-state matrix showing what is loaded, to what depth, and when a named person last checked it against the gazette — including where we compute and evidence rather than generate a return file. Ask your other vendors for theirs.
            </p>
          </div>
        </div>

        <div className={styles.noteBox} style={{ borderColor: 'rgba(239, 68, 68, 0.3)' }}>
          <div className={styles.noteTitle} style={{ color: '#FCA5A5' }}>
            <AlertTriangle size={18} />
            Section 36(1)(va) Permanent Tax Disallowance (Checkmate Services 2022)
          </div>
          <p className={styles.noteText}>
            Employees’ contributions to provident fund and ESI must be deposited by the due date under the relevant welfare statute. Deposited late, the deduction is <strong>permanently disallowed</strong> under section 36(1)(va) — a position settled by the Supreme Court in <em>Checkmate Services</em> in 2022, which held that section 43B does not rescue a late deposit of the employees' share. That converts a payroll timing failure into a permanent tax cost, not a deferral. A due-date register per registration per head, with evidence attached, is therefore a primary tax control.
          </p>
        </div>
      </section>

      {/* SECTION 6: QUESTION 4 - CASH */}
      <section className={styles.section} id="q4-cash">
        <div className={styles.sectionHeader}>
          <span className={styles.sectionKicker}>Cash &amp; Working Capital</span>
          <h2 className={styles.sectionTitle}>Three leaks, and none of them appears as a variance</h2>
          <p className={styles.sectionLead}>
            Where cash quietly leaves the business before accounts closing identifies it.
          </p>
        </div>

        <div className={styles.grid3}>
          <div className={styles.card}>
            <div className={`${styles.cardIcon} ${styles.cardIconGold}`}>
              <DollarSign size={22} />
            </div>
            <h3 className={styles.cardTitle}>Overbilled contractor invoices</h3>
            <p className={styles.cardDesc}>
              Claimed man-days trimmed against your own gate and biometric record, per worker. An invoice for 26 days against a turnstile record of 21 is not a rounding difference at scale, and no PO match catches it.
            </p>
          </div>

          <div className={styles.card}>
            <div className={`${styles.cardIcon} ${styles.cardIconGold}`}>
              <Coins size={22} />
            </div>
            <h3 className={styles.cardTitle}>Budget committed before spent</h3>
            <p className={styles.cardDesc}>
              Expense runs on a budget envelope tree with an encumbrance ledger — an approved claim commits the money before it settles, so the envelope reflects what is spoken for rather than only what has cleared.
            </p>
          </div>

          <div className={styles.card}>
            <div className={`${styles.cardIcon} ${styles.cardIconGold}`}>
              <Clock size={22} />
            </div>
            <h3 className={styles.cardTitle}>Receivables held over evidence</h3>
            <p className={styles.cardDesc}>
              If your group supplies manpower, an enterprise client with an incomplete compliance pack has a defensible reason to hold payment. A generated pack per contract per month removes the reason.
            </p>
          </div>
        </div>

        <div style={{ marginTop: '2.5rem', padding: '1.75rem 2rem', background: 'rgba(255, 255, 255, 0.02)', borderRadius: '16px', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
          <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#fff', marginBottom: '0.75rem' }}>Plus, on the cost side:</h3>
          <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.65, margin: '0 0 1rem' }}>
            Workforce planning derives employer PF, ESI and EDLI rates <strong>from the tenant’s own payslips</strong> rather than from a typed assumption. A hard-coded 12% employer PF overstated one real tenant by roughly seventeen times — which is why the derivation exists. Your headcount plan is costed from what you actually pay.
          </p>
          <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.65, margin: 0 }}>
            And planning runs on a two-key approval: the business head answers whether the people are needed, Finance answers whether they are affordable, and neither key alone approves.
          </p>
        </div>
      </section>

      {/* SECTION 7: PROVISIONING AND DISCLOSURE */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionKicker}>What goes in the accounts</span>
          <h2 className={styles.sectionTitle}>Numbers your closing process can actually use</h2>
          <p className={styles.sectionLead}>
            Audit-defensible datasets delivered directly into monthly and year-end closing cycles.
          </p>
        </div>

        <div className={styles.tableContainer}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th style={{ width: '30%' }}>Item</th>
                <th style={{ width: '70%' }}>What the platform produces</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Gratuity</strong></td>
                <td>Provisioning computed with continuous service held against the worker rather than the deployment, so multi-site and seasonal service histories are correct. Actuarial valuation stays with your actuary; we produce the data set they ask for.</td>
              </tr>
              <tr>
                <td><strong>Statutory bonus</strong></td>
                <td>Computed under the 1965 Act, with eligibility based on days worked in the accounting year — so a seasonal worker who has since left is not silently excluded.</td>
              </tr>
              <tr>
                <td><strong>Leave encashment</strong></td>
                <td>Balances and liability from the leave engine rather than a year-end estimate.</td>
              </tr>
              <tr>
                <td><strong>Contractor residual exposure</strong></td>
                <td>Sized per contractor, site and state, with per-worker traceability — the measurement that makes a provision or a contingent liability note defensible under Ind AS 37.</td>
              </tr>
              <tr>
                <td><strong>Statutory dues position</strong></td>
                <td>Per registration, per head, per period, split by computed, filed, paid and evidenced.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontStyle: 'italic', margin: 0 }}>
          We are not your actuary and we are not an accounting system. We produce the measured data set; the provisioning judgement, the actuarial valuation and the disclosure are yours and your auditor's.
        </p>
      </section>

      {/* SECTION 8: WHERE THIS FITS */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionKicker}>Where this fits</span>
          <h2 className={styles.sectionTitle}>No rip-and-replace, and no second source of truth</h2>
          <p className={styles.sectionLead}>
            Your ERP keeps the ledger. Your HRMS keeps the employee. The contract labour and statutory layer is licensed separately and runs alongside both — because the control you are missing is in the payment path, not in the general ledger.
          </p>
        </div>

        <div className={styles.grid4}>
          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <Building size={22} />
            </div>
            <h3 className={styles.cardTitle}>ERP stays</h3>
            <p className={styles.cardDesc}>
              SAP, Oracle, NetSuite, Tally Prime or Zoho keep the GL and AP accounts. We feed clean payment releases.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <Users size={22} />
            </div>
            <h3 className={styles.cardTitle}>HRMS stays</h3>
            <p className={styles.cardDesc}>
              Darwinbox, Workday, greytHR, Keka or Excel keep your direct employee master data. Zero migration required.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <Lock size={22} />
            </div>
            <h3 className={styles.cardTitle}>One tenant, one DB</h3>
            <p className={styles.cardDesc}>
              Your data sits in its own database schema, strictly partitioned and encrypted with dedicated keys.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <Coins size={22} />
            </div>
            <h3 className={styles.cardTitle}>Licensed per module</h3>
            <p className={styles.cardDesc}>
              You do not pay for sixteen modules to use two. License contractor verification or statutory payroll independently.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 9: COMMERCIAL TERMS */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionKicker}>Commercial Terms</span>
          <h2 className={styles.sectionTitle}>Commercial terms a CFO cares about</h2>
          <p className={styles.sectionLead}>
            Contractual protections built around operational realities rather than software sales quotas.
          </p>
        </div>

        <div className={styles.grid4}>
          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <Calendar size={22} />
            </div>
            <h3 className={styles.cardTitle}>Billing starts at go-live</h3>
            <p className={styles.cardDesc}>
              It is common in this market to bill from contract signature while implementation runs 90 days. We do not. Billing begins upon live run.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <Scale size={22} />
            </div>
            <h3 className={styles.cardTitle}>Priced on complexity</h3>
            <p className={styles.cardDesc}>
              Own direct employees pay standard payroll user tiers; contract workers are metered strictly as verified active heads (from ₹20/worker/mo).
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <CheckCircle2 size={22} />
            </div>
            <h3 className={styles.cardTitle}>Migration included</h3>
            <p className={styles.cardDesc}>
              Historical replay, two-cycle parallel runs and go-live assistance are part of standard onboarding, never an unexpected change order.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <Eye size={22} />
            </div>
            <h3 className={styles.cardTitle}>Read-only before commitment</h3>
            <p className={styles.cardDesc}>
              The contractor exposure assessment and payroll replay write nothing to live systems and require nothing beyond a mutual NDA.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 10: FREQUENTLY ASKED QUESTIONS */}
      <section className={styles.section}>
        <div className={styles.sectionHeader} style={{ textAlign: 'center', margin: '0 auto 2.5rem' }}>
          <span className={styles.sectionKicker}>Frequently Asked Questions</span>
          <h2 className={styles.sectionTitle}>Governance, audit and implementation answers</h2>
        </div>

        <FinanceFaq items={faqData} />
      </section>

      {/* SECTION 11: HONEST LIMITS */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Honest limits: What we do not do</h2>
          <p className={styles.sectionLead}>
            We state our operational boundaries clearly so expectations align before you sign an agreement.
          </p>
        </div>

        <div className={styles.limitsBox}>
          <ul className={styles.limitsList}>
            <li className={styles.limitItem}>
              <XCircle size={18} className={styles.limitIcon} />
              <span>
                <strong>We are not an accounting system.</strong> No general ledger, no statutory financial statement reporting, no consolidation of balance sheets. We post verified data to yours.
              </span>
            </li>
            <li className={styles.limitItem}>
              <XCircle size={18} className={styles.limitIcon} />
              <span>
                <strong>We are not your actuary.</strong> We produce the employee service dataset; the actuarial valuation is your actuary's.
              </span>
            </li>
            <li className={styles.limitItem}>
              <XCircle size={18} className={styles.limitIcon} />
              <span>
                <strong>We do not give tax or legal advice.</strong> The section 36(1)(va) position and reverse-charge treatments are our reading of settled law, not formal counsel. Confirm both with your advisers.
              </span>
            </li>
            <li className={styles.limitItem}>
              <XCircle size={18} className={styles.limitIcon} />
              <span>
                <strong>We do not perform your ICFR testing.</strong> We give you a system-enforced control and the evidence trail. The risk-control matrix and testing are your internal audit function’s.
              </span>
            </li>
            <li className={styles.limitItem}>
              <XCircle size={18} className={styles.limitIcon} />
              <span>
                <strong>India only.</strong> Deliberately. The depth in state minimum wage, professional tax, labour welfare fund and CLRA exists because we did not spread across international jurisdictions.
              </span>
            </li>
            <li className={styles.limitItem}>
              <XCircle size={18} className={styles.limitIcon} />
              <span>
                <strong>We have three ISO certifications and few public references.</strong> We would rather size your exposure on your own three months of invoices than show you someone else's logo.
              </span>
            </li>
            <li className={styles.limitItem}>
              <XCircle size={18} className={styles.limitIcon} />
              <span>
                <strong>We will not quantify your exposure for you in a marketing slide.</strong> Any figure published without your data would be a marketing guess. The calculator states its assumptions openly and the assessment uses your real invoices.
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* SECTION 12: OFFER */}
      <section className={styles.section}>
        <div className={styles.offerSection}>
          <h2 className={styles.offerTitle}>Size it before you decide anything</h2>
          
          <p className={styles.offerLead}>
            Send three months of contractor invoices, your contract worker attendance in whatever form you hold it, your site list with states, and the PF and ESI challans your contractors supplied. We run them through the same statutory engine our customers use to release payments. You get back a figure, and the workings.
          </p>

          <div className={styles.offerDeliverables}>
            <div className={styles.deliverableItem}>
              <Check size={16} color="#F5C842" style={{ flexShrink: 0 }} />
              <span>Claimed versus statutorily eligible, per contractor, per site, per month</span>
            </div>
            <div className={styles.deliverableItem}>
              <Check size={16} color="#F5C842" style={{ flexShrink: 0 }} />
              <span>Minimum wage shortfalls by state, zone and skill category</span>
            </div>
            <div className={styles.deliverableItem}>
              <Check size={16} color="#F5C842" style={{ flexShrink: 0 }} />
              <span>PF, ESI and bonus reconciliation against challans you were given</span>
            </div>
            <div className={styles.deliverableItem}>
              <Check size={16} color="#F5C842" style={{ flexShrink: 0 }} />
              <span>Residual exposure under CLRA §21, EPF §8A and ESI §40 sized per worker</span>
            </div>
            <div className={styles.deliverableItem}>
              <Check size={16} color="#F5C842" style={{ flexShrink: 0 }} />
              <span>The measurement you need to decide between a provision and a contingent note</span>
            </div>
          </div>
          
          <div className={styles.offerConditions}>
            10 working days · under NDA · read-only · nothing installed, nothing migrated
          </div>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/exposure-report" className="btn btn-primary btn-lg">
              Request the exposure assessment <ArrowRight size={18} />
            </Link>
            <Link href="/tools/exposure-calculator" className="btn btn-outline btn-lg">
              Model it first with published assumptions →
            </Link>
          </div>
        </div>

        <div className={styles.reviewDate}>
          Statutory and reporting references reviewed: September 2026 · Finnovo Tech Functional Pvt Ltd · Madhapur, Hyderabad
        </div>
      </section>

      {/* MOBILE STICKY CTA BAR (< 768px) */}
      <div className={styles.mobileStickyBar}>
        <Link href="/exposure-report" className={`btn btn-primary btn-md ${styles.mobileStickyBtn}`}>
          Request Exposure Assessment <ArrowRight size={16} />
        </Link>
      </div>

    </div>
  );
}
