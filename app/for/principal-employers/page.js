import Link from 'next/link';
import { ShieldCheck, FileCheck, Users, Eye, ArrowRight } from 'lucide-react';
import styles from '../persona.module.css';

export const metadata = {
  title: 'yfy® for Principal Employers | Contractor Compliance & Bill Verification',
  description: 'Your contractors\' compliance is your liability. Under CLRA §21, EPF §8A and ESI §40 their failures land on you. yfy verifies each monthly bill before you pay.',
  alternates: { canonical: '/for/principal-employers' },
  openGraph: {
    title: 'yfy® for Principal Employers | Contractor Compliance & Bill Verification',
    description: 'Your contractors\' compliance is your liability. yfy verifies each monthly bill before you pay.',
    url: 'https://yfy.ai/for/principal-employers',
    siteName: 'yfy.ai',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function PrincipalEmployersPage() {
  return (
    <div className={styles.wrapper}>
      {/* Hero Section */}
      <header className={styles.header}>
        <div className={styles.tag}>
          For Principal Employers
        </div>
        <h1 className={styles.title}>
          Your contractors' compliance<br />
          <span className="text-gradient">is your liability.</span><br />
          Check it before you pay.
        </h1>
        <p className={styles.desc}>
          You engage labour through vendors across plants and states. Under CLRA §21, EPF §8A and ESI §40 their failures land on you. 
          <strong style={{ color: 'var(--text-primary)', fontWeight: 600 }}> yfy® verifies each monthly bill </strong> against your own attendance and the statute that applies at that site, and gives you an eligible-to-pay figure before money moves.
        </p>
        
        <div className={styles.ctaGroup}>
          <Link href="/exposure-report" className="btn btn-primary btn-lg">
            Get your contractor exposure report <ArrowRight size={18} />
          </Link>
          <Link href="/tools/exposure-calculator" className="btn btn-outline btn-lg">
            Calculate your exposure
          </Link>
        </div>
      </header>

      {/* Main Content Sections */}
      <section className={styles.contentSection}>
        
        {/* Verification Pack & Formula */}
        <div className={styles.heroCard}>
          <h2 className={styles.heroCardTitle}>The Verification Pack</h2>
          <p className={styles.heroCardDesc}>
            Every contractor bill is mathematically verified against: Minimum wage per site, zone, and skill · Statutory bonus under the 1965 Act · PF, ESI, PT recomputed and reconciled to challans · Attendance trim based on gate logs.
          </p>
          <div className={styles.formulaBox}>
            <div className={styles.formulaTag}>Engine Output Formula</div>
            <div className={styles.formulaText}>
              Eligible to pay <span style={{ color: 'var(--text-muted)' }}>=</span> Verified Wages <span style={{ color: 'var(--text-muted)' }}>+</span> Statutory Add-backs <span style={{ color: 'var(--text-muted)' }}>+</span> Agreed Margin <span style={{ color: 'var(--text-muted)' }}>+</span> GST
            </div>
          </div>
        </div>

        {/* Feature Grid */}
        <div className={styles.grid}>
          
          <div className={styles.featureCard}>
            <div className={styles.iconWrap}>
              <FileCheck size={24} />
            </div>
            <h3 className={styles.featureCardTitle}>Report, verify, release</h3>
            <p className={styles.featureCardDesc}>A strict four-step flow for every invoice. Bills failing validation enter the deviation queue. yfy® enforces a 72-hour SLA on resolution before clearing for payment.</p>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.iconWrap}>
              <Eye size={24} />
            </div>
            <h3 className={styles.featureCardTitle}>The exposure dashboard</h3>
            <p className={styles.featureCardDesc}>View liability per contractor, per site, per state. Every figure traces back to a named worker on a specific bill, giving you complete visibility into contractor compliance.</p>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.iconWrap}>
              <ShieldCheck size={24} />
            </div>
            <h3 className={styles.featureCardTitle}>Vendor governance & KYC</h3>
            <p className={styles.featureCardDesc}>KYC with expiry tracking across seven document types. We enforce per-state establishment codes—because EPF, ESI, LWF and CLRA licence numbers vary by state for the same contractor.</p>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.iconWrap}>
              <Users size={24} />
            </div>
            <h3 className={styles.featureCardTitle}>Not every act counts the same people</h3>
            <p className={styles.featureCardDesc}>CLRA counts contract workers. Factories Act counts everyone on premises under §2(l). We judge CLRA state amendments against that state's deployments, not the national total.</p>
          </div>

        </div>

        {/* What we don't do */}
        <div className={styles.dontBox}>
          <h3 className={styles.dontTitle}>What we don't do</h3>
          <p className={styles.dontDesc}>
            We do not run your contractors' payroll — they do. We check what they report against what the statute required. If a contractor wants to run it properly, <Link href="/for/staffing-agencies" style={{ color: 'var(--brand-light)', textDecoration: 'underline' }}>that's our staffing lens</Link>.
          </p>
        </div>

        {/* Industry Deep Dive */}
        <div style={{ background: 'rgba(107,31,162,0.1)', border: '1px solid rgba(155,61,216,0.3)', borderRadius: '18px', padding: '2rem 2.25rem', marginTop: '2.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.25rem' }}>
          <div>
            <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--brand-xlight)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.25rem' }}>Industry Specific Architecture</div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#fff', margin: 0 }}>Operating a plant or pharma facility?</h3>
            <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', margin: '0.4rem 0 0' }}>Explore Factories Act §2(l) combined headcount rules, §59 overtime audits, and GMP training evidence.</p>
          </div>
          <Link href="/industries/manufacturing" className="btn btn-outline btn-md">
            See Manufacturing &amp; Pharma →
          </Link>
        </div>

        {/* Send to CFO Affordance */}
        <div style={{ background: 'rgba(20, 8, 36, 0.6)', border: '1px solid rgba(245, 200, 66, 0.25)', borderRadius: '16px', padding: '1.5rem 2rem', marginTop: '1.25rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <div style={{ fontSize: '0.78rem', fontWeight: 700, color: '#F5C842', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.2rem' }}>Internal Financial Controls &amp; Balance Sheet</div>
            <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#fff', margin: 0 }}>Need to build the internal business case for your CFO?</h4>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', margin: '0.25rem 0 0' }}>Share our finance teardown covering Ind AS 37 provisions, ICFR four-eyes controls, and CARO statutory dues evidence.</p>
          </div>
          <Link href="/roles/finance" className="btn btn-outline btn-md" style={{ borderColor: 'rgba(245, 200, 66, 0.4)', color: '#F5C842' }}>
            Share with your CFO →
          </Link>
        </div>

      </section>
      
      {/* Footer CTA */}
      <section className={styles.bottomCta}>
        <h2 className={styles.bottomCtaTitle}>Ready to uncover your exposure?</h2>
        <Link href="/exposure-report" className="btn btn-primary btn-lg">
          Get your contractor exposure report <ArrowRight size={18} />
        </Link>
      </section>
    </div>
  );
}
