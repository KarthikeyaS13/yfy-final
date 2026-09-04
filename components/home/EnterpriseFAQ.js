'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, HelpCircle, ArrowRight } from 'lucide-react';
import { FAQ_ITEMS } from '@/data/faqData';
import styles from './EnterpriseFAQ.module.css';

export default function EnterpriseFAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section className={styles.section} id="faq">
      <div className="container">
        
        <div className={`reveal ${styles.header}`}>
          <div className={styles.badge}>
            <HelpCircle size={15} />
            <span>EXECUTIVE BRIEFING & COMPLIANCE FAQ</span>
          </div>
          <h2 className={styles.title}>
            Frequently Asked Questions by CFOs, CHROs & Legal Heads
          </h2>
          <p className={styles.subtitle}>
            Clear, unambiguous answers on liability mitigation, ERP integration, statutory accuracy, and parallel migration.
          </p>
        </div>

        <div className={`reveal ${styles.faqList}`}>
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx} 
                className={`${styles.faqItem} ${isOpen ? styles.open : ''}`}
              >
                <button
                  type="button"
                  className={styles.faqButton}
                  onClick={() => toggle(idx)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${idx}`}
                  id={`faq-question-${idx}`}
                >
                  <span className={styles.questionText}>{item.question}</span>
                  <div className={styles.iconWrapper}>
                    <ChevronDown size={18} />
                  </div>
                </button>

                {isOpen && (
                  <div 
                    className={styles.answerWrapper}
                    id={`faq-answer-${idx}`}
                    role="region"
                    aria-labelledby={`faq-question-${idx}`}
                  >
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className={`reveal ${styles.contactBanner}`}>
          <div className={styles.contactBannerText}>
            <h4>Have a specific multi-state or contractor scenario?</h4>
            <p>Speak directly with our statutory systems architects — no generic sales pitch.</p>
          </div>
          <Link href="/exposure-report" className="btn btn-primary">
            Request an Exposure Assessment <ArrowRight size={16} />
          </Link>
        </div>

      </div>
    </section>
  );
}
