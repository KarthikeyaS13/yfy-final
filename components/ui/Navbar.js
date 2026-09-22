'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown, Rocket, ShieldCheck, Users, BarChart3, Presentation, Globe, BookOpen, Layers, Target, Coins, TrendingUp, Settings, UserPlus, LogOut, Zap, Lock, Briefcase, Map, History, FileText } from 'lucide-react';

const navLinks = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: "Who it's for",
    mega: true,
    cols: [
      {
        title: 'By situation',
        links: [
          { label: 'Principal Employers', href: '/for/principal-employers', desc: 'You engage contract labour through vendors', icon: <Users size={18} /> },
          { label: 'Staffing & Manpower Agencies', href: '/for/staffing-agencies', desc: 'You supply workers to client sites', icon: <Briefcase size={18} /> },
          { label: 'Staffing Proof Pack', href: '/compliance-proof-pack', desc: 'Tamper-proof client audit pack', icon: <FileText size={18} /> },
          { label: 'Multi-State Employers', href: '/for/multi-state-employers', desc: 'Payroll and statutory across many states', icon: <Globe size={18} /> },
        ]
      },
      {
        title: 'By industry',
        links: [
          { label: 'Manufacturing & Pharma', href: '/industries/manufacturing', desc: 'Multi-plant, contract-labour heavy', icon: <Settings size={18} /> },
          { label: 'Facility Management & Security', href: '/industries/facility-management', desc: 'High headcount, thin margins', icon: <ShieldCheck size={18} /> },
          { label: 'Logistics & Warehousing', href: '/industries/logistics', desc: 'Seasonal ramps, multi-site', icon: <Rocket size={18} /> },
        ]
      },
      {
        title: 'By role',
        links: [
          { label: 'Finance & CFO', href: '/roles/finance', desc: 'Liability, cost, controls', icon: <Coins size={18} /> },
          { label: 'HR & IR Leaders', href: '/roles/hr', desc: 'Operations and statutory', icon: <Users size={18} /> },
          { label: 'IT & Security', href: '/roles/it', desc: 'Architecture and review', icon: <Lock size={18} /> },
        ]
      }
    ]
  },
  {
    label: 'Platform',
    mega: true,
    cols: [
      {
        title: 'Platform Overview',
        links: [
          { label: 'How the statutory engine works', href: '/platform', desc: 'Applicability → rules → returns → evidence', icon: <Layers size={18} /> },
          { label: 'Statutory coverage by state', href: '/coverage', desc: 'What we load, where, verified when', icon: <Map size={18} /> },
          { label: 'Migration & replay', href: '/platform/migration', desc: 'See every variance before you commit', icon: <History size={18} /> },
          { label: 'Security & architecture', href: '/trust', desc: 'Tenant isolation, SSO, encryption, ISO', icon: <ShieldCheck size={18} /> },
          { label: 'Integrations', href: '/integrations', desc: 'What connects today', icon: <Globe size={18} /> },
        ]
      }
    ]
  },
  {
    label: 'Products',
    mega: true,
    cols: [
      {
        title: 'Contract labour & compliance',
        links: [
          { label: 'Contractor Bill Verification', href: '/products/contract-labour', desc: 'Automate verification', icon: <ShieldCheck size={18} /> },
          { label: 'Statutory Compliance & Returns', href: '/products/compliance', desc: 'PF, ESI, PT, LWF', icon: <Coins size={18} /> },
          { label: 'Compliance Calendar & Obligations', href: '/products/alerts', desc: 'Never miss a date', icon: <Zap size={18} /> },
          { label: 'Evidence Vault', href: '/products/evault', desc: 'Secure document storage', icon: <Lock size={18} /> },
        ]
      },
      {
        title: 'Staffing operations',
        links: [
          { label: 'Client Compliance Proof Packs', href: '/compliance-proof-pack', desc: 'Tamper-proof client packs', icon: <ShieldCheck size={18} /> },
          { label: 'Roster & Site Muster', href: '/products/roster-site-muster', desc: 'Site attendance tracking', icon: <Users size={18} /> },
          { label: 'Multi-Client Payroll', href: '/products/staffing', desc: 'Handle complex rules', icon: <Coins size={18} /> },
          { label: 'Client Billing & GST', href: '/products/client-billing-gst', desc: 'Accurate invoicing', icon: <Presentation size={18} /> },
          { label: 'Agency Profitability', href: '/products/agency-profitability', desc: 'Margin analytics', icon: <TrendingUp size={18} /> },
        ]
      },
      {
        title: 'Core HR & payroll',
        links: [
          { label: 'Payroll & Statutory', href: '/products/payroll', desc: 'Computed, evidenced, filed', icon: <Coins size={18} /> },
          { label: 'Core HRMS & Attendance', href: '/products/hrms', desc: 'Unified employee data', icon: <Users size={18} /> },
          { label: 'Leave & Timesheets', href: '/products/leave-timesheets', desc: 'Statutory floor & payroll join', icon: <Clock size={18} /> },
          { label: 'Expense Management', href: '/products/expense-management', desc: 'Claim processing', icon: <Coins size={18} /> },
        ]
      },
      {
        title: 'Talent & platform',
        links: [
          { label: 'Recruitment & ATS', href: '/products/ats', desc: 'Hiring pipeline', icon: <UserPlus size={18} /> },
          { label: 'Performance', href: '/products/pms', desc: 'Goal tracking', icon: <Target size={18} /> },
          { label: 'Learning', href: '/products/lms', desc: 'Training courses', icon: <BookOpen size={18} /> },
          { label: 'Workforce Planning', href: '/products/planning', desc: 'Headcount strategy', icon: <Layers size={18} /> },
          { label: 'Assets', href: '/products/asset-management', desc: 'IT equipment', icon: <Layers size={18} /> },
          { label: 'Service Desk', href: '/products/service-desk', desc: 'Internal employee desk', icon: <Settings size={18} /> },
        ]
      }
    ]
  },
  {
    label: 'Pricing',
    href: '/pricing',
  },
  {
    label: 'Resources',
    mega: true,
    cols: [
      {
        title: 'Resources',
        links: [
          { label: 'Blog', href: '/blog', desc: 'Insights', icon: <BookOpen size={18} /> },
          { label: 'Case Studies', href: '/case-studies', desc: 'Coming soon...', badge: 'Coming Soon', icon: <Presentation size={18} /> },
          { label: 'Statutory Coverage Matrix', href: '/coverage', desc: 'State-by-state list', icon: <Map size={18} /> },
          { label: 'Compliance Calendar', href: '/resources/compliance-calendar', desc: 'Key dates', icon: <Zap size={18} /> },
          { label: 'Labour Codes Impact Guide', href: '/blog/indian-labour-codes-2020-guide', desc: 'Readiness guide', icon: <BookOpen size={18} /> },
          { label: 'Exposure Calculator', href: '/tools/exposure-calculator', desc: 'Calculate liability', icon: <TrendingUp size={18} /> },
          { label: 'Community', href: '/community', desc: 'Coming soon...', badge: 'Coming Soon', icon: <Users size={18} /> },
          { label: 'Partners', href: '/partners', desc: 'Agencies', icon: <Globe size={18} /> },
        ]
      }
    ]
  }
];

function Clock({ size }) {
    return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>;
}

function MegaMenuContent({ cols }) {
  const [activeIdx, setActiveIdx] = useState(0);

  if (cols.length === 1) {
    return (
      <div className="mega-grid">
        {cols.map((col) => (
          <div key={col.title} className="mega-col">
            <div className="col-title">{col.title}</div>
            {col.links.map((link) => (
              <Link key={link.label} href={link.href} className="nav-card">
                <div className="nav-card-icon">{link.icon}</div>
                <div className="nav-card-content">
                  <span className="nav-card-label" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    {link.label}
                    {link.badge && (
                      <span style={{ fontSize: '0.68rem', padding: '1px 7px', borderRadius: '9999px', background: 'rgba(192, 126, 240, 0.15)', border: '1px solid rgba(192, 126, 240, 0.4)', color: '#C07EF0', fontWeight: 700, letterSpacing: '0.03em' }}>
                        {link.badge}
                      </span>
                    )}
                  </span>
                  <span className="nav-card-desc">{link.desc}</span>
                </div>
              </Link>
            ))}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="mega-two-pane" style={{ display: 'flex', width: '620px', minHeight: 'auto' }}>
      {/* Left Pane - Tabs */}
      <div className="mega-left-pane" style={{ width: '130px', borderRight: '1px solid rgba(255,255,255,0.05)', paddingRight: '0.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        {cols.map((col, idx) => (
          <button 
            key={col.title} 
            onClick={() => setActiveIdx(idx)}
            onMouseEnter={() => setActiveIdx(idx)}
            style={{
              textAlign: 'right',
              background: activeIdx === idx ? 'rgba(107, 31, 162, 0.2)' : 'transparent',
              color: activeIdx === idx ? '#fff' : 'var(--text-secondary)',
              border: 'none',
              padding: '0.85rem 0.5rem',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: 600,
              fontSize: '0.9rem',
              display: 'flex',
              justifyContent: 'flex-end',
              gap: '0.5rem',
              alignItems: 'center',
              transition: 'all 0.2s',
              fontFamily: 'inherit'
            }}
          >
            {col.title}
            {activeIdx === idx && <ChevronDown size={14} style={{ transform: 'rotate(-90deg)', opacity: 0.8 }} />}
          </button>
        ))}
      </div>

      {/* Right Pane - Content */}
      <div className="mega-right-pane" style={{ flex: 1, paddingLeft: '1rem' }}>
        <div className="col-title" style={{ marginBottom: '1rem', color: 'var(--brand-xlight)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
          {cols[activeIdx].title}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          {cols[activeIdx].links.map((link) => (
            <Link key={link.label} href={link.href} className="nav-card">
              <div className="nav-card-icon">{link.icon}</div>
              <div className="nav-card-content">
                <span className="nav-card-label" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.2rem' }}>
                  {link.label}
                  {link.badge && (
                    <span style={{ fontSize: '0.68rem', padding: '1px 7px', borderRadius: '9999px', background: 'rgba(192, 126, 240, 0.15)', border: '1px solid rgba(192, 126, 240, 0.4)', color: '#C07EF0', fontWeight: 700, letterSpacing: '0.03em' }}>
                      {link.badge}
                    </span>
                  )}
                </span>
                <span className="nav-card-desc" style={{ display: 'block', fontSize: '0.78rem', color: 'var(--text-muted)', lineHeight: 1.4 }}>{link.desc}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const toggleDropdown = (label) => {
    if (activeDropdown === label) {
       setActiveDropdown(null);
    } else {
       setActiveDropdown(label);
    }
  };

  return (
    <>
      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          background: rgba(14, 6, 24, 0.85);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-bottom: 1px solid rgba(107, 31, 162, 0.25);
        }
        .navbar.scrolled {
          background: rgba(14, 6, 24, 0.98);
          border-bottom: 1px solid rgba(155, 61, 216, 0.4);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
        }
        .navbar-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 72px;
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 2rem;
        }
        .nav-logo {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          text-decoration: none;
          z-index: 1001;
        }
        .nav-logo-mark {
          width: 38px;
          height: 38px;
          background: radial-gradient(ellipse at 50% 40%, #7A25B8, #6B1FA2 50%, #4A1070);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-display);
          font-size: 1.1rem;
          font-weight: 900;
          color: #fff;
          box-shadow: 0 4px 16px rgba(107,31,162,0.4);
        }
        .nav-logo-text {
          font-family: var(--font-display);
          font-size: 1.35rem;
          font-weight: 800;
          background: var(--gradient-silver);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          letter-spacing: -0.02em;
        }
        .nav-links {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .nav-item {
          position: relative;
        }
        .nav-link {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          padding: 0.6rem 1rem;
          font-size: 0.95rem;
          font-weight: 500;
          color: var(--text-secondary);
          text-decoration: none;
          border-radius: var(--radius-md);
          transition: all 0.2s ease;
          background: transparent;
          border: none;
          cursor: pointer;
        }
        .nav-link:hover {
          color: var(--text-primary);
          background: rgba(107, 31, 162, 0.12);
        }
        .nav-cta {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        .mobile-toggle {
          display: none;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: rgba(107, 31, 162, 0.35);
          border: 1px solid rgba(192, 126, 240, 0.45);
          color: #ffffff;
          cursor: pointer;
          z-index: 1002;
          padding: 0;
          transition: all 0.2s ease;
          flex-shrink: 0;
        }
        .mobile-toggle:hover, .mobile-toggle:active {
          background: rgba(155, 61, 216, 0.5);
          border-color: #C07EF0;
          box-shadow: 0 0 16px rgba(155, 61, 216, 0.5);
        }

        /* Mega/Dropdown Logic */
        .dropdown-pane {
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%) translateY(10px);
          background: rgba(14, 6, 28, 0.98);
          border: 1px solid var(--border);
          border-radius: var(--radius-xl);
          padding: 1.5rem;
          backdrop-filter: blur(32px);
          -webkit-backdrop-filter: blur(32px);
          box-shadow: 0 24px 64px rgba(0,0,0,0.6);
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
          z-index: 1000;
        }
        .nav-item:hover .dropdown-pane {
          opacity: 1;
          visibility: visible;
          transform: translateX(-50%) translateY(0);
        }
        .mega-grid {
          display: flex;
          gap: 1.5rem;
        }
        .mega-col {
          width: 260px;
        }
        .col-title {
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--brand-xlight);
          margin-bottom: 1rem;
          padding-left: 0.5rem;
        }
        .nav-card {
          display: flex;
          gap: 1rem;
          padding: 0.75rem;
          border-radius: var(--radius-lg);
          text-decoration: none;
          transition: all 0.2s ease;
        }
        .nav-card:hover {
          background: rgba(107, 31, 162, 0.2);
        }
        .nav-card-icon {
          width: 34px;
          height: 34px;
          background: rgba(107, 31, 162, 0.15);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--brand-light);
          flex-shrink: 0;
        }
        .nav-card-label {
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 0.2rem;
          display: block;
        }
        .nav-card-desc {
          font-size: 0.78rem;
          color: var(--text-muted);
          line-height: 1.4;
          display: block;
        }

        /* Mobile Drawer */
        .mobile-drawer {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: #0E0618;
          z-index: 1000;
          padding: 80px 1.5rem 2rem;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          transform: translateY(-100%);
          transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          overflow-y: auto;
        }
        .mobile-drawer.open {
          transform: translateY(0);
        }
        .mobile-nav-link {
          font-size: 1.25rem;
          font-weight: 600;
          color: var(--text-primary);
          text-decoration: none;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.75rem 0;
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }
        .mobile-sub-menu {
          padding: 0.5rem 0 1rem 1rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .mobile-sub-link {
          text-decoration: none;
          display: flex;
          gap: 1rem;
          align-items: center;
        }

        @media (max-width: 1024px) {
          .nav-links, .nav-cta .btn {
            display: none !important;
          }
          .mobile-toggle {
            display: flex !important;
          }
          .navbar-inner {
            padding: 0 1.25rem;
          }
        }
        @media (max-width: 480px) {
          .navbar-inner {
            padding: 0 1rem;
          }
        }
      `}</style>

      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="navbar-inner">
          <Link href="/" className="nav-logo">
            <img src="/yfy-logo.jpg" alt="yfy logo" style={{ width: '48px', height: '48px', borderRadius: '12px' }} />
          </Link>

          <div className="nav-links">
            {navLinks.map((item) => (
              <div key={item.label} className="nav-item">
                {item.href ? (
                  <Link href={item.href} className="nav-link">
                    {item.label} {(item.mega || item.dropdown) && <ChevronDown size={14} />}
                  </Link>
                ) : (
                  <button className="nav-link">
                    {item.label} <ChevronDown size={14} />
                  </button>
                )}

                {/* Desktop Mega Menu */}
                {item.mega && (
                  <div className="dropdown-pane">
                    <MegaMenuContent cols={item.cols} />
                  </div>
                )}

                {/* Desktop Simple Dropdown */}
                {item.dropdown && (
                  <div className="dropdown-pane" style={{ width: '220px', padding: '1rem' }}>
                    {item.dropdown.map((link) => (
                      <Link key={link.label} href={link.href} className="nav-link" style={{ width: '100%' }}>
                        {link.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="nav-cta">
            <Link href="/exposure-report" className="btn btn-primary btn-sm">Get your exposure report</Link>
            
            <button 
              className="mobile-toggle" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            >
              {isMenuOpen ? <X size={24} strokeWidth={2.5} /> : <Menu size={24} strokeWidth={2.5} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${isMenuOpen ? 'open' : ''}`}>
        {navLinks.map((item) => (
          <div key={`mobile-${item.label}`} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              {item.href ? (
                <Link 
                  href={item.href} 
                  className="mobile-nav-link" 
                  style={{ borderBottom: 'none', flex: 1 }} 
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ) : (
                <div 
                  className="mobile-nav-link" 
                  style={{ borderBottom: 'none', flex: 1, cursor: 'pointer' }} 
                  onClick={() => toggleDropdown(item.label)}
                >
                  {item.label}
                </div>
              )}

              {(item.mega || item.dropdown) && (
                <div 
                  onClick={() => toggleDropdown(item.label)}
                  style={{ 
                    padding: '1rem', 
                    cursor: 'pointer',
                    color: 'var(--brand-light)'
                  }}
                  aria-label={`Toggle ${item.label} sub-menu`}
                >
                  <ChevronDown size={22} style={{ 
                    transform: activeDropdown === item.label ? 'rotate(180deg)' : 'none', 
                    transition: 'transform 0.3s ease' 
                  }} />
                </div>
              )}
            </div>

            {activeDropdown === item.label && (
              <div className="mobile-sub-menu" style={{ background: 'rgba(255,255,255,0.02)', borderRadius: '12px', margin: '0 0.5rem 1rem' }}>
                {item.mega ? (
                  item.cols.flatMap(c => c.links).map(link => (
                    <Link key={link.label} href={link.href} className="mobile-sub-link" onClick={() => setIsMenuOpen(false)} style={{ padding: '0.8rem' }}>
                       <div className="nav-card-icon" style={{ width: '30px', height: '30px' }}>{link.icon}</div>
                       <div>
                         <div style={{ color: 'var(--text-primary)', fontWeight: 600, fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                           {link.label}
                           {link.badge && (
                             <span style={{ fontSize: '0.65rem', padding: '1px 6px', borderRadius: '9999px', background: 'rgba(192, 126, 240, 0.15)', border: '1px solid rgba(192, 126, 240, 0.4)', color: '#C07EF0', fontWeight: 700 }}>
                               {link.badge}
                             </span>
                           )}
                         </div>
                         <div style={{ color: 'var(--text-muted)', fontSize: '0.75rem' }}>{link.desc}</div>
                       </div>
                    </Link>
                  ))
                ) : (
                  item.dropdown?.map(link => (
                    <Link key={link.label} href={link.href} className="mobile-nav-link" style={{ fontSize: '1.1rem', border: 'none', paddingLeft: '1rem' }} onClick={() => setIsMenuOpen(false)}>
                      {link.label}
                    </Link>
                  ))
                )}
              </div>
            )}
          </div>
        ))}
        
        <div style={{ marginTop: 'auto', padding: '1.5rem 0', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <Link href="/exposure-report" className="btn btn-primary" style={{width: '100%', textAlign: 'center'}} onClick={() => setIsMenuOpen(false)}>Get your exposure report</Link>
        </div>
      </div>
    </>
  );
}
