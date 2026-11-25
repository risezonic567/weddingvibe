'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { cities } from '@/data/site';

// Change a slide to type: 'video' and provide its src to use a looping video.
const HERO_SLIDES = [
  { type: 'image', src: 'https://images.unsplash.com/photo-1744805624954-a6686543c3ff?auto=format&fit=crop&w=2200&q=90', alt: 'Grand Indian wedding celebration at sunset' },
  { type: 'image', src: 'https://images.unsplash.com/photo-1774024333427-f1bf80d0e3c4?auto=format&fit=crop&w=2200&q=90', alt: 'Wedding mandap surrounded by floral decor' },
  { type: 'image', src: 'https://images.unsplash.com/photo-1744804298726-88ee70f07fdc?auto=format&fit=crop&w=2200&q=90', alt: 'Joyful wedding celebration in India' },
  { type: 'image', src: 'https://images.unsplash.com/photo-1781077126479-437220427c93?auto=format&fit=crop&w=2200&q=90', alt: 'Indian wedding celebration by the coast' },
];

const HERO_PROOF = {
  venues: '500+',
  weddings: '10,000+',
  rating: '4.8',
};

const GUEST_OPTIONS = [
  ['50-100', '50–100 guests'],
  ['100-300', '100–300 guests'],
  ['300-500', '300–500 guests'],
  ['500+', '500+ guests'],
];

const BUDGET_OPTIONS = [
  ['under-1000', 'Under ₹1,000'],
  ['1000-2000', '₹1,000–₹2,000'],
  ['2000-3000', '₹2,000–₹3,000'],
  ['3000+', '₹3,000+'],
];

export default function HeroLocationSlider() {
  const router = useRouter();
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [city, setCity] = useState('');
  const [guests, setGuests] = useState('');
  const [budget, setBudget] = useState('');

  useEffect(() => {
    if (paused) return undefined;
    const timer = window.setInterval(() => setActiveIndex(index => (index + 1) % HERO_SLIDES.length), 5000);
    return () => window.clearInterval(timer);
  }, [paused]);

  useEffect(() => {
    const updateScroll = () => setScrolled(window.scrollY > 80);
    updateScroll();
    window.addEventListener('scroll', updateScroll, { passive: true });
    return () => window.removeEventListener('scroll', updateScroll);
  }, []);

  function searchVenues(event) {
    event.preventDefault();
    const query = new URLSearchParams();
    if (city) query.set('city', city);
    if (guests) query.set('guests', guests);
    if (budget) query.set('budget', budget);
    const queryString = query.toString();
    router.push(`/venues${queryString ? `?${queryString}` : ''}`);
  }

  return (
    <section className="home-hero" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div className="hero-slider" aria-hidden="true">
        <div className="hero-slider-frame">
          {HERO_SLIDES.map((slide, index) => (
            <div className={`hero-slide${index === activeIndex ? ' is-active' : ''}`} key={slide.src}>
              {slide.type === 'video'
                ? <video src={slide.src} autoPlay muted loop playsInline />
                : <Image src={slide.src} alt={slide.alt} fill sizes="100vw" priority={index === 0} />}
            </div>
          ))}
        </div>
      </div>
      <div className="hero-slider-backdrop" aria-hidden="true" />

      <div className="wrap home-hero-grid">
        <div className="home-hero-content">
       
          <h1 className="hero-enter hero-enter-2">Find the venue that feels like <em>your wedding.</em></h1>
          <p className="home-hero-copy hero-enter hero-enter-3">Compare verified venues, check prices per plate and send one enquiry. No endless calls.</p>

          <form className="hero-search hero-enter hero-enter-4" onSubmit={searchVenues}>
            <label><span>City</span><select value={city} onChange={event => setCity(event.target.value)}>
              <option value="">Any city</option>{cities.map(item => <option value={item.name} key={item.slug}>{item.name}</option>)}
            </select></label>
            <label><span>Guests</span><select value={guests} onChange={event => setGuests(event.target.value)}>
              <option value="">Any guest count</option>{GUEST_OPTIONS.map(([value, label]) => <option value={value} key={value}>{label}</option>)}
            </select></label>
            <label><span>Budget per plate</span><select value={budget} onChange={event => setBudget(event.target.value)}>
              <option value="">Any budget</option>{BUDGET_OPTIONS.map(([value, label]) => <option value={value} key={value}>{label}</option>)}
            </select></label>
            <button type="submit" className="hero-search-submit">Search venues</button>
          </form>

          <div className="actions hero-actions hero-enter hero-enter-5">
            <Link className="btn hero-primary" href="/venues">Explore venues</Link>
            <Link className="btn btn-outline hero-secondary" href="/contact">Plan my wedding</Link>
          </div>
          <p className="hero-proof-strip hero-enter hero-enter-5">
            <span>{HERO_PROOF.venues} verified venues</span><i aria-hidden="true">·</i>
            <span>{HERO_PROOF.weddings} weddings planned</span><i aria-hidden="true">·</i>
            <span>{HERO_PROOF.rating}<b aria-hidden="true">★</b> rated</span>
          </p>
        </div>
      </div>

      <div className="hero-slider-pagination" aria-label="Choose a hero slide">
        {HERO_SLIDES.map((slide, index) => (
          <button key={slide.src} type="button" className={index === activeIndex ? 'is-active' : ''}
            aria-label={`Show slide ${index + 1}`} aria-current={index === activeIndex ? 'true' : undefined}
            onClick={() => setActiveIndex(index)} />
        ))}
      </div>
      <div className={`hero-scroll-cue${scrolled ? ' is-hidden' : ''}`} aria-hidden="true">
        <span className="hero-scroll-mouse"><i /></span><span>Scroll</span><span className="hero-scroll-chevron">⌄</span>
      </div>
    </section>
  );
}
