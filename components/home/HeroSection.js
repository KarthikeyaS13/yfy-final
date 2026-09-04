'use client';
import { useState } from 'react';
import Link from 'next/link';
import { ShieldCheck, Globe, Users, ArrowRight, CheckCircle2, FileSearch, RefreshCw, ChevronDown } from 'lucide-react';
import styles from './HeroSection.module.css';

export default function HeroSection() {
  const [activePersona, setActivePersona] = useState('pe');

  const personas = {
    pe: {
      id: 'pe',
      tag: 'Principal Employers · Plant Heads & CFOs',
      title: 'Contractor Bill Verification & CLRA Liability Engine',
      desc: 'You did not compute the contractor’s wage, but under CLRA §21, EPF §8A, and ESI §40, you pay for their defaults. We sit between the contractor’s bill and Accounts Payable, independently trimming attendance against your gate logs and verifying statutory challans before funds leave.',
      ctaText: 'Get Contractor Exposure Report',
      ctaHref: '/exposure-report',
      secondaryText: 'Calculate Exposure Instantly',
      secondaryHref: '/tools/exposure-calculator',
      metric: 'Model your own exposure →',
      metricLabel: 'Interactive model based on your worker count & states',
      metricHref: '/tools/exposure-calculator',
      stats: [
        'Biometric & Gate Log Trim vs Billed Days',
        'Direct EPF §8A, ESI §40 & CLRA §21 Protection',
        'Mathematical "Eligible to Pay" AP Release Cap',
        '72-Hour Deviation Clock on Vendor Shortfalls'
      ]
    },
    multi: {
      id: 'multi',
      tag: 'Multi-State Organizations · HR & Payroll Heads',
      title: 'Jurisdiction & Statutory Identity Engine (36 States & UTs)',
      desc: 'Multi-state payroll is not a volume problem — it is a jurisdiction problem. 22 Professional Tax states, 16 Labour Welfare Fund acts, and dual-running Labour Codes. Our 5-tier statutory identity ladder stamps every rupee to its exact certificate, preventing silent cross-state misfilings.',
      ctaText: 'Run a 3-Month Payroll Replay',
      ctaHref: '/platform/migration',
      secondaryText: 'Explore State Coverage Matrix',
      secondaryHref: '/coverage',
      metric: '36 Jurisdictions',
      metricLabel: 'Live gazette-checked rules across all states & UTs',
      stats: [
        'Enrolment-Certificate Level Statutory Stamping',
        'No Silent Fallthrough (Karnataka never files under MH)',
        'Dual-Running Labour Codes vs Legacy Act Guardrails',
        'Read-Only 3-Month Historical Payroll Replay'
      ]
    },
    agency: {
      id: 'agency',
      tag: 'Staffing & Manpower Agencies · Founders & Ops',
      title: 'Single Roster-to-Invoice & Client Proof Pack Engine',
      desc: 'Thin 3-5% margins leak when billed days drift from paid days and multi-site statutory caps are miscalculated. One approved roster day powers worker pay, statutory ceilings, client billing, and GST invoices — with instant tamper-proof compliance packs that unlock held client payments.',
      ctaText: 'Get Your Compliance Proof Pack',
      ctaHref: '/compliance-proof-pack',
      secondaryText: 'See Staffing Platform',
      secondaryHref: '/for/staffing-agencies',
      metric: '100% Zero Drift',
      metricLabel: 'Billed days and paid days locked to the same approved day',
      stats: [
        'Multi-Site Worker PF Ceiling Apportionment',
        'SMS Magic-Link Offline Site Muster (No App Install)',
        'One-Click Client ECR & ESI Compliance Proof Packs',
        'Scoped Client Window & White-Label Portal'
      ]
    }
  };

  const current = personas[activePersona];

  return (
    <section className={styles.hero} id="hero">
      {/* Background orbs */}
      <div className={styles.orbTop} aria-hidden="true" />
      <div className={styles.orbBottom} aria-hidden="true" />
      <div className={styles.gridOverlay} aria-hidden="true" />

      <div className={`container ${styles.inner}`}>
        {/* Top Badge */}
        <div className={styles.badge}>
          <span className={styles.badgeDot} />
          STATUTORY COMPLIANCE & VERIFICATION ENGINE FOR INDIAN ENTERPRISE
        </div>

        {/* Headline */}
        <h1 className={styles.headline}>
          The Compliance Engine<br />
          <span className={styles.highlight}>Indian HRMS Left Behind.</span>
        </h1>

        <p className={styles.subheadline}>
          While conventional HRMS calculate payslips for permanent white-collar staff, yfy eliminates balance-sheet liabilities where 70% of workforce risk lives: contractor invoice overbilling, 36-state jurisdiction rules, and manpower supply operations. <strong>Sits alongside your existing ERP or HRMS — zero rip-and-replace.</strong>
        </p>

        {/* Persona Selector Tabs */}
        <div className={styles.personaTabWrapper}>
          <div className={styles.personaTabs}>
            <button
              onClick={() => setActivePersona('pe')}
              className={`${styles.personaTab} ${activePersona === 'pe' ? styles.activeTab : ''}`}
            >
              <ShieldCheck size={18} />
              <span>For Principal Employers</span>
              <span className={styles.subText}>Contract Labour & CLRA</span>
            </button>
            <button
              onClick={() => setActivePersona('multi')}
              className={`${styles.personaTab} ${activePersona === 'multi' ? styles.activeTab : ''}`}
            >
              <Globe size={18} />
              <span>For Multi-State Employers</span>
              <span className={styles.subText}>PT, LWF & 36 States</span>
            </button>
            <button
              onClick={() => setActivePersona('agency')}
              className={`${styles.personaTab} ${activePersona === 'agency' ? styles.activeTab : ''}`}
            >
              <Users size={18} />
              <span>For Staffing Agencies</span>
              <span className={styles.subText}>Roster-to-GST & Proof</span>
            </button>
          </div>
        </div>

        {/* Persona Active Card */}
        <div className={styles.personaCard}>
          <div className={styles.personaCardHeader}>
            <div>
              <span className={styles.personaTag}>{current.tag}</span>
              <h2 className={styles.personaTitle}>{current.title}</h2>
            </div>
            {current.metricHref ? (
              <Link href={current.metricHref} className={styles.metricBox} style={{ textDecoration: 'none', transition: 'all 0.2s ease', cursor: 'pointer' }}>
                <span className={styles.metricValue} style={{ fontSize: '1.15rem' }}>{current.metric}</span>
                <span className={styles.metricText}>{current.metricLabel}</span>
              </Link>
            ) : (
              <div className={styles.metricBox}>
                <span className={styles.metricValue}>{current.metric}</span>
                <span className={styles.metricText}>{current.metricLabel}</span>
              </div>
            )}
          </div>

          <p className={styles.personaDesc}>{current.desc}</p>

          <div className={styles.statsGrid}>
            {current.stats.map((stat, i) => (
              <div key={i} className={styles.statItem}>
                <CheckCircle2 size={16} className={styles.statIcon} />
                <span>{stat}</span>
              </div>
            ))}
          </div>

          <div className={styles.cardActions}>
            <Link href={current.ctaHref} className="btn btn-primary btn-lg">
              {current.ctaText} <ArrowRight size={18} />
            </Link>
            <Link href={current.secondaryHref} className="btn btn-outline btn-lg">
              {current.secondaryText}
            </Link>
          </div>
        </div>

        {/* Diagnostic Wedge Proof Bar */}
        <div className={styles.diagnosticBar}>
          <div className={styles.diagnosticItem}>
            <div className={styles.diagnosticIcon}><FileSearch size={20} /></div>
            <div>
              <strong>Start with the Number, Not the Software</strong>
              <p>Send 3 months of paid data under NDA. We deliver a forensic Variance & Exposure Report before you commit.</p>
            </div>
          </div>
          <div className={styles.diagnosticDivider} />
          <div className={styles.diagnosticItem}>
            <div className={styles.diagnosticIcon}><RefreshCw size={20} /></div>
            <div>
              <strong>Parallel Run Standard · Billing Starts at Go-Live</strong>
              <p>Run 1 branch or contractor in parallel. You never pay while an implementation or replay runs.</p>
            </div>
          </div>
        </div>

        {/* Micro-trust */}
        <p className={styles.microTrust}>
          Finnovo Tech Functional Pvt Ltd · Madhapur, Hyderabad · ISO 9001:2015 · ISO 27001:2022 · ISO/IEC 27701:2019
        </p>

        {/* Scroll down indicator */}
        <div 
          className={styles.scrollDownIndicator}
          onClick={() => {
            const nextSec = document.getElementById('the-problem') || document.getElementById('how-it-works');
            if (nextSec) {
              nextSec.scrollIntoView({ behavior: 'smooth' });
            } else {
              window.scrollTo({ top: 750, behavior: 'smooth' });
            }
          }}
          role="button"
          tabIndex={0}
          aria-label="Scroll down to explore"
        >
          <span className={styles.scrollDownText}>Scroll to explore</span>
          <ChevronDown size={18} className={styles.scrollDownIcon} />
        </div>

      </div>
    </section>
  );
}
