import styles from './GrowthPaths.module.css';
import Link from 'next/link';

const paths = [
  {
    tier: 'Multi-State Employer',
    badge: '36 Jurisdictions',
    badgeColor: 'green',
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>,
    tagline: 'Payroll and statutory across every state you operate in.',
    price: 'from ₹140',
    priceNote: '/ employee / month',
    features: [
      'Multi-entity, multi-state payroll & identity registry',
      'PT & LWF computed & evidenced across loaded states',
      'Return file generation: TDS, PF (ECR), ESI',
      'Core HR, leave, attendance & employee self-service',
      'Four-way separation of duties & trial simulations',
    ],
    cta: 'Check your state coverage',
    ctaHref: '/coverage',
    ctaStyle: 'btn-outline',
  },
  {
    tier: 'Principal Employer',
    badge: 'Most Popular',
    badgeColor: 'gold',
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/></svg>,
    tagline: 'Contractor compliance verified before Accounts Payable pays.',
    price: 'from ₹175',
    priceNote: '/ staff + from ₹65 / verified worker / mo',
    features: [
      'Contractor bill verification & attendance trim',
      'Eligible-to-pay release cap & 72-hr deviation clock',
      'Vendor KYC, licence tracking & compliance scoring',
      'Site muster & independent biometric ingestion',
      'Exposure dashboard traceable to named worker',
    ],
    cta: 'Get your exposure assessment',
    ctaHref: '/exposure-report',
    ctaStyle: 'btn-primary',
    featured: true,
  },
  {
    tier: 'Staffing & Manpower Agency',
    badge: 'Roster to GST',
    badgeColor: 'blue',
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
    tagline: 'Roster to payroll to client invoice, off one approved muster.',
    price: 'from ₹45',
    priceNote: '/ deployed worker / month',
    features: [
      'SMS magic-link offline site muster (no app install)',
      'Multi-client payroll with client-specific wage rules',
      'Aggregate statutory ceiling apportioned per client',
      'Client billing, GST & agency profitability analytics',
      'Monthly client compliance proof pack generation',
    ],
    cta: 'Get compliance proof pack',
    ctaHref: '/compliance-proof-pack',
    ctaStyle: 'btn-outline',
  },
  {
    tier: 'Enterprise Group',
    badge: 'Custom Scale',
    badgeColor: 'silver',
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 7 9-4 9 4"/><rect x="4" y="20" width="16" height="2"/><line x1="6" y1="7" x2="6" y2="20"/><line x1="10" y1="7" x2="10" y2="20"/><line x1="14" y1="7" x2="14" y2="20"/><line x1="18" y1="7" x2="18" y2="20"/></svg>,
    tagline: 'Multi-entity, multi-lens, bespoke configuration.',
    price: 'Custom',
    priceNote: 'from ₹25 lakh annual',
    features: [
      'Both lenses in one tenant: principal employer & agency',
      'Multi-entity consolidation & group-level reporting',
      'Enterprise identity: SAML 2.0, OIDC, SCIM, MFA',
      'Dedicated tenant storage with KMS crypto-shred exit',
      'Named account team & custom SLA with 24×7 P1',
    ],
    cta: 'Talk to sales',
    ctaHref: '/platform/demo?intent=enterprise',
    ctaStyle: 'btn-ghost',
  },
];

export default function GrowthPaths() {
  return (
    <section className="section" id="growth-paths">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">COMMERCIAL COMMITMENT</span>
          <h2>Priced on Compliance Complexity, Not Headcount Bloat</h2>
          <p>Billing begins at go-live, not at signature. You do not pay while an implementation or replay runs.</p>
        </div>

        <div className={styles.grid}>
          {paths.map((p) => (
            <div
              key={p.tier}
              className={`card reveal ${styles.card} ${p.featured ? styles.featured : ''}`}
            >
              {p.featured && <div className={styles.featuredGlow} aria-hidden="true" />}
              <div className={styles.top}>
                <span className={styles.icon}>{p.icon}</span>
                <span className={`badge badge-${p.badgeColor}`}>{p.badge}</span>
              </div>
              <h3 className={styles.tier}>{p.tier}</h3>
              <p className={styles.tagline}>{p.tagline}</p>
              <div className={styles.price}>
                <span className={styles.priceMain}>{p.price}</span>
                <span className={styles.priceNote}>{p.priceNote}</span>
              </div>
              <ul className={styles.features}>
                {p.features.map((f) => (
                  <li key={f} className={styles.feature}>
                    <span className={styles.tick} style={{ color: 'var(--brand-xlight)' }}>●</span>
                    {f}
                  </li>
                ))}
              </ul>
              <div className={styles.cardCtas}>
                <Link href={p.ctaHref} className={`btn ${p.ctaStyle}`}>{p.cta}</Link>
                <p style={{ marginTop: '1rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>Billing starts at go-live, not at signature.</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
