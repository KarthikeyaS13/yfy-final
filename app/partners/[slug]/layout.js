import { partnersData } from '@/data/partnersData';

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const data = partnersData[resolvedParams?.slug];
  if (!data) {
    return { title: 'Partner Program | yfy®' };
  }
  return {
    title: data.seo?.title || `${data.title} | yfy® Partner Program`,
    description: data.seo?.description || data.heroDescription,
    alternates: {
      canonical: `/partners/${resolvedParams.slug}`,
    },
    openGraph: {
      title: data.seo?.title,
      description: data.seo?.description,
      url: `https://yfy.ai/partners/${resolvedParams.slug}`,
      siteName: 'yfy.ai',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: data.seo?.title,
      description: data.seo?.description,
    },
  };
}

export default function PartnerSlugLayout({ children }) {
  return children;
}
