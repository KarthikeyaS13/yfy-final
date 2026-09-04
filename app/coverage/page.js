import styles from './page.module.css';
import Link from 'next/link';
import CoverageTable from './CoverageTable';

export const metadata = {
  title: 'Statutory Coverage Matrix (36 Jurisdictions) | yfy® India',
  description: 'Live statutory coverage matrix across all 36 Indian states and Union Territories. We publish exactly what we load for PT, LWF, Minimum Wage, S&E, CLRA, and Labour Codes — including the gaps.',
  alternates: { canonical: '/coverage' },
  openGraph: {
    title: 'Statutory Coverage Matrix (36 Jurisdictions) | yfy® India',
    description: 'We publish our coverage — including the gaps. Live statutory coverage matrix across 22 PT states, 16 LWF states, and all 36 Indian jurisdictions.',
    url: 'https://yfy.ai/coverage',
    siteName: 'yfy.ai',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Statutory Coverage Matrix (36 Jurisdictions) | yfy® India',
    description: 'We publish our statutory coverage across 36 jurisdictions in India — including the gaps.',
  },
};

export default function CoveragePage() {
  const currentDate = new Date().toLocaleDateString('en-IN', { month: 'long', year: 'numeric' });

  return (
    <>
      <section className="section bg-gradient" style={{ paddingTop: 'clamp(110px, 15vw, 160px)', paddingBottom: '4rem' }}>
        <div className="container">
          <div className="section-header reveal" style={{ textAlign: 'left', maxWidth: '840px' }}>
            <h1 style={{ fontSize: 'clamp(2.25rem, 5vw, 3.5rem)', lineHeight: 1.15, marginBottom: '1rem', color: 'var(--text-primary)', fontWeight: 900 }}>
              Statutory coverage, by jurisdiction
            </h1>
            <p style={{ color: 'var(--brand-light)', fontWeight: 600, marginBottom: '1.5rem', fontSize: '0.92rem' }}>
              Coverage as at {currentDate} · Verified against gazette notifications by a named owner · Last reviewed {currentDate}
            </p>
            <div style={{ fontSize: 'clamp(1rem, 2vw, 1.15rem)', color: 'var(--text-secondary)', lineHeight: 1.6, paddingLeft: '1.25rem', borderLeft: '4px solid var(--brand-primary)', marginBottom: '2.5rem' }}>
              <p style={{ marginBottom: '0.75rem' }}>
                Most vendors say "all states." We publish the table. Every jurisdiction below shows what we load, to what depth, and when someone last checked it.
              </p>
              <p style={{ margin: 0 }}>
                Where a state has no sourced return format and we compute, record and evidence instead, it says so.
              </p>
            </div>

            <div className={styles.summaryBar}>
              <div className={styles.summaryItem}><strong>22</strong> PT rule packs</div>
              <div className={styles.summaryItem}><strong>16</strong> LWF rule packs</div>
              <div className={styles.summaryItem}><strong>36</strong> Jurisdictions published</div>
              <div className={styles.summaryItem} style={{ flex: 2 }}>EPF, ESI, TDS, bonus, gratuity, minimum wage national</div>
            </div>
          </div>

          <div className="reveal">
            <CoverageTable />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="reveal" style={{ background: 'rgba(107, 31, 162, 0.1)', borderLeft: '4px solid var(--brand-light)', padding: '2.5rem', borderRadius: 'var(--radius-lg)', marginBottom: '4rem' }}>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>On the Labour Codes we are deliberately conservative.</h3>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
              Every Code threshold change is a raise. Flipping globally would understate your obligations in states still operating the legacy acts — so the engine keeps the lower threshold binding and shows the Code figure alongside. You see both, and you are held to the stricter one.
            </p>
          </div>

          <div className="reveal" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/exposure-report" className="btn btn-primary btn-lg">Get the exposure report</Link>
            <Link href="/platform/migration" className="btn btn-outline btn-lg">Run a 3-month payroll replay</Link>
          </div>
        </div>
      </section>
    </>
  );
}
