'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { cities, getVenuesByCity } from '@data/venues';
import { services } from '@/data/content';
import { site } from '@/data/site';
import { weddingImages } from '@/data/wedding-images';
import LocationThumb from '@/components/LocationThumb';


function Brand({ footer = false }) {
  return (
    <Link
      className={footer ? 'brand brand-footer' : 'brand'}
      href="/"
      aria-label="Weddings Vibe home"
    >
      {footer ? (
        <Image src="/images/logo.png" alt="Weddings Vibe" width={360} height={360} />
      ) : (
        <>
          <Image src="/images/logo-icon.png" alt="" width={54} height={54} />
          <span>WEDDINGS VIBE</span>
        </>
      )}
    </Link>
  );
}

const serviceMenuImages = {
  decor: '/images/wedding/Decor.jpg.jpeg',
  'photography-film': '/images/wedding/Photography%20%26%20film.jpg.jpeg',
  'bridal-makeup': '/images/wedding/Bridal%20makeup.jpg.jpeg',
  catering: '/images/wedding/Catering.jpg.jpeg',
  'mehendi-artists': '/images/wedding/Mehendi%20artists.jpg.jpeg',
  'dj-music': '/images/wedding/DJ%20%26%20music.jpg.jpeg',
};

export function Header() {
  const [open, setOpen] = useState(false);
  const [venuesOpen, setVenuesOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [activeCity, setActiveCity] = useState(cities[0]?.slug || '');
  const [scrolled, setScrolled] = useState(false);
  const navShellRef = useRef(null);
  const closeTimer = useRef(null);

  const pathname = usePathname();
  const isHome = pathname === '/';
  const selectedCity = cities.find((city) => city.slug === activeCity) || cities[0];
  const selectedVenues = selectedCity ? getVenuesByCity(selectedCity.slug) : [];

  useEffect(() => {
    const updateScroll = () => setScrolled(window.scrollY > 24);
    updateScroll();
    window.addEventListener('scroll', updateScroll, { passive: true });
    return () => window.removeEventListener('scroll', updateScroll);
  }, []);

  useEffect(() => {
    function closeOnOutsideClick(event) {
      if (!navShellRef.current?.contains(event.target)) closeMegaMenus();
    }
    function closeOnEscape(event) {
      if (event.key === 'Escape') {
        closeMegaMenus();
        setOpen(false);
      }
    }
    document.addEventListener('pointerdown', closeOnOutsideClick);
    window.addEventListener('keydown', closeOnEscape);
    return () => {
      document.removeEventListener('pointerdown', closeOnOutsideClick);
      window.removeEventListener('keydown', closeOnEscape);
      window.clearTimeout(closeTimer.current);
    };
  }, []);

  function cancelClose() {
    window.clearTimeout(closeTimer.current);
  }

  function scheduleClose() {
    window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => { setVenuesOpen(false); setServicesOpen(false); }, 120);
  }

  function closeMegaMenus() {
    window.clearTimeout(closeTimer.current);
    setVenuesOpen(false);
    setServicesOpen(false);
  }

  function openMegaMenu(menu) {
    window.clearTimeout(closeTimer.current);
    setVenuesOpen(menu === 'venues');
    setServicesOpen(menu === 'services');
  }

  return (
    <header
      className={
        'header' +
        (isHome ? ' header-home' : '') +
        (isHome && !scrolled ? ' header-transparent' : '')
      }
    >
      <div className="nav-shell" ref={navShellRef}>
        <div className="wrap navrow">
          <Brand />
          <button
            className="hamb"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            {open ? '\u00d7' : '\u2630'}
          </button>

          <nav className={open ? 'nav open' : 'nav'} aria-label="Main navigation">
            <ul className="desktop-nav list-none m-0 p-0">
              {site.nav.map((item) => {
                const isVenues = item.label === 'Venues';
                const isServices = item.label === 'Services';
                const dropdownOpen = isVenues ? venuesOpen : servicesOpen;
                return (
                  <li
                    key={item.href}
                    className={isVenues || isServices ? `dd${dropdownOpen ? ' is-open' : ''}` : ''}
                    onMouseEnter={isVenues || isServices ? () => openMegaMenu(isVenues ? 'venues' : 'services') : undefined}
                    onMouseLeave={isVenues || isServices ? scheduleClose : undefined}
                    onFocus={isVenues || isServices ? () => openMegaMenu(isVenues ? 'venues' : 'services') : undefined}
                  >
                    <Link
                      href={item.href}
                      className={isVenues || isServices ? 'nav-dd-trigger' : undefined}
                      aria-expanded={isVenues || isServices ? dropdownOpen : undefined}
                      aria-haspopup={isVenues || isServices ? 'true' : undefined}
                    >
                      {item.label}
                      {(isVenues || isServices) && <svg className="dd-caret" width="11" height="11" viewBox="0 0 12 12" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 4.5 6 8l3.5-3.5" /></svg>}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className="mobile-venue-accordion">
              <p>Browse venues by city</p>
              {cities.map((city) => (
                <details key={city.slug}>
                  <summary>
                    <LocationThumb cityName={city.name} />
                    <span>{city.name}</span>
                    <small>
                      {getVenuesByCity(city.slug).length}{' '}
                      {getVenuesByCity(city.slug).length === 1 ? 'venue' : 'venues'}
                    </small>
                  </summary>
                  <div className="mobile-venue-links">
                    <Link href={`/wedding-venues/${city.slug}`}>View all in {city.name}</Link>
                    {getVenuesByCity(city.slug).map((venue) => (
                      <Link key={`${venue.citySlug}-${venue.slug}`} href={`/wedding-venues/${venue.citySlug}/${venue.slug}`}>
                        <span>{venue.name}</span>
                        <small>{venue.location} · Starting from Rs {venue.startingPrice} Lakh</small>
                      </Link>
                    ))}
                  </div>
                </details>
              ))}
            </div>
            <div className="mobile-services-accordion">
              <details>
                <summary>Wedding vendors &amp; services</summary>
                <div className="mobile-service-links">
                  {services.map((service) => (
                    <Link href={`/services/${service.slug}`} key={service.slug} onClick={() => setOpen(false)}>
                      <span className="service-thumb"><Image src={serviceMenuImages[service.slug] || service.image} alt="" width={48} height={48} sizes="48px" /></span>
                      <span><strong>{service.name}</strong><small>{service.shortDescription}</small></span>
                    </Link>
                  ))}
                  <Link className="mobile-service-all" href="/services" onClick={() => setOpen(false)}>Explore all services →</Link>
                </div>
              </details>
            </div>
          </nav>

          <Link className="btn plan" href="/contact">Plan my wedding</Link>
        </div>

        <div
          className={`mega${venuesOpen ? ' is-open' : ''}`}
          aria-hidden={!venuesOpen}
          onMouseEnter={cancelClose}
          onMouseLeave={scheduleClose}
          onClick={(event) => {
            if (event.target.closest('a')) closeMegaMenus();
          }}
        >
          <div className="wrap">
            <div className="mbox">
              <div className="mega-content">
                <ul className="cities list-none m-0 p-0">
                  {cities.map((city) => (
                    <li
                      className={`city${activeCity === city.slug ? ' is-active' : ''}`}
                      key={city.slug}
                      onMouseEnter={() => setActiveCity(city.slug)}
                      onFocus={() => setActiveCity(city.slug)}
                    >
                      <Link href={`/wedding-venues/${city.slug}`}>
                        <LocationThumb cityName={city.name} />
                        <span className="city-name">{city.name}</span>
                        <small>
                          {getVenuesByCity(city.slug).length}{' '}
                          {getVenuesByCity(city.slug).length === 1 ? 'venue' : 'venues'}
                        </small>
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="cp">
                  <div className="chd">
                    <div>
                      <h3>Wedding venues in {selectedCity.name}</h3>
                      <p>
                        {selectedVenues.length} wedding {selectedVenues.length === 1 ? 'venue' : 'venues'} to explore
                      </p>
                    </div>
                    <Link className="underline" href={`/wedding-venues/${selectedCity.slug}`}>View all in {selectedCity.name}</Link>
                  </div>
                  <div className="vg city-venues-panel" key={selectedCity.slug}>
                    {selectedVenues.slice(0, 3).map((venue) => (
                      <Link className="vc" href={`/wedding-venues/${venue.citySlug}/${venue.slug}`} key={`${venue.citySlug}-${venue.slug}`}>
                        <div className="vc-image">
                          <VenueCardImage image={venue.images[0]} alt={venue.name} />
                        </div>
                        <strong>{venue.name}</strong>
                        <small>{venue.location} · {venue.capacity}</small>
                        <b className="vc-price">Starting from Rs {venue.startingPrice} Lakh</b>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="mfoot">
                <span>Browse all venues</span>
                <Link className="mega-explore-all" href="/venues">Explore all venues <span aria-hidden="true">→</span></Link>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`mega services-mega${servicesOpen ? ' is-open' : ''}`}
          aria-hidden={!servicesOpen}
          onMouseEnter={cancelClose}
          onMouseLeave={scheduleClose}
          onClick={(event) => { if (event.target.closest('a')) closeMegaMenus(); }}
        >
          <div className="wrap">
            <div className="mbox services-mbox">
              <div className="chd"><div><h3>Wedding vendors &amp; services</h3><p>Meet the people who bring every detail of your celebration to life.</p></div></div>
              <div className="service-menu-grid">
                {services.map((service) => (
                  <Link className="service-menu-card" href={`/services/${service.slug}`} key={service.slug}>
                    <span className="service-thumb"><Image src={serviceMenuImages[service.slug] || service.image} alt="" width={60} height={60} sizes="60px" /></span>
                    <span><strong>{service.name}</strong><small>{service.shortDescription}</small></span>
                  </Link>
                ))}
              </div>
              <Link className="mega-explore-all" href="/services">Explore all services <span aria-hidden="true">→</span></Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
function SocialIcon({ type }) {
  if (type === 'Instagram') {
    return (
      <svg viewBox="0 0 24 24">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.2" cy="6.8" r="1" fill="currentColor" />
      </svg>
    );
  }

  if (type === 'LinkedIn') {
    return (
      <svg viewBox="0 0 24 24">
        <path
          fill="currentColor"
          stroke="none"
          d="M4 9h3v11H4zM5.5 4a1.8 1.8 0 1 0 0 3.6 1.8 1.8 0 0 0 0-3.6zM10 9h3v1.6c.5-1 1.7-1.9 3.3-1.9 3 0 3.7 2 3.7 4.6V20h-3v-5.8c0-1.4-.1-2.7-1.8-2.7s-2 1.2-2 2.6V20h-3z"
        />
      </svg>
    );
  }

  if (type === 'YouTube') {
    return (
      <svg viewBox="0 0 24 24">
        <rect x="2" y="5" width="20" height="14" rx="4" />
        <path fill="currentColor" stroke="none" d="m10 9 5 3-5 3z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="9" />
      <path d="m11 17 1.5-6.5m-2.5 3c-.5-2.5 1-4.5 3-4.5 1.8 0 2.8 1.3 2.5 3s-1.4 2.8-2.8 2.5" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="ft">
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <Brand footer />
            <p>{site.tagline}</p>
          </div>

          <div>
            <h4>Contact</h4>
            <p>{site.address}</p>
            <div className="ft-links">
              <a href={`tel:${site.phoneLink}`}>Call: {site.phone}</a>
              <a href={`tel:${site.phoneLink2}`}>Call: {site.phone2}</a>
              <a href={`mailto:${site.email}`}>{site.email}</a>
              <a href={`https://maps.google.com/?q=${encodeURIComponent(site.mapsQuery)}`}>
                Get directions
              </a>
            </div>
            <p className="hours">{site.hours}</p>
          </div>

          <div>
            <h4>Wedding venues by city</h4>
            <div className="ft-links">
              {cities.map((city) => (
                <Link key={city.slug} href={`/wedding-venues/${city.slug}`}>{city.name}</Link>
              ))}
            </div>
          </div>

          <div>
            <div className="qr">
              <a
                className="qrbox"
                href={site.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Weddings Vibe on Instagram"
              >
                <QRCodeSVG
                  value={site.socials.instagram}
                  size={112}
                  bgColor="#ffffff"
                  fgColor="#000000"
                  level="M"
                />
              </a>
              <div>Scan to follow us on Instagram</div>
              <strong>{site.instagram}</strong>
            </div>
          </div>

          <div>
            <h4>Follow us</h4>
            <div className="soc">
              {Object.entries(site.socials).map(([name, url]) => (
                <a
                  key={name}
                  href={url}
                  aria-label={name}
                >
                  <SocialIcon
                    type={
                      name === 'instagram'
                        ? 'Instagram'
                        : name === 'linkedin'
                          ? 'LinkedIn'
                          : name === 'youtube'
                            ? 'YouTube'
                            : 'Pinterest'
                    }
                  />
                </a>
              ))}
            </div>
            <a className="btn" href={`https://wa.me/${site.whatsapp}`}>
              Chat on WhatsApp
            </a>
          </div>
        </div>

        <div className="foot-bottom">
          <span>
            © 2026 Weddings Vibe. All rights reserved. ·{' '}
            <Link href="/privacy-policy">Privacy</Link> · <Link href="/terms">Terms</Link>
          </span>
          <Link className="totop" href="/" aria-label="Back to home">
            ↑
          </Link>
        </div>
      </div>
    </footer>
  );
}

export function Shell({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      <a
        className="wa-float"
        aria-label="Chat on WhatsApp"
        href={`https://wa.me/${site.whatsapp}`}
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M20 11.5a8 8 0 0 1-11.8 7L4 20l1.5-4A8 8 0 1 1 20 11.5Z" />
          <path d="M9 8.5c.3 2.6 2 4.4 4.7 5.2l1.1-1.1 2 .9c-.2 1.2-1.2 1.8-2.4 1.7-3.6-.4-6.7-3.4-7-6.8-.1-1.2.5-2.2 1.5-2.4l1 2z" />
        </svg>
      </a>
    </>
  );
}

export function ImageBox({ image = weddingImages.couple, className = '', alt = '' }) {
  const isImageSource = image.startsWith('https://') || image.startsWith('/');
  const fallbackImage = '/images/wedding/wedding vibes Decor.jpg.jpeg';
  const [failedImage, setFailedImage] = useState(null);
  const imageSource = failedImage === image ? fallbackImage : image;

  return (
    <div
      role="img"
      aria-label={alt}
      className={`ph ${isImageSource ? '' : image.replace('.svg', '')} ${className}`}
      style={isImageSource ? { backgroundImage: `url("${fallbackImage}")` } : undefined}
    >
      {isImageSource && (
        <span className="ph-image-frame" aria-hidden="true" style={{ position: 'relative', display: 'block', width: '100%', height: '100%', minHeight: 'inherit', overflow: 'hidden' }}>
          <Image
            src={imageSource}
            alt=""
            fill
            sizes="(max-width: 700px) 100vw, (max-width: 1200px) 50vw, 1200px"
            style={{ objectFit: 'cover' }}
            onError={() => setFailedImage(image)}
          />
        </span>
      )}
    </div>
  );
}

// Show a venue photo in a fixed-ratio box on venue cards.
export function VenueCardImage({ image, alt = '' }) {
  return (
    <div className="venue-card-image">
      {image ? (
        <Image src={image} alt={alt} fill sizes="(max-width: 700px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover" />
      ) : (
        <span className="venue-card-image-placeholder" aria-label={`${alt} photo unavailable`} />
      )}
    </div>
  );
}

export function VenueCard({ venue, image = venue.images[0] }) {
  return (
    <Link href={`/wedding-venues/${venue.citySlug}/${venue.slug}`} className="card">
      <ImageBox image={image} alt={venue.name} />
      <div className="cardbody">
        <h3>{venue.name}</h3>
        <p className="venue-location">
          <LocationThumb cityName={cities.find((city) => city.slug === venue.citySlug)?.name || ''} />
          {venue.location} · {venue.capacity}
        </p>
        <strong>Starting from Rs {venue.startingPrice} Lakh</strong>
      </div>
    </Link>
  );
}

export function EnquiryForm({ type = 'contact', subject = '', slug = '', compact = false }) {
  const [status, setStatus] = useState('');
  const [city, setCity] = useState('');

  async function submit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    // honeypot: bot ne bhara hai to bhejna nahi
    if (data.website) {
      setStatus('Thank you! A wedding planner will be in touch shortly.');
      form.reset();
      return;
    }

    setStatus('Sending your enquiry…');

    try {
      if (process.env.NEXT_PUBLIC_API_URL) {
        const r = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/enquiry`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ ...data, type, subject, slug }),
        });
        if (!r.ok) throw Error('Please try again in a moment.');
      }
      setStatus('Thank you! A wedding planner will be in touch shortly.');
      form.reset();
      setCity('');
    } catch {
      setStatus(`We could not send that just now. Please call us at ${site.phone}.`);
    }
  }

  return (
    <form className={`form enq ${compact ? 'compact' : ''}`} onSubmit={submit}>
      <div className="enq-head">
        <h3>{subject || 'Tell us about your wedding'}</h3>
        <p>Takes 30 seconds. A planner will call you back.</p>
      </div>

      <div className="enq-row">
        <label>
          Your name
          <input name="name" required autoComplete="name" placeholder="Full name" />
        </label>
        <label>
          Phone number
          <input
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            pattern="[+0-9 ()-]{8,}"
            placeholder="+91"
          />
        </label>
      </div>

      <div className="enq-row">
        <label>
          <span className="filter-city-heading">
            <LocationThumb cityName={city || 'India'} />
            City
          </span>
          <select name="city" value={city} onChange={(e) => setCity(e.target.value)}>
            <option value="">Choose a city</option>
            {cities.map((c) => (
              <option key={c.slug}>{c.name}</option>
            ))}
          </select>
        </label>
        <label>
          Wedding date
          <input name="date" type="date" />
        </label>
      </div>

      <details className="enq-more">
        <summary>Add more details (optional)</summary>
        <div className="enq-more-body">
          <div className="enq-row">
            <label>
              Guest count
              <input name="guests" type="number" min="1" placeholder="e.g. 250" />
            </label>
            <label>
              Email address
              <input name="email" type="email" autoComplete="email" placeholder="you@email.com" />
            </label>
          </div>
          <label>
            Tell us a little more
            <textarea name="message" rows="2" />
          </label>
        </div>
      </details>

      <label className="trap">
        Website
        <input name="website" tabIndex="-1" autoComplete="off" />
      </label>

      <button className="btn" disabled={status.startsWith('Sending')}>
        Send enquiry
      </button>

      {status && <p role="status">{status}</p>}
    </form>
  );
}

export function BudgetPlanner() {
  const [step, setStep] = useState(false);
  const [done, setDone] = useState(false);
  const [plan, setPlan] = useState({ guests: '150', budget: '', city: 'Delhi NCR' });
  const [status, setStatus] = useState('');

  async function send(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = { ...Object.fromEntries(new FormData(form)), ...plan };
    setStatus('Sending your plan…');

    try {
      if (process.env.NEXT_PUBLIC_API_URL) {
        const r = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/enquiry`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ ...data, type: 'budget-planner' }),
        });
        if (!r.ok) throw Error();
      }
      setDone(true);
    } catch {
      setStatus(`We could not send that now. Please call us at ${site.phone}.`);
    }
  }

  const total = Number(plan.budget) || 0;

  return (
    <div className="budget-panel">
      {done ? (
        <>
          <h3>Your celebration, thoughtfully divided</h3>
          <div className="budget-split">
            {[
              ['Food', 40],
              ['Decor', 30],
              ['Photography', 20],
              ['Flex fund', 10],
            ].map(([label, share]) => (
              <p className="budget-split-item" key={label}>
                <span className="budget-split-heading"><i aria-hidden="true">{['♧', '✿', '◎', '✦'][['Food','Decor','Photography','Flex fund'].indexOf(label)]}</i>{label}
                <strong>
                  {total ? `₹${Math.round((total * share) / 100).toLocaleString('en-IN')}` : `${share}%`}
                </strong></span>
                <span className="budget-bar"><i style={{ width: `${share}%` }} /></span>
              </p>
            ))}
          </div>
          <p>
            {plan.city} · {Number(plan.guests).toLocaleString('en-IN')} guests
          </p>
          <p>We’ll be in touch to tailor this plan to your day.</p>
          <div className="budget-result-actions">
            <Link className="btn" href="/contact">Talk to a planner</Link>
            <a className="btn btn-light" href={`https://wa.me/${site.whatsapp}`}>Chat on WhatsApp</a>
          </div>
        </>
      ) : step ? (
        <form className="form" onSubmit={send}>
          <h3>Where can we send your plan?</h3>

          <label>
            Your name
            <input name="name" required autoComplete="name" />
          </label>

          <label>
            Phone number
            <input name="phone" required type="tel" pattern="[+0-9 ()-]{8,}" autoComplete="tel" />
          </label>

          <label>
            Email address
            <input name="email" type="email" />
          </label>

          <label className="trap">
            Website
            <input name="website" tabIndex="-1" autoComplete="off" />
          </label>

          <button className="btn">Get my plan</button>
          {status && <p role="status">{status}</p>}
        </form>
      ) : (
        <form
          className="budget-form"
          onSubmit={(e) => {
            e.preventDefault();
            setStep(true);
          }}
        >
          <label>
            <span className="budget-field-label"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="9" cy="8" r="3"/><path d="M3.5 19v-1.5A4.5 4.5 0 0 1 8 13h2a4.5 4.5 0 0 1 4.5 4.5V19M16 5.5a3 3 0 0 1 0 5.8M17 13h.5a4 4 0 0 1 4 4v2"/></svg>Guests</span>
            <input
              type="number"
              min="1"
              required
              value={plan.guests}
              onChange={(e) => setPlan({ ...plan, guests: e.target.value })}
            />
          </label>

          <label>
            <span className="budget-field-label"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2v20M17 6H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>Budget</span>
            <input
              type="number"
              min="1"
              required
              placeholder="₹"
              value={plan.budget}
              onChange={(e) => setPlan({ ...plan, budget: e.target.value })}
            />
          </label>

          <label>
            <span className="filter-city-heading">
              <svg className="budget-input-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></svg>
              <LocationThumb cityName={plan.city} />
              City
            </span>
            <select
              value={plan.city}
              onChange={(e) => setPlan({ ...plan, city: e.target.value })}
            >
              {cities.map((c) => (
                <option key={c.slug}>{c.name}</option>
              ))}
            </select>
          </label>

          <button className="btn">Show my plan</button>
        </form>
      )}
    </div>
  );
}
