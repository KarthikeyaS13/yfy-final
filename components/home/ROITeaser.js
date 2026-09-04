import styles from './ROITeaser.module.css';

export default function ROITeaser() {
  return (
    <section className={`section-md ${styles.section}`} id="roi-teaser">
      <div className="container">
        <div className={`card reveal ${styles.card}`}>
          <div className={styles.glow} aria-hidden="true" />
          <div className={styles.content}>
            <span className="section-label">ROI Calculator</span>
            <h2 className={styles.heading}>
              How Much Could You Save with <b>yfy®</b>?
            </h2>
            <p className={styles.desc}>
              Enter your employee count and current HR costs. Our calculator shows your
              estimated annual savings, compliance cost reduction, and payback period.
            </p>
            <div className={styles.ctas}>
              <a href="/tools/exposure-calculator" className="btn btn-primary btn-lg" id="roi-calculator-cta">
                Calculate My Savings →
              </a>
              <a href="/platform/demo" className="btn btn-ghost">Book a Demo Instead</a>
            </div>
          </div>
          <div className={styles.visual}>
            <div className={styles.calculator}>
              <div className={styles.calcLabel}>Employees</div>
              <div className={styles.calcSlider}>
                <div className={styles.bar}><div className={styles.fill} style={{width:'65%'}} /></div>
                <span className={styles.calcVal}>150</span>
              </div>
              <div className={styles.calcLabel}>Monthly Payroll (₹)</div>
              <div className={styles.calcSlider}>
                <div className={styles.bar}><div className={styles.fill} style={{width:'55%'}} /></div>
                <span className={styles.calcVal}>₹45L</span>
              </div>
              <div className={styles.result}>
                <span className={styles.resultLabel}>Estimated Annual Saving</span>
                <span className={styles.resultValue}>₹7,20,000</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
