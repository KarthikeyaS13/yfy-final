import styles from './IsoCerts.module.css';
import { Award, Lock, ShieldCheck } from 'lucide-react';

const certs = [
  { code: 'ISO 9001:2015', title: 'Quality Management', desc: 'IN/19920701/2497 — ICV Assessments', icon: <Award size={32} strokeWidth={1.5} /> },
  { code: 'ISO 27001:2022', title: 'Information Security', desc: 'IN/48720702/6157 — ICV Assessments', icon: <Lock size={32} strokeWidth={1.5} /> },
  { code: 'ISO/IEC 27701:2019', title: 'Privacy Information', desc: 'Privacy information management, aligned to DPDP obligations. MQCPF72H25 — MQCI UK', icon: <ShieldCheck size={32} strokeWidth={1.5} /> },
];

export default function IsoCerts() {
  return (
    <section className={`section-md ${styles.section}`} id="certifications">
      <div className="container">
        <div className={styles.inner}>
          <div className={`reveal ${styles.left}`}>
            <span className="section-label">Certifications</span>
            <h2 className={styles.heading}>
              Certified Quality, Security &amp; Privacy.<br />
              <span className="text-gradient">Three ISO Standards. Independently Audited.</span>
            </h2>
            <p className={styles.desc}>
              <b>yfy®</b> (by Finnovo Tech Functional Private Limited) maintains three ISO certifications — ensuring quality, security, and privacy
              for every HR workflow, payroll transaction, and compliance filing.
            </p>
            <div className={styles.trademark}>
              <span className={styles.tmText}>Issued to Finnovo Tech Functional Private Limited. Certificates available on request.</span><br/><br/>
              <span className={styles.tmText}><b>yfy®</b> is a registered trademark.</span>
            </div>
          </div>
          <div className={styles.right}>
            {certs.map((c, i) => (
              <div key={i} className={`iso-badge reveal reveal-delay-${i + 1} ${styles.cert}`}>
                <span className={styles.certIcon}>{c.icon}</span>
                <div>
                  <div className={styles.certCode}>{c.code}</div>
                  <div className={styles.certTitle}>{c.title}</div>
                  <div className={styles.certDesc}>{c.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
