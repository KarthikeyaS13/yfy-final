import Link from 'next/link';
import { FileText, ShieldAlert, CheckCircle2, Scale, Building2, HelpCircle } from 'lucide-react';
import styles from './page.module.css';

export const metadata = {
  title: 'Terms of Service | yfy® India',
  description:
    'Enterprise B2B Software Terms of Service for yfy.ai (Finnovo Tech Functional Pvt Ltd) covering SaaS licensing, statutory compliance engine parameters, and governing law.',
  alternates: { canonical: '/terms' },
  openGraph: {
    title: 'Terms of Service | yfy® India',
    description: 'Enterprise B2B Software Terms of Service for yfy.ai compliance platform.',
    url: 'https://yfy.ai/terms',
    siteName: 'yfy.ai',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function TermsOfServicePage() {
  return (
    <div className={styles.wrapper}>
      <header className={styles.hero}>
        <div className={styles.kicker}>
          <FileText size={14} /> Legal &amp; Governance
        </div>
        <h1 className={styles.title}>Terms of Service</h1>
        <p className={styles.lastUpdated}>
          Last updated &amp; reviewed: September 2026 · Finnovo Tech Functional Private Limited
        </p>
      </header>

      <main className={styles.content}>
        <div className={styles.sectionBlock}>
          <h2 className={styles.sectionHeading}>
            <CheckCircle2 size={20} color="#C07EF0" />
            1. Agreement &amp; Enterprise Subscription
          </h2>
          <p className={styles.bodyText}>
            These Terms of Service ("Terms") constitute a legally binding contract between <strong>Finnovo Tech Functional Private Limited</strong> ("yfy.ai", "we", or "us") and the business entity subscribing to or accessing our software services ("Customer" or "you").
          </p>
          <p className={styles.bodyText}>
            By signing an Enterprise Order Form, initiating a subscription, or accessing the yfy.ai cloud platform, Customer agrees to these Terms on behalf of itself and its authorized users across all registered business locations and establishments.
          </p>
        </div>

        <div className={styles.sectionBlock}>
          <h2 className={styles.sectionHeading}>
            <Scale size={20} color="#C07EF0" />
            2. Nature of Software Service &amp; Statutory Warranties
          </h2>
          <p className={styles.bodyText}>
            yfy.ai provides an automated enterprise software engine designed to verify contractor attendance against invoice billings, compute statutory floors under applicable Central and State labor enactments (including EPF, ESI, Factories Act 1948, and State Shops &amp; Commercial Establishment Acts), and compile monthly compliance audit proof packs.
          </p>
          <p className={styles.bodyText}>
            <strong>Regulatory Engine Scope:</strong> We warrant that our software engine accurately models the statutory rates, ceilings, and notification schedules published by relevant Central and State Government departments in India as of each periodic release. However, yfy.ai is a software platform and <strong>does not provide formal legal representation, certified audit certifications, or CA statutory opinions</strong>. Customer remains responsible for submitting actual tax and regulatory filings to statutory portals unless contracted for managed filing operations.
          </p>
        </div>

        <div className={styles.sectionBlock}>
          <h2 className={styles.sectionHeading}>
            <Building2 size={20} color="#C07EF0" />
            3. Customer Master Data &amp; Establishment Accuracy
          </h2>
          <p className={styles.bodyText}>
            The accuracy of statutory calculations, ECR file outputs, and minimum wage comparisons depends on the integrity of the establishment data, muster punches, and contractor rate cards provided by Customer. Customer agrees to:
          </p>
          <ul className={styles.bulletList}>
            <li>Provide accurate registered establishment numbers (LIN, Factory License, Shops &amp; Establishment registration).</li>
            <li>Maintain accurate master mapping for worker skill categorizations (Unskilled, Semi-Skilled, Skilled, Highly Skilled) per applicable state wage zones.</li>
            <li>Promptly update establishment transfer dates and employment separation notices before executing monthly payroll closes.</li>
          </ul>
        </div>

        <div className={styles.sectionBlock}>
          <h2 className={styles.sectionHeading}>
            <ShieldAlert size={20} color="#C07EF0" />
            4. Service Availability &amp; Enterprise SLAs
          </h2>
          <p className={styles.bodyText}>
            We commit to a <strong>99.9% monthly uptime SLA</strong> for core platform APIs and verification services, excluding scheduled maintenance windows notified at least 48 hours in advance.
          </p>
          <p className={styles.bodyText}>
            In the event of an unscheduled platform outage affecting monthly payroll closing or ECR challan generation within 72 hours of statutory due dates (such as the 15th of the month), priority emergency technical escalations are automatically engaged.
          </p>
        </div>

        <div className={styles.sectionBlock}>
          <h2 className={styles.sectionHeading}>
            <Scale size={20} color="#C07EF0" />
            5. Limitation of Liability &amp; Governing Law
          </h2>
          <p className={styles.bodyText}>
            Except for gross negligence or willful misconduct, either party's aggregate liability arising under or related to these Terms shall be limited to the total fees paid by Customer during the twelve (12) months preceding the incident giving rise to liability.
          </p>
          <p className={styles.bodyText}>
            These Terms shall be governed by and construed in accordance with the <strong>laws of the Republic of India</strong>. Any dispute arising out of or in connection with these Terms shall be subject to the exclusive jurisdiction of the competent courts located in <strong>Hyderabad, Telangana, India</strong>.
          </p>
        </div>
      </main>
    </div>
  );
}
