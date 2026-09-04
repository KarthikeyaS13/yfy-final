import styles from './Coverage.module.css';
import Link from 'next/link';

export default function Coverage() {
  return (
    <section className="section" id="coverage">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">COVERAGE</span>
          <h2>We publish our coverage — including the gaps</h2>
          <p>
            EPF, ESI, TDS, statutory bonus, gratuity, minimum wage and leave are handled nationally. Every jurisdiction on the matrix shows what we load, to what depth, and when a named person last checked it against the gazette.
          </p>
        </div>

        <div className={styles.statsRow}>
          <div className={`reveal ${styles.statCard}`}>
            <div className={styles.statValue}>22</div>
            <div className={styles.statLabel}>States with PT rule packs</div>
          </div>
          <div className={`reveal ${styles.statCard}`} style={{ transitionDelay: '0.1s' }}>
            <div className={styles.statValue}>16</div>
            <div className={styles.statLabel}>States with LWF packs</div>
          </div>
          <div className={`reveal ${styles.statCard}`} style={{ transitionDelay: '0.2s' }}>
            <div className={styles.statValue}>36</div>
            <div className={styles.statLabel}>States & UTs listed, each with a verified date</div>
          </div>
        </div>

        <div className={`reveal ${styles.statementBand}`}>
          <p>
            <strong>Ask every vendor on your list for their matrix.</strong> A vendor claiming complete coverage of all 36 jurisdictions is either not counting union territories or not telling you the truth. Ours is a live page with a date on it.
          </p>
        </div>

        <div className="text-center" style={{ marginTop: '3rem' }}>
          <Link href="/coverage" className="btn btn-outline">View the coverage matrix</Link>
        </div>
      </div>
    </section>
  );
}
