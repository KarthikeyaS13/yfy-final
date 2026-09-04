/** @type {import('next').NextConfig} */
const nextConfig = {
  serverExternalPackages: ['nodemailer'],
  async redirects() {
    return [
      {
        source: '/demo',
        destination: '/platform/demo',
        permanent: false,
      },
      {
        source: '/contact',
        destination: '/platform/demo?cta=contact_sales',
        permanent: false,
      },
      {
        source: '/platform/roi',
        destination: '/tools/exposure-calculator',
        permanent: false,
      },
      {
        source: '/solutions/finance',
        destination: '/roles/finance',
        permanent: true,
      },
      {
        source: '/solutions/hr-leaders',
        destination: '/roles/hr',
        permanent: true,
      },
      {
        source: '/solutions/it',
        destination: '/roles/it',
        permanent: true,
      },
      {
        source: '/resources/case-studies',
        destination: '/case-studies',
        permanent: true,
      },
      {
        source: '/resources/community',
        destination: '/community',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
