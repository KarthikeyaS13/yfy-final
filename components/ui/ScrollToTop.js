'use client';

import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 150) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    // Check initial position
    toggleVisibility();

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <style>{`
        .scroll-to-top {
          position: fixed;
          bottom: 24px;
          right: 24px;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: linear-gradient(135deg, #7A25B8 0%, #6B1FA2 60%, #4A1070 100%);
          border: 1.5px solid rgba(226, 211, 245, 0.5);
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 8px 24px rgba(107, 31, 162, 0.45), 0 2px 8px rgba(0, 0, 0, 0.3);
          cursor: pointer;
          z-index: 99999;
          opacity: 0;
          visibility: hidden;
          transform: translateY(16px) scale(0.9);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
        }

        .scroll-to-top.visible {
          opacity: 1;
          visibility: visible;
          transform: translateY(0) scale(1);
        }

        .scroll-to-top:hover {
          transform: translateY(-4px) scale(1.08);
          background: linear-gradient(135deg, #9B3DD8 0%, #7A25B8 60%, #6B1FA2 100%);
          border-color: rgba(255, 255, 255, 0.8);
          box-shadow: 0 12px 32px rgba(155, 61, 216, 0.6), 0 0 20px rgba(192, 126, 240, 0.4);
        }

        .scroll-to-top:active {
          transform: translateY(0) scale(0.95);
        }

        .scroll-icon {
          transition: transform 0.2s ease;
        }

        .scroll-to-top:hover .scroll-icon {
          transform: translateY(-2px);
        }

        @media (max-width: 768px) {
          .scroll-to-top {
            bottom: 20px;
            right: 20px;
            width: 44px;
            height: 44px;
            box-shadow: 0 6px 20px rgba(107, 31, 162, 0.5);
          }
        }
      `}</style>

      <button
        type="button"
        className={`scroll-to-top ${isVisible ? 'visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Scroll to top of page"
        title="Back to top"
      >
        <ArrowUp size={22} strokeWidth={2.5} className="scroll-icon" />
      </button>
    </>
  );
}
