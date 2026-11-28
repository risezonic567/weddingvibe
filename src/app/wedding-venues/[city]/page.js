import Link from 'next/link';
import { notFound } from 'next/navigation';
import { cities, getCityBySlug, getVenuesByCity } from '@data/venues';
import { VenueCardImage } from '@/components/Site';

const baseUrl = 'https://weddingsvibe.com';

// Build one city page for every city in the venue data file.
export function generateStaticParams() {
  return cities.map((city) => ({ city: city.slug }));
}

// Use the city's saved search title, description, and image.
export async function generateMetadata({ params }) {
  const { city: citySlug } = await params;
  const city = getCityBySlug(citySlug);
  if (!city) return {};

  const title = city.meta?.title || `Wedding Venues in ${city.name} | Weddings Vibe`;
  const description = city.meta?.description || `Explore 5-star wedding venues in ${city.name}. Enquire with Weddings Vibe for help finding a venue for your celebration.`;
  const image = city.image;
  const url = `${baseUrl}/wedding-venues/${city.slug}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, images: image ? [image] : [] },
  };
}

export default async function CityVenuesPage({ params }) {
  const { city: citySlug } = await params;
  const city = getCityBySlug(citySlug);
  if (!city) notFound();

  const cityVenues = getVenuesByCity(city.slug);

  return (
    <section className="sec">
      <div className="wrap">
        <p className="eyebrow">WEDDING VENUES IN {city.name.toUpperCase()}</p>
        <h1 className="h2">Wedding venues in {city.name}</h1>
        <p className="sub">{city.intro}</p>

        <div className="grid venue-grid">
          {cityVenues.map((venue) => (
            <article className="card venue-card" key={`${venue.citySlug}-${venue.slug}`}>
              <Link
                className="venue-card-link"
                href={`/wedding-venues/${venue.citySlug}/${venue.slug}`}
                aria-label={`View ${venue.name} in ${city.name}`}
              />
              <VenueCardImage image={venue.images[0]} alt={venue.name} />
              <div className="cardbody">
                <h2>{venue.name}</h2>
                <p className="venue-location">{venue.location}</p>
                <p>{venue.capacity}</p>
                <strong>Starting from Rs {venue.startingPrice} Lakh</strong>
              </div>
              <div className="venue-card-actions">
                <Link className="btn btn-outline venue-card-details" href={`/wedding-venues/${venue.citySlug}/${venue.slug}`}>
                  View Details
                </Link>
                <Link className="btn venue-card-quote" href={`/wedding-venues/${venue.citySlug}/${venue.slug}#enquiry`}>
                  Get Quote
                </Link>
              </div>
           
            </article>
          ))}
        </div>

        <div className="city-cta">
          <span>Looking for a smaller budget?</span>{' '}
          <Link className="btn btn-outline" href="/contact">Tell us your budget, we&apos;ll suggest options</Link>
        </div>

        <section className="seo-copy">
          <h2>Questions about wedding venues in {city.name}</h2>
          {city.faqs.map((faq) => (
            <details className="faq-item" key={faq.question}>
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </section>
      </div>
    </section>
  );
}
