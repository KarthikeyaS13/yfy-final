import Link from 'next/link';
import { ArrowRight, Home, Calculator, Map, ShieldCheck, Layers, Presentation } from 'lucide-react';
import styles from './not-found.module.css';

export const metadata = {
  title: 'Page Not Found (404) | yfy® India',
  description: 'The requested compliance page or resource could not be found. Navigate back to yfy.ai home or use our statutory tools.',
};

export default function NotFound() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.kicker}>
          404 · Page Not Found
        </div>

        <h1 className={styles.title}>
          The compliance record you are looking for<br />
          <span className="text-gradient">does not exist.</span>
        </h1>

        <p className={styles.lead}>
          The link may have moved, expired, or been entered with a typo. Use the recovery directory below to access the statutory platform, check state coverage, or calculate your liability exposure.
        </p>

        <div className={styles.ctaGroup}>
          <Link href="/" className="btn btn-primary btn-lg">
            <Home size={18} /> Return to Homepage
          </Link>
          <Link href="/tools/exposure-calculator" className="btn btn-outline btn-lg">
            <Calculator size={18} /> Calculate Exposure
          </Link>
        </div>

        <div className={styles.grid4}>
          <Link href="/coverage" className={styles.card}>
            <div className={styles.cardTitle}>
              <span>Coverage Matrix</span>
              <ArrowRight size={15} color="#C07EF0" />
            </div>
            <p className={styles.cardDesc}>
              State-by-state statutory rules, minimum wage zones, and Shops &amp; Establishment Acts.
            </p>
          </Link>

          <Link href="/compliance-proof-pack" className={styles.card}>
            <div className={styles.cardTitle}>
              <span>Proof Packs</span>
              <ArrowRight size={15} color="#C07EF0" />
            </div>
            <p className={styles.cardDesc}>
              Monthly tamper-evident audit packs for principal employer billing clearance.
            </p>
          </Link>

          <Link href="/platform" className={styles.card}>
            <div className={styles.cardTitle}>
              <span>Statutory Engine</span>
              <ArrowRight size={15} color="#C07EF0" />
            </div>
            <p className={styles.cardDesc}>
              How wage engines resolve applicability, returns, and challans without ERP replacement.
            </p>
          </Link>

          <Link href="/platform/demo" className={styles.card}>
            <div className={styles.cardTitle}>
              <span>Book a Demo</span>
              <ArrowRight size={15} color="#C07EF0" />
            </div>
            <p className={styles.cardDesc}>
              Walk through contractor verification and payroll audit live with our operations team.
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
