import { getAllPosts } from '../lib/markdown';
import { productsData } from '@/data/productsData';

export default async function sitemap() {
  const baseUrl = 'https://yfy.ai';
  const now = new Date();

  // Core static routes with explicit priorities and frequencies
  const staticRoutes = [
    { path: '', priority: 1.0, changeFrequency: 'daily' },
    
    // Audience / Persona Pages
    { path: '/for/principal-employers', priority: 0.9, changeFrequency: 'weekly' },
    { path: '/for/staffing-agencies', priority: 0.9, changeFrequency: 'weekly' },
    { path: '/for/multi-state-employers', priority: 0.9, changeFrequency: 'weekly' },

    // Industry Verticals
    { path: '/industries/manufacturing', priority: 0.9, changeFrequency: 'weekly' },
    { path: '/industries/facility-management', priority: 0.9, changeFrequency: 'weekly' },
    { path: '/industries/logistics', priority: 0.9, changeFrequency: 'weekly' },

    // Role Blueprints
    { path: '/roles/finance', priority: 0.85, changeFrequency: 'weekly' },
    { path: '/roles/hr', priority: 0.85, changeFrequency: 'weekly' },
    { path: '/roles/it', priority: 0.85, changeFrequency: 'weekly' },

    // Solutions
    { path: '/solutions/enterprise', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/solutions/finance', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/solutions/hr-leaders', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/solutions/it', priority: 0.8, changeFrequency: 'monthly' },

    // Proof, Diagnostic & Regulatory Tools
    { path: '/compliance-proof-pack', priority: 0.9, changeFrequency: 'weekly' },
    { path: '/coverage', priority: 0.9, changeFrequency: 'weekly' },
    { path: '/exposure-report', priority: 0.85, changeFrequency: 'weekly' },
    { path: '/tools/exposure-calculator', priority: 0.9, changeFrequency: 'weekly' },
    { path: '/resources/compliance-calendar', priority: 0.85, changeFrequency: 'monthly' },

    // Platform & Architecture
    { path: '/platform', priority: 0.9, changeFrequency: 'weekly' },
    { path: '/platform/demo', priority: 0.85, changeFrequency: 'weekly' },
    { path: '/platform/migration', priority: 0.85, changeFrequency: 'weekly' },
    { path: '/platform/employeelifecycle', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/trust', priority: 0.85, changeFrequency: 'monthly' },
    { path: '/integrations', priority: 0.85, changeFrequency: 'monthly' },
    { path: '/pricing', priority: 0.85, changeFrequency: 'weekly' },
    { path: '/partners', priority: 0.8, changeFrequency: 'monthly' },

    // Canonical Dedicated Product Pages
    { path: '/products/roster-site-muster', priority: 0.88, changeFrequency: 'weekly' },
    { path: '/products/client-billing-gst', priority: 0.88, changeFrequency: 'weekly' },
    { path: '/products/agency-profitability', priority: 0.88, changeFrequency: 'weekly' },
    { path: '/products/leave-timesheets', priority: 0.88, changeFrequency: 'weekly' },
    { path: '/products/service-desk', priority: 0.88, changeFrequency: 'weekly' },

    // Resources & Community
    { path: '/blog', priority: 0.85, changeFrequency: 'daily' },
    { path: '/case-studies', priority: 0.75, changeFrequency: 'monthly' },
    { path: '/community', priority: 0.75, changeFrequency: 'monthly' },

    // Legal & Governance
    { path: '/privacy', priority: 0.5, changeFrequency: 'monthly' },
    { path: '/terms', priority: 0.5, changeFrequency: 'monthly' },
  ].map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  // Catalog Products from productsData (excluding aliases that redirect to dedicated canonical URLs)
  const redirectedSlugs = new Set(['roster', 'billing', 'profitability', 'leave', 'helpdesk']);
  const productRoutes = Object.keys(productsData)
    .filter((slug) => !redirectedSlugs.has(slug))
    .map((slug) => ({
      url: `${baseUrl}/products/${slug}`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    }));

  // Dynamic Blog Posts
  const posts = getAllPosts();
  const blogRoutes = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date || now),
    changeFrequency: 'monthly',
    priority: 0.75,
  }));

  return [...staticRoutes, ...productRoutes, ...blogRoutes];
}
