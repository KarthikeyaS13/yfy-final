import styles from './HonestSplit.module.css';

export default function HonestSplit() {
  return (
    <section className="section" id="honest-split">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">RETURNS</span>
          <h2>What we generate as a file — and what we do not</h2>
          <p>
            <em>We do not invent return formats we cannot source. Here is the line, drawn plainly.</em>
          </p>
        </div>

        <div style={{ fontSize: '0.8rem', color: 'var(--brand-xlight)', marginBottom: '0.6rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span>↔ Swipe table horizontally to view return status</span>
        </div>
        <div className={`reveal ${styles.tableContainer}`}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th><span className={styles.dotGenerated}></span> Generated as a file</th>
                <th><span className={styles.dotComputed}></span> Computed, recorded, evidenced</th>
                <th><span className={styles.dotGated}></span> Gated outside our control</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>TDS — Form 138, quarters 1 to 3</td>
                <td>Professional tax — liability to the rupee, employee and employer split</td>
                <td>TDS quarter 4 and Annexure II — awaiting the ITD notification</td>
              </tr>
              <tr>
                <td>PF — the revamped ECR, establishment-filtered</td>
                <td>Labour welfare fund — including the employer half that never appears on a payslip</td>
                <td>Form 16 — depends on TRACES processing</td>
              </tr>
              <tr>
                <td>ESI — Monthly Contribution, in the department's own template</td>
                <td>Filing and payment recorded; return and receipt held in the evidence vault</td>
                <td>We will not guess at either</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className={`reveal ${styles.closingLine}`}>
          <p>
            Every state has its own PT and LWF return format and its own portal. Building from inference is how vendors ship files the portal rejects.
          </p>
        </div>
      </div>
    </section>
  );
}
