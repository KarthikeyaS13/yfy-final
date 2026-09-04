"use client";

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { 
  ArrowRight, 
  CheckCircle2, 
  Calendar as CalendarIcon, 
  Download, 
  Sparkles, 
  ShieldCheck, 
  Building2, 
  AlertCircle,
  Loader2
} from 'lucide-react';
import styles from './Demo.module.css';

const MODULE_CONFIGS = {
  'roster-site-muster': {
    name: 'Roster & Site Muster',
    tag: 'Staffing Operations',
    headline: 'See Roster & Site Muster in Action.',
    desc: 'Experience how our automated shift roster scheduling, geo-fenced mobile muster, and biometric sync eliminate manual muster roll errors and overtime leakage.',
    features: [
      'Dynamic shift & roster planning across thousands of deployed contract personnel',
      'Biometric & geo-fenced mobile muster punch-in with live GPS verification',
      'Real-time overtime & dual-shift validation conforming to the Factories Act',
    ],
  },
  'client-billing-gst': {
    name: 'Client Billing & GST Engine',
    tag: 'Staffing Operations',
    headline: 'See Client Billing & GST Automation in Action.',
    desc: 'Discover how automated contract rate card calculation, GST invoicing, and wage-backed compliance annexures accelerate your agency receivables.',
    features: [
      'Automated billing calculation linked directly to audited client muster rolls',
      'GST-compliant tax invoices with automatic HSN/SAC code derivation',
      'Instant statutory compliance annexures (EPF/ESIC/PT) attached to each invoice',
    ],
  },
  'agency-profitability': {
    name: 'Agency Profitability & Margin Intelligence',
    tag: 'Staffing Operations',
    headline: 'See Agency Profitability Intelligence in Action.',
    desc: 'Gain real-time visibility into contract-level gross margins, DSO tracking, unbilled wages, and statutory cash flow leakage.',
    features: [
      'Real-time gross margin & contribution margin analytics by client & site',
      'Unbilled wage & working capital exposure alerts to protect cash flow',
      'Automated DSO & receivables aging dashboard with margin leakage detection',
    ],
  },
  'leave-timesheets': {
    name: 'Leave & Multi-Device Timesheets',
    tag: 'Core HR & Payroll',
    headline: 'See Leave & Timesheet Automation in Action.',
    desc: 'Streamline contractor and employee attendance across biometric kiosks, mobile GPS, and supervisor muster apps with automated leave policy enforcement.',
    features: [
      'Multi-device timesheet capture with biometric, geo-fence, and facial recognition',
      'State-specific statutory leave ledgers (Earned, Casual, Sick) per Shops & Est. Act',
      'Seamless 1-click sync to payroll engine for zero-delay salary disbursements',
    ],
  },
  'service-desk': {
    name: 'Talent & Operations Service Desk',
    tag: 'Talent & Platform',
    headline: 'See the Talent Service Desk in Action.',
    desc: 'Empower contract staff and HR operations with automated dispute tickets, payslip queries, PF transfer tracking, and SLA escalation matrices.',
    features: [
      'Multi-lingual mobile ticketing portal for frontline and contract personnel',
      'Automated categorization & routing for salary, PF/ESI, and leave disputes',
      'Enterprise SLA monitoring and audit trail for ISO & client compliance',
    ],
  },
  'payroll': {
    name: 'Enterprise Payroll Engine',
    tag: 'Core HR & Payroll',
    headline: 'See the 100k+ Headcount Payroll Engine in Action.',
    desc: 'Witness sub-second payroll processing for large distributed workforces across multiple states with statutory gross-to-net calculations.',
    features: [
      'Instant statutory salary computation across 28 states and union territories',
      'Automated TDS, PF, ESI, and Professional Tax calculations and returns',
      'Bank-grade payout file generation with automated maker-checker workflows',
    ],
  },
  'contract-labour': {
    name: 'Contract Labour (CLRA) Governance',
    tag: 'Statutory Compliance',
    headline: 'See Principal Employer CLRA Governance in Action.',
    desc: 'Track and verify contractor licenses, wage parity, muster rolls, and statutory challans before clearing monthly contractor invoices.',
    features: [
      'Automated contractor compliance scorecards and real-time risk index',
      'Pre-billing verification of EPF/ESIC Electronic Challan Returns (ECR)',
      'Principal Employer indemnity protection under Contract Labour (R&A) Act',
    ],
  },
};

const DEFAULT_CONFIG = {
  name: 'Platform Core',
  tag: 'Enterprise Demo',
  headline: 'See yfy® in Action.',
  desc: 'Experience how our compliance-first payroll engine automates complex Indian labour laws, saving you hours of manual calculation and securing your business against costly penalties.',
  features: [
    'Guided platform walkthrough customized to your HR, payroll, and statutory requirements',
    'Statutory compliance review of your current setup with a labour law architect',
    'Direct consultation with our CA and compliance architects, not just sales reps',
  ],
};

function DemoContent() {
  const searchParams = useSearchParams();

  // Instant URL detection
  const urlModule = (searchParams.get('module') || '').toLowerCase().trim();
  const initialModuleSlug = MODULE_CONFIGS[urlModule] ? urlModule : 'platform';
  const initialConfig = MODULE_CONFIGS[initialModuleSlug] || DEFAULT_CONFIG;
  const initialPersona = searchParams.get('persona') || searchParams.get('role') || '';

  const [activeModuleSlug, setActiveModuleSlug] = useState(initialModuleSlug);
  const [activeConfig, setActiveConfig] = useState(initialConfig);
  const [attributionInfo, setAttributionInfo] = useState({
    ctaText: searchParams.get('cta_text') || '',
    ctaId: searchParams.get('cta') || '',
    sourcePage: searchParams.get('source') || '',
    firstTouchPage: '',
    referrer: '',
    utm: {},
  });

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    workEmail: '',
    phone: '',
    company: '',
    employeeCount: '',
    persona: initialPersona,
    interestedModule: initialConfig.name,
    notes: '',
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState(null);
  const [submitError, setSubmitError] = useState('');

  // Hydrate module and attribution data
  useEffect(() => {
    const rawModule = (searchParams.get('module') || '').toLowerCase().trim();
    const personaParam = searchParams.get('persona') || searchParams.get('role') || '';
    const ctaParam = searchParams.get('cta') || '';
    const sourceParam = searchParams.get('source') || '';

    // Check sessionStorage attribution fallback
    let sessionModule = '';
    let sessionCtaText = '';
    let sessionCtaId = '';
    let sessionSource = '';
    let sessionFirstTouch = '';
    let sessionReferrer = '';
    let sessionUtm = {};

    if (typeof window !== 'undefined') {
      try {
        sessionModule = sessionStorage.getItem('yfy_last_module') || '';
        sessionCtaText = sessionStorage.getItem('yfy_last_cta_text') || '';
        sessionCtaId = sessionStorage.getItem('yfy_last_cta_id') || '';
        sessionSource = sessionStorage.getItem('yfy_last_cta_source_page') || '';
        sessionFirstTouch = sessionStorage.getItem('yfy_first_touch') || '';
        sessionReferrer = sessionStorage.getItem('yfy_referrer') || '';
        const rawUtm = sessionStorage.getItem('yfy_utm');
        if (rawUtm) sessionUtm = JSON.parse(rawUtm);
      } catch (e) {
        console.warn('Attribution read error:', e);
      }
    }

    // Resolve module
    let resolvedSlug = rawModule;
    if (!resolvedSlug && sessionModule) {
      const match = Object.keys(MODULE_CONFIGS).find(key => 
        MODULE_CONFIGS[key].name.toLowerCase() === sessionModule.toLowerCase()
      );
      if (match) resolvedSlug = match;
    }

    if (resolvedSlug && MODULE_CONFIGS[resolvedSlug]) {
      setActiveModuleSlug(resolvedSlug);
      setActiveConfig(MODULE_CONFIGS[resolvedSlug]);
      setFormData(prev => ({
        ...prev,
        interestedModule: MODULE_CONFIGS[resolvedSlug].name,
      }));
    } else {
      setActiveConfig(DEFAULT_CONFIG);
      setFormData(prev => ({
        ...prev,
        interestedModule: prev.interestedModule || 'Platform Core',
      }));
    }

    // Pre-populate persona if provided
    if (personaParam) {
      setFormData(prev => ({
        ...prev,
        persona: personaParam,
      }));
    }

    setAttributionInfo({
      ctaText: searchParams.get('cta_text') || sessionCtaText || 'Demo CTA',
      ctaId: ctaParam || sessionCtaId || 'direct',
      sourcePage: sourceParam || sessionSource || (typeof window !== 'undefined' ? window.location.pathname : ''),
      firstTouchPage: sessionFirstTouch,
      referrer: sessionReferrer,
      utm: sessionUtm,
    });
  }, [searchParams]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitError('');

    try {
      const payload = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        workEmail: formData.workEmail,
        phone: formData.phone,
        company: formData.company,
        employeeCount: formData.employeeCount,
        persona: formData.persona,
        interestedModule: formData.interestedModule || activeConfig.name,
        notes: formData.notes,
        ctaId: attributionInfo.ctaId,
        ctaOrigin: attributionInfo.ctaText,
        sourcePage: attributionInfo.sourcePage,
        firstTouchPage: attributionInfo.firstTouchPage,
        referrer: attributionInfo.referrer,
        utmParams: {
          ...attributionInfo.utm,
          utm_source: searchParams.get('utm_source') || attributionInfo.utm.utm_source,
          utm_medium: searchParams.get('utm_medium') || attributionInfo.utm.utm_medium,
          utm_campaign: searchParams.get('utm_campaign') || attributionInfo.utm.utm_campaign,
        },
      };

      const res = await fetch('/api/demo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (res.ok) {
        setSubmitResult(data);
      } else {
        setSubmitError(data.error || 'Failed to submit demo request. Please try again.');
      }
    } catch {
      setSubmitError('Network error while scheduling demo. Please try again or email sales@yfy.ai.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className={styles.demoPage}>
      <div className={styles.bgOrb1} />
      <div className={styles.bgOrb2} />

      <div className={`container ${styles.containerContent}`}>
        
        {/* Left Column: Copy & Value Proposition */}
        <div className={styles.leftCol}>
          <div className={styles.vipBadge}>
            <div className={styles.vipDot} />
            <span className={styles.vipText}>{activeConfig.tag.toUpperCase()} DEMO</span>
          </div>
          
          <h1 className={styles.title}>
            {activeConfig.headline}
          </h1>
          <p className={styles.subtitle}>
            {activeConfig.desc}
          </p>

          <div className={styles.featureList}>
            {activeConfig.features.map((feat, idx) => (
              <div key={idx} className={styles.featureItem}>
                <div className={styles.featureIconWrap}>
                  <CheckCircle2 color="var(--brand-xlight)" size={20} />
                </div>
                <div>
                  <h4 className={styles.featureTitle}>Feature Pillar {idx + 1}</h4>
                  <p className={styles.featureDesc}>{feat}</p>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.trustedSection}>
            <p className={styles.trustedTitle}>BUILT FOR HIGH-COMPLEXITY ENTERPRISES</p>
            <div className={styles.trustedLogos}>
              <span className={styles.trustedLogo}>100k+ Headcount</span>
              <span className={styles.trustedLogo}>28 States</span>
              <span className={styles.trustedLogo}>Zero Penalties</span>
            </div>
          </div>
        </div>

        {/* Right Column: Lead Form or Confirmation State */}
        <div className={styles.rightCol}>
          <div className={styles.formCard}>

            {submitResult ? (
              /* Success / Calendar Invite Confirmation Card */
              <div className={styles.successCard}>
                <div className={styles.successIconWrap}>
                  <CheckCircle2 color="#10b981" size={36} />
                </div>

                <h3 className={styles.successTitle}>Demo Confirmed!</h3>
                <p className={styles.successDesc}>
                  We have reserved a 30-minute tailored walkthrough session for <strong>{formData.company || 'your team'}</strong> focused on <strong>{submitResult.module}</strong>.
                </p>

                <div className={styles.uidBadge}>
                  Booking Reference: {submitResult.leadUid}
                </div>

                <div className={styles.calendarCard}>
                  <div className={styles.calendarCardTitle}>
                    <CalendarIcon size={18} color="var(--brand-xlight)" />
                    <span>Add to Your Work Calendar</span>
                  </div>
                  <p className={styles.calendarCardDesc}>
                    Lock in your calendar slot now. A confirmation invite has also been dispatched to <strong>{formData.workEmail}</strong>.
                  </p>

                  <div className={styles.calendarActionGroup}>
                    {submitResult.calendarUrl && (
                      <a 
                        href={submitResult.calendarUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={styles.calendarBtnGoogle}
                      >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M19.5 4H18V2h-2v2H8V2H6v2H4.5C3.12 4 2 5.12 2 6.5v13C2 20.88 3.12 22 4.5 22h15c1.38 0 2.5-1.12 2.5-2.5v-13C22 5.12 20.88 4 19.5 4zm0 15.5H4.5V9h15v10.5z" fill="#4285F4"/>
                        </svg>
                        <span>Add to Google Cal</span>
                      </a>
                    )}

                    <a 
                      href={`/api/calendar?type=demo&leadUid=${encodeURIComponent(submitResult.leadUid)}&company=${encodeURIComponent(formData.company)}&module=${encodeURIComponent(submitResult.module)}`}
                      className={styles.calendarBtnIcs}
                      download={`yfy-demo-${submitResult.leadUid}.ics`}
                    >
                      <Download size={16} />
                      <span>Download .ICS</span>
                    </a>
                  </div>
                </div>

                <button 
                  type="button" 
                  onClick={() => {
                    setSubmitResult(null);
                    setFormData({
                      firstName: '',
                      lastName: '',
                      workEmail: '',
                      phone: '',
                      company: '',
                      employeeCount: '',
                      persona: '',
                      interestedModule: activeConfig.name,
                      notes: '',
                    });
                  }}
                  className={styles.resetBtn}
                >
                  Schedule another session or change details
                </button>
              </div>
            ) : (
              /* Request Form */
              <>
                {activeModuleSlug !== 'platform' && (
                  <div className={styles.moduleContextBanner}>
                    <div className={styles.moduleContextIcon}>
                      <Sparkles size={18} color="#e0aaff" />
                    </div>
                    <div>
                      <div className={styles.moduleContextTitle}>
                        Personalized Walkthrough: {activeConfig.name}
                      </div>
                      <div className={styles.moduleContextDesc}>
                        Tailored architecture demo with labour compliance audit preview.
                      </div>
                    </div>
                  </div>
                )}

                <div className={styles.formHeader}>
                  <h3 className={styles.formTitle}>Request Your Demo</h3>
                  <p className={styles.formSubtitle}>Fill out the details below. Our compliance engineers will walk you through live.</p>
                </div>

                {submitError && (
                  <div className={styles.errorBanner}>
                    <AlertCircle size={18} />
                    <span>{submitError}</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className={styles.formFields}>
                  <div className={styles.formRow}>
                    <div className={styles.fieldGroup}>
                      <label className={styles.label}>First Name</label>
                      <input 
                        required 
                        type="text" 
                        name="firstName"
                        className={styles.input} 
                        placeholder="e.g. Rajesh"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        disabled={submitting}
                      />
                    </div>
                    <div className={styles.fieldGroup}>
                      <label className={styles.label}>Last Name</label>
                      <input 
                        required 
                        type="text" 
                        name="lastName"
                        className={styles.input} 
                        placeholder="e.g. Sharma"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        disabled={submitting}
                      />
                    </div>
                  </div>

                  <div className={styles.fieldGroup}>
                    <label className={styles.label}>Work Email</label>
                    <input 
                      required 
                      type="email" 
                      name="workEmail"
                      className={styles.input} 
                      placeholder="name@company.com"
                      value={formData.workEmail}
                      onChange={handleInputChange}
                      disabled={submitting}
                    />
                  </div>

                  <div className={styles.fieldGroup}>
                    <label className={styles.label}>Phone Number</label>
                    <input 
                      required 
                      type="tel" 
                      name="phone"
                      className={styles.input} 
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={handleInputChange}
                      disabled={submitting}
                    />
                  </div>

                  <div className={styles.formRow}>
                    <div className={styles.fieldGroup}>
                      <label className={styles.label}>Company Name</label>
                      <input 
                        required 
                        type="text" 
                        name="company"
                        className={styles.input} 
                        placeholder="e.g. Zenith Staffing Ltd"
                        value={formData.company}
                        onChange={handleInputChange}
                        disabled={submitting}
                      />
                    </div>
                    <div className={styles.fieldGroup}>
                      <label className={styles.label}>Headcount</label>
                      <select 
                        required 
                        name="employeeCount"
                        className={`${styles.input} ${styles.select}`}
                        value={formData.employeeCount}
                        onChange={handleInputChange}
                        disabled={submitting}
                      >
                        <option value="" disabled>Select workforce size</option>
                        <option value="Under 100">Under 100</option>
                        <option value="100-500">100 - 500</option>
                        <option value="500-1000">500 - 1,000</option>
                        <option value="1000-5000">1,000 - 5,000</option>
                        <option value="5000-10000">5,000 - 10,000</option>
                        <option value="10000+">10,000+ (Enterprise)</option>
                      </select>
                    </div>
                  </div>

                  <div className={styles.formRow}>
                    <div className={styles.fieldGroup}>
                      <label className={styles.label}>Organization Profile</label>
                      <select 
                        required 
                        name="persona"
                        className={`${styles.input} ${styles.select}`}
                        value={formData.persona}
                        onChange={handleInputChange}
                        disabled={submitting}
                      >
                        <option value="" disabled>Select your organization</option>
                        <option value="pe">Principal Employer (We hire contractors)</option>
                        <option value="agency">Staffing / Manpower Agency (We supply labour)</option>
                        <option value="multistate">Multi-State Corporate Employer</option>
                        <option value="notsure">Other / Evaluating</option>
                      </select>
                    </div>

                    <div className={styles.fieldGroup}>
                      <label className={styles.label}>Primary Module of Interest</label>
                      <select 
                        name="interestedModule"
                        className={`${styles.input} ${styles.select}`}
                        value={formData.interestedModule}
                        onChange={handleInputChange}
                        disabled={submitting}
                      >
                        <option value="Roster & Site Muster">Roster & Site Muster</option>
                        <option value="Client Billing & GST">Client Billing & GST</option>
                        <option value="Agency Profitability">Agency Profitability</option>
                        <option value="Leave & Timesheets">Leave & Timesheets</option>
                        <option value="Service Desk">Service Desk</option>
                        <option value="Enterprise Payroll Engine">Enterprise Payroll Engine</option>
                        <option value="Contract Labour (CLRA) Governance">Contract Labour (CLRA) Governance</option>
                        <option value="Platform Core">Full Platform Overview</option>
                      </select>
                    </div>
                  </div>

                  <div className={styles.formFooter}>
                    <button 
                      type="submit" 
                      className={styles.submitBtn}
                      disabled={submitting}
                    >
                      {submitting ? (
                        <>
                          <Loader2 size={18} className="spin" />
                          <span>Scheduling Session...</span>
                        </>
                      ) : (
                        <>
                          <span>Schedule Demo & Get Calendar Invite</span>
                          <ArrowRight size={18} />
                        </>
                      )}
                    </button>
                    <p className={styles.termsDoc}>
                      By submitting this form, you agree to our <a href="/privacy" className={styles.termsLink}>Privacy Policy</a> and authorize yfy® to contact you.
                    </p>
                  </div>
                </form>
              </>
            )}

          </div>
        </div>

      </div>
    </div>
  );
}

export default function DemoPage() {
  return (
    <Suspense fallback={
      <div style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
        <Loader2 className="spin" size={32} />
      </div>
    }>
      <DemoContent />
    </Suspense>
  );
}
