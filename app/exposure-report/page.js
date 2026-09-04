import ExposureReportForm from '@/components/forms/ExposureReportForm';
import { Check, ShieldAlert, Calculator, Clock, Shield, FileText, ArrowRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import styles from '@/components/forms/LandingSplit.module.css';

export const metadata = {
  title: 'Contractor Exposure Assessment & Forensic Report | yfy® India',
  description: 'Send 3 months of contractor invoices and gate logs under NDA. Receive a forensic audit sizing unhedged statutory liabilities under CLRA §21, EPF §8A, and ESI §40. ₹2,50,000 engagement, credited in full against first-year subscription, or complimentary for 2,000+ workforce.',
  alternates: { canonical: '/exposure-report' },
  openGraph: {
    title: 'Contractor Exposure Assessment & Forensic Report | yfy® India',
    description: 'Send 3 months of contractor invoices and gate logs under NDA. Sizing unhedged statutory liabilities under CLRA §21, EPF §8A, and ESI §40. 100% credited against first-year subscription.',
    url: 'https://yfy.ai/exposure-report',
    siteName: 'yfy.ai',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contractor Exposure Assessment & Forensic Report | yfy® India',
    description: 'Find out what your contractors are shorting you into before an inspection does.',
  },
};

export default function ExposureReportPage() {
  return (
    <>
      <section className={`section bg-gradient ${styles.section}`}>
        <div className="container-lg">
          <div className={styles.grid}>
            
            {/* Left Column: Strategic Diagnostic Copy */}
            <div className="reveal">
              {/* Persona Tag */}
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'rgba(192, 126, 240, 0.12)',
                border: '1px solid rgba(192, 126, 240, 0.3)',
                color: '#e0aaff',
                padding: '6px 14px',
                borderRadius: '99px',
                fontSize: '0.8rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '1px',
                marginBottom: '1.25rem'
              }}>
                <ShieldAlert size={15} color="var(--brand-xlight)" />
                Principal Employers · Plant Heads &amp; CFOs
              </div>

              <h1 className={styles.title}>
                Contractor Bill Verification &amp; CLRA Liability Engine
              </h1>
              
              <div className={styles.leadText}>
                <p style={{ marginBottom: '1.25rem' }}>
                  You did not compute the contractor’s wage, but under <strong>CLRA §21, EPF §8A, and ESI §40</strong>, you pay for their defaults. We sit between the contractor’s bill and Accounts Payable, independently trimming attendance against your gate logs and verifying statutory challans before funds leave.
                </p>
                
                {/* Interactive Exposure Calculator Callout Banner */}
                <Link 
                  href="/tools/exposure-calculator" 
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    background: 'rgba(26, 10, 46, 0.7)',
                    border: '1px solid rgba(192, 126, 240, 0.4)',
                    padding: '12px 18px',
                    borderRadius: '10px',
                    textDecoration: 'none',
                    marginBottom: '1.5rem',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <Calculator size={20} color="var(--brand-xlight)" />
                    <div>
                      <div style={{ color: '#fff', fontWeight: 700, fontSize: '0.92rem' }}>
                        Model your own exposure →
                      </div>
                      <div style={{ color: 'var(--text-muted)', fontSize: '0.78rem' }}>
                        Interactive model based on your worker count &amp; states
                      </div>
                    </div>
                  </div>
                  <ArrowRight size={16} color="var(--brand-xlight)" />
                </Link>
              </div>

              {/* 4 Protection Pillars */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '10px',
                marginBottom: '2rem'
              }}>
                {[
                  'Biometric & Gate Log Trim vs Billed Days',
                  'Direct EPF §8A, ESI §40 & CLRA §21 Protection',
                  'Mathematical "Eligible to Pay" AP Release Cap',
                  '72-Hour Deviation Clock on Vendor Shortfalls'
                ].map((item, i) => (
                  <div key={i} style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '8px',
                    background: 'rgba(255, 255, 255, 0.02)',
                    border: '1px solid rgba(255, 255, 255, 0.06)',
                    padding: '10px 12px',
                    borderRadius: '8px',
                    fontSize: '0.82rem',
                    color: '#e2e8f0',
                    lineHeight: '1.4'
                  }}>
                    <CheckCircle2 size={16} color="var(--brand-xlight)" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Commercial Terms Callout Card */}
              <div style={{
                background: 'linear-gradient(135deg, rgba(20, 8, 40, 0.9) 0%, rgba(34, 10, 64, 0.7) 100%)',
                border: '2px solid rgba(192, 126, 240, 0.45)',
                borderRadius: '14px',
                padding: '1.5rem',
                marginBottom: '2rem'
              }}>
                <div style={{
                  display: 'inline-block',
                  background: 'rgba(34, 211, 160, 0.15)',
                  color: '#34d399',
                  border: '1px solid rgba(34, 211, 160, 0.35)',
                  padding: '3px 10px',
                  borderRadius: '99px',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.8px',
                  marginBottom: '0.75rem'
                }}>
                  Commercial Terms
                </div>
                <div style={{ fontSize: '1.15rem', fontWeight: 800, color: '#fff', marginBottom: '0.5rem' }}>
                  Contractor exposure assessment — ₹2,50,000, credited in full against your first year's subscription.
                </div>
                <p style={{ color: '#d1c4e9', fontSize: '0.9rem', lineHeight: '1.6', margin: '0 0 1rem 0' }}>
                  Send three months of contractor invoices, your contract worker attendance in whatever form you hold it, your site list with states, and the challans your contractors supplied. We return claimed versus statutorily eligible, per contractor, per site, with your residual liability under CLRA §21, EPF §8A and ESI §40 sized and traceable to a named worker.
                </p>
                <div style={{
                  background: 'rgba(56, 189, 248, 0.1)',
                  border: '1px solid rgba(56, 189, 248, 0.3)',
                  padding: '6px 12px',
                  borderRadius: '6px',
                  fontSize: '0.82rem',
                  color: '#7dd3fc',
                  fontWeight: 600,
                  display: 'inline-block'
                }}>
                  Complimentary for organisations above 2,000 total workforce
                </div>
              </div>

              {/* What you'll receive */}
              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '1.15rem', marginBottom: '0.85rem', color: '#fff', fontWeight: 700 }}>
                  What you will receive:
                </h3>
                <ul className={styles.checklist}>
                  {[
                    'Per-contractor variance: what was billed against what the statute requires',
                    'Minimum wage shortfalls by state, zone and skill category',
                    'PF, ESI and bonus reconciliation gaps against the challans you were given',
                    'Your residual exposure under CLRA §21, EPF §8A and ESI §40, mathematically sized and traceable to a named worker'
                  ].map((item, i) => (
                    <li key={i} className={styles.checkItem}>
                      <Check size={18} className={styles.checkIcon} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* What we need & Meta row */}
              <div className={styles.needBox}>
                <div className={styles.needTitle}>What we need from you:</div>
                <p className={styles.needDesc}>
                  Three months of contractor invoices, your contract worker attendance in whatever form you hold it, your site list with states, and the PF/ESI challans your contractors provided.
                </p>
              </div>
              
              <div className={styles.metaRow}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Clock size={16} color="var(--brand-xlight)" />
                  <span><strong>Turnaround:</strong> 10 working days</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Shield size={16} color="var(--brand-xlight)" />
                  <span><strong>Terms:</strong> Under NDA</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <FileText size={16} color="var(--brand-xlight)" />
                  <span><strong>Read-only:</strong> Nothing installed, nothing migrated</span>
                </div>
              </div>
            </div>

            {/* Right Column: High-Intent Intake Form */}
            <div className="reveal">
              <ExposureReportForm />
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
