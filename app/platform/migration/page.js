import Link from 'next/link';
import { ArrowRight, RefreshCw, CheckCircle2 } from 'lucide-react';

export const metadata = {
  title: 'Migration & Replay | yfy®',
  description: 'See every variance before you commit. We run a parallel replay on your data to prove our engine before you switch.',
  alternates: { canonical: '/platform/migration' },
};

export default function MigrationPage() {
  return (
    <>
      <section className="section bg-gradient" style={{ minHeight: '80vh', paddingTop: 'clamp(110px, 15vw, 160px)', paddingBottom: '4rem' }}>
        <div className="container">
          <div className="section-header reveal" style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 3.5rem' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.35rem 1rem', background: 'rgba(107, 31, 162, 0.15)', border: '1px solid rgba(155, 61, 216, 0.3)', borderRadius: '9999px', fontSize: '0.78rem', fontWeight: 700, color: 'var(--brand-xlight)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1rem' }}>
              <RefreshCw size={14} /> The Migration Safety Engine
            </div>
            <h1 style={{ fontSize: 'clamp(2.25rem, 5vw, 3.5rem)', lineHeight: 1.15, marginBottom: '1.25rem', color: 'var(--text-primary)', fontWeight: 900 }}>
              See every variance before you commit
            </h1>
            <p style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
              The most common reason employers stay on a payroll system they dislike is fear of the move. We built the answer into the product.
            </p>
          </div>

          <div className="reveal" style={{ display: 'flex', flexDirection: 'column', gap: '2rem', maxWidth: '850px', margin: '0 auto' }}>
            
            {/* Step 1 */}
            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start', background: 'rgba(26, 10, 46, 0.45)', padding: '1.75rem', borderRadius: '18px', border: '1px solid rgba(155, 61, 216, 0.2)', backdropFilter: 'blur(10px)' }}>
              <div style={{ background: 'var(--brand-primary)', color: '#fff', width: '44px', height: '44px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem', fontWeight: 800, flexShrink: 0 }}>
                1
              </div>
              <div>
                <h3 style={{ fontSize: '1.35rem', marginBottom: '0.5rem', color: 'var(--text-primary)', fontWeight: 700 }}>Replay</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6, margin: 0 }}>
                  Re-compute months you've already paid. We report every disagreement between your old system and our statutory engine, and write nothing to the live ledger.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start', background: 'rgba(26, 10, 46, 0.45)', padding: '1.75rem', borderRadius: '18px', border: '1px solid rgba(155, 61, 216, 0.2)', backdropFilter: 'blur(10px)' }}>
              <div style={{ background: 'var(--brand-primary)', color: '#fff', width: '44px', height: '44px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem', fontWeight: 800, flexShrink: 0 }}>
                2
              </div>
              <div>
                <h3 style={{ fontSize: '1.35rem', marginBottom: '0.5rem', color: 'var(--text-primary)', fontWeight: 700 }}>Parallel Run</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6, margin: 0 }}>
                  Run one entity or location on both systems. We reconcile the outputs monthly until the variances hit zero or are fully explained.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start', background: 'rgba(26, 10, 46, 0.45)', padding: '1.75rem', borderRadius: '18px', border: '1px solid rgba(155, 61, 216, 0.2)', backdropFilter: 'blur(10px)' }}>
              <div style={{ background: 'var(--brand-primary)', color: '#fff', width: '44px', height: '44px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem', fontWeight: 800, flexShrink: 0 }}>
                3
              </div>
              <div>
                <h3 style={{ fontSize: '1.35rem', marginBottom: '0.5rem', color: 'var(--text-primary)', fontWeight: 700 }}>Go-Live, One Way</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6, margin: 0 }}>
                  No step reopens, no second migration, no unlock for anyone including us. The cutover is permanent, deterministic, and audited.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '2rem' }}>
        <div className="container">
          <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem', marginBottom: '4rem' }}>
            <div style={{ padding: '1.75rem', background: 'rgba(255,255,255,0.02)', borderRadius: 'var(--radius-lg)', border: '1px solid rgba(255,255,255,0.05)' }}>
              <h4 style={{ fontSize: '1.15rem', marginBottom: '0.75rem', color: 'var(--text-primary)', fontWeight: 700 }}>Imported history isolation</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.55, margin: 0 }}>Imported history is physically stored outside the active payroll tables. Legacy data never contaminates live calculations.</p>
            </div>
            <div style={{ padding: '1.75rem', background: 'rgba(255,255,255,0.02)', borderRadius: 'var(--radius-lg)', border: '1px solid rgba(255,255,255,0.05)' }}>
              <h4 style={{ fontSize: '1.15rem', marginBottom: '0.75rem', color: 'var(--text-primary)', fontWeight: 700 }}>Derived step status</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.55, margin: 0 }}>Step status is derived strictly from what has landed in the database, never declared manually. No artificial progress bars.</p>
            </div>
            <div style={{ padding: '1.75rem', background: 'rgba(255,255,255,0.02)', borderRadius: 'var(--radius-lg)', border: '1px solid rgba(255,255,255,0.05)' }}>
              <h4 style={{ fontSize: '1.15rem', marginBottom: '0.75rem', color: 'var(--text-primary)', fontWeight: 700 }}>Permanent freeze</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.55, margin: 0 }}>Go-live freezes the configuration permanently. Adjustments are treated as new auditable events, preserving the migration state.</p>
            </div>
          </div>

          <div className="reveal" style={{ textAlign: 'center', background: 'linear-gradient(135deg, rgba(107, 31, 162, 0.25) 0%, rgba(26, 10, 46, 0.8) 100%)', border: '1px solid rgba(192, 126, 240, 0.4)', padding: 'clamp(2rem, 5vw, 3.5rem) 1.5rem', borderRadius: 'var(--radius-xl)' }}>
            <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.25rem)', marginBottom: '0.75rem', color: '#fff', fontWeight: 800 }}>Billing starts at go-live, not at signature.</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem' }}>You do not pay while an implementation or replay runs.</p>
            <Link href="/exposure-report" className="btn btn-primary btn-lg">
              Run a Replay on Your Data <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
