import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getCityBySlug, getVenue, getVenuesByCity, venues } from '@data/venues';
import { ImageBox } from '@/components/Site';
import VenueEnquiryForm from '@/components/VenueEnquiryForm';

const baseUrl = 'https://weddingsvibe.com';

// Build one venue page for every venue in the data file.
export function generateStaticParams() {
  return venues.map((venue) => ({ city: venue.citySlug, venue: venue.slug }));
}

// Use the saved title, description, and first venue image for search and sharing.
export async function generateMetadata({ params }) {
  const { city: citySlug, venue: venueSlug } = await params;
  const venue = getVenue(citySlug, venueSlug);
  if (!venue) return {};

  const city = getCityBySlug(citySlug);
  const cityName = city?.name || citySlug;
  const title = venue.meta?.title || `${venue.name} - 5 Star Wedding Venue in ${cityName}`;
  const description = venue.meta?.description || `Explore ${venue.name}, a 5-star wedding venue in ${cityName}. Enquire with Weddings Vibe for details and availability.`;
  const image = venue.images[0];
  const url = `${baseUrl}/wedding-venues/${citySlug}/${venueSlug}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, images: image ? [image] : [] },
  };
}

export default async function VenueDetailsPage({ params }) {
  const { city: citySlug, venue: venueSlug } = await params;
  const city = getCityBySlug(citySlug);
  const venue = getVenue(citySlug, venueSlug);
  if (!city || !venue) notFound();

  const images = venue.images.length ? venue.images : [city.image];
  const similarVenues = getVenuesByCity(citySlug).filter((item) => item.slug !== venue.slug);

  return (
    <section className="sec">
      <div className="wrap">
        <p className="crumb">
          <Link href="/">Home</Link> / <Link href={`/wedding-venues/${city.slug}`}>{city.name}</Link> / {venue.name}
        </p>
        <div className="gallery">
          {images.map((image, index) => <ImageBox key={`${image}-${index}`} image={image} alt={`${venue.name} wedding venue`} />)}
        </div>

        <div className="detail-layout">
          <article>
            <p className="eyebrow">{venue.location}</p>
            <h1 className="h2">{venue.name}</h1>
            <p>{venue.capacity}</p>
            <h2>Available spaces</h2>
            <ul className="check-list">
              {venue.spaces.map((space) => <li key={space}>{space}</li>)}
            </ul>
            <div className="sticky-card">
              <h2>Starting price</h2>
              <p>Starting from Rs {venue.startingPrice} Lakh for {venue.startingPriceGuests} guests</p>
              <h3>Includes:</h3>
              <ul className="check-list">
                {venue.priceIncludes.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
          </article>
          <aside>
            <VenueEnquiryForm venue={venue} city={city} />
          </aside>
        </div>

        {similarVenues.length > 0 && (
          <section className="seo-copy">
            <h2>More wedding venues in {city.name}</h2>
            <div className="grid venue-grid">
              {similarVenues.map((item) => (
                <article className="card" key={item.slug}>
                  <ImageBox image={item.images[0]} alt={item.name} />
                  <div className="cardbody">
                    <h3>{item.name}</h3>
                    <p>{item.location} Â· {item.capacity}</p>
                    <strong>Starting from Rs {item.startingPrice} Lakh</strong>
                  </div>
                  <Link className="btn" href={`/wedding-venues/${city.slug}/${item.slug}`}>View venue</Link>
                </article>
              ))}
            </div>
          </section>
        )}
      </div>
    </section>
  );
}

