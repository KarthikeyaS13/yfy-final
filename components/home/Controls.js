import styles from './Controls.module.css';

export default function Controls() {
  return (
    <section className="section" id="controls">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">HOW WE BUILD</span>
          <h2>Controls that refuse, not controls that warn</h2>
          <p>
            A control an administrator can dismiss under deadline pressure is not a control.
          </p>
        </div>

        <div className={styles.grid}>
          <div className={`card reveal ${styles.card}`}>
            <h3 className={styles.title}>Four-way separation</h3>
            <p className={styles.desc}>
              Strict four-way separation of duties on the money path. The person who prepares cannot approve, and the person who approves cannot release.
            </p>
          </div>
          <div className={`card reveal ${styles.card}`}>
            <h3 className={styles.title}>Hash-chained ledger</h3>
            <p className={styles.desc}>
              Tamper-evident hash-chained evidence ledger holding no personal data. Every statutory computation is cryptographically stamped.
            </p>
          </div>
          <div className={`card reveal ${styles.card}`}>
            <h3 className={styles.title}>Irreversible migration</h3>
            <p className={styles.desc}>
              A migration process that cannot be unpicked. Once historical data is ingested and the baseline is signed off, it is locked.
            </p>
          </div>
          <div className={`card reveal ${styles.card}`}>
            <h3 className={styles.title}>Physical isolation</h3>
            <p className={styles.desc}>
              Physical schema-per-tenant separation. Your data never sits in the same table as another enterprise's records.
            </p>
          </div>
        </div>

        <div className={`reveal ${styles.footnote}`}>
          <p>
            * We added a fourth payroll verb after finding two of our own roles both carried a single approve grant — which meant our four-eyes control was two eyes in practice.
          </p>
        </div>
      </div>
    </section>
  );
}
