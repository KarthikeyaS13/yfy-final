'use client';
import { useState } from 'react';
import styles from './FormStyles.module.css';

export default function ComplianceProofForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Step 1
    fullName: '',
    workEmail: '',
    phone: '',
    companyName: '',
    // Step 2
    jobTitle: '',
    serviceType: [],
    deployedWorkers: '',
    ownEmployees: '',
    numClients: '',
    numSites: '',
    statesOperating: [],
    clientProfile: [],
    clientsAuditCompliance: '',
    daysToInvoice: '',
    attendanceMethod: '',
    currentSystems: [],
    biggestPain: '',
    canShareData: '',
    notes: '',
    consent: false,
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState(null);
  const [submitError, setSubmitError] = useState('');

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
            ctaOrigin: sessionStorage.getItem('yfy_last_cta_text') || 'Get Compliance Proof Pack',
            ctaId: sessionStorage.getItem('yfy_last_cta_id') || 'compliance_proof_form',
          };
        } catch {
          // ignore
        }
      }

      const notesCombined = [
        `Job Title: ${formData.jobTitle || 'N/A'}`,
        `Agency Model: ${formData.agencyModel || 'N/A'}`,
        `Client Count: ${formData.clientCount || 'N/A'}`,
        `Deputed Workforce: ${formData.deputedWorkforce || 'N/A'}`,
        `Operating States: ${formData.statesOperating.join(', ') || 'N/A'}`,
        `Biggest Pain: ${formData.biggestPain || 'N/A'}`,
        `Can Share NDA Data: ${formData.canShareData || 'N/A'}`,
        `Notes: ${formData.notes || ''}`
      ].join(' | ');

      const res = await fetch('/api/demo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: formData.fullName,
          workEmail: formData.workEmail,
          phone: formData.phone,
          company: formData.agencyName,
          employeeCount: formData.deputedWorkforce || 'Enterprise',
          persona: 'agency',
          interestedModule: 'Compliance Proof Pack Assessment',
          notes: notesCombined,
          ctaId: sessionData.ctaId || 'compliance_proof_submit',
          ctaOrigin: sessionData.ctaOrigin || 'Compliance Proof Pack Form',
          sourcePage: '/compliance-proof-pack',
          firstTouchPage: sessionData.firstTouchPage || '/compliance-proof-pack',
          referrer: sessionData.referrer || '',
          utmParams: sessionData.utmParams || {},
        }),
      });

      const data = await res.json();
      if (res.ok) {
        setSubmitResult(data);
      } else {
        setSubmitError(data.error || 'Failed to submit proof pack request.');
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
            Compliance Proof Pack Request Received
          </h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', maxWidth: '420px', margin: '0 auto 1.25rem', lineHeight: '1.5' }}>
            A Senior Labour Law Architect has been assigned to structure your client-facing proof pack. Guidelines and sample annexures have been queued for <strong>{formData.workEmail}</strong>.
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
            File Reference UID: {submitResult.leadUid}
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
              Schedule Walkthrough on Calendar
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', marginBottom: '1rem' }}>
              Hold a preliminary 30-minute proof pack setup session with our compliance desk:
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
                href={`/api/calendar?type=demo&leadUid=${encodeURIComponent(submitResult.leadUid)}&company=${encodeURIComponent(formData.agencyName)}&module=Compliance%20Proof%20Pack%20Assessment`}
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
            Submit request for another branch
          </button>
        </div>
      ) : (
        <>
          <div className={styles.progressTracker}>
            <div className={`${styles.stepIndicator} ${step >= 1 ? styles.active : ''}`}>1. Basics</div>
            <div className={`${styles.stepLine} ${step >= 2 ? styles.activeLine : ''}`}></div>
            <div className={`${styles.stepIndicator} ${step >= 2 ? styles.active : ''}`}>2. Qualification</div>
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
              <input type="text" id="fullName" name="fullName" required value={formData.fullName} onChange={handleChange} className={styles.input} />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="workEmail">Work Email *</label>
              <input type="email" id="workEmail" name="workEmail" required value={formData.workEmail} onChange={handleChange} className={styles.input} />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="phone">Phone Number *</label>
              <input type="tel" id="phone" name="phone" required placeholder="+91" value={formData.phone} onChange={handleChange} className={styles.input} />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="companyName">Company Name *</label>
              <input type="text" id="companyName" name="companyName" required value={formData.companyName} onChange={handleChange} className={styles.input} />
            </div>
            <button type="submit" className={`btn btn-primary ${styles.submitBtn}`}>Next Step →</button>
          </div>
        )}

        {step === 2 && (
          <div className={styles.stepContainer}>
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="jobTitle">Job Title</label>
                <select id="jobTitle" name="jobTitle" value={formData.jobTitle} onChange={handleChange} className={styles.select}>
                  <option value="">Select...</option>
                  <option value="Founder / MD">Founder / MD</option>
                  <option value="Operations Head">Operations Head</option>
                  <option value="Compliance / HR Head">Compliance / HR Head</option>
                  <option value="Finance Head">Finance Head</option>
                  <option value="Business Head">Business Head</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="serviceType">Service Type (Select multiple)</label>
                <select id="serviceType" name="serviceType" multiple value={formData.serviceType} onChange={handleChange} className={`${styles.select} ${styles.multiSelect}`}>
                  <option value="General manpower supply">General manpower supply</option>
                  <option value="Facility management & housekeeping">Facility management & housekeeping</option>
                  <option value="Security services">Security services</option>
                  <option value="Logistics & warehouse manpower">Logistics & warehouse manpower</option>
                  <option value="Industrial / technical manpower">Industrial / technical manpower</option>
                  <option value="IT staffing">IT staffing</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="deployedWorkers">Deployed Workers *</label>
                <select id="deployedWorkers" name="deployedWorkers" required value={formData.deployedWorkers} onChange={handleChange} className={styles.select}>
                  <option value="">Select...</option>
                  <option value="Under 200">Under 200</option>
                  <option value="200-1,000">200–1,000</option>
                  <option value="1,000-5,000">1,000–5,000</option>
                  <option value="5,000-15,000">5,000–15,000</option>
                  <option value="15,000+">15,000+</option>
                </select>
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="ownEmployees">Own Employees</label>
                <select id="ownEmployees" name="ownEmployees" value={formData.ownEmployees} onChange={handleChange} className={styles.select}>
                  <option value="">Select...</option>
                  <option value="Under 25">Under 25</option>
                  <option value="25-100">25–100</option>
                  <option value="100-500">100–500</option>
                  <option value="500+">500+</option>
                </select>
              </div>
            </div>
            
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="numClients">Number of Clients</label>
                <select id="numClients" name="numClients" value={formData.numClients} onChange={handleChange} className={styles.select}>
                  <option value="">Select...</option>
                  <option value="1-5">1–5</option>
                  <option value="6-20">6–20</option>
                  <option value="21-50">21–50</option>
                  <option value="50+">50+</option>
                </select>
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="numSites">Number of Sites</label>
                <select id="numSites" name="numSites" value={formData.numSites} onChange={handleChange} className={styles.select}>
                  <option value="">Select...</option>
                  <option value="1-10">1–10</option>
                  <option value="11-50">11–50</option>
                  <option value="51-200">51–200</option>
                  <option value="200+">200+</option>
                </select>
              </div>
            </div>

            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="statesOperating">States Operating In * (Select multiple)</label>
                <select id="statesOperating" name="statesOperating" multiple required value={formData.statesOperating} onChange={handleChange} className={`${styles.select} ${styles.multiSelect}`}>
                  <option value="Andhra Pradesh">Andhra Pradesh</option>
                  <option value="Karnataka">Karnataka</option>
                  <option value="Maharashtra">Maharashtra</option>
                  <option value="Tamil Nadu">Tamil Nadu</option>
                  <option value="Telangana">Telangana</option>
                  <option value="Gujarat">Gujarat</option>
                  <option value="Delhi">Delhi</option>
                  <option value="Other">Other / 36 States & UTs</option>
                </select>
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="clientProfile">Client Profile (Select multiple)</label>
                <select id="clientProfile" name="clientProfile" multiple value={formData.clientProfile} onChange={handleChange} className={`${styles.select} ${styles.multiSelect}`}>
                  <option value="Listed companies">Listed companies</option>
                  <option value="MNCs">MNCs</option>
                  <option value="Large unlisted">Large unlisted</option>
                  <option value="SMEs">SMEs</option>
                  <option value="Government / PSU">Government / PSU</option>
                </select>
              </div>
            </div>

            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="clientsAuditCompliance">Do clients audit your compliance? *</label>
                <select id="clientsAuditCompliance" name="clientsAuditCompliance" required value={formData.clientsAuditCompliance} onChange={handleChange} className={styles.select}>
                  <option value="">Select...</option>
                  <option value="Yes, regularly">Yes, regularly</option>
                  <option value="Occasionally">Occasionally</option>
                  <option value="Only at contract renewal">Only at contract renewal</option>
                  <option value="No">No</option>
                </select>
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="daysToInvoice">Days to invoice after month-end</label>
                <select id="daysToInvoice" name="daysToInvoice" value={formData.daysToInvoice} onChange={handleChange} className={styles.select}>
                  <option value="">Select...</option>
                  <option value="Within 5 days of month-end">Within 5 days of month-end</option>
                  <option value="6-10 days">6–10 days</option>
                  <option value="11-20 days">11–20 days</option>
                  <option value="Over 20 days">Over 20 days</option>
                </select>
              </div>
            </div>

            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="attendanceMethod">Attendance Capture Method</label>
                <select id="attendanceMethod" name="attendanceMethod" value={formData.attendanceMethod} onChange={handleChange} className={styles.select}>
                  <option value="">Select...</option>
                  <option value="Mobile app">Mobile app</option>
                  <option value="Biometric at site">Biometric at site</option>
                  <option value="Paper muster">Paper muster</option>
                  <option value="Supervisor WhatsApp / calls">Supervisor WhatsApp / calls</option>
                  <option value="Mixed">Mixed</option>
                </select>
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="biggestPain">Biggest Pain Point *</label>
                <select id="biggestPain" name="biggestPain" required value={formData.biggestPain} onChange={handleChange} className={styles.select}>
                  <option value="">Select...</option>
                  <option value="Monthly payroll accuracy">Monthly payroll accuracy</option>
                  <option value="Time to raise client invoices">Time to raise client invoices</option>
                  <option value="Compliance proof for clients">Compliance proof for clients</option>
                  <option value="Margin leakage">Margin leakage</option>
                  <option value="Attendance disputes">Attendance disputes</option>
                  <option value="Statutory filings">Statutory filings</option>
                </select>
              </div>
            </div>

            <div className={styles.formGroup}>
              <label>Can you share data under NDA?</label>
              <div className={styles.radioGroup}>
                <label><input type="radio" name="canShareData" value="Yes" onChange={handleChange} /> Yes</label>
                <label><input type="radio" name="canShareData" value="Yes, with approval" onChange={handleChange} /> Yes, with approval</label>
                <label><input type="radio" name="canShareData" value="Not yet" onChange={handleChange} /> Not yet</label>
              </div>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="notes">Additional Notes</label>
              <textarea id="notes" name="notes" rows="3" value={formData.notes} onChange={handleChange} className={styles.textarea}></textarea>
            </div>

            <div className={styles.formGroup}>
              <label className={styles.checkboxLabel}>
                <input type="checkbox" name="consent" required checked={formData.consent} onChange={handleChange} />
                I consent to the collection of this data under yfy® Privacy Policy
              </label>
            </div>

            <div className={styles.btnRow}>
              <button type="button" onClick={() => setStep(1)} className="btn btn-ghost" disabled={submitting}>← Back</button>
              <button type="submit" className={`btn btn-primary ${styles.submitBtn}`} disabled={submitting}>
                {submitting ? 'Submitting & Generating Case...' : 'Submit Request'}
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
