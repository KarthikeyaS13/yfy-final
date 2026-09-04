'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, ShieldAlert, FileText, Layers } from 'lucide-react';
import styles from './page.module.css';

export default function LensSelector() {
  const [selectedLens, setSelectedLens] = useState(null);

  const handleSelect = (lensKey, personaValue) => {
    setSelectedLens(lensKey);
    // Set persona cookie strictly on interaction
    if (typeof document !== 'undefined') {
      document.cookie = `yfy_persona=${personaValue}; path=/; max-age=2592000; SameSite=Lax`;
    }
  };

  return (
    <div className={styles.lensBox} id="lens-section">
      <div className={styles.lensGrid}>
        
        {/* LENS 1: PRINCIPAL EMPLOYER */}
        <div 
          className={`${styles.lensCard} ${selectedLens === 'pe' ? styles.lensCardActive : ''}`}
          onClick={() => handleSelect('pe', 'pe')}
        >
          <div>
            <span className={styles.lensBadge}>Principal Employer</span>
            <h3 className={styles.lensCardTitle}>We engage contract labour at our own hubs &amp; fleets</h3>
            <p className={styles.lensCardDesc}>
              Manpower comes through contractors; the exposure under CLRA §21, EPF §8A and ESI §40 lands on you. We verify each contractor's bill against your gate and biometric records before AP releases payment.
            </p>
          </div>
          <div>
            <Link 
              href="/exposure-report" 
              className="btn btn-primary btn-md" 
              style={{ width: '100%', justifyContent: 'center', marginBottom: '0.75rem' }}
              onClick={() => handleSelect('pe', 'pe')}
            >
              Contractor Exposure Assessment <ArrowRight size={16} />
            </Link>
            <div style={{ textAlign: 'center' }}>
              <Link href="/for/principal-employers" style={{ fontSize: '0.85rem', color: 'var(--brand-xlight)', textDecoration: 'underline' }}>
                Read the principal employer view →
              </Link>
            </div>
          </div>
        </div>

        {/* LENS 2: SUPPLIER / STAFFING */}
        <div 
          className={`${styles.lensCard} ${selectedLens === 'agency' ? styles.lensCardActive : ''}`}
          onClick={() => handleSelect('agency', 'agency')}
        >
          <div>
            <span className={styles.lensBadge}>Supplier / Manpower Agency</span>
            <h3 className={styles.lensCardTitle}>We supply manpower into client warehouses</h3>
            <p className={styles.lensCardDesc}>
              You are the employer of record and your compliance proof is a commercial asset that unlocks held payments. Roster to payroll to statutory to client billing off one approved record.
            </p>
          </div>
          <div>
            <Link 
              href="/compliance-proof-pack" 
              className="btn btn-primary btn-md" 
              style={{ width: '100%', justifyContent: 'center', marginBottom: '0.75rem' }}
              onClick={() => handleSelect('agency', 'agency')}
            >
              Get Compliance Proof Pack <ArrowRight size={16} />
            </Link>
            <div style={{ textAlign: 'center' }}>
              <Link href="/for/staffing-agencies" style={{ fontSize: '0.85rem', color: 'var(--brand-xlight)', textDecoration: 'underline' }}>
                Read the staffing agency view →
              </Link>
            </div>
          </div>
        </div>

        {/* LENS 3: BOTH / DUAL */}
        <div 
          className={`${styles.lensCard} ${selectedLens === 'dual' ? styles.lensCardActive : ''}`}
          onClick={() => handleSelect('dual', 'pe')}
        >
          <div>
            <span className={styles.lensBadge} style={{ color: '#F5C842', borderColor: 'rgba(245, 200, 66, 0.4)', background: 'rgba(245, 200, 66, 0.15)' }}>
              Both / Integrated 3PL
            </span>
            <h3 className={styles.lensCardTitle}>Both: We run hubs on contract labour &amp; supply client sites</h3>
            <p className={styles.lensCardDesc}>
              You operate your own hubs with contractors and supply manpower into client fulfilment centers. A single tenant configuration field runs both lenses in parallel with zero custom code.
            </p>
          </div>
          <div>
            <Link 
              href="/exposure-report?dual=true" 
              className="btn btn-primary btn-md" 
              style={{ width: '100%', justifyContent: 'center', marginBottom: '0.75rem' }}
              onClick={() => handleSelect('dual', 'pe')}
            >
              Request Dual Assessment <ArrowRight size={16} />
            </Link>
            <div style={{ textAlign: 'center', fontSize: '0.85rem', color: '#F5C842' }}>
              Covers both sides of your 3PL operation
            </div>
          </div>
        </div>

      </div>

      <div className={styles.lensSubline}>
        Most 3PLs and contract logistics operators above a few thousand workers run both lenses.
      </div>
    </div>
  );
}
