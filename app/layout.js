import { Suspense } from 'react';
import './globals.css';
import Script from 'next/script';
import GlobalScripts from '../components/GlobalScripts';
import GlobalAttribution from '@/components/analytics/GlobalAttribution';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import ScrollToTop from '@/components/ui/ScrollToTop';

export const metadata = {
  metadataBase: new URL('https://yfy.ai'),
  title: {
    default: 'Statutory Compliance & Contractor Verification Engine | yfy® India',
    template: '%s | yfy.ai',
  },
  icons: {
    icon: '/yfy-logo.jpg',
    apple: '/yfy-logo.jpg',
  },
  description:
    'yfy.ai eliminates balance-sheet liabilities from contractor overbilling, CLRA §21, EPF §8A, ESI §40, and multi-state PT & LWF across 36 jurisdictions. Sits alongside your ERP or HRMS with zero rip-and-replace.',
  keywords: [
    'Statutory compliance engine India',
    'Contract labour compliance',
    'CLRA section 21 principal employer liability',
    'EPF section 8A contractor recovery',
    'ESI section 40 contractor contribution',
    'Professional Tax 22 states',
    'Labour Welfare Fund 16 states',
    'New Labour Codes compliance impact',
    'Contractor billing vs gate attendance verification',
    'Staffing agency compliance proof pack ECR challan'
  ],
  authors: [{ name: 'yfy.ai' }],
  openGraph: {
    type: 'website',
    siteName: 'yfy.ai',
    title: 'Statutory Compliance & Contractor Verification Engine | yfy® India',
    description: 'Eliminate balance-sheet liabilities from contractor overbilling, CLRA §21, EPF §8A, and multi-state PT & LWF across 36 jurisdictions.',
    images: [{ url: '/yfy-logo.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Statutory Compliance & Contractor Verification Engine | yfy® India',
    description: 'Eliminate balance-sheet liabilities from contractor overbilling, CLRA §21, EPF §8A, and multi-state PT & LWF across 36 jurisdictions.',
    images: ['/yfy-logo.jpg'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TKSPFRN6');`,
          }}
        />
        {/* End Google Tag Manager */}
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-MS7JQ498TN"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-MS7JQ498TN');
            `,
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@graph': [
                {
                  '@type': 'Organization',
                  '@id': 'https://yfy.ai/#organization',
                  name: 'yfy.ai',
                  legalName: 'Finnovo Tech Functional Private Limited',
                  url: 'https://yfy.ai',
                  logo: 'https://yfy.ai/yfy-logo.jpg',
                  description:
                    'yfy.ai is India\'s statutory compliance & contractor verification engine — eliminating balance-sheet liabilities under CLRA §21, EPF §8A, ESI §40, and multi-state PT & LWF across 36 jurisdictions.',
                  address: {
                    '@type': 'PostalAddress',
                    streetAddress: 'Plot No. 12, Hitec City',
                    addressLocality: 'Madhapur, Hyderabad',
                    addressRegion: 'Telangana',
                    postalCode: '500081',
                    addressCountry: 'IN',
                  },
                  sameAs: [
                    'https://www.linkedin.com/company/yfy-ai',
                    'https://twitter.com/yfy_ai',
                  ],
                  contactPoint: {
                    '@type': 'ContactPoint',
                    contactType: 'sales',
                    email: 'sales@yfy.ai',
                    availableLanguage: ['English', 'Hindi'],
                  },
                },
                {
                  '@type': 'WebSite',
                  '@id': 'https://yfy.ai/#website',
                  url: 'https://yfy.ai',
                  name: 'yfy.ai',
                  publisher: {
                    '@id': 'https://yfy.ai/#organization',
                  },
                },
                {
                  '@type': 'SoftwareApplication',
                  '@id': 'https://yfy.ai/#software',
                  name: 'yfy.ai Statutory Compliance & Contractor Verification Engine',
                  applicationCategory: 'BusinessApplication',
                  operatingSystem: 'All (Web-based SaaS, Dedicated Managed Server, On-Premise)',
                  description:
                    'Enterprise workforce infrastructure platform that reconciles contractor muster logs against invoices, eliminating unrecognised liabilities under CLRA §21, EPF §8A, and ESI §40 across 36 Indian jurisdictions.',
                  provider: {
                    '@id': 'https://yfy.ai/#organization',
                  },
                  offers: {
                    '@type': 'Offer',
                    price: '0',
                    priceCurrency: 'INR',
                    description: 'Free historical payroll replay & forensic contractor exposure audit',
                  },
                  featureList: [
                    'Contractor Invoice vs Biometric Gate Muster 3-Way Reconciliation',
                    'Direct CLRA §21, EPF §8A & ESI §40 Statutory Liability Mitigation',
                    'Automated Monthly, Quarterly, Half-Yearly & Annual Statutory Return Due Dates Tracking',
                    'Multi-State Professional Tax (PT) and Labour Welfare Fund (LWF) Calculations across 36 Jurisdictions',
                    'Tamper-Proof Client Compliance Proof Packs with Verified ECR Challans',
                    'Dual-Running Engine for 4 New Labour Codes 2020 vs Legacy Acts'
                  ],
                  areaServed: {
                    '@type': 'Country',
                    name: 'India',
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TKSPFRN6"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <Navbar />
        <main>{children}</main>
        <Footer />
        <ScrollToTop />
        <GlobalScripts />
        <Suspense fallback={null}>
          <GlobalAttribution />
        </Suspense>
      </body>
    </html>
  );
}

