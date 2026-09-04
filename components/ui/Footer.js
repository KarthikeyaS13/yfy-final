'use client';

import NewsletterForm from '@/app/NewsletterForm';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <style suppressHydrationWarning dangerouslySetInnerHTML={{ __html: `
        .footer {
          background: linear-gradient(180deg, var(--bg-base) 0%, #10061e 100%);
          border-top: 1px solid var(--border);
          padding: 5rem 0 2.5rem;
          margin-top: 0;
          position: relative;
          z-index: 10;
        }
        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr 1.5fr;
          gap: 3rem;
          margin-bottom: 4rem;
        }
        .footer-brand {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }
        .footer-logo {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          text-decoration: none;
        }
        .footer-logo-mark {
          width: 42px;
          height: 42px;
          background: radial-gradient(ellipse at 50% 40%, #7A25B8, #6B1FA2 50%, #4A1070);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-display);
          font-size: 1.1rem;
          font-weight: 900;
          color: #fff;
          box-shadow: 0 4px 20px rgba(107,31,162,0.4);
        }
        .footer-logo-text {
          font-family: var(--font-display);
          font-size: 1.4rem;
          font-weight: 800;
          background: var(--gradient-silver);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          letter-spacing: -0.02em;
        }
        .footer-tagline {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.7;
          max-width: 320px;
        }
        .footer-iso-badges {
          display: flex;
          gap: 0.75rem;
          flex-wrap: wrap;
          margin-top: 0.5rem;
        }
        .footer-iso-badge {
          padding: 0.45rem 0.85rem;
          background: rgba(192,184,216,0.05);
          border: 1px solid rgba(192,184,216,0.15);
          border-radius: var(--radius-sm);
          font-size: 0.7rem;
          font-weight: 700;
          color: var(--silver);
          letter-spacing: 0.05em;
        }
        .footer-col-title {
          font-family: var(--font-display);
          font-size: 0.85rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--brand-xlight);
          margin-bottom: 1.5rem;
        }
        .footer-links {
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
        }
        .footer-links a {
          font-size: 0.95rem;
          color: var(--text-secondary);
          text-decoration: none;
          transition: all var(--transition-fast);
        }
        .footer-links a:hover { 
          color: var(--text-primary); 
          padding-left: 4px;
        }
        .footer-newsletter-desc {
          font-size: 0.9rem;
          color: var(--text-secondary);
          margin-bottom: 1.25rem;
          line-height: 1.7;
        }
        .footer-form {
          display: flex;
          gap: 0.5rem;
          align-items: stretch;
        }
        .footer-input {
          flex: 1;
          min-width: 0;
          padding: 10px 14px;
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: #fff;
          font-family: inherit;
          font-size: 0.9rem;
          transition: all 0.3s ease;
          outline: none;
        }
        .footer-input:focus {
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(155, 61, 216, 0.8);
          box-shadow: 0 0 0 3px rgba(155, 61, 216, 0.2);
        }
        .footer-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 2.5rem;
          border-top: 1px solid var(--border);
          flex-wrap: wrap;
          gap: 1.5rem;
        }
        .footer-copyright {
          font-size: 0.9rem;
          color: var(--text-muted);
        }
        .footer-legal-links {
          display: flex;
          gap: 2rem;
        }
        .footer-legal-links a {
          font-size: 0.9rem;
          color: var(--text-muted);
          text-decoration: none;
          transition: color var(--transition-fast);
        }
        .footer-legal-links a:hover { color: var(--text-primary); }
        .footer-social {
          display: flex;
          gap: 1rem;
        }
        .footer-social a {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(107,31,162,0.1);
          border: 1px solid var(--border);
          border-radius: 10px;
          color: var(--text-secondary);
          transition: all 0.3s ease;
        }
        .footer-social a:hover {
          background: rgba(107,31,162,0.3);
          color: var(--text-primary);
          border-color: rgba(155,61,216,0.5);
          transform: translateY(-3px);
        }

        @media (max-width: 1200px) {
          .footer-grid { grid-template-columns: 2fr 1fr 1fr; }
          .footer-brand { grid-column: 1 / -1; }
        }
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr 1fr; gap: 2.5rem; }
          .footer-brand { grid-column: 1 / -1; flex-direction: column; text-align: center; align-items: center; }
          .footer-logo { justify-content: center; }
          .footer-tagline { margin: 0 auto; }
          .footer-iso-badges { justify-content: center; }
          .footer-bottom { flex-direction: column; text-align: center; gap: 1rem; }
          .footer-social { justify-content: center; }
          .footer-legal-links { justify-content: center; flex-wrap: wrap; gap: 1.25rem; }
        }
        @media (max-width: 520px) {
          .footer-grid { grid-template-columns: 1fr; gap: 2rem; }
        }
      `}} />

      <footer className="footer" id="footer">
        <div className="container-lg">
          <div className="footer-grid">
            {/* Brand */}
            <div className="footer-brand">
              <a href="/" className="footer-logo">
                <img src="/yfy-logo.jpg" alt="yfy logo" style={{ width: '54px', height: '54px', borderRadius: '14px' }} />
              </a>
              <p className="footer-tagline">
                The statutory compliance &amp; contractor verification engine for Indian enterprise. Sits alongside your existing HRMS or ERP to eliminate balance-sheet liabilities.
              </p>
              <div className="footer-iso-badges">
                <span className="footer-iso-badge">ISO 9001:2015</span>
                <span className="footer-iso-badge">ISO 27001:2022</span>
                <span className="footer-iso-badge">ISO 27701:2019</span>
              </div>
            </div>

            {/* Who it's for */}
            <div>
              <div className="footer-col-title">Who it's for</div>
              <div className="footer-links">
                <a href="/for/principal-employers">Principal Employers</a>
                <a href="/for/staffing-agencies">Staffing Agencies</a>
                <a href="/compliance-proof-pack">Staffing Proof Pack</a>
                <a href="/for/multi-state-employers">Multi-State Employers</a>
                <a href="/roles/finance">Finance & CFO</a>
                <a href="/roles/hr">HR & IR Leaders</a>
                <a href="/roles/it">IT & Security</a>
              </div>
            </div>

            {/* Platform */}
            <div>
              <div className="footer-col-title">Platform</div>
              <div className="footer-links">
                <a href="/platform">Platform Overview</a>
                <a href="/coverage">Coverage by State</a>
                <a href="/platform/migration">Migration & Replay</a>
                <a href="/trust">Security & Trust</a>
                <a href="/integrations">Integrations</a>
                <a href="/pricing">Pricing</a>
              </div>
            </div>

            {/* Products */}
            <div>
              <div className="footer-col-title">Products</div>
              <div className="footer-links">
                <a href="/products/contract-labour">Contract Labour</a>
                <a href="/products/staffing">Staffing Operations</a>
                <a href="/compliance-proof-pack">Compliance Proof Pack</a>
                <a href="/products/payroll">Core HR &amp; Payroll</a>
                <a href="/products/compliance">Compliance Intelligence</a>
                <a href="/tools/exposure-calculator">Exposure Calculator</a>
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <div className="footer-col-title">Compliance Alert</div>
              <p className="footer-newsletter-desc">
                Get monthly compliance due dates delivered to your inbox.
              </p>
              <NewsletterForm />
            </div>
          </div>

          {/* Bottom */}
          <div className="footer-bottom">
            <p className="footer-copyright">
              © {currentYear} Finnovo Tech Functional Private Limited. All rights reserved. yfy® is a registered trademark.
            </p>
            <div className="footer-legal-links">
              <a href="/privacy">Privacy Policy</a>
              <a href="/terms">Terms of Service</a>
              <a href="/trust">Trust Centre</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
