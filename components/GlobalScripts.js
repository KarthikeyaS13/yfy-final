"use client";

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function GlobalScripts() {
  const pathname = usePathname();

  useEffect(() => {
    let observer;
    // Delay slightly to ensure React hydration has completely settled
    const timer = setTimeout(() => {
      const reveals = document.querySelectorAll('.reveal:not(.visible)');
      if (reveals.length) {
        observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              observer.unobserve(entry.target);
            }
          });
        }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
        
        reveals.forEach((el) => observer.observe(el));
      }
    }, 100);

    return () => {
      clearTimeout(timer);
      if (observer) {
        observer.disconnect();
      }
    };
  }, [pathname]);

  useEffect(() => {
    // 2. Navbar Scroll (runs once)
    const navbar = document.getElementById('main-navbar');
    if (!navbar) return;
    
    const handleScroll = () => {
      if (window.scrollY > 20) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // initialize on load
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return null;
}
