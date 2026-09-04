'use client';
import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Calculator, ShieldCheck } from 'lucide-react';
import styles from './calculator.module.css';

export default function ExposureCalculatorPage() {
  const [workers, setWorkers] = useState(500);
  const [contractors, setContractors] = useState(10);
  const [states, setStates] = useState(3);
  const [industry, setIndustry] = useState('Manufacturing');

  // Realistic exposure calculation logic:
  // Industry-specific risk weightings
  const industryMultipliers = {
    'Manufacturing': 1.15,
    'Logistics': 1.10,
    'Facility Management': 1.05,
    'Construction': 1.25,
    'IT/ITES': 0.85
  };
  const industryFactor = industryMultipliers[industry] || 1.0;
  const stateComplexityMultiplier = 1 + (states * 0.1);
  const baseExposurePerWorker = 1200; // Stated assumption ₹1,200 gap per worker per month
  
  const monthlyExposure = workers * baseExposurePerWorker * stateComplexityMultiplier * industryFactor;
  const annualExposure = monthlyExposure * 12;
  const perContractorExposure = annualExposure / contractors;

  return (
    <>
      <section className={`section bg-gradient ${styles.section}`}>
        <div className="container-lg">
          <div className={styles.header}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.35rem 1rem', background: 'rgba(34, 211, 160, 0.1)', border: '1px solid rgba(34, 211, 160, 0.3)', borderRadius: '9999px', fontSize: '0.78rem', fontWeight: 700, color: '#22D3A0', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1rem' }}>
              <Calculator size={14} /> Interactive Exposure Model
            </div>
            <h1 className={styles.title}>
              Contract Labour Exposure Calculator
            </h1>
            <p className={styles.subtitle}>
              Estimate your unhedged balance-sheet liability under <strong>CLRA §21, EPF §8A, and ESI §40</strong> based on contractor workforce size, geographic dispersion, and industry risk.
            </p>
          </div>

          <div className={styles.calcGrid}>
            
            {/* Calculator Inputs */}
            <div className={styles.inputCard}>
              <h2 className={styles.cardHeading}>Input Parameters</h2>
              
              <div className={styles.sliderGroup}>
                <div className={styles.sliderHeader}>
                  <span>Contract Workers Engaged</span>
                  <span className={styles.sliderValue}>{workers.toLocaleString()}</span>
                </div>
                <input 
                  type="range" 
                  min="50" 
                  max="10000" 
                  step="50"
                  value={workers} 
                  onChange={(e) => setWorkers(parseInt(e.target.value))} 
                  className={styles.rangeInput}
                  aria-label="Contract Workers Engaged"
                />
              </div>

              <div className={styles.sliderGroup}>
                <div className={styles.sliderHeader}>
                  <span>Operating States</span>
                  <span className={styles.sliderValue}>{states} States</span>
                </div>
                <input 
                  type="range" 
                  min="1" 
                  max="20" 
                  value={states} 
                  onChange={(e) => setStates(parseInt(e.target.value))} 
                  className={styles.rangeInput}
                  aria-label="Operating States"
                />
              </div>

              <div className={styles.sliderGroup}>
                <div className={styles.sliderHeader}>
                  <span>Number of Contractors</span>
                  <span className={styles.sliderValue}>{contractors} Contractors</span>
                </div>
                <input 
                  type="range" 
                  min="1" 
                  max="100" 
                  value={contractors} 
                  onChange={(e) => setContractors(parseInt(e.target.value))} 
                  className={styles.rangeInput}
                  aria-label="Number of Contractors"
                />
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '0.6rem', fontSize: '0.92rem', color: 'var(--text-secondary)' }}>
                  Industry Vertical
                </label>
                <select 
                  value={industry} 
                  onChange={(e) => setIndustry(e.target.value)}
                  className={styles.selectInput}
                  aria-label="Industry Vertical"
                >
                  <option value="Manufacturing">Manufacturing & Heavy Industry</option>
                  <option value="Logistics">Logistics & Warehousing</option>
                  <option value="Facility Management">Facility Management & Security</option>
                  <option value="Construction">Construction & Real Estate</option>
                  <option value="IT/ITES">IT / ITES / Service Centers</option>
                </select>
              </div>

            </div>

            {/* Output Results */}
            <div>
              <div className={styles.resultCard}>
                <div className={styles.resultSubtitle}>Estimated Annual Exposure Range</div>
                <div className={styles.resultAmount}>
                  ₹{(annualExposure / 100000).toFixed(1)}L <span className={styles.resultRange}>– ₹{((annualExposure * 1.4) / 100000).toFixed(1)}L</span>
                </div>
                <p className={styles.resultNote}>
                  ≈ ₹{(perContractorExposure / 100000).toFixed(1)} Lakhs average unverified residual liability per contractor.
                </p>
              </div>

              <div className={styles.deviationBox}>
                <h3 className={styles.deviationTitle}>Most Common Deviation Categories for {industry}:</h3>
                <ul className={styles.deviationList}>
                  <li className={styles.deviationItem}>
                    <span className={styles.bullet}>•</span> Minimum wage shortfalls across skill categories & zones
                  </li>
                  <li className={styles.deviationItem}>
                    <span className={styles.bullet}>•</span> PF & ESI under-remittance vs uploaded challan caps
                  </li>
                  <li className={styles.deviationItem}>
                    <span className={styles.bullet}>•</span> Unverified overtime (OT) multipliers vs Factories Act
                  </li>
                  <li className={styles.deviationItem}>
                    <span className={styles.bullet}>•</span> Billed man-days exceeding biometric turnstile records
                  </li>
                </ul>
              </div>

              <Link href="/exposure-report" className="btn btn-primary btn-lg" style={{ width: '100%', justifyContent: 'center' }}>
                Get Real Figures from Your Own Invoices <ArrowRight size={18} />
              </Link>
            </div>

          </div>

          {/* Assumptions Block */}
          <div className={styles.assumptions}>
            <div className={styles.assumptionsTitle}>Model Methodology & Statutory Scope</div>
            <div className={styles.assumptionsGrid}>
              <div>
                <strong>Illustrative planning model.</strong> The ₹1,200 per worker per month base deviation is a stated assumption, not an observed average — we publish it so you can challenge it. Your actual figure comes from running your own three months of invoices through the engine.
              </div>
              <div>
                <strong>State & Industry Weighting:</strong> Multi-state operations add 10% compounding complexity per state for diverging minimum wages and LWF rules. Sector weighting reflects statutory inspection frequency.
              </div>
              <div>
                <strong>Statutory Scope:</strong> Liability is sized strictly under Principal Employer obligations (CLRA §21, EPF §8A, ESI §40). Non-statutory commercial leakage is excluded.
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
