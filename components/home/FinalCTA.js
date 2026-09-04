import styles from './FinalCTA.module.css';
import Link from 'next/link';
import { ArrowRight, ShieldAlert, FileText, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className={`section-md ${styles.section}`} id="final-cta">
      <div className={styles.bgGlow} aria-hidden="true" />
      <div className="container">
        <div className={`reveal ${styles.inner}`}>
          
          <div className={styles.isoBadges}>
            {['ISO 9001:2015', 'ISO 27001:2022', 'ISO 27701:2019'].map(b => (
              <span key={b} className={styles.isoBadge}>{b}</span>
            ))}
          </div>

          <h2 className={styles.heading}>
            Start with the number, not the software.
          </h2>

          <p className={styles.desc}>
            We would rather prove the engine on your own data than show you someone else's logo. Test our statutory accuracy on your past records before you ever commit to a live month.
          </p>

          <div className={styles.dualCards}>
            {/* Card 1: PE Exposure */}
            <div className={styles.offerCard}>
              <div className={styles.offerHeader}>
                <ShieldAlert size={22} className={styles.iconPe} />
                <span className={styles.offerTag}>For Principal Employers</span>
              </div>
              <h3 className={styles.offerTitle}>Contractor Exposure Assessment</h3>
              <p className={styles.offerDesc}>
                Send 3 months of contractor invoices, gate attendance logs, and challans under NDA. We return your claimed vs statutorily eligible variance, sizing your residual liability under CLRA §21, EPF §8A, and ESI §40.
              </p>
              <div className={styles.offerMeta}>
                <span>10 working days · Under NDA · Read-Only</span>
              </div>
              <Link href="/exposure-report" className="btn btn-primary btn-md" style={{ width: '100%', justifyContent: 'center', marginTop: 'auto' }}>
                Request Exposure Assessment <ArrowRight size={16} />
              </Link>
            </div>

            {/* Card 2: Staffing Agency Proof Pack */}
            <div className={styles.offerCard}>
              <div className={styles.offerHeader}>
                <ShieldCheck size={22} className={styles.iconAgency} />
                <span className={styles.offerTag}>For Staffing Agencies</span>
              </div>
              <h3 className={styles.offerTitle}>Client Compliance Proof Pack</h3>
              <p className={styles.offerDesc}>
                Send 1 month of roster, payroll and client invoice under NDA. We reconcile billed vs paid days and build a tamper-proof pack that satisfies client auditors and unlocks held payments.
              </p>
              <div className={styles.offerMeta}>
                <span>5 working days · Under NDA · Read-Only</span>
              </div>
              <Link href="/compliance-proof-pack" className="btn btn-outline btn-md" style={{ width: '100%', justifyContent: 'center', marginTop: 'auto' }}>
                Get Compliance Proof Pack <ArrowRight size={16} />
              </Link>
            </div>

            {/* Card 3: Multi-State Replay */}
            <div className={styles.offerCard}>
              <div className={styles.offerHeader}>
                <FileText size={22} className={styles.iconMulti} />
                <span className={styles.offerTag}>For Multi-State Employers</span>
              </div>
              <h3 className={styles.offerTitle}>3-Month Historical Payroll Replay</h3>
              <p className={styles.offerDesc}>
                Send 3 months of already-paid payroll for your direct employees. We re-compute them on our 36-jurisdiction engine and report every variance where your incumbent system missed or misfiled.
              </p>
              <div className={styles.offerMeta}>
                <span>2 weeks · Under NDA · Read-Only</span>
              </div>
              <Link href="/platform/migration" className="btn btn-outline btn-md" style={{ width: '100%', justifyContent: 'center', marginTop: 'auto' }}>
                Run Historical Replay <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          <div className={styles.reassuranceNote}>
            <CheckCircle2 size={16} color="#22D3A0" />
            <span>None of these requires you to install anything, migrate systems, or sign anything beyond an NDA. Subscription billing begins at go-live, not at signature.</span>
          </div>

        </div>
      </div>
    </section>
  );
}
