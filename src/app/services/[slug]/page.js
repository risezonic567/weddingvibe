import { notFound } from 'next/navigation';
import { services } from '@/data/site';
import ServicesCatalog from '@/components/ServicesCatalog';

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) return { title: 'Wedding services' };
  return { title: `${service.name} services`, description: service.description };
}

export default async function ServiceCategoryPage({ params }) {
  const { slug } = await params;
  if (!services.some((service) => service.slug === slug)) notFound();
  return <ServicesCatalog activeSlug={slug} />;
}
