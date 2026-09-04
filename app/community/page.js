import Link from 'next/link';
import { 
  ArrowRight, 
  Clock, 
  Users, 
  Calendar, 
  BookOpen, 
  Map, 
  ShieldCheck 
} from 'lucide-react';
import styles from './page.module.css';

export const metadata = {
  title: 'HR & Statutory Compliance Community Coming Soon | yfy®',
  description:
    'A closed peer exchange for Indian HR, Industrial Relations, and statutory compliance leaders is coming soon. Access our active compliance guides and tools.',
  alternates: { canonical: '/community' },
  keywords: [
    'HR community India',
    'labour compliance network India',
    'industrial relations peer forum',
    'statutory compliance leaders group'
  ],
  openGraph: {
    title: 'HR & Statutory Compliance Community Coming Soon | yfy®',
    description:
      'A closed peer exchange for Indian HR and statutory compliance leaders is coming soon. Access compliance calendars and guides today.',
    url: 'https://yfy.ai/community',
    siteName: 'yfy.ai',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HR & Statutory Compliance Community Coming Soon | yfy®',
    description: 'A closed peer exchange for Indian HR and statutory compliance leaders is coming soon.',
  },
};

export default function CommunityPage() {
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
        name: 'Community',
        item: 'https://yfy.ai/community',
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
          Resources · HR &amp; Compliance Community
        </div>

        <h1 className={styles.title}>
          HR &amp; Compliance Community<br />
          <span className="text-gradient">Coming Soon...!</span>
        </h1>

        <div className={styles.lead}>
          We are building a curated, closed peer forum for Indian HR, Industrial Relations (IR), and statutory compliance leaders. A noise-free network dedicated to interpreting state minimum wage notifications, Labour Code gazette rules, factory inspectorate queries, and contractor compliance audits without vendor sales pitches.
        </div>

        <div className={styles.badgePill}>
          <Clock size={16} color="#C07EF0" />
          <span>Curated practitioner network · Invitations launching Q3 2026</span>
        </div>
      </header>

      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Active compliance resources you can use today</h2>
          <p className={styles.sectionLead}>
            Explore our authoritative statutory guides, compliance schedules, and state coverage maps.
          </p>
        </div>

        <div className={styles.grid3}>
          <Link href="/resources/compliance-calendar" className={styles.card}>
            <div className={styles.cardIcon}>
              <Calendar size={24} />
            </div>
            <h3 className={styles.cardTitle}>
              <span>Compliance Calendar</span>
              <ArrowRight size={18} />
            </h3>
            <p className={styles.cardDesc}>
              Track every critical statutory deadline across EPF, ESI, Professional Tax, and Labour Welfare Fund filings across all 28 states and 8 union territories.
            </p>
            <span className={styles.cardLinkText}>
              View 2026 Calendar <ArrowRight size={15} />
            </span>
          </Link>

          <Link href="/blog/indian-labour-codes-2020-guide" className={styles.card}>
            <div className={styles.cardIcon}>
              <BookOpen size={24} />
            </div>
            <h3 className={styles.cardTitle}>
              <span>Labour Codes Guide</span>
              <ArrowRight size={18} />
            </h3>
            <p className={styles.cardDesc}>
              Comprehensive readiness breakdown of the 50% Basic wage mandate, gratuity liabilities for fixed-term workers, and multi-state contractor obligations.
            </p>
            <span className={styles.cardLinkText}>
              Read impact guide <ArrowRight size={15} />
            </span>
          </Link>

          <Link href="/coverage" className={styles.card}>
            <div className={styles.cardIcon}>
              <Map size={24} />
            </div>
            <h3 className={styles.cardTitle}>
              <span>Coverage Matrix</span>
              <ArrowRight size={18} />
            </h3>
            <p className={styles.cardDesc}>
              Inspect the state-by-state statutory rule engine covering Shops &amp; Establishments Acts, Factories Act §79 leave floors, and minimum wage revisions.
            </p>
            <span className={styles.cardLinkText}>
              Explore coverage <ArrowRight size={15} />
            </span>
          </Link>
        </div>

        <div className={styles.focusBox}>
          <h3 className={styles.focusTitle}>The Community Mandate: Practitioner Pragmatism</h3>
          <p className={styles.focusText}>
            The community is being established exclusively for in-house HR leaders, CFOs, IR directors, and staffing operations executives. No sponsored promotions or generic recruitment fluff — strictly peer-to-peer benchmarking on labour department inquiries, legal precedents, and enterprise audit standards.
          </p>
        </div>
      </section>
    </div>
  );
}
