import Link from 'next/link';
import { Layers, CheckCircle2, ShieldCheck, MapPin, ArrowRight } from 'lucide-react';
import styles from '../persona.module.css';

export const metadata = {
  title: 'yfy® for Multi-State Employers | Payroll & Statutory Jurisdiction Engine',
  description: 'Running 400 people across six states with three legal entities is a jurisdiction problem. yfy manages PT, LWF, and statutory identity across 36 jurisdictions.',
  alternates: { canonical: '/for/multi-state-employers' },
  openGraph: {
    title: 'yfy® for Multi-State Employers | Payroll & Statutory Jurisdiction Engine',
    description: 'Running payroll across multiple states is a jurisdiction problem. yfy manages PT, LWF, and statutory identity across 36 jurisdictions.',
    url: 'https://yfy.ai/for/multi-state-employers',
    siteName: 'yfy.ai',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function MultiStateEmployersPage() {
  return (
    <div className={styles.wrapper}>
      {/* Hero Section */}
      <header className={styles.header}>
        <div className={styles.tag}>
          For Multi-State Employers
        </div>
        <h1 className={styles.title}>
          Multi-state is not more payroll.<br />
          <span className="text-gradient">It is a jurisdiction problem.</span>
        </h1>
        <p className={styles.desc}>
          Running 400 people in one state is a volume problem. Running 400 people across six states with three legal entities is a jurisdiction problem — and conventional payroll systems quietly fail when resolving multi-state statutory identity.
        </p>
        
        <div className={styles.ctaGroup}>
          <Link href="/coverage" className="btn btn-primary btn-lg">
            View statutory coverage matrix <ArrowRight size={18} />
          </Link>
          <Link href="/platform/migration" className="btn btn-outline btn-lg">
            Run a 3-month replay
          </Link>
        </div>
      </header>

      {/* Main Content Sections */}
      <section className={styles.contentSection}>
        
        {/* Core Architecture */}
        <div className={styles.heroCard}>
          <h2 className={styles.heroCardTitle}>Which registration does this rupee file under?</h2>
          <p className={styles.heroCardDesc}>
            One registry for every statutory identity you hold — TAN, PF, ESI, PT, LWF, PAN, GSTIN — scoped to entity, location or state, and effective-dated.
          </p>
          <div className={styles.formulaBox}>
            <div className={styles.formulaTag}>5-Tier Statutory Resolution Ladder</div>
            <div className={styles.formulaText}>
              Location Row → Location Reg → State Match → Entity Scope → Org-wide
            </div>
            <div style={{ fontSize: '0.88rem', color: 'var(--brand-xlight)', marginTop: '0.5rem' }}>
              State acts (PT, LWF) stop at Rung 3 — they never fall through to file Karnataka under Maharashtra.
            </div>
          </div>
        </div>

        {/* Feature Grid */}
        <div className={styles.grid}>
          
          <div className={styles.featureCard}>
            <div className={styles.iconWrap}>
              <Layers size={24} />
            </div>
            <h3 className={styles.featureCardTitle}>Stamped once at the wage month</h3>
            <p className={styles.featureCardDesc}>Records carry the registration they resolved to as of month-end. Move a branch to a new PF code in October, and April still regenerates the exact file you filed in April.</p>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.iconWrap}>
              <ShieldCheck size={24} />
            </div>
            <h3 className={styles.featureCardTitle}>Ambiguity refuses to file</h3>
            <p className={styles.featureCardDesc}>Two registrations matching at the same rung is reported as ambiguous and filing refuses. Picking one of two TANs arbitrarily files a return under a deductor nobody selected.</p>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.iconWrap}>
              <MapPin size={24} />
            </div>
            <h3 className={styles.featureCardTitle}>36 States & UTs covered</h3>
            <p className={styles.featureCardDesc}>22 Professional Tax rule packs, 16 Labour Welfare Fund packs. We publish what we load, to what depth, and when a named person last checked it against the gazette.</p>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.iconWrap}>
              <CheckCircle2 size={24} />
            </div>
            <h3 className={styles.featureCardTitle}>Labour Codes conservatism</h3>
            <p className={styles.featureCardDesc}>We run dual guardrails: keeping lower legacy thresholds binding while showing Code figures alongside so you are never caught under-withholding.</p>
          </div>

        </div>

        {/* What we don't do */}
        <div className={styles.dontBox}>
          <h3 className={styles.dontTitle}>What we are not</h3>
          <p className={styles.dontDesc}>
            We are India-only, deliberately. The depth we have in state minimum wages, PT, LWF, and the Codes exists because we did not spread across international jurisdictions.
          </p>
        </div>

        {/* Industry Deep Dive */}
        <div style={{ background: 'rgba(107,31,162,0.1)', border: '1px solid rgba(155,61,216,0.3)', borderRadius: '18px', padding: '2rem 2.25rem', marginTop: '2.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.25rem' }}>
          <div>
            <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--brand-xlight)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.25rem' }}>Industry Specific Architecture</div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#fff', margin: 0 }}>Operating multi-state hubs, fleets, or plants?</h3>
            <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', margin: '0.4rem 0 0' }}>Explore Motor Transport Workers Act registers, festive ramp ratchets, and piece-rate wage floors.</p>
          </div>
          <Link href="/industries/logistics" className="btn btn-outline btn-md">
            See Logistics &amp; Warehousing →
          </Link>
        </div>

      </section>
      
      {/* Footer CTA */}
      <section className={styles.bottomCta}>
        <h2 className={styles.bottomCtaTitle}>See how your states are covered.</h2>
        <Link href="/coverage" className="btn btn-primary btn-lg">
          Explore the statutory matrix <ArrowRight size={18} />
        </Link>
      </section>
    </div>
  );
}
