import Link from 'next/link';
import { 
  ArrowRight, 
  Clock, 
  ShieldCheck, 
  Calculator, 
  Presentation, 
  CheckCircle2,
  FileCheck
} from 'lucide-react';
import styles from './page.module.css';

export const metadata = {
  title: 'Case Studies Coming Soon | yfy®',
  description:
    'Real enterprise and staffing operational case studies are coming soon. Explore live compliance proof packs, the exposure calculator, and platform demos.',
  alternates: { canonical: '/case-studies' },
  keywords: [
    'compliance case studies India',
    'staffing agency case studies',
    'contract labour compliance stories',
    'payroll compliance proof pack'
  ],
  openGraph: {
    title: 'Case Studies Coming Soon | yfy®',
    description:
      'Real enterprise and staffing operational case studies are coming soon. Explore live compliance proof packs and tools.',
    url: 'https://yfy.ai/case-studies',
    siteName: 'yfy.ai',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Case Studies Coming Soon | yfy®',
    description: 'Real enterprise and staffing operational case studies are coming soon.',
  },
};

export default function CaseStudiesPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://yfy.ai',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Resources',
        item: 'https://yfy.ai/resources',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Case Studies',
        item: 'https://yfy.ai/case-studies',
      },
    ],
  };

  return (
    <div className={styles.wrapper}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <header className={styles.hero}>
        <div className={styles.kicker}>
          <span className={styles.kickerDot} />
          Resources · Case Studies
        </div>

        <h1 className={styles.title}>
          Case Studies<br />
          <span className="text-gradient">Coming Soon...!</span>
        </h1>

        <div className={styles.lead}>
          We are currently compiling empirical case studies with enterprise customers and staffing leaders across manufacturing, logistics, facility management, and multi-state operations — documenting real statutory audit defense, contract margin recovery, and automated proof pack generation. They will be published here as soon as non-disclosure reviews conclude.
        </div>

        <div className={styles.badgePill}>
          <Clock size={16} color="#C07EF0" />
          <span>Under active editorial review · Publishing Q3 2026</span>
        </div>
      </header>

      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>In the meantime, explore live evidence and tools</h2>
          <p className={styles.sectionLead}>
            See how organizations audit compliance, quantify statutory liabilities, and automate contractor verification today.
          </p>
        </div>

        <div className={styles.grid3}>
          <Link href="/compliance-proof-pack" className={styles.card}>
            <div className={styles.cardIcon}>
              <FileCheck size={24} />
            </div>
            <h3 className={styles.cardTitle}>
              <span>Compliance Proof Pack</span>
              <ArrowRight size={18} />
            </h3>
            <p className={styles.cardDesc}>
              Inspect the exact tamper-evident monthly pack that staffing and security agencies deliver to principal employers with zero reconciliation disputes.
            </p>
            <span className={styles.cardLinkText}>
              View Proof Pack sample <ArrowRight size={15} />
            </span>
          </Link>

          <Link href="/tools/exposure-calculator" className={styles.card}>
            <div className={styles.cardIcon}>
              <Calculator size={24} />
            </div>
            <h3 className={styles.cardTitle}>
              <span>Exposure Calculator</span>
              <ArrowRight size={18} />
            </h3>
            <p className={styles.cardDesc}>
              Model your company's multi-state workforce exposure across minimum wage variances, PF/ESI wage bases, and vendor non-remittance risks in 2 minutes.
            </p>
            <span className={styles.cardLinkText}>
              Calculate exposure <ArrowRight size={15} />
            </span>
          </Link>

          <Link href="/platform/demo" className={styles.card}>
            <div className={styles.cardIcon}>
              <Presentation size={24} />
            </div>
            <h3 className={styles.cardTitle}>
              <span>Operational Demo</span>
              <ArrowRight size={18} />
            </h3>
            <p className={styles.cardDesc}>
              Walk through a live demonstration of the statutory engine, roster-to-billing joins, and establishment resolution configured for your industry.
            </p>
            <span className={styles.cardLinkText}>
              Book a walkthrough <ArrowRight size={15} />
            </span>
          </Link>
        </div>

        <div className={styles.noteBox}>
          <p className={styles.noteText}>
            <strong>Honest data policy:</strong> Finnovo Tech Functional Pvt Ltd does not publish fabricated customer quotes or synthetic case metrics. All published studies will be audited operational deployments with customer authorization.
          </p>
        </div>
      </section>
    </div>
  );
}
