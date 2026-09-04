import Link from 'next/link';
import { Shield, Lock, Eye, Database, Server, UserCheck } from 'lucide-react';
import styles from './page.module.css';

export const metadata = {
  title: 'Privacy Policy | yfy® India',
  description:
    'Enterprise Privacy Policy for yfy.ai (Finnovo Tech Functional Pvt Ltd) covering compliance with the Digital Personal Data Protection Act 2023, data residency in India, and tenant isolation.',
  alternates: { canonical: '/privacy' },
  openGraph: {
    title: 'Privacy Policy | yfy® India',
    description: 'Enterprise Privacy Policy and Data Protection Framework under DPDPA 2023.',
    url: 'https://yfy.ai/privacy',
    siteName: 'yfy.ai',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className={styles.wrapper}>
      <header className={styles.hero}>
        <div className={styles.kicker}>
          <Shield size={14} /> Legal &amp; Governance
        </div>
        <h1 className={styles.title}>Privacy Policy</h1>
        <p className={styles.lastUpdated}>
          Last updated &amp; reviewed: September 2026 · Finnovo Tech Functional Private Limited
        </p>
      </header>

      <main className={styles.content}>
        <div className={styles.sectionBlock}>
          <h2 className={styles.sectionHeading}>
            <Database size={20} color="#C07EF0" />
            1. Scope &amp; Role as Data Processor
          </h2>
          <p className={styles.bodyText}>
            This Privacy Policy explains how <strong>Finnovo Tech Functional Private Limited</strong> ("yfy.ai", "we", "us", or "our") processes enterprise workforce information, statutory records, and technical telemetry through our statutory compliance and contractor verification platform.
          </p>
          <p className={styles.bodyText}>
            Under the <strong>Digital Personal Data Protection Act 2023 (DPDPA)</strong> and the Information Technology Act 2000, our enterprise customers (Principal Employers and Staffing Agencies) act as <strong>Data Fiduciaries</strong> (or Data Controllers). yfy.ai operates strictly as a <strong>Data Processor</strong> carrying out automated statutory computations, ECR verification, and proof pack compilation strictly on behalf of and under documented instructions from our licensed customers.
          </p>
        </div>

        <div className={styles.sectionBlock}>
          <h2 className={styles.sectionHeading}>
            <Eye size={20} color="#C07EF0" />
            2. Categories of Workforce Data Processed
          </h2>
          <p className={styles.bodyText}>
            To perform statutory compliance audits, muster reconciliation, and payroll filings, the platform processes data provided by employers:
          </p>
          <ul className={styles.bulletList}>
            <li><strong>Statutory Identifiers:</strong> Universal Account Numbers (UAN), ESIC Insurance Numbers (IP), Permanent Account Numbers (PAN), and Labour Identification Numbers (LIN).</li>
            <li><strong>Wage &amp; Payroll Records:</strong> Gross earnings, basic wages, dearness allowances, overtime records under Factories Act §59, statutory deductions (EPF, ESI, Professional Tax, LWF), and net disbursement registers.</li>
            <li><strong>Time &amp; Muster Logs:</strong> Shift timestamps, biometric punch logs, GPS gate records, and supervisor-approved muster rolls.</li>
            <li><strong>Compliance Proofs:</strong> TRRN challans, bank payment confirmations, Form 5A returns, and contractor license documentation.</li>
          </ul>
        </div>

        <div className={styles.sectionBlock}>
          <h2 className={styles.sectionHeading}>
            <Server size={20} color="#C07EF0" />
            3. Data Residency &amp; Indian Sovereign Hosting
          </h2>
          <p className={styles.bodyText}>
            All workforce records, payroll inputs, and compliance evidence are <strong>hosted strictly within the sovereign territory of the Republic of India</strong> (Tier IV data centers in Mumbai and Hyderabad).
          </p>
          <p className={styles.bodyText}>
            No employee personal data or statutory wage information is ever transferred or processed outside India. Data at rest is encrypted using industry-standard <strong>AES-256</strong>, and all communications in transit are secured via <strong>TLS 1.3</strong>. Multi-tenant customer accounts are cryptographically and logically isolated using strict PostgreSQL Row-Level Security (RLS).
          </p>
        </div>

        <div className={styles.sectionBlock}>
          <h2 className={styles.sectionHeading}>
            <Lock size={20} color="#C07EF0" />
            4. Absolute Zero Data Monetization
          </h2>
          <p className={styles.bodyText}>
            yfy.ai generates revenue exclusively from software licensing fees. <strong>We do not sell, rent, monetize, or broker workforce data, payroll records, or contractor information under any circumstances.</strong>
          </p>
          <p className={styles.bodyText}>
            We do not engage in behavioural tracking, third-party advertising, or profiling of our customers' employees or contractor personnel.
          </p>
        </div>

        <div className={styles.sectionBlock}>
          <h2 className={styles.sectionHeading}>
            <UserCheck size={20} color="#C07EF0" />
            5. Data Retention, Purge &amp; Grievance Redressal
          </h2>
          <p className={styles.bodyText}>
            Customer records are retained strictly in accordance with statutory requirements (such as 5-year retention under CLRA §21 and the EPF Scheme) or as dictated by the customer's Data Retention Schedule. Upon contract termination, data is exported to the customer in structured formats and cryptographically purged from our production databases within 90 days.
          </p>
          <div className={styles.officerBox}>
            <strong style={{ color: '#fff', display: 'block', marginBottom: '0.35rem' }}>
              Designated Grievance &amp; Data Protection Officer (DPO)
            </strong>
            <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              Finnovo Tech Functional Private Limited<br />
              Plot No. 12, Hitec City, Madhapur, Hyderabad, Telangana 500081, India<br />
              Email: <strong>privacy@yfy.ai</strong> · Attn: Legal &amp; Compliance Officer
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
