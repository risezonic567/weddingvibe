import Link from 'next/link';
import { cities, getVenuesByCity } from '@data/venues';
import { ImageBox } from '@/components/Site';

export const metadata = {
  title: 'Wedding venues by city | Weddings Vibe',
  description: 'Browse wedding venues by city and enquire with Weddings Vibe for help finding a setting for your celebration.',
};

// List every city from the venue data file.
export default function WeddingVenuesIndexPage() {
  return (
    <section className="sec">
      <div className="wrap">
        <p className="eyebrow">EXPLORE BY CITY</p>
        <h1 className="h2">Wedding venues across India</h1>
        <p className="sub">Choose a city to see its wedding venues and starting prices.</p>
        <div className="grid venue-grid">
          {cities.map((city) => (
            <Link className="card city-venue-card" href={`/wedding-venues/${city.slug}`} key={city.slug}>
              <ImageBox image={city.image} alt={`Wedding venues in ${city.name}`} />
              <div className="cardbody">
                <h2>{city.name}</h2>
                <p>{getVenuesByCity(city.slug).length} wedding venues</p>
                <strong>Explore venues</strong>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
