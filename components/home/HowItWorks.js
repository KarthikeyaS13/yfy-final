import styles from './HowItWorks.module.css';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function HowItWorks() {
  return (
    <section className="section" id="how-it-works">
      <div className="container">
        
        {/* The Stack Gap Comparison */}
        <div className="section-header reveal">
          <span className="section-label">WHERE THE GAP IS</span>
          <h2>Three systems touch this today.<br />None of them sits in the payment path.</h2>
          <p>
            Why existing tools leave CFOs with millions in unhedged exposure.
          </p>
        </div>

        <div className={styles.gapGrid}>
          <div className={`card reveal ${styles.gapCard}`}>
            <div className={styles.gapHeader}>Compliance Consultancies</div>
            <p className={styles.gapDesc}>
              A statutory library, register tracking, and human auditors. Genuinely good at telling you what happened.
            </p>
            <div className={styles.gapVerdict}>
              <span className={styles.verdictLabel}>The Flaw:</span>
              <span className={styles.verdictText}>Tells you 3–6 months afterwards. The money has already moved.</span>
            </div>
          </div>

          <div className={`card reveal ${styles.gapCard}`}>
            <div className={styles.gapHeader}>HR & Payroll Suites</div>
            <p className={styles.gapDesc}>
              Built to manage permanent employees. Contractor bill verification is not a feature they offer because their buyer never asked for it.
            </p>
            <div className={styles.gapVerdict}>
              <span className={styles.verdictLabel}>The Flaw:</span>
              <span className={styles.verdictText}>Does not touch contract labour. Blind to contractor invoices.</span>
            </div>
          </div>

          <div className={`card reveal ${styles.gapCard}`}>
            <div className={styles.gapHeader}>ERP & Accounts Payable</div>
            <p className={styles.gapDesc}>
              Records the vendor invoice, matches it to a purchase order, and releases payment upon budget approval.
            </p>
            <div className={styles.gapVerdict}>
              <span className={styles.verdictLabel}>The Flaw:</span>
              <span className={styles.verdictText}>Files the invoice. Has zero idea what the labour statute actually required.</span>
            </div>
          </div>
        </div>

        <div className={`reveal ${styles.yfyPositionBanner}`}>
          <div className={styles.yfyBannerContent}>
            <span className={styles.yfyHighlightTag}>yfy's ground</span>
            <h3 style={{ fontSize: '1.6rem', color: '#fff', margin: '0.5rem 0 1rem' }}>
              We sit directly between the contractor's bill and Accounts Payable.
            </h3>
            <p style={{ color: '#D1C5E2', fontSize: '1.05rem', margin: 0, maxWidth: '850px' }}>
              Attendance trims the claimed man-days, the statutory engine verifies wages & challans, and the output is a mathematically capped "Eligible-to-Pay" figure before cash is released.
            </p>
          </div>
        </div>

        {/* 4-Step Verification Engine */}
        <div style={{ marginTop: '5rem' }}>
          <div className="section-header reveal">
            <span className="section-label">THE VERIFICATION FLOW</span>
            <h2>Report → Verify → Release</h2>
            <p>
              The contractor reports. Your data trims it. The statute checks it. Only then does money move.
            </p>
          </div>

          <div className={styles.stepsGrid}>
            <div className={`reveal ${styles.stepCard}`}>
              <div className={styles.stepNum}>1</div>
              <h3>1. Contractor Reports</h3>
              <p>The vendor uploads a monthly invoice with per-worker wage lines plus the EPF, ESI, and LWF challans they claim to have paid.</p>
            </div>
            <div className={`reveal ${styles.stepCard}`} style={{ transitionDelay: '0.1s' }}>
              <div className={styles.stepNum}>2</div>
              <h3>2. Attendance Trims It</h3>
              <p>Your own gate access or biometric muster independently caps claimed man-days. Ghost workers and inflated shifts are trimmed immediately.</p>
            </div>
            <div className={`reveal ${styles.stepCard}`} style={{ transitionDelay: '0.2s' }}>
              <div className={styles.stepNum}>3</div>
              <h3>3. The Statute Checks It</h3>
              <p>Minimum wage for that site, zone and skill. Statutory bonus. PF, ESI and PT computed for that jurisdiction against uploaded challans.</p>
            </div>
            <div className={`reveal ${styles.stepCard}`} style={{ transitionDelay: '0.3s' }}>
              <div className={styles.stepNum}>4</div>
              <h3>4. AP Releases Verified Cap</h3>
              <p>Accounts Payable releases the mathematically verified figure: <strong style={{ color: '#22D3A0' }}>Eligible to Pay = Verified Wages + Statutory Add-backs + Agreed Margin + GST</strong>.</p>
            </div>
          </div>
        </div>

        <div className={`reveal ${styles.statementBand}`}>
          <p>
            <strong>"The principal employer didn't compute the wage. The contractor reports it — the principal employer checks it."</strong>
            <span>The design rule written into every service in the platform.</span>
          </p>
        </div>

        <div className="text-center" style={{ marginTop: '3.5rem' }}>
          <Link href="/exposure-report" className="btn btn-primary btn-lg">
            Request an Exposure Assessment on 3 Months of Bills <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
