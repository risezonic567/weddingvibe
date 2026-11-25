'use client';

import { useEffect, useState } from 'react';

// Replace a slide's type with "video" and set src to add a looping video.
const HERO_SLIDES = [
  { type: 'image', src: 'https://images.unsplash.com/photo-1744805624954-a6686543c3ff?auto=format&fit=crop&w=2200&q=90', alt: 'Grand Indian wedding celebration at sunset' },
  { type: 'image', src: 'https://images.unsplash.com/photo-1774024333427-f1bf80d0e3c4?auto=format&fit=crop&w=2200&q=90', alt: 'Wedding mandap surrounded by floral decor' },
  { type: 'image', src: 'https://images.unsplash.com/photo-1744804298726-88ee70f07fdc?auto=format&fit=crop&w=2200&q=90', alt: 'Joyful wedding celebration in India' },
  { type: 'image', src: 'https://images.unsplash.com/photo-1781077126479-437220427c93?auto=format&fit=crop&w=2200&q=90', alt: 'Indian wedding celebration by the coast' },
];

export default function HeroLocationSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => setActiveIndex(index => (index + 1) % HERO_SLIDES.length), 5000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="hero-slider" aria-label="Featured wedding celebrations">
      <div className="hero-slider-frame" aria-hidden="true">
        {HERO_SLIDES.map((slide, index) => (
          <div className={`hero-slide${index === activeIndex ? ' is-active' : ''}`} key={slide.src}>
            {slide.type === 'video'
              ? <video src={slide.src} autoPlay muted loop playsInline />
              : <img src={slide.src} alt={slide.alt} />}
          </div>
        ))}
      </div>
      <div className="hero-slider-backdrop" aria-hidden="true" />
      <div className="hero-slider-pagination" aria-label="Choose a hero slide">
        {HERO_SLIDES.map((slide, index) => (
          <button key={slide.src} type="button" className={index === activeIndex ? 'is-active' : ''}
            aria-label={`Show slide ${index + 1}`} aria-current={index === activeIndex ? 'true' : undefined}
            onClick={() => setActiveIndex(index)}>{index === activeIndex ? <span className="hero-active-dot" /> : '★'}</button>
        ))}
      </div>
    </div>
  );
}
