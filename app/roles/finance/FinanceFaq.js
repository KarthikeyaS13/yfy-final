'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import styles from './page.module.css';

export default function FinanceFaq({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className={styles.faqContainer}>
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div key={idx} className={`${styles.faqItem} ${isOpen ? styles.faqItemOpen : ''}`}>
            <button 
              className={styles.faqQuestion} 
              onClick={() => toggle(idx)}
              aria-expanded={isOpen}
            >
              <span>{item.q}</span>
              <ChevronDown 
                size={20} 
                className={`${styles.faqIcon} ${isOpen ? styles.faqIconRotated : ''}`} 
              />
            </button>
            {isOpen && (
              <div className={styles.faqAnswer}>
                {item.a}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
