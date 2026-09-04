import Link from 'next/link';

export const metadata = {
  title: 'Trust Centre | yfy',
  description: 'Enterprise security, architecture, and compliance at yfy.',
  alternates: { canonical: '/trust' },
};

export default function TrustCentrePage() {
  return (
    <>
      <section className="section bg-gradient" style={{ paddingTop: 'clamp(110px, 15vw, 160px)', paddingBottom: '4rem' }}>
        <div className="container">
          <div className="section-header reveal" style={{ textAlign: 'left' }}>
            <h1 style={{ fontSize: 'clamp(2.25rem, 5vw, 3.5rem)', lineHeight: 1.15, marginBottom: '1.25rem', color: 'var(--text-primary)', fontWeight: 900 }}>
              Trust centre
            </h1>
            <p style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)', color: 'var(--text-secondary)', maxWidth: '800px', lineHeight: 1.6 }}>
              Security, architecture, and privacy designed for multi-state employers and staffing agencies.
            </p>
          </div>

          <div className="reveal" style={{ display: 'grid', gap: 'clamp(2.5rem, 5vw, 4rem)', marginTop: 'clamp(2rem, 5vw, 3.5rem)' }}>
            
            {/* Certifications */}
            <div>
              <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>Certifications</h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem' }}>
                <div style={{ background: 'rgba(255,255,255,0.02)', padding: '2rem', borderRadius: 'var(--radius-lg)', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: 'var(--brand-light)' }}>ISO 9001:2015</h3>
                  <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>Quality Management System</p>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                    <div><strong>Number:</strong> 9001-2024-XYZ</div>
                    <div><strong>Entity:</strong> Finnovo Tech Functional Pvt Ltd</div>
                    <div><strong>Expiry:</strong> Dec 2027</div>
                  </div>
                </div>
                <div style={{ background: 'rgba(255,255,255,0.02)', padding: '2rem', borderRadius: 'var(--radius-lg)', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: 'var(--brand-light)' }}>ISO 27001:2022</h3>
                  <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>Information Security Management</p>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                    <div><strong>Number:</strong> 27001-2024-XYZ</div>
                    <div><strong>Entity:</strong> Finnovo Tech Functional Pvt Ltd</div>
                    <div><strong>Expiry:</strong> Dec 2027</div>
                  </div>
                </div>
                <div style={{ background: 'rgba(255,255,255,0.02)', padding: '2rem', borderRadius: 'var(--radius-lg)', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: 'var(--brand-light)' }}>ISO 27701:2019</h3>
                  <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>Privacy Information Management</p>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                    <div><strong>Number:</strong> 27701-2024-XYZ</div>
                    <div><strong>Entity:</strong> Finnovo Tech Functional Pvt Ltd</div>
                    <div><strong>Expiry:</strong> Dec 2027</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Architecture & Access Control */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem' }}>
              <div>
                <h2 style={{ fontSize: '1.75rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>Architecture</h2>
                <ul style={{ color: 'var(--text-secondary)', lineHeight: 1.6, paddingLeft: '1.25rem' }}>
                  <li style={{ marginBottom: '0.5rem' }}>Schema-per-tenant physical separation</li>
                  <li style={{ marginBottom: '0.5rem' }}>Two identity planes for robust segregation</li>
                  <li style={{ marginBottom: '0.5rem' }}>Storage tiers including dedicated bucket with customer-managed KMS key</li>
                </ul>
              </div>
              <div>
                <h2 style={{ fontSize: '1.75rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>Access Control</h2>
                <ul style={{ color: 'var(--text-secondary)', lineHeight: 1.6, paddingLeft: '1.25rem' }}>
                  <li style={{ marginBottom: '0.5rem' }}>Persona → module → 21-verb vocabulary → data scope</li>
                  <li style={{ marginBottom: '0.5rem' }}>Four-way separation on the money path with a person-level check</li>
                  <li style={{ marginBottom: '0.5rem' }}>Three gates that must agree before critical actions</li>
                </ul>
              </div>
            </div>

            {/* Identity & Data Protection */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem' }}>
              <div>
                <h2 style={{ fontSize: '1.75rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>Identity</h2>
                <ul style={{ color: 'var(--text-secondary)', lineHeight: 1.6, paddingLeft: '1.25rem' }}>
                  <li style={{ marginBottom: '0.5rem' }}>SAML 2.0 and OIDC SSO integration</li>
                  <li style={{ marginBottom: '0.5rem' }}>SCIM provisioning</li>
                  <li style={{ marginBottom: '0.5rem' }}>Multi-factor authentication (MFA)</li>
                  <li style={{ marginBottom: '0.5rem' }}>Password policy with history and expiry</li>
                  <li style={{ marginBottom: '0.5rem' }}>Tenant-scoped API rate limiting</li>
                </ul>
              </div>
              <div>
                <h2 style={{ fontSize: '1.75rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>Data Protection (DPDP Ready)</h2>
                <ul style={{ color: 'var(--text-secondary)', lineHeight: 1.6, paddingLeft: '1.25rem' }}>
                  <li style={{ marginBottom: '0.5rem' }}>Encryption at rest with blind indexes</li>
                  <li style={{ marginBottom: '0.5rem' }}>Hash-chained PII-free audit ledger</li>
                  <li style={{ marginBottom: '0.5rem' }}>Retention configured as code (config-as-data)</li>
                  <li style={{ marginBottom: '0.5rem' }}>Data-principal export and erasure workflows</li>
                  <li style={{ marginBottom: '0.5rem' }}>100% India data residency</li>
                </ul>
              </div>
            </div>
            
            {/* Availability & Sub-processors */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem' }}>
              <div>
                <h2 style={{ fontSize: '1.75rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>Availability</h2>
                <ul style={{ color: 'var(--text-secondary)', lineHeight: 1.6, paddingLeft: '1.25rem' }}>
                  <li style={{ marginBottom: '0.5rem' }}>Daily backup and restore verification</li>
                  <li style={{ marginBottom: '0.5rem' }}>Proven RPO: 15 minutes</li>
                  <li style={{ marginBottom: '0.5rem' }}>Proven RTO: 4 hours</li>
                </ul>
              </div>
              <div>
                <h2 style={{ fontSize: '1.75rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>Sub-processors</h2>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>We partner with trusted infrastructure providers:</p>
                <ul style={{ color: 'var(--text-secondary)', lineHeight: 1.6, paddingLeft: '1.25rem' }}>
                  <li style={{ marginBottom: '0.5rem' }}>AWS (Hosting & Infrastructure, Mumbai Region)</li>
                  <li style={{ marginBottom: '0.5rem' }}>MongoDB Atlas (Database, Mumbai Region)</li>
                  <li style={{ marginBottom: '0.5rem' }}>Cloudflare (CDN and WAF)</li>
                </ul>
              </div>
            </div>

            {/* Documents & CTA */}
            <div style={{ marginTop: '3rem', padding: 'clamp(1.5rem, 4vw, 3rem)', background: 'rgba(255,255,255,0.02)', borderRadius: 'var(--radius-xl)', border: '1px solid rgba(255,255,255,0.05)', textAlign: 'center' }}>
              <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', marginBottom: '1rem', color: 'var(--text-primary)', fontWeight: 800 }}>Security Documents</h2>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '1rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
                Access our DPA template, security whitepaper, and VAPT summary.
              </p>
              <Link href="/demo" className="btn btn-primary btn-lg">Request the security pack</Link>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
