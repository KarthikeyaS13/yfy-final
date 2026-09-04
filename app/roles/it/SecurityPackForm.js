'use client';

import { useState } from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';
import styles from './page.module.css';

export default function SecurityPackForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    domains: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.email && formData.name) {
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div className={styles.formContainer}>
        <div className={styles.successBox}>
          <CheckCircle2 size={44} color="#C07EF0" style={{ margin: '0 auto 1rem' }} />
          <h3 style={{ fontSize: '1.35rem', color: '#fff', marginBottom: '0.5rem' }}>Security Pack Requested</h3>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, fontSize: '0.95rem' }}>
            Thank you, {formData.name}. We have logged your request for <strong>{formData.company || 'your organisation'}</strong>. Our security and compliance team will dispatch the mutual NDA and the full vendor review pack to <strong>{formData.email}</strong> within 2 working days.
          </p>
          <div style={{ marginTop: '1.5rem' }}>
            <span className={styles.badgeViolet}>SLA: 2 Working Days</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.formContainer} id="pack-request">
      <form onSubmit={handleSubmit}>
        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label className={styles.formLabel} htmlFor="name">Your Name *</label>
            <input 
              id="name"
              name="name" 
              type="text" 
              required 
              placeholder="e.g. Priya Sharma" 
              className={styles.formInput} 
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.formLabel} htmlFor="email">Work Email *</label>
            <input 
              id="email"
              name="email" 
              type="email" 
              required 
              placeholder="name@company.com" 
              className={styles.formInput} 
              value={formData.email}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label className={styles.formLabel} htmlFor="company">Company / Organisation *</label>
            <input 
              id="company"
              name="company" 
              type="text" 
              required 
              placeholder="e.g. Acme Industries Ltd" 
              className={styles.formInput} 
              value={formData.company}
              onChange={handleChange}
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.formLabel} htmlFor="role">Your Role *</label>
            <select 
              id="role"
              name="role" 
              required 
              className={styles.formSelect}
              value={formData.role}
              onChange={handleChange}
            >
              <option value="">Select your role...</option>
              <option value="CISO / Head of InfoSec">CISO / Head of InfoSec</option>
              <option value="Head of IT / Infrastructure">Head of IT / Infrastructure</option>
              <option value="DPO / Privacy Counsel">DPO / Privacy Counsel</option>
              <option value="Procurement / Vendor Risk">Procurement / Vendor Risk Reviewer</option>
              <option value="External Security Auditor">External Security Auditor</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>

        <div className={styles.formGroup}>
          <label className={styles.formLabel} htmlFor="domains">
            Which specific domains does your assessment cover?
          </label>
          <textarea 
            id="domains"
            name="domains" 
            placeholder="e.g. DPDP consent & retention, SAML SSO, DB tenancy isolation, VAPT status, AWS hosting region..." 
            className={styles.formTextarea}
            value={formData.domains}
            onChange={handleChange}
          />
          <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '0.3rem', display: 'block' }}>
            Specifying domains helps us include targeted architectural notes alongside the standard pack.
          </span>
        </div>

        <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%', justifyContent: 'center' }}>
          Request Vendor Review Pack <ArrowRight size={18} />
        </button>

        <p className={styles.formTerms}>
          Supplied under mutual NDA · 2 working days turnaround · Engineer-led follow-up
        </p>
      </form>
    </div>
  );
}
