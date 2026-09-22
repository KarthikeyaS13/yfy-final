'use client';
import { useState, useMemo } from 'react';
import { CheckCircle2, AlertCircle, Shield, Clock, FileText } from 'lucide-react';
import styles from './FormStyles.module.css';

export default function ExposureReportForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Step 1
    fullName: '',
    workEmail: '',
    phone: '',
    companyName: '',
    // Step 2
    jobTitle: '',
    industry: '',
    ownEmployees: '',
    contractWorkers: '',
    numContractors: '',
    statesOperating: [],
    numSites: '',
    monthlyContractorSpend: '',
    attendanceCapture: '',
    challansCollected: '',
    currentApproach: [],
    trigger: '',
    commercialIntent: '',
    canShareData: 'Yes',
    notes: '',
    consent: false,
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState(null);
  const [submitError, setSubmitError] = useState('');

  // Workforce estimate and complimentary qualification check
  const workforceEstimate = useMemo(() => {
    const ownMap = {
      'Under 100': 50,
      '100-500': 300,
      '500-1,000': 750,
      '1,000-5,000': 2500,
      '5,000+': 6000,
    };
    const contractMap = {
      'Under 100': 50,
      '100-500': 300,
      '500-2,000': 1250,
      '2,000-5,000': 3500,
      '5,000+': 6500,
    };
    const o = ownMap[formData.ownEmployees] || 0;
    const c = contractMap[formData.contractWorkers] || 0;
    return o + c;
  }, [formData.ownEmployees, formData.contractWorkers]);

  const isComplimentary = useMemo(() => {
    return (
      formData.contractWorkers === '2,000-5,000' ||
      formData.contractWorkers === '5,000+' ||
      formData.ownEmployees === '5,000+' ||
      workforceEstimate >= 2000
    );
  }, [formData.contractWorkers, formData.ownEmployees, workforceEstimate]);

  const handleNext = (e) => {
    e.preventDefault();
    setStep(2);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitError('');

    try {
      let sessionData = {};
      if (typeof window !== 'undefined') {
        try {
          sessionData = {
            firstTouchPage: sessionStorage.getItem('yfy_first_touch') || '',
            referrer: sessionStorage.getItem('yfy_referrer') || document.referrer || '',
            utmParams: JSON.parse(sessionStorage.getItem('yfy_utm') || '{}'),
            ctaOrigin: sessionStorage.getItem('yfy_last_cta_text') || 'Get Exposure Report',
            ctaId: sessionStorage.getItem('yfy_last_cta_id') || 'exposure_report_form',
          };
        } catch {
          // ignore
        }
      }

      // Map commercial intent label
      const intentMap = {
        ready_to_pay: 'READY TO PAY ₹2,50,000 (Credited against subscription)',
        enterprise_complimentary: 'COMPLIMENTARY ENTERPRISE ASSESSMENT (Workforce >= 2,000)',
        sow_budget_approval: 'REQUIRE FORMAL SOW & CFO BUDGET CLEARANCE',
        exploring_discussion: 'PRELIMINARY BRIEFING / EXPLORATION ONLY',
      };

      const intentKey = formData.commercialIntent || (isComplimentary ? 'enterprise_complimentary' : 'ready_to_pay');
      const intentLabel = intentMap[intentKey] || intentKey;

      const notesCombined = [
        `[COMMERCIAL READINESS: ${intentLabel}]`,
        `[TOTAL WORKFORCE: ~${workforceEstimate > 0 ? workforceEstimate.toLocaleString('en-IN') : 'N/A'}]`,
        `[COMPLIMENTARY STATUS: ${isComplimentary ? 'ELIGIBLE (>=2k heads)' : 'STANDARD COMMERCIAL (₹2.5L)'}]`,
        `Job Title: ${formData.jobTitle || 'N/A'}`,
        `Industry: ${formData.industry || 'N/A'}`,
        `Own Employees: ${formData.ownEmployees || 'N/A'}`,
        `Contract Workers: ${formData.contractWorkers || 'N/A'}`,
        `Number of Contractors: ${formData.numContractors || 'N/A'}`,
        `Operating States: ${formData.statesOperating.join(', ') || 'N/A'}`,
        `Attendance Capture: ${formData.attendanceCapture || 'N/A'}`,
        `Trigger: ${formData.trigger || 'N/A'}`,
        `Can Share NDA Data: ${formData.canShareData || 'N/A'}`,
        `User Notes: ${formData.notes || 'None'}`
      ].join(' | ');

      const res = await fetch('/api/demo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: formData.fullName,
          workEmail: formData.workEmail,
          phone: formData.phone,
          company: formData.companyName,
          employeeCount: formData.contractWorkers ? `${formData.contractWorkers} contract (${formData.ownEmployees || 'N/A'} own)` : 'Enterprise',
          persona: 'pe',
          interestedModule: 'Contractor Exposure Forensic Report',
          commercialIntent: intentKey,
          isComplimentary,
          totalWorkforce: workforceEstimate,
          notes: notesCombined,
          ctaId: sessionData.ctaId || 'exposure_form_submit',
          ctaOrigin: sessionData.ctaOrigin || 'Forensic Exposure Audit Request',
          sourcePage: '/exposure-report',
          firstTouchPage: sessionData.firstTouchPage || '/exposure-report',
          referrer: sessionData.referrer || '',
          utmParams: sessionData.utmParams || {},
        }),
      });

      const data = await res.json();
      if (res.ok) {
        setSubmitResult(data);
      } else {
        setSubmitError(data.error || 'Failed to submit report request.');
      }
    } catch {
      setSubmitError('Network error. Please try again or email compliance@yfy.ai.');
    } finally {
      setSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox') {
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else if (type === 'select-multiple') {
      const options = Array.from(e.target.selectedOptions, option => option.value);
      setFormData(prev => ({ ...prev, [name]: options }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  return (
    <div className={styles.formWrapper}>
      {submitResult ? (
        <div style={{ textAlign: 'center', padding: '1.5rem 0' }}>
          <div style={{
            width: '64px',
            height: '64px',
            margin: '0 auto 1.25rem',
            background: 'rgba(16, 185, 129, 0.15)',
            border: '2px solid rgba(16, 185, 129, 0.4)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 6 9 17l-5-5"/>
            </svg>
          </div>

          <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#fff', marginBottom: '0.5rem' }}>
            Forensic Audit Request Received
          </h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', maxWidth: '420px', margin: '0 auto 1.25rem', lineHeight: '1.5' }}>
            A Senior Labour Law Architect has been assigned to audit your contractor exposure. We will send the mutual NDA and data ingestion instructions to <strong>{formData.workEmail}</strong>.
          </p>

          <div style={{
            display: 'inline-block',
            background: 'rgba(255, 255, 255, 0.06)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            padding: '6px 14px',
            borderRadius: '6px',
            fontFamily: 'monospace',
            fontSize: '0.85rem',
            color: 'var(--brand-xlight)',
            marginBottom: '1.5rem'
          }}>
            Case File UID: {submitResult.leadUid}
          </div>

          <div style={{
            background: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '12px',
            padding: '1.25rem',
            marginBottom: '1.5rem',
            textAlign: 'left'
          }}>
            <div style={{ fontWeight: 700, color: '#fff', fontSize: '0.9rem', marginBottom: '0.35rem' }}>
              Reserve Debrief Session on Calendar
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', marginBottom: '1rem' }}>
              Hold a preliminary 30-minute forensic findings session with our compliance audit desk:
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
              {submitResult.calendarUrl && (
                <a 
                  href={submitResult.calendarUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{
                    background: '#fff',
                    color: '#1a1a1a',
                    padding: '8px 12px',
                    borderRadius: '8px',
                    fontWeight: 600,
                    fontSize: '0.85rem',
                    textAlign: 'center',
                    textDecoration: 'none'
                  }}
                >
                  Add to Google Cal
                </a>
              )}
              <a 
                href={`/api/calendar?type=demo&leadUid=${encodeURIComponent(submitResult.leadUid)}&company=${encodeURIComponent(formData.companyName)}&module=Contractor%20Exposure%20Forensic%20Report`}
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  color: '#fff',
                  padding: '8px 12px',
                  borderRadius: '8px',
                  fontWeight: 600,
                  fontSize: '0.85rem',
                  textAlign: 'center',
                  textDecoration: 'none',
                  border: '1px solid rgba(255, 255, 255, 0.2)'
                }}
                download
              >
                Download .ICS
              </a>
            </div>
          </div>

          <button 
            type="button" 
            onClick={() => {
              setSubmitResult(null);
              setStep(1);
            }}
            style={{
              background: 'transparent',
              color: 'var(--text-muted)',
              border: 'none',
              fontSize: '0.85rem',
              cursor: 'pointer',
              textDecoration: 'underline'
            }}
          >
            Submit inquiry for another entity
          </button>
        </div>
      ) : (
        <>
          <div className={styles.progressTracker}>
            <div className={`${styles.stepIndicator} ${step >= 1 ? styles.active : ''}`}>1. Basics</div>
            <div className={`${styles.stepLine} ${step >= 2 ? styles.activeLine : ''}`}></div>
            <div className={`${styles.stepIndicator} ${step >= 2 ? styles.active : ''}`}>2. Qualification &amp; Commercial Terms</div>
          </div>

          {submitError && (
            <div style={{
              background: 'rgba(239, 68, 68, 0.15)',
              border: '1px solid rgba(239, 68, 68, 0.3)',
              color: '#fca5a5',
              padding: '10px 14px',
              borderRadius: '8px',
              fontSize: '0.85rem',
              marginBottom: '1rem'
            }}>
              {submitError}
            </div>
          )}

          <form onSubmit={step === 1 ? handleNext : handleSubmit} className={styles.form}>
            {step === 1 && (
              <div className={styles.stepContainer}>
                <div className={styles.formGroup}>
                  <label htmlFor="fullName">Full Name *</label>
                  <input type="text" id="fullName" name="fullName" required value={formData.fullName} onChange={handleChange} className={styles.input} placeholder="e.g. Ramesh Varma" />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="workEmail">Work Email *</label>
                  <input type="email" id="workEmail" name="workEmail" required value={formData.workEmail} onChange={handleChange} className={styles.input} placeholder="ramesh@company.com" />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="phone">Phone Number *</label>
                  <input type="tel" id="phone" name="phone" required placeholder="+91 98765 43210" value={formData.phone} onChange={handleChange} className={styles.input} />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="companyName">Company Name *</label>
                  <input type="text" id="companyName" name="companyName" required value={formData.companyName} onChange={handleChange} className={styles.input} placeholder="e.g. Bharat Precision Manufacturing" />
                </div>
                <button type="submit" className={`btn btn-primary ${styles.submitBtn}`}>Next: Scope &amp; Commercial Terms →</button>
              </div>
            )}

            {step === 2 && (
              <div className={styles.stepContainer}>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="jobTitle">Job Title *</label>
                    <select id="jobTitle" name="jobTitle" required value={formData.jobTitle} onChange={handleChange} className={styles.select}>
                      <option value="">Select role...</option>
                      <option value="Plant Head">Plant Head / Operations Director</option>
                      <option value="CFO / Finance Head">CFO / Finance Head</option>
                      <option value="HR Head / CHRO">HR Head / CHRO</option>
                      <option value="IR / Compliance Manager">IR / Compliance Manager</option>
                      <option value="Procurement Head">Procurement / Vendor Management</option>
                      <option value="Managing Director / CEO">Managing Director / CEO</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="industry">Industry *</label>
                    <select id="industry" name="industry" required value={formData.industry} onChange={handleChange} className={styles.select}>
                      <option value="">Select industry...</option>
                      <option value="Manufacturing & Metals">Manufacturing &amp; Metals</option>
                      <option value="Auto & Components">Auto &amp; Components</option>
                      <option value="Pharma & Chemical">Pharma &amp; Chemical</option>
                      <option value="Logistics & Warehousing">Logistics &amp; Warehousing</option>
                      <option value="FMCG & Food Processing">FMCG &amp; Food Processing</option>
                      <option value="EPC & Infrastructure">EPC &amp; Infrastructure</option>
                      <option value="Facility Management & Security">Facility Management &amp; Security</option>
                      <option value="Textiles & Apparel">Textiles &amp; Apparel</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="ownEmployees">On-Roll Direct Staff *</label>
                    <select id="ownEmployees" name="ownEmployees" required value={formData.ownEmployees} onChange={handleChange} className={styles.select}>
                      <option value="">Select headcount...</option>
                      <option value="Under 100">Under 100 staff</option>
                      <option value="100-500">100–500 staff</option>
                      <option value="500-1,000">500–1,000 staff</option>
                      <option value="1,000-5,000">1,000–5,000 staff</option>
                      <option value="5,000+">5,000+ staff</option>
                    </select>
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="contractWorkers">Contract Labour Headcount *</label>
                    <select id="contractWorkers" name="contractWorkers" required value={formData.contractWorkers} onChange={handleChange} className={styles.select}>
                      <option value="">Select contractor count...</option>
                      <option value="Under 100">Under 100 workers</option>
                      <option value="100-500">100–500 workers</option>
                      <option value="500-2,000">500–2,000 workers</option>
                      <option value="2,000-5,000">2,000–5,000 workers</option>
                      <option value="5,000+">5,000+ workers</option>
                    </select>
                  </div>
                </div>

                {/* Dynamic Workforce Qualification Banner */}
                {(formData.ownEmployees || formData.contractWorkers) && (
                  <div className={`${styles.thresholdAlert} ${isComplimentary ? styles.thresholdAlertGreen : styles.thresholdAlertViolet}`}>
                    {isComplimentary ? (
                      <>
                        <CheckCircle2 size={18} color="#34d399" style={{ flexShrink: 0 }} />
                        <span>
                          <strong>✓ Enterprise Qualified:</strong> Total workforce $\ge$ 2,000. Your 10-day forensic exposure assessment is <strong>100% COMPLIMENTARY</strong> under mutual NDA.
                        </span>
                      </>
                    ) : (
                      <>
                        <AlertCircle size={18} color="#e0aaff" style={{ flexShrink: 0 }} />
                        <span>
                          <strong>Diagnostic Engagement Terms:</strong> ₹2,50,000 one-time fee, <strong>100% credited against your first-year software subscription</strong> upon rollout.
                        </span>
                      </>
                    )}
                  </div>
                )}
                
                <div className={styles.formRow} style={{ marginTop: '1rem' }}>
                  <div className={styles.formGroup}>
                    <label htmlFor="numContractors">Number of Active Contractors</label>
                    <select id="numContractors" name="numContractors" value={formData.numContractors} onChange={handleChange} className={styles.select}>
                      <option value="">Select vendor count...</option>
                      <option value="1-5">1–5 contractors</option>
                      <option value="6-15">6–15 contractors</option>
                      <option value="16-50">16–50 contractors</option>
                      <option value="50+">50+ contractors</option>
                    </select>
                  </div>
                  <div className={styles.formGroup} style={{ position: 'relative' }}>
                    <label>Operating States * (Select all that apply)</label>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '4px' }}>
                      {['Andhra Pradesh', 'Karnataka', 'Maharashtra', 'Tamil Nadu', 'Telangana', 'Gujarat', 'Delhi', 'Rajasthan', 'Uttar Pradesh', 'Other'].map(state => {
                        const isSelected = formData.statesOperating.includes(state);
                        return (
                          <button
                            key={state}
                            type="button"
                            onClick={() => {
                              const newStates = isSelected 
                                ? formData.statesOperating.filter(s => s !== state)
                                : [...formData.statesOperating, state];
                              setFormData(prev => ({ ...prev, statesOperating: newStates }));
                            }}
                            style={{
                              background: isSelected ? 'rgba(107, 31, 162, 0.4)' : 'rgba(255, 255, 255, 0.05)',
                              border: `1px solid ${isSelected ? 'var(--brand-xlight)' : 'rgba(255, 255, 255, 0.1)'}`,
                              color: isSelected ? '#fff' : 'var(--text-secondary)',
                              padding: '6px 14px',
                              borderRadius: '99px',
                              fontSize: '0.85rem',
                              cursor: 'pointer',
                              transition: 'all 0.2s ease'
                            }}
                          >
                            {state}
                          </button>
                        );
                      })}
                    </div>
                    {/* Hidden input to maintain native required validation */}
                    <input 
                      type="text" 
                      required 
                      value={formData.statesOperating.length > 0 ? 'selected' : ''} 
                      onChange={() => {}} 
                      style={{ opacity: 0, position: 'absolute', pointerEvents: 'none', bottom: 0, left: '50%' }} 
                      tabIndex={-1}
                    />
                  </div>
                </div>

                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="attendanceCapture">Attendance Ingestion Method *</label>
                    <select id="attendanceCapture" name="attendanceCapture" required value={formData.attendanceCapture} onChange={handleChange} className={styles.select}>
                      <option value="">Select attendance method...</option>
                      <option value="Biometric at gate">Biometric / Face Recognition at gate</option>
                      <option value="Manual muster register">Manual gate muster register</option>
                      <option value="Contractor-provided sheets">Contractor-provided attendance sheets</option>
                      <option value="We don't capture independent attendance">We don't currently capture independent attendance</option>
                    </select>
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="trigger">Primary Audit Trigger *</label>
                    <select id="trigger" name="trigger" required value={formData.trigger} onChange={handleChange} className={styles.select}>
                      <option value="">Select primary driver...</option>
                      <option value="Upcoming labour inspection">Upcoming labour department inspection</option>
                      <option value="Recent contractor dispute / notice">Recent contractor dispute or demand notice</option>
                      <option value="Parent / Board audit mandate">Internal Audit / Board / CFO mandate</option>
                      <option value="Labour Codes 2020 transition">New Labour Codes statutory readiness</option>
                      <option value="New plant expansion">New plant / multi-site expansion</option>
                      <option value="General commercial review">General AP invoice verification review</option>
                    </select>
                  </div>
                </div>

                {/* Commercial Terms & Readiness Selector */}
                <div className={styles.commercialTermsBox}>
                  <div className={styles.commercialTermsHeader}>
                    <span className={`${styles.commercialTermsBadge} ${isComplimentary ? styles.commercialTermsBadgeGreen : ''}`}>
                      {isComplimentary ? 'Enterprise Qualification' : 'Diagnostic Engagement Terms'}
                    </span>
                    <span className={styles.commercialTermsFee}>
                      {isComplimentary ? 'COMPLIMENTARY (Workforce ≥ 2,000)' : '₹2,50,000 (100% Credited)'}
                    </span>
                  </div>
                  <p className={styles.commercialTermsDesc}>
                    {isComplimentary 
                      ? 'Your organization qualifies for a complimentary forensic exposure assessment under mutual NDA.'
                      : 'Standard one-time engagement fee of ₹2,50,000 for a 10-day forensic audit under NDA. The entire fee is credited in full against your first-year subscription upon platform rollout.'}
                  </p>

                  <div className={styles.formGroup} style={{ marginBottom: 0 }}>
                    <label style={{ fontWeight: 700, color: '#fff', fontSize: '0.88rem', marginBottom: '0.6rem' }}>
                      Select Commercial Readiness &amp; Engagement Intent *
                    </label>
                    <div className={styles.radioGroupVertical}>
                      {isComplimentary ? (
                        <label className={styles.commercialRadioLabel}>
                          <input 
                            type="radio" 
                            name="commercialIntent" 
                            value="enterprise_complimentary" 
                            required 
                            checked={formData.commercialIntent === 'enterprise_complimentary' || !formData.commercialIntent} 
                            onChange={handleChange} 
                          />
                          <div>
                            <strong>Proceed with Complimentary Enterprise Assessment (2,000+ total workforce)</strong>
                            <span>Ready to execute mutual NDA and share 3 months of contractor invoices and muster logs.</span>
                          </div>
                        </label>
                      ) : (
                        <label className={styles.commercialRadioLabel}>
                          <input 
                            type="radio" 
                            name="commercialIntent" 
                            value="ready_to_pay" 
                            required 
                            checked={formData.commercialIntent === 'ready_to_pay' || !formData.commercialIntent} 
                            onChange={handleChange} 
                          />
                          <div>
                            <strong>Ready to proceed with ₹2,50,000 assessment (100% credited)</strong>
                            <span>Understood that ₹2.5L is credited in full against our first-year software subscription upon go-live.</span>
                          </div>
                        </label>
                      )}

                      <label className={styles.commercialRadioLabel}>
                        <input 
                          type="radio" 
                          name="commercialIntent" 
                          value="sow_budget_approval" 
                          required 
                          checked={formData.commercialIntent === 'sow_budget_approval'} 
                          onChange={handleChange} 
                        />
                        <div>
                          <strong>Require formal Statement of Work (SOW) &amp; CFO budget clearance first</strong>
                          <span>Send formal engagement scope and pricing agreement for internal finance approval.</span>
                        </div>
                      </label>

                      <label className={styles.commercialRadioLabel}>
                        <input 
                          type="radio" 
                          name="commercialIntent" 
                          value="exploring_discussion" 
                          required 
                          checked={formData.commercialIntent === 'exploring_discussion'} 
                          onChange={handleChange} 
                        />
                        <div>
                          <strong>Preliminary exploration — request briefing with Compliance Architect first</strong>
                          <span>Hold a 30-minute introductory call before committing confidential payroll files.</span>
                        </div>
                      </label>
                    </div>
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label>Can you share sample contractor invoices &amp; challans under NDA?</label>
                  <div className={styles.radioGroup}>
                    <label><input type="radio" name="canShareData" value="Yes" checked={formData.canShareData === 'Yes'} onChange={handleChange} /> Yes, ready under NDA</label>
                    <label><input type="radio" name="canShareData" value="Yes, with internal approval" checked={formData.canShareData === 'Yes, with internal approval'} onChange={handleChange} /> Yes, pending legal sign-off</label>
                    <label><input type="radio" name="canShareData" value="Not yet" checked={formData.canShareData === 'Not yet'} onChange={handleChange} /> Not yet</label>
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="notes">Specific Concerns or Operational Notes (Optional)</label>
                  <textarea id="notes" name="notes" rows="2" value={formData.notes} onChange={handleChange} className={styles.textarea} placeholder="e.g. 3 plants in Maharashtra and Gujarat, looking to audit 4 major security & housekeeping vendors..."></textarea>
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.checkboxLabel}>
                    <input type="checkbox" name="consent" required checked={formData.consent} onChange={handleChange} />
                    I understand this engagement is conducted strictly under mutual NDA, read-only, with no software installation required.
                  </label>
                </div>

                <div className={styles.btnRow}>
                  <button type="button" onClick={() => setStep(1)} className="btn btn-ghost" disabled={submitting}>← Back</button>
                  <button type="submit" className={`btn btn-primary ${styles.submitBtn}`} disabled={submitting}>
                    {submitting ? 'Submitting & Generating Case UID...' : 'Request Contractor Exposure Assessment →'}
                  </button>
                </div>
              </div>
            )}
          </form>
        </>
      )}
    </div>
  );
}
