"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronDown, ChevronUp, Shield, Clock, FileText, CheckCircle2, ArrowRight } from 'lucide-react';
import styles from './Pricing.module.css';

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(true);
  const [detectedPersona, setDetectedPersona] = useState(null);
  const [openFaq, setOpenFaq] = useState({});

  useEffect(() => {
    try {
      // Check query params first
      const params = new URLSearchParams(window.location.search);
      const queryPersona = params.get('persona');

      if (queryPersona) {
        setDetectedPersona(queryPersona.toLowerCase());
        return;
      }

      // Check cookie
      const cookies = document.cookie.split(';');
      const personaCookie = cookies.find(c => c.trim().startsWith('yfy_persona='));
      if (personaCookie) {
        const val = personaCookie.split('=')[1]?.trim().toLowerCase();
        if (val) {
          setDetectedPersona(val);
          return;
        }
      }

      // Check localStorage
      const local = localStorage.getItem('yfy_persona');
      if (local) {
        setDetectedPersona(local.toLowerCase());
      }
    } catch {
      // Ignore storage/cookie access errors
    }
  }, []);

  const toggleFaq = (index) => {
    setOpenFaq(prev => ({ ...prev, [index]: !prev[index] }));
  };

  // Helper to determine badge for a tier
  // If a persona matches, that tier gets "Recommended for you".
  // Otherwise, Principal Employer gets default "Most Popular".
  const getBadge = (tierKey) => {
    const isMatched = 
      (tierKey === 'multistate' && (detectedPersona === 'multistate' || detectedPersona === 'multi-state' || detectedPersona === 'employer')) ||
      (tierKey === 'pe' && (detectedPersona === 'pe' || detectedPersona === 'principal' || detectedPersona === 'principal-employer')) ||
      (tierKey === 'agency' && (detectedPersona === 'agency' || detectedPersona === 'staffing' || detectedPersona === 'staffing-agency')) ||
      (tierKey === 'enterprise' && (detectedPersona === 'enterprise' || detectedPersona === 'group'));

    if (isMatched) {
      return <div className={`${styles.badgeTop} ${styles.badgeRecommended}`}>Recommended for you</div>;
    }

    if (!detectedPersona && tierKey === 'pe') {
      return <div className={styles.badgeTop}>Most Popular</div>;
    }

    return null;
  };

  const isCardHighlighted = (tierKey) => {
    if (detectedPersona) {
      return (
        (tierKey === 'multistate' && (detectedPersona === 'multistate' || detectedPersona === 'multi-state' || detectedPersona === 'employer')) ||
        (tierKey === 'pe' && (detectedPersona === 'pe' || detectedPersona === 'principal' || detectedPersona === 'principal-employer')) ||
        (tierKey === 'agency' && (detectedPersona === 'agency' || detectedPersona === 'staffing' || detectedPersona === 'staffing-agency'))
      );
    }
    return tierKey === 'pe';
  };

  // 11 strategic FAQs from Version 3.0 specification
  const faqs = [
    {
      q: "Does a principal employer with 500 direct employees and 1,200 contract workers pay for 1,700 users?",
      a: "No. You do not buy software seat licences for another company's employees. Your own employees are billed on the staff line. Contract workers are metered as verified active heads processed against a contractor bill in that month — a separate, lower line funded from your compliance and contractor risk budget rather than your HR software budget."
    },
    {
      q: "What counts as a contract worker for billing?",
      a: "Any worker processed through the statutory engine for verification against a contractor bill in a given month. A worker you did not verify is a worker you are not billed for."
    },
    {
      q: "What happens when headcount fluctuates seasonally?",
      a: "Billing is calculated on active units processed each month, so a festive ramp costs more in October and less in January. There is no annual commitment to a peak figure."
    },
    {
      q: "We deploy 6,000 workers to client sites but employ 40 people in our offices. What do we pay for?",
      a: "Deployed workers. For staffing, facility management and security agencies the meter is per deployed worker per month, because that is what drives your statutory volume and your billing volume. Your back-office headcount is not charged separately."
    },
    {
      q: "Why is this more expensive per employee than a general HRMS?",
      a: "Because it is not a general HRMS. You are paying for statutory depth — per-state identity resolution, applicability that recomputes when your data changes, contractor bill verification, three different counting bases across rule families. If you need leave and attendance for a single-state workforce, a general HRMS will serve you better and cost you less, and we will tell you that on the first call."
    },
    {
      q: "Can we start with one module?",
      a: "Yes. Entitlement is enforced per module at the platform. Most principal employers start with contract labour alone, on one plant or one entity, without moving payroll at all."
    },
    {
      q: "What if we already run SAP or an existing HRMS?",
      a: "Keep them. The compliance and contract labour layer runs alongside, because the control you are missing sits in the payment path rather than in the general ledger."
    },
    {
      q: "Is there an implementation fee?",
      a: "Yes — 15% of your first-year subscription, with a minimum by tier, waived entirely on a 24-month term. It covers statutory setup across your states, data migration, replay, parallel run, configuration, training and go-live. Migration is inside that fee rather than billed later as a change order."
    },
    {
      q: "Is there a minimum term?",
      a: "Twelve months, with billing beginning at go-live rather than at signature."
    },
    {
      q: "Do prices increase at renewal?",
      a: "List price is held for your initial term. Renewal uplift is capped at 7% or CPI, whichever is lower."
    },
    {
      q: "What is included in support?",
      a: "Every tier has access to a compliance architect, not only a support agent. Response times by severity are published above, and from five working days before your pay date to two working days after, those times halve and a named engineer is on call for your tenant."
    }
  ];

  // Structured schema for search engine and AI indexing
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(item => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.a
      }
    }))
  };

  return (
    <div className={styles.pricingPage}>
      {/* FAQPage Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="container">
        
        {/* Hero Section */}
        <div className={`${styles.header} reveal`}>
          <h1 className={styles.title}>
            Priced on compliance complexity,<br />
            <span style={{ color: 'var(--brand-xlight)' }}>not headcount.</span>
          </h1>
          <p className={styles.subtitle}>
            A single-state office with 400 people and a nine-state manufacturer with 400 people and 1,200 contract workers are not the same problem. We do not price them as though they were.
          </p>

          {/* Monthly / Annual Toggle */}
          <div className={styles.toggleContainer}>
            <span 
              onClick={() => setIsAnnual(false)}
              className={`${styles.toggleLabel} ${!isAnnual ? styles.active : styles.inactive}`}
            >
              Monthly
            </span>
            <button 
              onClick={() => setIsAnnual(!isAnnual)}
              className={styles.toggleBtn}
              aria-label="Toggle annual discount"
            >
              <div 
                className={styles.toggleThumb}
                style={{ transform: isAnnual ? 'translateX(28px)' : 'translateX(0)' }}
              />
            </button>
            <span 
              onClick={() => setIsAnnual(true)}
              className={`${styles.toggleLabel} ${isAnnual ? styles.active : styles.inactive}`}
            >
              Annual <span className={styles.saveBadge}>Save 15%</span>
            </span>
          </div>
        </div>

        {/* 3 Persona Tiers Grid */}
        <div className={styles.gridThree}>
          
          {/* Tier 1 · Multi-State Employer */}
          <div className={isCardHighlighted('multistate') ? styles.cardHighlighted : styles.card}>
            {getBadge('multistate')}
            <div className={styles.tierLabel}>Tier 1</div>
            <h2 className={styles.planName}>Multi-State Employer</h2>
            <p className={styles.planDesc}>Payroll and statutory across every state you operate in.</p>
            
            <div className={styles.priceBlock}>
              <span className={styles.price}>from ₹{isAnnual ? '140' : '165'}</span>
              <span className={styles.priceLabel}> / employee / month</span>
            </div>
            <div className={styles.priceAcv}>Typical annual contract value: ₹8–25 lakh</div>
            <div className={styles.bestFit}>Best fit: 300–3,000 employees, 3 or more states</div>

            <Link href="/coverage" className={`btn btn-outline ${styles.tierCtaBtn}`}>
              Check your state coverage <ArrowRight size={15} style={{ marginLeft: 6, display: 'inline' }} />
            </Link>

            <div className={styles.featureList}>
              <div className={styles.featureTitle}>Included</div>
              
              <div className={styles.featureItem}>
                <span className={styles.bulletDot}>●</span>
                <span className={styles.featureText}>Multi-entity, multi-state payroll with multiple pay calendars and segmented registers</span>
              </div>
              <div className={styles.featureItem}>
                <span className={styles.bulletDot}>●</span>
                <span className={styles.featureText}>Statutory identity registry — every PF, ESI and PT record stamped with the registration in force for that wage month</span>
              </div>
              <div className={styles.featureItem}>
                <span className={styles.bulletDot}>●</span>
                <span className={styles.featureText}>Applicability engine, recomputed inline on commit, with state amendments judged per state</span>
              </div>
              <div className={styles.featureItem}>
                <span className={styles.bulletDot}>●</span>
                <span className={styles.featureText}>Return file generation: TDS (Form 138, Q1–Q3), PF (ECR), ESI (Monthly Contribution)</span>
              </div>
              <div className={styles.featureItem}>
                <span className={styles.bulletDot}>●</span>
                <span className={styles.featureText}>Professional tax and labour welfare fund — computed, recorded and evidenced across loaded states</span>
              </div>
              <div className={styles.featureItem}>
                <span className={styles.bulletDot}>●</span>
                <span className={styles.featureText}>Obligation register: computed, filed, paid, evidenced</span>
              </div>
              <div className={styles.featureItem}>
                <span className={styles.bulletDot}>●</span>
                <span className={styles.featureText}>e-Vault document governance with retention policy, legal hold and a hash-chained audit ledger</span>
              </div>
              <div className={styles.featureItem}>
                <span className={styles.bulletDot}>●</span>
                <span className={styles.featureText}>Core HR, leave, attendance and employee self-service</span>
              </div>
              <div className={styles.featureItem}>
                <span className={styles.bulletDot}>●</span>
                <span className={styles.featureText}>Four-way separation of duties on the payroll money path</span>
              </div>
              <div className={styles.featureItem}>
                <span className={styles.bulletDot}>●</span>
                <span className={styles.featureText}>Simulation runs — a full trial payroll that pays nobody</span>
              </div>
              <div className={styles.featureItem}>
                <span className={styles.bulletDot}>●</span>
                <span className={styles.featureText}>Migration: replay, parallel run and go-live</span>
              </div>
            </div>
          </div>

          {/* Tier 2 · Principal Employer */}
          <div className={isCardHighlighted('pe') ? styles.cardHighlighted : styles.card}>
            {getBadge('pe')}
            <div className={styles.tierLabel}>Tier 2</div>
            <h2 className={styles.planName}>Principal Employer</h2>
            <p className={styles.planDesc}>Contractor compliance verified before Accounts Payable pays.</p>
            
            <div className={styles.priceBlock}>
              <span className={styles.price}>from ₹{isAnnual ? '175' : '205'}</span>
              <span className={styles.priceLabel}> / staff employee / month</span>
              <div style={{ marginTop: '0.35rem' }}>
                <span className={styles.price} style={{ fontSize: '1.75rem', color: '#e0aaff' }}>+ from ₹{isAnnual ? '65' : '75'}</span>
                <span className={styles.priceLabel}> / verified contract worker / month</span>
              </div>
            </div>
            <div className={styles.priceAcv}>Typical annual contract value: ₹15–60 lakh</div>
            <div className={styles.bestFit}>Best fit: 500–5,000 own employees, contract labour at 20%+ of workforce, 3 or more sites</div>

            <div className={styles.calloutCard}>
              <div className={styles.calloutCardTitle}>The contract-worker line is metered on active verified heads, not on software seats.</div>
              <div className={styles.calloutCardBody}>
                You are not buying licences for another company's employees. This line is funded from your contractor risk and compliance-services budget, and it displaces spend you are already making.
              </div>
            </div>

            <Link href="/exposure-report" className={`btn btn-primary ${styles.tierCtaBtn}`}>
              Get your exposure assessment <ArrowRight size={15} style={{ marginLeft: 6, display: 'inline' }} />
            </Link>

            <div className={styles.featureList}>
              <div className={styles.featureTitle}>Everything in Multi-State Employer, plus</div>
              
              <div className={styles.featureItem}>
                <span className={styles.bulletDot}>●</span>
                <span className={styles.featureText}>Contractor bill verification — attendance trim, statutory recomputation, eligible-to-pay release cap</span>
              </div>
              <div className={styles.featureItem}>
                <span className={styles.bulletDot}>●</span>
                <span className={styles.featureText}>Per-worker deviations, case-managed on a 72-hour clock</span>
              </div>
              <div className={styles.featureItem}>
                <span className={styles.bulletDot}>●</span>
                <span className={styles.featureText}>Vendor governance: KYC with expiry tracking, per-state establishment codes, agreements and rate cards</span>
              </div>
              <div className={styles.featureItem}>
                <span className={styles.bulletDot}>●</span>
                <span className={styles.featureText}>Vendor compliance scoring</span>
              </div>
              <div className={styles.featureItem}>
                <span className={styles.bulletDot}>●</span>
                <span className={styles.featureText}>Site muster and biometric ingestion — your own attendance record, independent of the contractor's</span>
              </div>
              <div className={styles.featureItem}>
                <span className={styles.bulletDot}>●</span>
                <span className={styles.featureText}>CLRA register pack, per establishment</span>
              </div>
              <div className={styles.featureItem}>
                <span className={styles.bulletDot}>●</span>
                <span className={styles.featureText}>Exposure dashboard by contractor, site and state, traceable to a named worker</span>
              </div>
              <div className={styles.featureItem}>
                <span className={styles.bulletDot}>●</span>
                <span className={styles.featureText}>Scoped contractor portal — a vendor sees only their own roster and documents</span>
              </div>
              <div className={styles.featureItem}>
                <span className={styles.bulletDot}>●</span>
                <span className={styles.featureText}>Service desk</span>
              </div>
            </div>
          </div>

          {/* Tier 3 · Staffing & Manpower Agency */}
          <div className={isCardHighlighted('agency') ? styles.cardHighlighted : styles.card}>
            {getBadge('agency')}
            <div className={styles.tierLabel}>Tier 3</div>
            <h2 className={styles.planName}>Staffing & Manpower Agency</h2>
            <p className={styles.planDesc}>Roster to payroll to client invoice, off one approved muster.</p>
            
            <div className={styles.priceBlock}>
              <span className={styles.price}>from ₹{isAnnual ? '45' : '53'}</span>
              <span className={styles.priceLabel}> / deployed worker / month</span>
            </div>
            <div className={styles.priceAcv}>Typical annual contract value: ₹10–50 lakh</div>
            <div className={styles.bestFit}>Best fit: 1,500–15,000 deployed workers, 4 or more states</div>

            <div className={styles.calloutCard}>
              <div className={styles.calloutCardTitle}>Metered on deployed workers, not on HR seats.</div>
              <div className={styles.calloutCardBody}>
                Your cost driver is the number of people on client sites, not the size of your back office. A forty-person head office running six thousand deployments pays for the deployments.
              </div>
            </div>

            <Link href="/compliance-proof-pack" className={`btn btn-outline ${styles.tierCtaBtn}`}>
              Get your compliance proof pack <ArrowRight size={15} style={{ marginLeft: 6, display: 'inline' }} />
            </Link>

            <div className={styles.featureList}>
              <div className={styles.featureTitle}>Included</div>
              
              <div className={styles.featureItem}>
                <span className={styles.bulletDot}>●</span>
                <span className={styles.featureText}>Roster and site muster — SMS link, no app install, offline-capable, geo-tagged</span>
              </div>
              <div className={styles.featureItem}>
                <span className={styles.bulletDot}>●</span>
                <span className={styles.featureText}>Multi-client payroll with client-specific wage rules and state minimum wage per site</span>
              </div>
              <div className={styles.featureItem}>
                <span className={styles.bulletDot}>●</span>
                <span className={styles.featureText}>The aggregate statutory ceiling applied once and apportioned back per client line</span>
              </div>
              <div className={styles.featureItem}>
                <span className={styles.bulletDot}>●</span>
                <span className={styles.featureText}>Client billing and GST — per-contract rate cards, forward and reverse charge per service line, credit notes against client deductions</span>
              </div>
              <div className={styles.featureItem}>
                <span className={styles.bulletDot}>●</span>
                <span className={styles.featureText}>Agency profitability by client, contract, site and service line, costed from actual payroll</span>
              </div>
              <div className={styles.featureItem}>
                <span className={styles.bulletDot}>●</span>
                <span className={styles.featureText}>Demand planning, week-ahead fill forecasting, per-contract SLA terms</span>
              </div>
              <div className={styles.featureItem}>
                <span className={styles.bulletDot}>●</span>
                <span className={styles.featureText}>Client compliance pack, generated per contract per month</span>
              </div>
              <div className={styles.featureItem}>
                <span className={styles.bulletDot}>●</span>
                <span className={styles.featureText}>Scoped client window — a principal employer sees only their own deployment</span>
              </div>
              <div className={styles.featureItem}>
                <span className={styles.bulletDot}>●</span>
                <span className={styles.featureText}>White-label: your brand, your domain, your branded documents</span>
              </div>
              <div className={styles.featureItem}>
                <span className={styles.bulletDot}>●</span>
                <span className={styles.featureText}>The full statutory engine, as in Multi-State Employer</span>
              </div>
            </div>
          </div>

        </div>

        {/* Tier 4 · Enterprise Group (Full-Width Band) */}
        <div className={styles.enterpriseBand}>
          {getBadge('enterprise')}
          <div className={styles.enterpriseGrid}>
            <div>
              <div className={styles.tierLabel}>Tier 4</div>
              <h2 className={styles.planName} style={{ fontSize: '2rem' }}>Enterprise Group</h2>
              <p className={styles.planDesc} style={{ fontSize: '1.05rem', minHeight: 'unset', marginBottom: '1.25rem' }}>
                Multi-entity, multi-lens, bespoke configuration.
              </p>
              <div className={styles.priceBlock}>
                <span className={styles.price} style={{ fontSize: '2.2rem' }}>Custom</span>
                <span className={styles.priceLabel}> · from ₹25 lakh annual</span>
              </div>
              <div className={styles.bestFit} style={{ display: 'inline-block', marginBottom: '2rem' }}>
                Best fit: groups running both lenses, 5,000+ total workforce
              </div>
              <div>
                <Link href="/platform/demo?cta=pricing_enterprise&intent=enterprise" className="btn btn-ghost" style={{ padding: '14px 28px' }}>
                  Talk to sales <ArrowRight size={16} style={{ marginLeft: 8, display: 'inline' }} />
                </Link>
              </div>
            </div>

            <div>
              <div className={styles.featureTitle} style={{ marginBottom: '1rem', color: '#e0aaff' }}>
                Any combination of the tiers above, plus
              </div>
              <div className={styles.enterpriseFeaturesGrid}>
                <div className={styles.featureItem}>
                  <span className={styles.bulletDot}>●</span>
                  <span className={styles.featureText}>Both lenses in one tenant — principal employer and supplier</span>
                </div>
                <div className={styles.featureItem}>
                  <span className={styles.bulletDot}>●</span>
                  <span className={styles.featureText}>Multi-entity consolidation and group-level reporting</span>
                </div>
                <div className={styles.featureItem}>
                  <span className={styles.bulletDot}>●</span>
                  <span className={styles.featureText}>Talent modules: Recruitment & ATS, Performance, Learning, Workforce Planning</span>
                </div>
                <div className={styles.featureItem}>
                  <span className={styles.bulletDot}>●</span>
                  <span className={styles.featureText}>Expense management with budget envelopes and encumbrance ledger</span>
                </div>
                <div className={styles.featureItem}>
                  <span className={styles.bulletDot}>●</span>
                  <span className={styles.featureText}>Assets and Offboarding</span>
                </div>
                <div className={styles.featureItem}>
                  <span className={styles.bulletDot}>●</span>
                  <span className={styles.featureText}>Full API access</span>
                </div>
                <div className={styles.featureItem}>
                  <span className={styles.bulletDot}>●</span>
                  <span className={styles.featureText}>Enterprise identity: SAML 2.0, OIDC, SCIM, MFA</span>
                </div>
                <div className={styles.featureItem}>
                  <span className={styles.bulletDot}>●</span>
                  <span className={styles.featureText}>Dedicated tenant storage with your own KMS key, object-lock and crypto-shred exit</span>
                </div>
                <div className={styles.featureItem}>
                  <span className={styles.bulletDot}>●</span>
                  <span className={styles.featureText}>Named account and implementation team</span>
                </div>
                <div className={styles.featureItem}>
                  <span className={styles.bulletDot}>●</span>
                  <span className={styles.featureText}>Custom SLA</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Volume Pricing Section */}
        <div className={styles.sectionBlock}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Volume pricing</h2>
            <p className={styles.sectionSubtitle}>
              Tiered volume discounts applied systematically to billable units across all operational tiers.
            </p>
          </div>
          <div className={styles.compactTableWrapper}>
            <table className={styles.compactTable}>
              <thead>
                <tr>
                  <th style={{ width: '55%' }}>Billable units</th>
                  <th style={{ width: '45%', textAlign: 'right' }}>Discount from list</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ fontWeight: 600, color: '#fff' }}>Up to 500</td>
                  <td style={{ textAlign: 'right' }}>
                    <span className={`${styles.discountPill} ${styles.discountPillStandard}`}>List price</span>
                  </td>
                </tr>
                <tr>
                  <td style={{ fontWeight: 600, color: '#fff' }}>501 – 2,000</td>
                  <td style={{ textAlign: 'right' }}>
                    <span className={`${styles.discountPill} ${styles.discountPillGreen}`}>10%</span>
                  </td>
                </tr>
                <tr>
                  <td style={{ fontWeight: 600, color: '#fff' }}>2,001 – 5,000</td>
                  <td style={{ textAlign: 'right' }}>
                    <span className={`${styles.discountPill} ${styles.discountPillGreen}`}>20%</span>
                  </td>
                </tr>
                <tr>
                  <td style={{ fontWeight: 600, color: '#fff' }}>5,001 – 15,000</td>
                  <td style={{ textAlign: 'right' }}>
                    <span className={`${styles.discountPill} ${styles.discountPillGreen}`}>30%</span>
                  </td>
                </tr>
                <tr>
                  <td style={{ fontWeight: 600, color: '#fff' }}>15,000+</td>
                  <td style={{ textAlign: 'right' }}>
                    <span className={`${styles.discountPill} ${styles.discountPillViolet}`}>Negotiated</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: '0.84rem', color: 'var(--text-muted)', fontStyle: 'italic', marginTop: '1.25rem', textAlign: 'center' }}>
            *Billable units are employees, deployed workers or verified contract workers, depending on your tier.
          </p>
        </div>

        {/* Implementation Section */}
        <div className={styles.sectionBlock}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Implementation</h2>
            <p className={styles.sectionSubtitle} style={{ fontSize: '1.15rem', color: '#fff', fontWeight: 600 }}>
              A one-time fee of 15% of your first-year subscription, with a minimum by tier.
            </p>
            <div style={{ display: 'inline-block', background: 'rgba(34, 211, 160, 0.12)', border: '1px solid rgba(34, 211, 160, 0.3)', color: '#34d399', padding: '6px 16px', borderRadius: '99px', fontSize: '0.88rem', fontWeight: 700, marginTop: '1rem' }}>
              Waived entirely on a 24-month term.
            </div>
          </div>

          <div className={styles.compactTableWrapper} style={{ marginBottom: '2.5rem' }}>
            <table className={styles.compactTable}>
              <thead>
                <tr>
                  <th style={{ width: '60%' }}>Tier</th>
                  <th style={{ width: '40%', textAlign: 'right' }}>Minimum</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ fontWeight: 600, color: '#fff' }}>Multi-State Employer</td>
                  <td style={{ fontWeight: 700, color: '#fff', textAlign: 'right' }}>₹1,50,000</td>
                </tr>
                <tr>
                  <td style={{ fontWeight: 600, color: '#fff' }}>Principal Employer</td>
                  <td style={{ fontWeight: 700, color: '#fff', textAlign: 'right' }}>₹3,00,000</td>
                </tr>
                <tr>
                  <td style={{ fontWeight: 600, color: '#fff' }}>Staffing &amp; Manpower Agency</td>
                  <td style={{ fontWeight: 700, color: '#fff', textAlign: 'right' }}>₹2,50,000</td>
                </tr>
                <tr>
                  <td style={{ fontWeight: 600, color: '#fff' }}>Enterprise Group</td>
                  <td style={{ fontWeight: 700, color: 'var(--brand-xlight)', textAlign: 'right' }}>
                    <span className={`${styles.discountPill} ${styles.discountPillViolet}`}>Scoped</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className={styles.principlesGrid} style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <div className={styles.principleCard}>
              <div className={styles.principleHeading}>What it covers</div>
              <ul style={{ paddingLeft: '1.25rem', marginTop: '0.75rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', color: '#cbd5e1', fontSize: '0.88rem', lineHeight: '1.5' }}>
                <li>Statutory setup for every state, registration and establishment you operate</li>
                <li>Data migration, including replay of months you have already paid and reconciliation of every variance</li>
                <li>Parallel run alongside your existing system until two cycles reconcile cleanly</li>
                <li>Configuration of pay structures, policies, approval chains and permissions</li>
                <li>Administrator and supervisor training</li>
                <li>Go-live and the first assisted payroll cycle</li>
              </ul>
            </div>

            <div className={styles.principleCard}>
              <div className={styles.principleHeading}>What you will not be charged for later</div>
              <p className={styles.principleBody} style={{ marginTop: '0.75rem' }}>
                Migration is inside this fee, not billed as a change order when the scope turns out to be larger than the sales conversation assumed. That is how it is usually done, and it is not how we do it.
              </p>
            </div>
          </div>
        </div>

        {/* What every tier includes (4 Pillars) */}
        <div className={styles.sectionBlock}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>What every tier includes</h2>
          </div>
          <div className={styles.principlesGrid}>
            <div className={styles.principleCard}>
              <div className={styles.principleHeading}>Billing starts at go-live, not at signature.</div>
              <div className={styles.principleBody}>
                You do not pay a subscription while an implementation runs. It is common in this market to bill from the contract date while a multi-entity rollout takes 60 to 120 days. We do not.
              </div>
            </div>

            <div className={styles.principleCard}>
              <div className={styles.principleHeading}>Migration is part of implementation, not a change order.</div>
              <div className={styles.principleBody}>
                Replay, parallel run and go-live are scoped in from the start.
              </div>
            </div>

            <div className={styles.principleCard}>
              <div className={styles.principleHeading}>Modules are licensed separately.</div>
              <div className={styles.principleBody}>
                Entitlement is enforced at the platform, not hidden behind a menu. You are not paying for sixteen modules to use two.
              </div>
            </div>

            <div className={styles.principleCard}>
              <div className={styles.principleHeading}>The coverage matrix is public.</div>
              <div className={styles.principleBody}>
                Every state and union territory, every statutory head, what we load and to what depth, with the date a named person last verified it against the gazette. Including the gaps.
              </div>
            </div>
          </div>
        </div>

        {/* Feature Comparison Table */}
        <div className={styles.sectionBlock}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Feature comparison</h2>
            <p className={styles.sectionSubtitle}>
              Rigorous, itemized verification of features across all four tiers.
            </p>
          </div>

          <div className={styles.tableWrapper}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th className={styles.th} style={{ width: '36%' }}>Feature</th>
                  <th className={`${styles.th} ${styles.thCenter}`} style={{ width: '16%' }}>Multi-State</th>
                  <th className={`${styles.th} ${styles.thCenter} ${styles.tdHighlight}`} style={{ width: '16%' }}>Principal Employer</th>
                  <th className={`${styles.th} ${styles.thCenter}`} style={{ width: '16%' }}>Staffing Agency</th>
                  <th className={`${styles.th} ${styles.thCenter}`} style={{ width: '16%' }}>Enterprise</th>
                </tr>
              </thead>
              <tbody>
                
                {/* 1. PAYROLL & STATUTORY */}
                <tr className={styles.catRow}>
                  <td colSpan={5} className={styles.catText}>PAYROLL & STATUTORY</td>
                </tr>
                <tr>
                  <td className={styles.td}>Multi-entity, multi-state payroll</td>
                  <td className={`${styles.td} ${styles.tdCenter}`}><span className={styles.dotViolet}>●</span></td>
                  <td className={`${styles.td} ${styles.tdCenter} ${styles.tdHighlight}`}><span className={styles.dotViolet}>●</span></td>
                  <td className={`${styles.td} ${styles.tdCenter}`}><span className={styles.dotViolet}>●</span></td>
                  <td className={`${styles.td} ${styles.tdCenter}`}><span className={styles.dotViolet}>●</span></td>
                </tr>
                <tr>
                  <td className={styles.td}>Multiple pay calendars</td>
                  <td className={`${styles.td} ${styles.tdCenter}`}><span className={styles.dotViolet}>●</span></td>
                  <td className={`${styles.td} ${styles.tdCenter} ${styles.tdHighlight}`}><span className={styles.dotViolet}>●</span></td>
                  <td className={`${styles.td} ${styles.tdCenter}`}><span className={styles.dotViolet}>●</span></td>
                  <td className={`${styles.td} ${styles.tdCenter}`}><span className={styles.dotViolet}>●</span></td>
                </tr>
                <tr>
                  <td className={styles.td}>Statutory identity registry</td>
                  <td className={`${styles.td} ${styles.tdCenter}`}><span className={styles.dotViolet}>●</span></td>
                  <td className={`${styles.td} ${styles.tdCenter} ${styles.tdHighlight}`}><span className={styles.dotViolet}>●</span></td>
                  <td className={`${styles.td} ${styles.tdCenter}`}><span className={styles.dotViolet}>●</span></td>
                  <td className={`${styles.td} ${styles.tdCenter}`}><span className={styles.dotViolet}>●</span></td>
                </tr>
                <tr>
                  <td className={styles.td}>Simulation / trial run</td>
                  <td className={`${styles.td} ${styles.tdCenter}`}><span className={styles.dotViolet}>●</span></td>
                  <td className={`${styles.td} ${styles.tdCenter} ${styles.tdHighlight}`}><span className={styles.dotViolet}>●</span></td>
                  <td className={`${styles.td} ${styles.tdCenter}`}><span className={styles.dotViolet}>●</span></td>
                  <td className={`${styles.td} ${styles.tdCenter}`}><span className={styles.dotViolet}>●</span></td>
                </tr>
                <tr>
                  <td className={styles.td}>Four-way separation of duties</td>
                  <td className={`${styles.td} ${styles.tdCenter}`}><span className={styles.dotViolet}>●</span></td>
                  <td className={`${styles.td} ${styles.tdCenter} ${styles.tdHighlight}`}><span className={styles.dotViolet}>●</span></td>
                  <td className={`${styles.td} ${styles.tdCenter}`}><span className={styles.dotViolet}>●</span></td>
                  <td className={`${styles.td} ${styles.tdCenter}`}><span className={styles.dotViolet}>●</span></td>
                </tr>
                <tr>
                  <td className={styles.td}>PF, ESI, TDS computation</td>
                  <td className={`${styles.td} ${styles.tdCenter}`}><span className={styles.dotViolet}>●</span></td>
                  <td className={`${styles.td} ${styles.tdCenter} ${styles.tdHighlight}`}><span className={styles.dotViolet}>●</span></td>
                  <td className={`${styles.td} ${styles.tdCenter}`}><span className={styles.dotViolet}>●</span></td>
                  <td className={`${styles.td} ${styles.tdCenter}`}><span className={styles.dotViolet}>●</span></td>
                </tr>
                <tr>
                  <td className={styles.td}>Professional tax & LWF</td>
                  <td className={`${styles.td} ${styles.tdCenter}`}><span className={styles.qualText}>Loaded states</span></td>
                  <td className={`${styles.td} ${styles.tdCenter} ${styles.tdHighlight}`}><span className={styles.qualText}>Loaded states</span></td>
                  <td className={`${styles.td} ${styles.tdCenter}`}><span className={styles.qualText}>Loaded states</span></td>
                  <td className={`${styles.td} ${styles.tdCenter}`}><span className={styles.qualText}>Loaded states</span></td>
                </tr>
                <tr>
                  <td className={styles.td}>Return file generation — TDS, PF, ESI</td>
                  <td className={`${styles.td} ${styles.tdCenter}`}><span className={styles.dotViolet}>●</span></td>
                  <td className={`${styles.td} ${styles.tdCenter} ${styles.tdHighlight}`}><span className={styles.dotViolet}>●</span></td>
                  <td className={`${styles.td} ${styles.tdCenter}`}><span className={styles.dotViolet}>●</span></td>
                  <td className={`${styles.td} ${styles.tdCenter}`}><span className={styles.dotViolet}>●</span></td>
                </tr>
                <tr>
                  <td className={styles.td}>PT / LWF — computed, recorded, evidenced</td>
                  <td className={`${styles.td} ${styles.tdCenter}`}><span className={styles.dotViolet}>●</span></td>
                  <td className={`${styles.td} ${styles.tdCenter} ${styles.tdHighlight}`}><span className={styles.dotViolet}>●</span></td>
                  <td className={`${styles.td} ${styles.tdCenter}`}><span className={styles.dotViolet}>●</span></td>
                  <td className={`${styles.td} ${styles.tdCenter}`}><span className={styles.dotViolet}>●</span></td>
                </tr>
                <tr>
                  <td className={styles.td}>Obligation register with evidence tracking</td>
                  <td className={`${styles.td} ${styles.tdCenter}`}><span className={styles.dotViolet}>●</span></td>
                  <td className={`${styles.td} ${styles.tdCenter} ${styles.tdHighlight}`}><span className={styles.dotViolet}>●</span></td>
                  <td className={`${styles.td} ${styles.tdCenter}`}><span className={styles.dotViolet}>●</span></td>
                  <td className={`${styles.td} ${styles.tdCenter}`}><span className={styles.dotViolet}>●</span></td>
                </tr>

                {/* 2. CONTRACT LABOUR */}
                <tr className={styles.catRow}>
                  <td colSpan={5} className={styles.catText}>CONTRACT LABOUR</td>
                </tr>
                <tr>
                  <td className={styles.td}>Contractor bill verification</td>
                  <td className={`${styles.td} ${styles.tdCenter}`}><span className={styles.dashGrey}>—</span></td>
                  <td className={`${styles.td} ${styles.tdCenter} ${styles.tdHighlight}`}><span className={styles.dotViolet}>●</span></td>
                  <td className={`${styles.td} ${styles.tdCenter}`}><span className={styles.dashGrey}>—</span></td>
                  <td className={`${styles.td} ${styles.tdCenter}`}><span className={styles.dotViolet}>●</span></td>
                </tr>
                <tr>
                  <td className={styles.td}>Eligible-to-pay release cap</td>
                  <td className={`${styles.td} ${styles.tdCenter}`}><span className={styles.dashGrey}>—</span></td>
                  <td className={`${styles.td} ${styles.tdCenter} ${styles.tdHighlight}`}><span className={styles.dotViolet}>●</span></td>
                  <td className={`${styles.td} ${styles.tdCenter}`}><span className={styles.dashGrey}>—</span></td>
                  <td className={`${styles.td} ${styles.tdCenter}`}><span className={styles.dotViolet}>●</span></td>
                </tr>
                <tr>
                  <td className={styles.td}>Per-worker deviation management</td>
                  <td className={`${styles.td} ${styles.tdCenter}`}><span className={styles.dashGrey}>—</span></td>
                  <td className={`${styles.td} ${styles.tdCenter} ${styles.tdHighlight}`}><span className={styles.dotViolet}>●</span></td>
                  <td className={`${styles.td} ${styles.tdCenter}`}><span className={styles.dashGrey}>—</span></td>
                  <td className={`${styles.td} ${styles.tdCenter}`}><span className={styles.dotViolet}>●</span></td>
                </tr>
                <tr>
                  <td className={styles.td}>Vendor KYC and licence expiry</td>
                  <td className={`${styles.td} ${styles.tdCenter}`}><span className={styles.dashGrey}>—</span></td>
                  <td className={`${styles.td} ${styles.tdCenter} ${styles.tdHighlight}`}><span className={styles.dotViolet}>●</span></td>
                  <td className={`${styles.td} ${styles.tdCenter}`}><span className={styles.dashGrey}>—</span></td>
                  <td className={`${styles.td} ${styles.tdCenter}`}><span className={styles.dotViolet}>●</span></td>
                </tr>
                <tr>
                  <td className={styles.td}>CLRA register pack</td>
                  <td className={`${styles.td} ${styles.tdCenter}`}><span className={styles.dashGrey}>—</span></td>
                  <td className={`${styles.td} ${styles.tdCenter} ${styles.tdHighlight}`}><span className={styles.dotViolet}>●</span></td>
                  <td className={`${styles.td} ${styles.tdCenter}`}><span className={styles.dashGrey}>—</span></td>
                  <td className={`${styles.td} ${styles.tdCenter}`}><span className={styles.dotViolet}>●</span></td>
                </tr>
                <tr>
                  <td className={styles.td}>Exposure dashboard</td>
                  <td className={`${styles.td} ${styles.tdCenter}`}><span className={styles.dashGrey}>—</span></td>
                  <td className={`${styles.td} ${styles.tdCenter} ${styles.tdHighlight}`}><span className={styles.dotViolet}>●</span></td>
                  <td className={`${styles.td} ${styles.tdCenter}`}><span className={styles.dashGrey}>—</span></td>
                  <td className={`${styles.td} ${styles.tdCenter}`}><span className={styles.dotViolet}>●</span></td>
                </tr>

                {/* 3. STAFFING OPERATIONS */}
                <tr className={styles.catRow}>
                  <td colSpan={5} className={styles.catText}>STAFFING OPERATIONS</td>
                </tr>
                <tr>
                  <td className={styles.td}>Roster and site muster</td>
                  <td className={`${styles.td} ${styles.tdCenter}`}><span className={styles.dashGrey}>—</span></td>
                  <td className={`${styles.td} ${styles.tdCenter} ${styles.tdHighlight}`}><span className={styles.qualText}>Capture only</span></td>
                  <td className={`${styles.td} ${styles.tdCenter}`}><span className={styles.dotViolet}>●</span></td>
                  <td className={`${styles.td} ${styles.tdCenter}`}><span className={styles.dotViolet}>●</span></td>
                </tr>
                <tr>
                  <td className={styles.td}>Multi-client payroll</td>
                  <td className={`${styles.td} ${styles.tdCenter}`}><span className={styles.dashGrey}>—</span></td>
                  <td className={`${styles.td} ${styles.tdCenter} ${styles.tdHighlight}`}><span className={styles.dashGrey}>—</span></td>
                  <td className={`${styles.td} ${styles.tdCenter}`}><span className={styles.dotViolet}>●</span></td>
                  <td className={`${styles.td} ${styles.tdCenter}`}><span className={styles.dotViolet}>●</span></td>
                </tr>
                <tr>
                  <td className={styles.td}>Client billing and GST invoicing</td>
                  <td className={`${styles.td} ${styles.tdCenter}`}><span className={styles.dashGrey}>—</span></td>
                  <td className={`${styles.td} ${styles.tdCenter} ${styles.tdHighlight}`}><span className={styles.dashGrey}>—</span></td>
                  <td className={`${styles.td} ${styles.tdCenter}`}><span className={styles.dotViolet}>●</span></td>
                  <td className={`${styles.td} ${styles.tdCenter}`}><span className={styles.dotViolet}>●</span></td>
                </tr>
                <tr>
                  <td className={styles.td}>Agency profitability</td>
                  <td className={`${styles.td} ${styles.tdCenter}`}><span className={styles.dashGrey}>—</span></td>
                  <td className={`${styles.td} ${styles.tdCenter} ${styles.tdHighlight}`}><span className={styles.dashGrey}>—</span></td>
                  <td className={`${styles.td} ${styles.tdCenter}`}><span className={styles.dotViolet}>●</span></td>
                  <td className={`${styles.td} ${styles.tdCenter}`}><span className={styles.dotViolet}>●</span></td>
                </tr>
                <tr>
                  <td className={styles.td}>Client compliance pack</td>
                  <td className={`${styles.td} ${styles.tdCenter}`}><span className={styles.dashGrey}>—</span></td>
                  <td className={`${styles.td} ${styles.tdCenter} ${styles.tdHighlight}`}><span className={styles.dashGrey}>—</span></td>
                  <td className={`${styles.td} ${styles.tdCenter}`}><span className={styles.dotViolet}>●</span></td>
                  <td className={`${styles.td} ${styles.tdCenter}`}><span className={styles.dotViolet}>●</span></td>
                </tr>
                <tr>
                  <td className={styles.td}>White-label</td>
                  <td className={`${styles.td} ${styles.tdCenter}`}><span className={styles.dashGrey}>—</span></td>
                  <td className={`${styles.td} ${styles.tdCenter} ${styles.tdHighlight}`}><span className={styles.dashGrey}>—</span></td>
                  <td className={`${styles.td} ${styles.tdCenter}`}><span className={styles.dotViolet}>●</span></td>
                  <td className={`${styles.td} ${styles.tdCenter}`}><span className={styles.dotViolet}>●</span></td>
                </tr>

                {/* 4. CORE HR */}
                <tr className={styles.catRow}>
                  <td colSpan={5} className={styles.catText}>CORE HR</td>
                </tr>
                <tr>
                  <td className={styles.td}>Core HR, leave, attendance</td>
                  <td className={`${styles.td} ${styles.tdCenter}`}><span className={styles.dotViolet}>●</span></td>
                  <td className={`${styles.td} ${styles.tdCenter} ${styles.tdHighlight}`}><span className={styles.dotViolet}>●</span></td>
                  <td className={`${styles.td} ${styles.tdCenter}`}><span className={styles.dotViolet}>●</span></td>
                  <td className={`${styles.td} ${styles.tdCenter}`}><span className={styles.dotViolet}>●</span></td>
                </tr>
                <tr>
                  <td className={styles.td}>Employee self-service</td>
                  <td className={`${styles.td} ${styles.tdCenter}`}><span className={styles.dotViolet}>●</span></td>
                  <td className={`${styles.td} ${styles.tdCenter} ${styles.tdHighlight}`}><span className={styles.dotViolet}>●</span></td>
                  <td className={`${styles.td} ${styles.tdCenter}`}><span className={styles.dotViolet}>●</span></td>
                  <td className={`${styles.td} ${styles.tdCenter}`}><span className={styles.dotViolet}>●</span></td>
                </tr>
                <tr>
                  <td className={styles.td}>Offboarding and full and final</td>
                  <td className={`${styles.td} ${styles.tdCenter}`}><span className={styles.dotViolet}>●</span></td>
                  <td className={`${styles.td} ${styles.tdCenter} ${styles.tdHighlight}`}><span className={styles.dotViolet}>●</span></td>
                  <td className={`${styles.td} ${styles.tdCenter}`}><span className={styles.dotViolet}>●</span></td>
                  <td className={`${styles.td} ${styles.tdCenter}`}><span className={styles.dotViolet}>●</span></td>
                </tr>
                <tr>
                  <td className={styles.td}>Service desk</td>
                  <td className={`${styles.td} ${styles.tdCenter}`}><span className={styles.dashGrey}>—</span></td>
                  <td className={`${styles.td} ${styles.tdCenter} ${styles.tdHighlight}`}><span className={styles.dotViolet}>●</span></td>
                  <td className={`${styles.td} ${styles.tdCenter}`}><span className={styles.dotViolet}>●</span></td>
                  <td className={`${styles.td} ${styles.tdCenter}`}><span className={styles.dotViolet}>●</span></td>
                </tr>

                {/* 5. TALENT & PLATFORM */}
                <tr className={styles.catRow}>
                  <td colSpan={5} className={styles.catText}>TALENT & PLATFORM</td>
                </tr>
                <tr>
                  <td className={styles.td}>Recruitment & ATS</td>
                  <td className={`${styles.td} ${styles.tdCenter}`}><span className={styles.dashGrey}>—</span></td>
                  <td className={`${styles.td} ${styles.tdCenter} ${styles.tdHighlight}`}><span className={styles.dashGrey}>—</span></td>
                  <td className={`${styles.td} ${styles.tdCenter}`}><span className={styles.dashGrey}>—</span></td>
                  <td className={`${styles.td} ${styles.tdCenter}`}><span className={styles.dotViolet}>●</span></td>
                </tr>
                <tr>
                  <td className={styles.td}>Performance management</td>
                  <td className={`${styles.td} ${styles.tdCenter}`}><span className={styles.dashGrey}>—</span></td>
                  <td className={`${styles.td} ${styles.tdCenter} ${styles.tdHighlight}`}><span className={styles.dashGrey}>—</span></td>
                  <td className={`${styles.td} ${styles.tdCenter}`}><span className={styles.dashGrey}>—</span></td>
                  <td className={`${styles.td} ${styles.tdCenter}`}><span className={styles.dotViolet}>●</span></td>
                </tr>
                <tr>
                  <td className={styles.td}>Learning</td>
                  <td className={`${styles.td} ${styles.tdCenter}`}><span className={styles.dashGrey}>—</span></td>
                  <td className={`${styles.td} ${styles.tdCenter} ${styles.tdHighlight}`}><span className={styles.dashGrey}>—</span></td>
                  <td className={`${styles.td} ${styles.tdCenter}`}><span className={styles.dashGrey}>—</span></td>
                  <td className={`${styles.td} ${styles.tdCenter}`}><span className={styles.dotViolet}>●</span></td>
                </tr>
                <tr>
                  <td className={styles.td}>Workforce planning</td>
                  <td className={`${styles.td} ${styles.tdCenter}`}><span className={styles.dashGrey}>—</span></td>
                  <td className={`${styles.td} ${styles.tdCenter} ${styles.tdHighlight}`}><span className={styles.dashGrey}>—</span></td>
                  <td className={`${styles.td} ${styles.tdCenter}`}><span className={styles.dashGrey}>—</span></td>
                  <td className={`${styles.td} ${styles.tdCenter}`}><span className={styles.dotViolet}>●</span></td>
                </tr>
                <tr>
                  <td className={styles.td}>Expense management</td>
                  <td className={`${styles.td} ${styles.tdCenter}`}><span className={styles.dashGrey}>—</span></td>
                  <td className={`${styles.td} ${styles.tdCenter} ${styles.tdHighlight}`}><span className={styles.qualText}>Add-on</span></td>
                  <td className={`${styles.td} ${styles.tdCenter}`}><span className={styles.qualText}>Add-on</span></td>
                  <td className={`${styles.td} ${styles.tdCenter}`}><span className={styles.dotViolet}>●</span></td>
                </tr>
                <tr>
                  <td className={styles.td}>Assets</td>
                  <td className={`${styles.td} ${styles.tdCenter}`}><span className={styles.dashGrey}>—</span></td>
                  <td className={`${styles.td} ${styles.tdCenter} ${styles.tdHighlight}`}><span className={styles.qualText}>Add-on</span></td>
                  <td className={`${styles.td} ${styles.tdCenter}`}><span className={styles.qualText}>Add-on</span></td>
                  <td className={`${styles.td} ${styles.tdCenter}`}><span className={styles.dotViolet}>●</span></td>
                </tr>

                {/* 6. PLATFORM */}
                <tr className={styles.catRow}>
                  <td colSpan={5} className={styles.catText}>PLATFORM</td>
                </tr>
                <tr>
                  <td className={styles.td}>e-Vault document governance</td>
                  <td className={`${styles.td} ${styles.tdCenter}`}><span className={styles.dotViolet}>●</span></td>
                  <td className={`${styles.td} ${styles.tdCenter} ${styles.tdHighlight}`}><span className={styles.dotViolet}>●</span></td>
                  <td className={`${styles.td} ${styles.tdCenter}`}><span className={styles.dotViolet}>●</span></td>
                  <td className={`${styles.td} ${styles.tdCenter}`}><span className={styles.dotViolet}>●</span></td>
                </tr>
                <tr>
                  <td className={styles.td}>Coverage matrix access</td>
                  <td className={`${styles.td} ${styles.tdCenter}`}><span className={styles.dotViolet}>●</span></td>
                  <td className={`${styles.td} ${styles.tdCenter} ${styles.tdHighlight}`}><span className={styles.dotViolet}>●</span></td>
                  <td className={`${styles.td} ${styles.tdCenter}`}><span className={styles.dotViolet}>●</span></td>
                  <td className={`${styles.td} ${styles.tdCenter}`}><span className={styles.dotViolet}>●</span></td>
                </tr>
                <tr>
                  <td className={styles.td}>Migration — replay and parallel run</td>
                  <td className={`${styles.td} ${styles.tdCenter}`}><span className={styles.dotViolet}>●</span></td>
                  <td className={`${styles.td} ${styles.tdCenter} ${styles.tdHighlight}`}><span className={styles.dotViolet}>●</span></td>
                  <td className={`${styles.td} ${styles.tdCenter}`}><span className={styles.dotViolet}>●</span></td>
                  <td className={`${styles.td} ${styles.tdCenter}`}><span className={styles.dotViolet}>●</span></td>
                </tr>
                <tr>
                  <td className={styles.td}>SSO — SAML 2.0 / OIDC</td>
                  <td className={`${styles.td} ${styles.tdCenter}`}><span className={styles.qualText}>Add-on</span></td>
                  <td className={`${styles.td} ${styles.tdCenter} ${styles.tdHighlight}`}><span className={styles.qualText}>Add-on</span></td>
                  <td className={`${styles.td} ${styles.tdCenter}`}><span className={styles.qualText}>Add-on</span></td>
                  <td className={`${styles.td} ${styles.tdCenter}`}><span className={styles.dotViolet}>●</span></td>
                </tr>
                <tr>
                  <td className={styles.td}>SCIM provisioning</td>
                  <td className={`${styles.td} ${styles.tdCenter}`}><span className={styles.dashGrey}>—</span></td>
                  <td className={`${styles.td} ${styles.tdCenter} ${styles.tdHighlight}`}><span className={styles.qualText}>Add-on</span></td>
                  <td className={`${styles.td} ${styles.tdCenter}`}><span className={styles.qualText}>Add-on</span></td>
                  <td className={`${styles.td} ${styles.tdCenter}`}><span className={styles.dotViolet}>●</span></td>
                </tr>
                <tr>
                  <td className={styles.td}>API access</td>
                  <td className={`${styles.td} ${styles.tdCenter}`}><span className={styles.dashGrey}>—</span></td>
                  <td className={`${styles.td} ${styles.tdCenter} ${styles.tdHighlight}`}><span className={styles.qualText}>Limited</span></td>
                  <td className={`${styles.td} ${styles.tdCenter}`}><span className={styles.qualText}>Limited</span></td>
                  <td className={`${styles.td} ${styles.tdCenter}`}><span className={styles.qualText} style={{ color: 'var(--brand-xlight)' }}>Full</span></td>
                </tr>
                <tr>
                  <td className={styles.td}>Dedicated storage with your KMS key</td>
                  <td className={`${styles.td} ${styles.tdCenter}`}><span className={styles.dashGrey}>—</span></td>
                  <td className={`${styles.td} ${styles.tdCenter} ${styles.tdHighlight}`}><span className={styles.qualText}>Add-on</span></td>
                  <td className={`${styles.td} ${styles.tdCenter}`}><span className={styles.qualText}>Add-on</span></td>
                  <td className={`${styles.td} ${styles.tdCenter}`}><span className={styles.dotViolet}>●</span></td>
                </tr>
                <tr>
                  <td className={styles.td}>AI features — opt-in, off by default</td>
                  <td className={`${styles.td} ${styles.tdCenter}`}><span className={styles.qualText}>Add-on</span></td>
                  <td className={`${styles.td} ${styles.tdCenter} ${styles.tdHighlight}`}><span className={styles.qualText}>Add-on</span></td>
                  <td className={`${styles.td} ${styles.tdCenter}`}><span className={styles.qualText}>Add-on</span></td>
                  <td className={`${styles.td} ${styles.tdCenter}`}><span className={styles.dotViolet}>●</span></td>
                </tr>

              </tbody>
            </table>
          </div>
        </div>

        {/* Support Section & The Payroll Window */}
        <div className={styles.sectionBlock}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Support</h2>
            <p className={styles.sectionSubtitle}>
              Rigorous contractual response commitments tailored to payroll and statutory criticality.
            </p>
          </div>

          <div className={styles.tableWrapper}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th className={styles.th} style={{ width: '28%' }}>Commitment</th>
                  <th className={styles.th} style={{ width: '18%' }}>Multi-State</th>
                  <th className={`${styles.th} ${styles.tdHighlight}`} style={{ width: '18%' }}>Principal Employer</th>
                  <th className={styles.th} style={{ width: '18%' }}>Staffing Agency</th>
                  <th className={styles.th} style={{ width: '18%' }}>Enterprise</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={styles.td} style={{ fontWeight: 700, color: '#fff' }}>Coverage</td>
                  <td className={styles.td}>Mon–Sat, 9am–7pm IST</td>
                  <td className={`${styles.td} ${styles.tdHighlight}`}>Mon–Sat, 8am–9pm IST</td>
                  <td className={styles.td}>Mon–Sat, 8am–9pm IST</td>
                  <td className={styles.td}>Mon–Sat, 8am–9pm IST, plus 24×7 for P1</td>
                </tr>
                <tr>
                  <td className={styles.td} style={{ fontWeight: 700, color: '#fff' }}>
                    P1 — payroll blocked or statutory deadline at risk
                  </td>
                  <td className={styles.td}>Response 2 hours · update every 4 hours until resolved</td>
                  <td className={`${styles.td} ${styles.tdHighlight}`}>Response 1 hour · update every 2 hours</td>
                  <td className={styles.td}>Response 1 hour · update every 2 hours</td>
                  <td className={styles.td}>Response 30 minutes · update hourly</td>
                </tr>
                <tr>
                  <td className={styles.td} style={{ fontWeight: 700, color: '#fff' }}>
                    P2 — a function is degraded, a workaround exists
                  </td>
                  <td className={styles.td}>Response 4 business hours</td>
                  <td className={`${styles.td} ${styles.tdHighlight}`}>Response 2 business hours</td>
                  <td className={styles.td}>Response 2 business hours</td>
                  <td className={styles.td}>Response 1 business hour</td>
                </tr>
                <tr>
                  <td className={styles.td} style={{ fontWeight: 700, color: '#fff' }}>
                    P3 — question, request or minor issue
                  </td>
                  <td className={styles.td}>Response 1 business day</td>
                  <td className={`${styles.td} ${styles.tdHighlight}`}>Response 1 business day</td>
                  <td className={styles.td}>Response 1 business day</td>
                  <td className={styles.td}>Response 4 business hours</td>
                </tr>
                <tr>
                  <td className={styles.td} style={{ fontWeight: 700, color: '#fff' }}>Named contact</td>
                  <td className={`${styles.td} ${styles.tdCenter}`}><span className={styles.dashGrey}>—</span></td>
                  <td className={`${styles.td} ${styles.tdCenter} ${styles.tdHighlight}`}><span className={styles.dotViolet}>●</span></td>
                  <td className={`${styles.td} ${styles.tdCenter}`}><span className={styles.dotViolet}>●</span></td>
                  <td className={styles.td}><span className={styles.qualText} style={{ color: 'var(--brand-xlight)' }}>Named team</span></td>
                </tr>
                <tr>
                  <td className={styles.td} style={{ fontWeight: 700, color: '#fff' }}>Access to a compliance architect</td>
                  <td className={`${styles.td} ${styles.tdCenter}`}><span className={styles.dotViolet}>●</span></td>
                  <td className={`${styles.td} ${styles.tdCenter} ${styles.tdHighlight}`}><span className={styles.dotViolet}>●</span></td>
                  <td className={`${styles.td} ${styles.tdCenter}`}><span className={styles.dotViolet}>●</span></td>
                  <td className={`${styles.td} ${styles.tdCenter}`}><span className={styles.dotViolet}>●</span></td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* The Payroll Window Callout */}
          <div className={styles.payrollWindowCard}>
            <div className={styles.payrollWindowHeading}>
              <Clock size={20} color="var(--brand-xlight)" />
              The payroll window
            </div>
            <p className={styles.payrollWindowText}>
              <strong>From five working days before your pay date until two working days after, P1 and P2 response times halve and a named engineer is on call for your tenant.</strong>
            </p>
            <p className={styles.payrollWindowText} style={{ marginTop: '0.5rem', color: '#cbd5e1' }}>
              This is the commitment that actually matters on a payroll platform, and it is the one most vendors publish as a single blended figure or not at all. Your pay dates are configured at onboarding, so we know when your window is without being told each month.
            </p>
            <p style={{ fontSize: '0.84rem', color: 'var(--text-muted)', fontStyle: 'italic', marginTop: '0.75rem' }}>
              *For staffing agencies the window is applied to the billing cycle as well as the pay run, because month-end is one event for you.
            </p>
          </div>
        </div>

        {/* For Procurement Section */}
        <div className={styles.sectionBlock}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>For procurement</h2>
            <p className={styles.sectionSubtitle}>
              Standard legal, security, audit, and commercial terms.
            </p>
          </div>

          <div className={styles.tableWrapper}>
            <table className={styles.table}>
              <tbody>
                <tr>
                  <td className={styles.td} style={{ width: '25%', fontWeight: 700, color: '#fff' }}>Contracting entity</td>
                  <td className={styles.td} style={{ width: '75%' }}>
                    Finnovo Tech Functional Private Limited, Madhapur, Hyderabad. yfy® is a registered trademark of Finnovo Tech Functional Private Limited
                  </td>
                </tr>
                <tr>
                  <td className={styles.td} style={{ fontWeight: 700, color: '#fff' }}>Standard term</td>
                  <td className={styles.td}>
                    12 months, with billing commencing at go-live. 24-month term available with implementation waived
                  </td>
                </tr>
                <tr>
                  <td className={styles.td} style={{ fontWeight: 700, color: '#fff' }}>Price protection</td>
                  <td className={styles.td}>
                    List price held for the initial term. Renewal uplift capped at 7% or CPI, whichever is lower
                  </td>
                </tr>
                <tr>
                  <td className={styles.td} style={{ fontWeight: 700, color: '#fff' }}>Payment terms</td>
                  <td className={styles.td}>
                    Annual or quarterly in advance. Net 30 from invoice. Purchase orders accepted
                  </td>
                </tr>
                <tr>
                  <td className={styles.td} style={{ fontWeight: 700, color: '#fff' }}>Documents available</td>
                  <td className={styles.td}>
                    Master Services Agreement, Data Processing Addendum, security pack, ISO certificates, sub-processor list
                  </td>
                </tr>
                <tr>
                  <td className={styles.td} style={{ fontWeight: 700, color: '#fff' }}>Certifications</td>
                  <td className={styles.td}>
                    ISO 9001:2015 (IN/19920701/2497) · ISO 27001:2022 (IN/48720702/6157) · ISO/IEC 27701:2019 (MQCPF72H25)
                  </td>
                </tr>
                <tr>
                  <td className={styles.td} style={{ fontWeight: 700, color: '#fff' }}>Notice period</td>
                  <td className={styles.td}>
                    60 days before renewal
                  </td>
                </tr>
                <tr>
                  <td className={styles.td} style={{ fontWeight: 700, color: '#fff' }}>Exit</td>
                  <td className={styles.td}>
                    Full data export in machine-readable format within 15 working days of request. On the dedicated storage tier, crypto-shred via your own KMS key. Deletion certificate issued on completion
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Exposure Assessment Callout Box */}
        <div className={styles.exposureBox}>
          <div className={styles.exposureBadge}>Special Diagnostic Engagement</div>
          <h2 className={styles.exposureHeading}>Exposure assessment</h2>
          <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#34d399', marginBottom: '1rem' }}>
            Contractor exposure assessment — ₹2,50,000, credited in full against your first year's subscription.
          </div>
          <p className={styles.exposureDesc}>
            Send three months of contractor invoices, your contract worker attendance in whatever form you hold it, your site list with states, and the challans your contractors supplied. We return claimed versus statutorily eligible, per contractor, per site, with your residual liability under CLRA §21, EPF §8A and ESI §40 sized and traceable to a named worker.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center', marginBottom: '2rem' }}>
            <div style={{ background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', padding: '6px 14px', borderRadius: '8px', fontSize: '0.85rem', color: '#fff', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Clock size={16} color="var(--brand-xlight)" /> Ten working days
            </div>
            <div style={{ background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', padding: '6px 14px', borderRadius: '8px', fontSize: '0.85rem', color: '#fff', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Shield size={16} color="var(--brand-xlight)" /> Under NDA
            </div>
            <div style={{ background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', padding: '6px 14px', borderRadius: '8px', fontSize: '0.85rem', color: '#fff', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <FileText size={16} color="var(--brand-xlight)" /> Read-only — nothing is installed and nothing is migrated
            </div>
            <div style={{ background: 'rgba(56, 189, 248, 0.1)', border: '1px solid rgba(56, 189, 248, 0.3)', padding: '6px 14px', borderRadius: '8px', fontSize: '0.85rem', color: '#7dd3fc', fontWeight: 600 }}>
              Complimentary for organisations above 2,000 total workforce
            </div>
          </div>

          <Link href="/exposure-report" className="btn btn-primary btn-lg">
            Request the exposure assessment <ArrowRight size={18} style={{ marginLeft: 8 }} />
          </Link>
        </div>

        {/* Frequently Asked Questions */}
        <div className={styles.sectionBlock}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Frequently asked</h2>
            <p className={styles.sectionSubtitle}>
              Direct answers to common commercial, technical, and operational questions.
            </p>
          </div>

          <div className={styles.faqGrid}>
            {faqs.map((faq, idx) => {
              const isOpen = !!openFaq[idx];
              return (
                <div key={idx} className={styles.faqItem}>
                  <div 
                    className={styles.faqQuestion}
                    onClick={() => toggleFaq(idx)}
                    style={{ cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                  >
                    <span>{faq.q}</span>
                    <span style={{ color: 'var(--brand-xlight)', marginLeft: '1rem', flexShrink: 0 }}>
                      {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </span>
                  </div>
                  {isOpen && (
                    <div className={styles.faqAnswer} style={{ marginTop: '0.75rem', paddingTop: '0.75rem', borderTop: '1px solid rgba(255, 255, 255, 0.06)' }}>
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}
