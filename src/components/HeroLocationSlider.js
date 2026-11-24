'use client';

import { useEffect, useState } from 'react';

// Swap these paths and details to feature your own verified wedding venues.
// The current paths use the site's local demo artwork, so the slider works out of the box.
const HERO_SLIDES = [
  { image: 'https://images.unsplash.com/photo-1744805624954-a6686543c3ff?auto=format&fit=crop&w=1800&q=85', location: 'Mumbai, India', pricePerPlate: '₹1,800 - ₹3,500 per plate', photoCount: '15+ more photos' },
  { image: 'https://images.unsplash.com/photo-1774024333427-f1bf80d0e3c4?auto=format&fit=crop&w=1800&q=85', location: 'Udaipur, India', pricePerPlate: '₹2,500 - ₹5,000 per plate', photoCount: '18+ more photos' },
  { image: 'https://images.unsplash.com/photo-1744804298726-88ee70f07fdc?auto=format&fit=crop&w=1800&q=85', location: 'Jaipur, India', pricePerPlate: '₹1,500 - ₹3,200 per plate', photoCount: '12+ more photos' },
  { image: 'https://images.unsplash.com/photo-1781077126479-437220427c93?auto=format&fit=crop&w=1800&q=85', location: 'Goa, India', pricePerPlate: '₹2,000 - ₹4,000 per plate', photoCount: '20+ more photos' },
  { image: 'https://images.unsplash.com/photo-1771992232127-82002efcd233?auto=format&fit=crop&w=1800&q=85', location: 'Delhi NCR, India', pricePerPlate: '₹1,600 - ₹3,800 per plate', photoCount: '16+ more photos' },
];

export default function HeroLocationSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const activeSlide = HERO_SLIDES[activeIndex];

  useEffect(() => {
    if (paused) return undefined;
    const timer = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % HERO_SLIDES.length);
    }, 4000);
    return () => window.clearInterval(timer);
  }, [paused]);

  const showSlide = (index) => {
    setActiveIndex((index + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  return (
    <div
      className="hero-slider"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false);
      }}
    >
      <div className="hero-slider-backdrop" aria-hidden="true" />
      <div
        className="hero-slider-frame"
        role="img"
        aria-label={`Wedding venue in ${activeSlide.location}`}
      >
        {HERO_SLIDES.map((slide, index) => (
          <div
            className={`hero-slide${index === activeIndex ? ' is-active' : ''}`}
            key={slide.location}
            style={{ backgroundImage: `url("${slide.image}")` }}
            aria-hidden="true"
          />
        ))}
        {/* <span className="hero-photo-count">{activeSlide.photoCount}</span> */}
        <button className="hero-arrow hero-arrow-prev" type="button" aria-label="Previous location" onClick={() => showSlide(activeIndex - 1)}>‹</button>
        <button className="hero-arrow hero-arrow-next" type="button" aria-label="Next location" onClick={() => showSlide(activeIndex + 1)}>›</button>
      </div>
      <div className="hero-slider-dots" aria-label="Choose a featured location">
        {HERO_SLIDES.map((slide, index) => (
          <button
            key={slide.location}
            type="button"
            className={index === activeIndex ? 'is-active' : ''}
            aria-label={`Show ${slide.location}`}
            aria-current={index === activeIndex ? 'true' : undefined}
            onClick={() => showSlide(index)}
          />
        ))}
      </div>
    </div>
  );
}
