import Link from 'next/link';
import { Users, FileCheck, Layers, ShieldCheck, ArrowRight } from 'lucide-react';
import styles from '../persona.module.css';

export const metadata = {
  title: 'yfy® for Staffing Agencies | Roster to Invoice & Compliance Proof',
  description: 'Built for manpower suppliers, facility management and security staffing. Prove your compliance to the clients who audit you.',
  alternates: { canonical: '/for/staffing-agencies' },
  openGraph: {
    title: 'yfy® for Staffing Agencies | Roster to Invoice & Compliance Proof',
    description: 'Built for manpower suppliers, facility management and security staffing. Prove your compliance to the clients who audit you.',
    url: 'https://yfy.ai/for/staffing-agencies',
    siteName: 'yfy.ai',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function StaffingAgenciesPage() {
  return (
    <div className={styles.wrapper}>
      {/* Hero Section */}
      <header className={styles.header}>
        <div className={styles.tag}>
          For Staffing & Manpower Agencies
        </div>
        <h1 className={styles.title}>
          One approved roster.<br />
          <span className="text-gradient">Payroll, statutory, billing</span><br />
          and GST — all from it.
        </h1>
        <p className={styles.desc}>
          You are the employer of record. Every statutory obligation sits with you — computed on wages that change by client, by site, by state. 
          <strong style={{ color: 'var(--text-primary)', fontWeight: 600 }}> yfy® eliminates billed-day drift </strong> and produces the compliance proof packs your clients demand to release invoices.
        </p>
        
        <div className={styles.ctaGroup}>
          <Link href="/compliance-proof-pack" className="btn btn-primary btn-lg">
            Get your compliance proof pack <ArrowRight size={18} />
          </Link>
          <Link href="/pricing" className="btn btn-outline btn-lg">
            View transparent pricing
          </Link>
        </div>
      </header>

      {/* Main Content Sections */}
      <section className={styles.contentSection}>
        
        {/* Core Architecture */}
        <div className={styles.heroCard}>
          <h2 className={styles.heroCardTitle}>The roster is the spine</h2>
          <p className={styles.heroCardDesc}>
            One approved assignment-day row → worker payroll, statutory liability, client billing, GST invoice. Billed days cannot drift from paid days because they are the exact same record.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
            <div style={{ background: '#0a0410', padding: '1.5rem', borderRadius: '14px', border: '1px solid rgba(107,31,162,0.3)', textAlign: 'left' }}>
              <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#fff', marginBottom: '0.5rem' }}>Where the days go</div>
              <div style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>Attendance arrives late and unverifiable · payroll waits for attendance · billing waits for payroll · billed days drift from paid days. Not anymore.</div>
            </div>
            <div style={{ background: '#0a0410', padding: '1.5rem', borderRadius: '14px', border: '1px solid rgba(107,31,162,0.3)', textAlign: 'left' }}>
              <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#fff', marginBottom: '0.5rem' }}>Prove it to clients</div>
              <div style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>Monthly compliance pack per contract · a scoped read-only client window · white-label under your brand. An agency handing over live proof wins the bid.</div>
            </div>
          </div>
        </div>

        {/* Feature Grid */}
        <div className={styles.grid}>
          
          <div className={styles.featureCard}>
            <div className={styles.iconWrap}>
              <Layers size={24} />
            </div>
            <h3 className={styles.featureCardTitle}>The arithmetic nobody gets right</h3>
            <p className={styles.featureCardDesc}>One worker, three client sites: the statutory ceiling (PF ₹15,000) applies once on aggregate, then apportions back per client line. No over-deductions, no under-remittances.</p>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.iconWrap}>
              <Users size={24} />
            </div>
            <h3 className={styles.featureCardTitle}>Muster with no app install</h3>
            <p className={styles.featureCardDesc}>Supervisors open an SMS magic link. Works offline at a 6 AM site gate with 1 bar of signal. Auto-saves on every tap so dropped connections lose nothing.</p>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.iconWrap}>
              <FileCheck size={24} />
            </div>
            <h3 className={styles.featureCardTitle}>From muster to invoice without re-typing</h3>
            <p className={styles.featureCardDesc}>Invoices land with attendance evidence already attached. Shortens client approval cycles from 3 weeks to 48 hours and stops margin erosion.</p>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.iconWrap}>
              <ShieldCheck size={24} />
            </div>
            <h3 className={styles.featureCardTitle}>The client-visible window</h3>
            <p className={styles.featureCardDesc}>Give your principal employer a read-only view of their deployment: attendance, wages, statutory position. White-label with your domain and logo.</p>
          </div>

        </div>

        {/* What we don't do */}
        <div className={styles.dontBox}>
          <h3 className={styles.dontTitle}>What we are not</h3>
          <p className={styles.dontDesc}>
            We are not a job board or sourcing tool. We run onboarding through deployment, muster, payroll, statutory calculations, and billing. Finding candidates is your business.
          </p>
        </div>

        {/* Industry Deep Dive */}
        <div style={{ background: 'rgba(107,31,162,0.1)', border: '1px solid rgba(155,61,216,0.3)', borderRadius: '18px', padding: '2rem 2.25rem', marginTop: '2.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.25rem' }}>
          <div>
            <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--brand-xlight)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.25rem' }}>Industry Specific Architecture</div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#fff', margin: 0 }}>Operating a security or facility management agency?</h3>
            <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', margin: '0.4rem 0 0' }}>Explore PSARA licence tracking, offline site muster, and Notification 29/2018 reverse-charge GST billing.</p>
          </div>
          <Link href="/industries/facility-management" className="btn btn-outline btn-md">
            See Facility Management &amp; Security →
          </Link>
        </div>

      </section>
      
      {/* Footer CTA */}
      <section className={styles.bottomCta}>
        <h2 className={styles.bottomCtaTitle}>Prove compliance to your clients.</h2>
        <Link href="/compliance-proof-pack" className="btn btn-primary btn-lg">
          Get your compliance proof pack <ArrowRight size={18} />
        </Link>
      </section>
    </div>
  );
}
