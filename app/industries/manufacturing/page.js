import Link from 'next/link';
import { 
  ArrowRight, 
  ShieldAlert, 
  CheckCircle2, 
  FileSearch, 
  Layers, 
  Clock, 
  AlertTriangle, 
  FileCheck, 
  Coins, 
  Building2, 
  ExternalLink, 
  XCircle,
  FlaskConical
} from 'lucide-react';
import styles from './page.module.css';

export const metadata = {
  title: 'Contract Labour & Factories Act Compliance for Manufacturing & Pharma | yfy®',
  description:
    'Verify contractor bills against gate attendance before payment. Factories Act §2(l) headcount, §59 overtime, three-shift spread-over, GMP training evidence and CLRA registers across every plant and state.',
  alternates: { canonical: '/industries/manufacturing' },
  openGraph: {
    title: 'Contract Labour & Factories Act Compliance for Manufacturing & Pharma | yfy®',
    description:
      'Verify contractor bills against gate attendance before payment. Factories Act §2(l) headcount, §59 overtime, three-shift spread-over, GMP training evidence and CLRA registers.',
    url: 'https://yfy.ai/industries/manufacturing',
    siteName: 'yfy.ai',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contract Labour & Factories Act Compliance for Manufacturing & Pharma | yfy®',
    description: 'Your plant runs on contract labour. Your liability does too.',
  },
};

export default function ManufacturingPage() {
  return (
    <div className={styles.wrapper}>
      
      {/* SECTION 1: HERO */}
      <header className={styles.hero}>
        <div className={styles.kicker}>
          <span className={styles.kickerDot} />
          Manufacturing &amp; Pharma
        </div>

        <h1 className={styles.title}>
          Your plant runs on contract labour.<br />
          <span className="text-gradient">Your liability does too.</span>
        </h1>

        <div className={styles.lead}>
          <p style={{ marginBottom: '1.25rem' }}>
            Packing, utilities, materials handling, housekeeping, loading — in most Indian plants a third or more of the people on site are not on your rolls. Under the Factories Act they still count as your workers. Under CLRA §21, EPF §8A and ESI §40, their contractor’s defaults still become your penalties.
          </p>
          <p style={{ margin: 0, fontWeight: 500, color: '#E2D9F3' }}>
            yfy verifies each contractor’s monthly bill against your own gate and biometric records and the statute that applies at that plant, and produces a capped release figure before Accounts Payable pays anything.
          </p>
        </div>

        <div className={styles.ctaGroup}>
          <Link href="/exposure-report" className="btn btn-primary btn-lg">
            Get your contractor exposure report <ArrowRight size={18} />
          </Link>
          <Link href="/tools/exposure-calculator" className="btn btn-outline btn-lg">
            Model your exposure
          </Link>
          <Link href="/platform/demo?module=contract-labour&cta=mfg_header_architect&persona=pe&source=/industries/manufacturing" className={styles.tertiaryLink}>
            Talk to a statutory architect →
          </Link>
        </div>

        <div>
          <span className={styles.trustStrip}>
            Finnovo Tech Functional Pvt Ltd · ISO 9001:2015 · ISO 27001:2022 · ISO/IEC 27701:2019 · Sits alongside your existing ERP
          </span>
        </div>
      </header>

      {/* SECTION 2: THE ACTS THAT APPLY TO YOU */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Six statutes, four different headcounts</h2>
          <p className={styles.sectionLead}>
            A threshold engine that compares one headcount figure against every rule is wrong in several directions at once. Manufacturing is where that shows up first.
          </p>
        </div>

        <div className={styles.tableContainer}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th style={{ width: '32%' }}>Statute</th>
                <th style={{ width: '34%' }}>What it counts</th>
                <th style={{ width: '34%' }}>Why it catches plants out</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Factories Act 1948, §2(l) and §2(m)</strong></td>
                <td>Everyone working on the premises — your employees <strong>plus</strong> deployed contract labour</td>
                <td>Registration and most obligations key off this combined figure, not your payroll headcount. Plants routinely under-count.</td>
              </tr>
              <tr>
                <td><strong>Contract Labour (R&amp;A) Act 1970</strong></td>
                <td>Contract workers engaged, per establishment</td>
                <td>The base threshold is 20, and several states have amended it. We evaluate per state, against that state’s deployments.</td>
              </tr>
              <tr>
                <td><strong>Factories Act §46, §48, §49</strong></td>
                <td>Canteen at 250+ workers · crèche at 30+ women workers · welfare officer at 500+</td>
                <td>Each has its own base. Crossing one does not cross the others, and a single headcount flag gets this wrong.</td>
              </tr>
              <tr>
                <td><strong>Factories Act §51, §54, §56, §59</strong></td>
                <td>Hours: 48 per week, 9 per day, spread-over limits, overtime at <strong>double</strong> the ordinary rate</td>
                <td>Three-shift operations breach spread-over quietly. Overtime billed at single rate by a contractor is a shortfall you are liable for.</td>
              </tr>
              <tr>
                <td><strong>Inter-State Migrant Workmen Act 1979</strong></td>
                <td>Inter-state migrant workmen engaged</td>
                <td>Applies from 5 workmen. Separate registers, displacement allowance, journey allowance.</td>
              </tr>
              <tr>
                <td><strong>Industrial Relations Code / Standing Orders</strong></td>
                <td>Workmen employed</td>
                <td>Standing orders, grievance committee and, under the Code, worker thresholds that differ from the legacy act.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className={styles.statementBand}>
          <p>
            <strong>We hold three counting bases, not one.</strong> CLRA counts contract workers. The Factories Act counts everyone on premises under §2(l). Everything else counts your own rolls. And a CLRA state amendment is judged against that state’s deployments, not your national total — so a worker deployed in two states counts in both establishments.
          </p>
        </div>
      </section>

      {/* SECTION 3: WHERE IT BREAKS */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Four failure modes we look for at every plant</h2>
          <p className={styles.sectionLead}>
            The statutory vulnerabilities that create unbudgeted balance-sheet liabilities during labour inspections.
          </p>
        </div>

        <div className={styles.grid4}>
          <div className={styles.card}>
            <div className={`${styles.cardIcon} ${styles.cardIconDanger}`}>
              <AlertTriangle size={22} />
            </div>
            <h3 className={styles.cardTitle}>Billed man-days exceed the gate</h3>
            <p className={styles.cardDesc}>
              The contractor invoices 26 days for a worker your turnstile recorded 21 times. Nothing on an ERP invoice match catches this, because the purchase order was for a service, not a headcount.
            </p>
          </div>

          <div className={styles.card}>
            <div className={`${styles.cardIcon} ${styles.cardIconDanger}`}>
              <Clock size={22} />
            </div>
            <h3 className={styles.cardTitle}>Overtime at single rate</h3>
            <p className={styles.cardDesc}>
              §59 requires double the ordinary rate. A contractor billing overtime at 1× is under-paying the worker, and the shortfall is recoverable from you under CLRA §21.
            </p>
          </div>

          <div className={styles.card}>
            <div className={`${styles.cardIcon} ${styles.cardIconDanger}`}>
              <FileSearch size={22} />
            </div>
            <h3 className={styles.cardTitle}>Challans that don’t cover your plant</h3>
            <p className={styles.cardDesc}>
              A contractor’s ECR may be genuine and still not include the workers deployed at your establishment. Without the establishment code for that state, the challan cannot be reconciled to your site.
            </p>
          </div>

          <div className={styles.card}>
            <div className={`${styles.cardIcon} ${styles.cardIconDanger}`}>
              <Layers size={22} />
            </div>
            <h3 className={styles.cardTitle}>Skill category drift</h3>
            <p className={styles.cardDesc}>
              A worker deployed as skilled and paid at the unskilled minimum wage. The gap is per worker, per month, and invisible in an invoice total.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 4: WHAT WE DO ABOUT IT */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>What we do about it</h2>
          <p className={styles.sectionLead}>
            Automated statutory verification controls that sit directly between contractor billing and Accounts Payable.
          </p>
        </div>

        <div className={styles.grid4}>
          <div className={styles.card}>
            <div className={`${styles.cardIcon} ${styles.cardIconEmerald}`}>
              <CheckCircle2 size={22} />
            </div>
            <h3 className={styles.cardTitle}>Gate and biometric trim</h3>
            <p className={styles.cardDesc}>
              Your access control and biometric muster feed the verification directly. Claimed man-days are capped at your own record, per worker, per site — not at a sheet the contractor supplied.
            </p>
          </div>

          <div className={styles.card}>
            <div className={`${styles.cardIcon} ${styles.cardIconEmerald}`}>
              <Coins size={22} />
            </div>
            <h3 className={styles.cardTitle}>Statutory recomputation, per plant</h3>
            <p className={styles.cardDesc}>
              Minimum wage resolved for that plant’s state, zone and skill category. Statutory bonus under the Payment of Bonus Act 1965. PF, ESI and PT recomputed for that jurisdiction and reconciled against uploaded challans.
            </p>
          </div>

          <div className={styles.card}>
            <div className={`${styles.cardIcon} ${styles.cardIconEmerald}`}>
              <Building2 size={22} />
            </div>
            <h3 className={styles.cardTitle}>Per-state establishment codes</h3>
            <p className={styles.cardDesc}>
              EPF, ESI, LWF and CLRA licence numbers differ by state for the same contractor. We hold them per state and per site, because a multi-plant employer cannot otherwise prove a challan covered the right people.
            </p>
          </div>

          <div className={styles.card}>
            <div className={`${styles.cardIcon} ${styles.cardIconEmerald}`}>
              <ShieldAlert size={22} />
            </div>
            <h3 className={styles.cardTitle}>Eligible-to-pay release cap</h3>
            <p className={styles.cardDesc}>
              Verified wages plus statutory add-backs plus agreed margin plus GST. Paying above it requires an explicit human override with a recorded reason — which is precisely what an inspection asks to see.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 4B: FOR PHARMA SPECIFICALLY */}
      <section className={styles.section}>
        <div className={styles.pharmaCard}>
          <span className={styles.pharmaTag}>
            <FlaskConical size={14} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '4px' }} />
            For Regulated Pharma
          </span>
          <h2 className={styles.pharmaTitle}>If you are regulated, training evidence is not an HR problem</h2>
          
          <p className={styles.pharmaText}>
            A CDSCO, USFDA or customer audit asks for qualification and requalification records against a named SOP, for a named person, on a named date. Most plants assemble that from an LMS export, a signature sheet and somebody’s folder.
          </p>
          <p className={styles.pharmaText}>
            Here, a lapsed certification raises an obligation in the compliance register, assigns the renewal, and files the completion certificate into the evidence vault inside the statutory audit trail — governed at upload, with a hash-chained ledger that holds no personal data of its own.
          </p>
          <p className={styles.pharmaText}>
            The same loop covers POSH training, which is mandatory and which auditors do ask about.
          </p>
        </div>
      </section>

      {/* SECTION 5: THE LENS */}
      <section className={styles.section}>
        <div className={styles.lensBox}>
          <h2 className={styles.lensHeading}>The Principal Employer Lens</h2>
          <p className={styles.lensText}>
            Manufacturing employers are almost always principal employers. Everything above lives in our contract labour module, licensed separately from payroll — so you can run this alongside SAP, Darwinbox, greytHR or whatever pays your own staff today, with no rip-and-replace.
          </p>
          <Link href="/for/principal-employers" className={styles.lensLink}>
            See the full principal employer view <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* SECTION 6: SECTOR PROOF */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Sector proof</h2>
          <p className={styles.sectionLead}>
            Your plants are probably in Maharashtra, Gujarat, Tamil Nadu, Karnataka, Telangana, Haryana or Uttarakhand. Check each one on the coverage matrix before you talk to us — including where we compute and evidence rather than generate a return file.
          </p>
        </div>

        <div className={styles.statsRow}>
          <div className={styles.statCard}>
            <div className={styles.statValue}>22</div>
            <div className={styles.statLabel}>States with PT rule packs</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statValue}>16</div>
            <div className={styles.statLabel}>States with LWF rule packs</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statValue}>36</div>
            <div className={styles.statLabel}>Jurisdictions published with a verified date</div>
          </div>
        </div>

        <div style={{ textAlign: 'center' }}>
          <Link href="/coverage" className="btn btn-outline btn-lg">
            View the coverage matrix <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* SECTION 7: HONEST LIMITS */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Honest limits: What we do not do for manufacturing</h2>
          <p className={styles.sectionLead}>
            We state our operational scope upfront so there are no false assumptions during deployment.
          </p>
        </div>

        <div className={styles.limitsBox}>
          <ul className={styles.limitsList}>
            <li className={styles.limitItem}>
              <XCircle size={18} className={styles.limitIcon} />
              <span>
                <strong>We do not run your contractors’ payroll.</strong> They do, and they should — that is what makes them the employer. We check what they report against what the statute required.
              </span>
            </li>
            <li className={styles.limitItem}>
              <XCircle size={18} className={styles.limitIcon} />
              <span>
                <strong>We are not an EHS or safety-incident system.</strong> Factory safety statutory obligations appear in the compliance register as obligations; incident management itself is not ours.
              </span>
            </li>
            <li className={styles.limitItem}>
              <XCircle size={18} className={styles.limitIcon} />
              <span>
                <strong>We do not do production planning, MES or shop-floor scheduling.</strong> Shift rosters for your own workforce, yes. Manufacturing execution, no.
              </span>
            </li>
            <li className={styles.limitItem}>
              <XCircle size={18} className={styles.limitIcon} />
              <span>
                <strong>India only.</strong> Our statutory engine is built specifically for Indian labour laws, state amendments, and New Labour Codes.
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* SECTION 8: OFFER */}
      <section className={styles.section}>
        <div className={styles.offerSection}>
          <h2 className={styles.offerTitle}>Start with the number, not the software</h2>
          
          <p className={styles.offerLead}>
            Send three months of contractor invoices, your gate or biometric attendance, your plant list with states, and the challans your contractors gave you. We return claimed versus statutorily eligible, per contractor, per plant — and your residual exposure, sized.
          </p>
          
          <div className={styles.offerConditions}>
            10 working days · under NDA · read-only. Nothing installed, nothing migrated.
          </div>

          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Link href="/exposure-report" className="btn btn-primary btn-lg">
              Request your exposure assessment <ArrowRight size={18} />
            </Link>
          </div>
        </div>

        <div className={styles.reviewDate}>
          Statutory references reviewed: September 2026 · Finnovo Tech Functional Pvt Ltd · Madhapur, Hyderabad
        </div>
      </section>

    </div>
  );
}
