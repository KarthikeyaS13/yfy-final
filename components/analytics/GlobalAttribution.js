'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

export default function GlobalAttribution() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (typeof window === 'undefined') return;

    try {
      // 1. First-Touch Attribution
      if (!sessionStorage.getItem('yfy_first_touch')) {
        sessionStorage.setItem('yfy_first_touch', pathname || '/');
      }

      // 2. Referrer Tracking
      if (document.referrer && !sessionStorage.getItem('yfy_referrer')) {
        const refUrl = new URL(document.referrer);
        if (refUrl.hostname !== window.location.hostname) {
          sessionStorage.setItem('yfy_referrer', document.referrer);
        }
      }

      // 3. Capture UTM Parameters
      const utmParams = {};
      let hasUtm = false;
      ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'].forEach((key) => {
        const val = searchParams?.get(key);
        if (val) {
          utmParams[key] = val;
          hasUtm = true;
        }
      });
      if (hasUtm) {
        sessionStorage.setItem('yfy_utm', JSON.stringify(utmParams));
      }

      // 4. Update Current Page Source
      sessionStorage.setItem('yfy_current_page', pathname);

      // 5. Global Click Delegator for All CTA Buttons
      const handleGlobalClick = (e) => {
        const target = e.target.closest('a, button, [role="button"]');
        if (!target) return;

        const href = target.getAttribute('href') || '';
        const text = (target.innerText || target.getAttribute('aria-label') || '').trim();
        const ctaId = target.getAttribute('id') || target.getAttribute('data-cta') || '';

        // Detect if it's a CTA button
        const isCta = 
          href.includes('/demo') || 
          href.includes('/exposure-report') || 
          href.includes('/compliance-proof-pack') ||
          target.classList.contains('btn') ||
          target.classList.contains('cta') ||
          text.toLowerCase().includes('demo') ||
          text.toLowerCase().includes('exposure') ||
          text.toLowerCase().includes('walkthrough');

        if (isCta) {
          sessionStorage.setItem('yfy_last_cta_text', text);
          sessionStorage.setItem('yfy_last_cta_id', ctaId || 'cta_button');
          sessionStorage.setItem('yfy_last_cta_source_page', pathname);

          // Infer Module based on pathname
          let moduleName = 'Platform Core';
          if (pathname.includes('leave-timesheets')) moduleName = 'Leave & Timesheets';
          else if (pathname.includes('service-desk')) moduleName = 'Service Desk';
          else if (pathname.includes('agency-profitability')) moduleName = 'Agency Profitability';
          else if (pathname.includes('client-billing-gst')) moduleName = 'Client Billing & GST';
          else if (pathname.includes('roster-site-muster')) moduleName = 'Roster & Site Muster';
          else if (pathname.includes('contract-labour')) moduleName = 'Contract Labour Verification';
          else if (pathname.includes('payroll')) moduleName = 'Payroll & Statutory';
          else if (pathname.includes('hrms')) moduleName = 'Core HRMS & Attendance';
          else if (pathname.includes('manufacturing')) moduleName = 'Manufacturing & Pharma';
          else if (pathname.includes('facility-management')) moduleName = 'Facility Management & Security';
          else if (pathname.includes('logistics')) moduleName = 'Logistics & Warehousing';
          else if (pathname.includes('roles/finance')) moduleName = 'Finance & CFO';
          else if (pathname.includes('roles/hr')) moduleName = 'HR & IR Leaders';
          else if (pathname.includes('roles/it')) moduleName = 'IT & Security';

          sessionStorage.setItem('yfy_last_module', moduleName);
        }
      };

      document.addEventListener('click', handleGlobalClick, { capture: true });
      return () => document.removeEventListener('click', handleGlobalClick, { capture: true });
    } catch (err) {
      // Graceful error isolation
      console.warn('[GlobalAttribution Error]', err);
    }
  }, [pathname, searchParams]);

  return null;
}
