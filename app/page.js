import HeroSection from '@/components/home/HeroSection';
import TrustBar from '@/components/home/TrustBar';
import GrowthPaths from '@/components/home/GrowthPaths';
import TheProblem from '@/components/home/TheProblem';
import HowItWorks from '@/components/home/HowItWorks';
import Coverage from '@/components/home/Coverage';
import HonestSplit from '@/components/home/HonestSplit';
import Controls from '@/components/home/Controls';
import ModulesGrid from '@/components/home/ModulesGrid';
import EnterpriseFAQ from '@/components/home/EnterpriseFAQ';
import { FAQ_ITEMS } from '@/data/faqData';
import IsoCerts from '@/components/home/IsoCerts';
import FinalCTA from '@/components/home/FinalCTA';

export const metadata = {
  title: 'Statutory Compliance & Contractor Verification Engine | yfy® India',
  description:
    'Eliminate balance-sheet liabilities from contractor overbilling, CLRA §21, EPF §8A, ESI §40, and multi-state PT & LWF across 36 jurisdictions. Built for Principal Employers, Multi-State Organizations, and Staffing Agencies.',
  alternates: { canonical: '/' },
  keywords: [
    'Contract labour compliance',
    'CLRA section 21 principal employer liability',
    'EPF section 8A contractor recovery',
    'ESI section 40 contractor contribution',
    'Multi-state Professional Tax PT slab rates 2026',
    'Labour Welfare Fund LWF contribution states',
    'New Labour Codes compliance impact',
    'Contractor billing vs gate attendance verification software',
    'Staffing agency compliance proof pack ECR challan',
    'Enterprise payroll compliance India'
  ],
  openGraph: {
    title: 'Statutory Compliance & Contractor Verification Engine | yfy® India',
    description: 'Eliminate balance-sheet liabilities from contractor overbilling, CLRA §21, EPF §8A, and multi-state PT & LWF across 36 jurisdictions.',
    url: 'https://yfy.ai',
    siteName: 'yfy.ai',
    locale: 'en_IN',
    type: 'website',
  }
};

export default function HomePage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ_ITEMS.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  const softwareSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'yfy.ai',
    operatingSystem: 'Cloud / Web-based SaaS',
    applicationCategory: 'BusinessApplication',
    description: 'India’s Statutory Compliance & Contractor Verification Engine. Sits between contractor invoices and Accounts Payable, auditing EPF §8A, ESI §40, and CLRA §21 before payment release.',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'INR',
      description: '3-Month Historical Payroll Replay & Forensic Contractor Exposure Assessment',
    },
    featureList: [
      'Biometric & Gate Log Trim vs Contractor Billed Days',
      'Direct EPF §8A, ESI §40 & CLRA §21 Statutory Liability Protection',
      'Mathematical Eligible-to-Pay Accounts Payable Release Cap',
      'Jurisdiction & Statutory Identity Engine across 36 Indian States & UTs',
      'Single Roster-to-Invoice & Automated Client Compliance Proof Packs',
      'Dual-Running Labour Codes vs Legacy Act Engine',
      'ISO 27001:2022, ISO/IEC 27701:2019, ISO 9001:2015 Certified',
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <HeroSection />
      <TrustBar />
      <TheProblem />
      <HowItWorks />
      <Coverage />
      <HonestSplit />
      <Controls />
      <ModulesGrid />
      <GrowthPaths />
      <EnterpriseFAQ />
      <IsoCerts />
      <FinalCTA />
    </>
  );
}
