import Link from 'next/link';
import { cities, venues } from '@data/venues';
import { weddings, testimonials, faqs } from '@/data/content';
import { ImageBox, VenueCard, BudgetPlanner } from '@/components/Site';
import LocationThumb from '@/components/LocationThumb';
import { weddingImages } from '@/data/wedding-images';
import HeroLocationSlider from '@/components/HeroLocationSlider';
import About from '@/components/About';
import ServicesScroll from '@/components/ServicesScroll';
// import HowItWorks from '@/components/HowItWorks';
import StoryScroll from '@/components/StoryScroll';

export const metadata = {
  title: 'Wedding venues and services across India',
  description:
    'Explore wedding venues across India and connect with a planning team for a personalised shortlist.',
};

const TRUST = [
  { value: String(venues.length), label: 'Venue options' },
  { value: '10,000+', label: 'Weddings planned' },
  { value: 'One', label: 'Enquiry for venue help' },
  { value: 'Free', label: 'Planning call' },
];

const WHY = [
  ['Verified venues', 'Every venue is checked before it is listed, so you compare real options.'],
  ['Starting prices shown', 'See a clear venue starting price before you send an enquiry.'],
  ['One enquiry, many venues', 'Send a single enquiry instead of making endless calls.'],
  ['A planner by your side', 'One point of contact from the first shortlist to the booking.'],
  ['Vendors in one place', 'Decor, photography, catering, mehendi and music, all under one roof.'],
  ['Support till the big day', 'We stay in touch so you can enjoy every ritual.'],
];

export default function Home() {
  return (
    <>
      <HeroLocationSlider />

      {/* Trust strip */}
      <section className="trust-strip" aria-label="Why couples trust us">
        <div className="wrap trust-strip-row">
          {TRUST.map((t) => (
            <div className="trust-item" key={t.label}>
              <strong>{t.value}</strong>
              <span>{t.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Cities and venue links */}
      <section className="sec">
        <div className="wrap center">
          <h2 className="h2">Any location in mind?</h2>
          <p className="sub">Choose a wedding venue in your city</p>
          <div className="arches">
            {cities.map((c) => (
              <Link className="arch-item" href={`/wedding-venues/${c.slug}`} key={c.slug}>
                <span className="arch">
                  <LocationThumb cityName={c.name} className="arch-photo" />
                </span>
                <strong>{c.name}</strong>
                <small>{venues.filter((venue) => venue.citySlug === c.slug).length} venues</small>
              </Link>
            ))}
          </div>

          <div className="home-types">
            <p>Or explore venues by city</p>
            <div className="type-chips">
              {cities.map((city) => <Link className="chip" href={`/wedding-venues/${city.slug}`} key={city.slug}>{city.name}</Link>)}
            </div>
          </div>

          <Link className="btn btn-outline city-cta" href="/venues">
            View all cities
          </Link>
        </div>
      </section>

      {/* Featured venues */}
      <section className="sec ">
        <div className="wrap">
          <div className="section-head">
            <div>
              <h2 className="h2">Featured venues</h2>
              <p className="sub" style={{ marginBottom: 0 }}>
                Hand-picked places couples enquire about most.
              </p>
            </div>
            <Link className="text-link" href="/venues">
              View all venues
            </Link>
          </div>
          <div className="grid venue-grid" style={{ marginTop: 32 }}>
            {venues.slice(0, 3).map((v) => (
                <VenueCard
                  venue={v}
                  key={`${v.citySlug}-${v.slug}`}
                />
              ))}
          </div>
        </div>
      </section>

      <About />

      <ServicesScroll />

      {/* <HowItWorks /> */}

      <section className="sec">
        <div className="wrap">
          <div className="center">
            <h2 className="h2">How it works</h2>
            <p className="sub">From first idea to a venue shortlist in four simple steps.</p>
          </div>
          <div className="hw">
            {[['01', 'Tell us what you need', 'Share your city, date, guest count and budget. It takes about two minutes.'], ['02', 'Explore venues', 'Review photos, capacity, spaces and starting prices.'], ['03', 'Talk to a planner', 'Get a free consultation and arrange site visits for your shortlist.'], ['04', 'Plan with confidence', 'Choose a venue with help from your wedding planning team.']].map(([n, t, d], i) => (
              <article className="hw-step" key={n}>
                <div className="hw-num">{n}</div>
                <span className="hw-lbl">Step {i + 1}</span>
                <h3>{t}</h3>
                <p>{d}</p>
                <ul className="hw-li">
                  <li>{[['Pick a city and date', 'Shortlist your favourites', 'Call or WhatsApp', 'One point of contact'][i]]}</li>
                  <li>{[['Set guests and budget', 'Clear pricing upfront', 'No obligation', 'Coordinator on the day'][i]]}</li>
                </ul>
              </article>
            ))}
          </div>
          <div className="hw-cta">
            <div>
              <strong>Ready to find your venue?</strong>
              <p>Start with your city and date. We will do the shortlisting.</p>
            </div>
            <div className="actions">
              <Link className="btn" href="/contact">Start my wedding planning</Link>
              <a className="btn btn-light" href="https://wa.me/919266730494">Chat on WhatsApp</a>
            </div>
          </div>
        </div>
      </section>

      <StoryScroll />

      {/* Why us */}
      <section className="sec ">
        <div className="wrap">
          <div className="center">
            <h2 className="h2">
              Why couples choose <em className="gold-em">Weddings Vibe</em>
            </h2>
            <p className="sub">Less stress, clearer prices and one team that stays with you.</p>
          </div>
          <div className="why-us">
            {WHY.map(([title, text], i) => (
              <article className="why-us-card" key={title}>
                <span className="why-us-num">{String(i + 1).padStart(2, '0')}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sec budget-section">
        <div className="wrap budget">
          <div className="budget-story">
            <div className="budget-collage" aria-label="Wedding celebrations and details">
              <ImageBox image="/images/wedding/Photography%20%26%20film.jpg.jpeg" className="budget-collage-main" alt="Wedding photography for your budget planner" />
              <ImageBox image={weddingImages.couple} className="budget-collage-couple" alt="A couple celebrating their wedding" />
              <ImageBox image={weddingImages.decor} className="budget-collage-detail" alt="Wedding flowers and decor" />
              <svg className="budget-mandala" viewBox="0 0 120 120" aria-hidden="true">
                <g fill="none" stroke="currentColor" strokeWidth="1">
                  <circle cx="60" cy="60" r="8" />
                  <circle cx="60" cy="60" r="22" />
                  <circle cx="60" cy="60" r="38" />
                  <circle cx="60" cy="60" r="54" />
                  {Array.from({ length: 12 }, (_, i) => (
                    <path key={i} d="M60 6C75 22 75 38 60 60 45 38 45 22 60 6Z" transform={`rotate(${i * 30} 60 60)`} />
                  ))}
                </g>
              </svg>
            </div>
            <p className="eyebrow budget-eyebrow">WEDDING BUDGET PLANNER</p>
            <h2 className="h2 budget-heading">
              What will your <em>wedding cost?</em>
            </h2>
            <p className="budget-copy">
              A thoughtful first estimate, shaped around your guest list, city and the celebration you have in mind.
            </p>
            <div className="budget-trust">
              <span><i aria-hidden="true">âœ¦</i>Free planning call</span>
              <span><i aria-hidden="true">âœ¦</i>Verified venues only</span>
              <span><i aria-hidden="true">âœ¦</i>No hidden charges</span>
            </div>
          </div>
          <div className="budget-card">
            <BudgetPlanner />
          </div>
        </div>
      </section>

      <section className="sec ">
        <div className="wrap">
          <div className="section-head">
            <div>
              <h2 className="h2">Real weddings</h2>
              <p className="sub" style={{ marginBottom: 0 }}>
                Stories and photos from couples who booked through us.
              </p>
            </div>
          </div>
          <div className="real-mosaic" style={{ marginTop: 32 }}>
            {weddings.slice(0, 5).map((w, i) => (
              <ImageBox
                key={w.slug}
                image={w.images[i % w.images.length]}
                alt={i === 0 ? 'Newlyweds celebrating' : 'A real wedding celebration'}
              />
            ))}
          </div>
          <Link className="btn" href="/real-weddings">
            See all stories
          </Link>
        </div>
      </section>

      {/* Reviews */}
      <section className="sec">
        <div className="wrap">
          <div className="center">
            <p className="eyebrow rv-eyebrow">TESTIMONIALS</p>
            <h2 className="h2">
              Loved by <em className="gold-em">couples</em>
            </h2>
            <p className="sub">What families say after their celebration.</p>
          </div>

          <div className="rv-grid">
            {(testimonials || []).slice(0, 3).map((t, i) => (
              <figure className="rv-card" key={t.name || i}>
                <span className="rv-quote" aria-hidden="true">&ldquo;</span>
                <div className="rv-stars" aria-label="5 out of 5 stars">â˜…â˜…â˜…â˜…â˜…</div>
                <blockquote>{t.quote || t.text || t.review}</blockquote>
                <figcaption>
                  <span className="rv-avatar" aria-hidden="true">
                    {(t.name || 'W').charAt(0)}
                  </span>
                  <span>
                    <strong>{t.name}</strong>
                    {t.city ? <small>{t.city}</small> : null}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="sec ">
        <div className="wrap">
          <div className="center">
            <p className="eyebrow rv-eyebrow">FAQ</p>
            <h2 className="h2">
              Questions, <em className="gold-em">answered</em>
            </h2>
            <p className="sub">Quick answers before you plan.</p>
          </div>

          <div className="faq-list">
            {(faqs || []).slice(0, 8).map(([question, answer], i) => (
              <details className="faq-item" key={i}>
                <summary>{question}</summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
              
          <p className="faq-more">
            Still have a question? <Link className="text-link" href="/contact">Talk to us</Link>
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="final-cta">
        <div className="wrap">
          <h2 className="h2">Ready to start planning?</h2>
          <p>Tell us your date and city. We&rsquo;ll help with the shortlisting.</p>
          <div className="actions">
            <Link className="btn" href="/contact">Start planning</Link>
            <a className="btn btn-light" href="https://wa.me/919266730494">Chat on WhatsApp</a>
          </div>
        </div>
      </section>
    </>
  );
}
