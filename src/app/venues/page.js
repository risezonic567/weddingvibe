import Link from 'next/link';
import { cities, venues } from '@data/venues';
import { VenueCard } from '@/components/Site';

export const metadata = {
  title: 'Wedding venues',
  description: 'Explore wedding venues by city and enquire with Weddings Vibe for help with your shortlist.',
};

export default function VenuesPage() {
  return (
    <section className="sec">
      <div className="wrap">
        <p className="eyebrow">FIND YOUR PLACE</p>
        <h1 className="h2">Wedding venues made for your day.</h1>
        <p className="sub">Choose a city to explore venue spaces, capacity and starting prices.</p>
        <div className="chips">
          {cities.map((city) => <Link className="chip" href={`/wedding-venues/${city.slug}`} key={city.slug}>{city.name}</Link>)}
        </div>
        <div className="grid venue-grid">
          {venues.map((venue) => <VenueCard key={`${venue.citySlug}-${venue.slug}`} venue={venue} />)}
        </div>
      </div>
    </section>
  );
}
