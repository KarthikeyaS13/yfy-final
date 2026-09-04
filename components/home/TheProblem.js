import styles from './TheProblem.module.css';
import Link from 'next/link';
import { AlertTriangle, ShieldAlert, FileWarning, Layers } from 'lucide-react';

export default function TheProblem() {
  return (
    <section className="section" id="the-problem">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">WHY INDIAN HRMS FAILS AT COMPLIANCE</span>
          <h2>70% of workforce risk lives where conventional HRMS never go</h2>
          <p>
            Mainstream HR software is built for on-roll white-collar staff. But Indian enterprises face three high-stakes statutory traps that standard payroll, ERPs, and compliance consultancies structurally cannot solve.
          </p>
        </div>

        <div className={styles.grid}>
          {/* Trap 1: Principal Employer Liability */}
          <div className={`card reveal ${styles.card}`}>
            <div className={styles.cardHeader}>
              <div className={styles.badgeTrap}>Trap 1 · Principal Employers</div>
              <ShieldAlert className={styles.iconTrap} size={24} />
            </div>
            <h3 className={styles.title}>Contractor Residual Liability & Overbilling</h3>
            <p className={styles.desc}>
              You did not compute the contractor's wage, but under <strong>CLRA §21, EPF §8A, and ESI §40</strong>, you pay the penalties, back-wages, and interest when they default.
            </p>
            <div className={styles.systemFailure}>
              <span>Existing failure:</span> ERPs pay invoices blindly against POs. HRMS only tracks permanent staff. Consultancies audit 6 months after the cash is already gone.
            </div>
            <Link href="/for/principal-employers" className={styles.cardLink}>
              How we verify bills before payment →
            </Link>
          </div>

          {/* Trap 2: Multi-State Jurisdiction Chaos */}
          <div className={`card reveal ${styles.card}`}>
            <div className={styles.cardHeader}>
              <div className={styles.badgeTrap}>Trap 2 · Multi-State Organizations</div>
              <Layers className={styles.iconTrap} size={24} />
            </div>
            <h3 className={styles.title}>The 36-Jurisdiction Silent Misfiling Trap</h3>
            <p className={styles.desc}>
              Multi-state payroll is not a volume problem — it is a legal jurisdiction problem. <strong>22 PT states, 16 LWF states</strong>, and dual-running Labour Codes.
            </p>
            <div className={styles.systemFailure}>
              <span>Existing failure:</span> Standard payroll engines calculate on a single company TAN and quietly file Karnataka liability under Maharashtra’s number. Gaps stay hidden until an inspector issues a notice.
            </div>
            <Link href="/for/multi-state-employers" className={styles.cardLink}>
              Explore our 5-tier statutory ladder →
            </Link>
          </div>

          {/* Trap 3: Staffing Margin Leakage */}
          <div className={`card reveal ${styles.card}`}>
            <div className={styles.cardHeader}>
              <div className={styles.badgeTrap}>Trap 3 · Staffing & Manpower Agencies</div>
              <FileWarning className={styles.iconTrap} size={24} />
            </div>
            <h3 className={styles.title}>Billed-Day Drift & Held-Up Receivables</h3>
            <p className={styles.desc}>
              Staffing agencies operate on 3–5% margins. Attendance delays become billing delays; billed days drift from paid days; and multi-site worker PF ceilings leak money.
            </p>
            <div className={styles.systemFailure}>
              <span>Existing failure:</span> Assembling client compliance proof packs by hand takes weeks, giving enterprise clients an excuse to hold back millions in monthly payments.
            </div>
            <Link href="/for/staffing-agencies" className={styles.cardLink}>
              See roster-to-invoice automation →
            </Link>
          </div>
        </div>

        <div className={`reveal ${styles.statementBand}`}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
            <AlertTriangle color="#F5C842" size={28} style={{ flexShrink: 0, marginTop: '2px' }} />
            <div>
              <strong style={{ color: '#F0E8FF', fontSize: '1.2rem', display: 'block', marginBottom: '0.4rem' }}>
                The New Labour Codes are compounding the exposure right now.
              </strong>
              <p style={{ margin: 0, color: '#D1C5E2', fontSize: '1rem', lineHeight: 1.6 }}>
                The 50% wage definition under the Code on Wages is estimated to increase statutory costs by 3%–15%. Flipping blindly to new figures globally understates liability in states operating legacy acts. yfy is the only engine built with dual-running guardrails holding you to the stricter statutory threshold.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
