import ComplianceProofForm from '@/components/forms/ComplianceProofForm';
import { Check } from 'lucide-react';
import styles from '@/components/forms/LandingSplit.module.css';

export const metadata = {
  title: 'Client Compliance Proof Pack for Staffing Agencies | yfy® India',
  description: 'See what your clients will find when they audit you. Get a roster-to-payroll reconciliation and tamper-proof client compliance proof pack.',
  alternates: { canonical: '/compliance-proof-pack' },
  openGraph: {
    title: 'Client Compliance Proof Pack for Staffing Agencies | yfy® India',
    description: 'See what your clients will find when they audit you. Get a roster-to-payroll reconciliation and tamper-proof client compliance proof pack.',
    url: 'https://yfy.ai/compliance-proof-pack',
    siteName: 'yfy.ai',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Client Compliance Proof Pack for Staffing Agencies | yfy® India',
    description: 'Tamper-proof compliance packs that satisfy client auditors and unlock held payments.',
  },
};

export default function ComplianceProofPackPage() {
  return (
    <>
      <section className={`section bg-gradient ${styles.section}`}>
        <div className="container-lg">
          <div className={styles.grid}>
            
            {/* Left Column: Copy */}
            <div className="reveal">
              <h1 className={styles.title}>
                See what your clients will find when they audit you
              </h1>
              
              <div className={styles.leadText}>
                <p style={{ marginBottom: '1rem' }}>
                  Your principal employer clients are checking your compliance — or they will. Send us one month of roster, payroll and one client invoice. We reconcile them against the statute and show you exactly where the gaps are, before someone else does.
                </p>
                <p style={{ fontWeight: 600, color: 'var(--brand-light)' }}>
                  Then we show you the tamper-proof pack you can hand your clients every month instead.
                </p>
              </div>

              <div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--text-primary)', fontWeight: 700 }}>
                  What you'll receive:
                </h3>
                <ul className={styles.checklist}>
                  {[
                    'Roster-to-payroll reconciliation: paid days versus billed days, per client site',
                    'Minimum wage compliance per site, state, zone and skill',
                    'PF, ESI, PT and LWF check against your challans, with aggregate-cap apportionment',
                    'Statutory bonus and gratuity provisioning position',
                    'A sample client-facing compliance pack for one of your contracts'
                  ].map((item, i) => (
                    <li key={i} className={styles.checkItem}>
                      <Check size={18} className={styles.checkIcon} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.needBox}>
                <div className={styles.needTitle}>Why staffing agencies do this:</div>
                <p className={styles.needDesc}>
                  Compliance is what you lose bids over. A client-visible compliance record is a commercial sales asset, not an overhead.
                </p>
              </div>
              
              <div className={styles.metaRow}>
                <div><strong>Data Required:</strong> 1 month roster, payroll register, 1 client invoice & challans</div>
                <div><strong>Security:</strong> 100% India data residency · Under NDA</div>
              </div>
            </div>

            {/* Right Column: Form */}
            <div className="reveal">
              <ComplianceProofForm />
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
