import { cities, venues } from '@data/venues';
import { posts, services, weddings } from '@/data/content';

export default function sitemap() {
  const baseUrl = 'https://weddingsvibe.com';
  const fixedPages = ['', 'venues', 'services', 'real-weddings', 'blog', 'about', 'contact', 'list-your-venue', 'privacy-policy', 'terms'];

  return [
    ...fixedPages.map((path) => ({ url: `${baseUrl}/${path}`, lastModified: new Date() })),
    ...cities.map((city) => ({ url: `${baseUrl}/wedding-venues/${city.slug}` })),
    ...venues.map((venue) => ({ url: `${baseUrl}/wedding-venues/${venue.citySlug}/${venue.slug}` })),
    ...services.map((service) => ({ url: `${baseUrl}/services/${service.slug}` })),
    ...weddings.map((wedding) => ({ url: `${baseUrl}/real-weddings/${wedding.slug}` })),
    ...posts.map((post) => ({ url: `${baseUrl}/blog/${post.slug}` })),
  ];
}
