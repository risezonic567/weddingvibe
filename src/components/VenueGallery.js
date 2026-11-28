'use client';

import { useEffect, useState } from 'react';
import { ImageBox } from '@/components/Site';

// Show venue photos and let visitors open them in a larger view.
export default function VenueGallery({ images = [], venueName }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const photoList = Array.isArray(images) ? images.filter(Boolean) : [];
  const photoCount = photoList.length;
  const activeImage = photoList[activeIndex];

  useEffect(() => {
    if (!isOpen) return;

    function handleKeyDown(event) {
      if (event.key === 'Escape') setIsOpen(false);
      if (event.key === 'ArrowRight' && photoCount > 0) {
        setActiveIndex((current) => (current + 1) % photoCount);
      }
      if (event.key === 'ArrowLeft' && photoCount > 0) {
        setActiveIndex((current) => (current - 1 + photoCount) % photoCount);
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, photoCount]);

  function showPrevious() {
    if (photoCount > 0) setActiveIndex((current) => (current - 1 + photoCount) % photoCount);
  }

  function showNext() {
    if (photoCount > 0) setActiveIndex((current) => (current + 1) % photoCount);
  }

  return (
    <section className="venue-gallery" aria-label={`${venueName} photo gallery`}>
      {activeImage ? (
        <ImageBox image={activeImage} alt={`${venueName} wedding venue`} className="venue-gallery-main" />
      ) : (
        <div className="venue-gallery-placeholder">Venue photos will be added soon.</div>
      )}

      {photoCount > 1 && (
        <div className="venue-gallery-thumbnails" aria-label="Choose a venue photo">
          {photoList.map((image, index) => (
            <button
              className={`venue-gallery-thumbnail${index === activeIndex ? ' is-active' : ''}`}
              type="button"
              key={`${image}-${index}`}
              onClick={() => setActiveIndex(index)}
              aria-label={`Show photo ${index + 1}`}
              aria-pressed={index === activeIndex}
            >
              <ImageBox image={image} alt="" />
            </button>
          ))}
        </div>
      )}

      <button className="btn venue-gallery-open" type="button" onClick={() => setIsOpen(true)}>
        View all photos
      </button>

      {isOpen && (
        <div
          className="venue-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`${venueName} photos`}
          onClick={() => setIsOpen(false)}
        >
          <button className="venue-lightbox-close" type="button" onClick={() => setIsOpen(false)} aria-label="Close photos">
            ×
          </button>
          {photoCount > 1 && (
            <button className="venue-lightbox-arrow previous" type="button" onClick={(event) => { event.stopPropagation(); showPrevious(); }} aria-label="Previous photo">
              ‹
            </button>
          )}
          <div className="venue-lightbox-content" onClick={(event) => event.stopPropagation()}>
            {activeImage ? (
              <ImageBox image={activeImage} alt={`${venueName} wedding venue photo ${activeIndex + 1}`} className="venue-lightbox-image" />
            ) : (
              <div className="venue-gallery-placeholder venue-lightbox-image">Venue photos will be added soon.</div>
            )}
          </div>
          {photoCount > 1 && (
            <button className="venue-lightbox-arrow next" type="button" onClick={(event) => { event.stopPropagation(); showNext(); }} aria-label="Next photo">
              ›
            </button>
          )}
          <span className="venue-lightbox-count">{photoCount ? `${activeIndex + 1} / ${photoCount}` : 'No photos yet'}</span>
        </div>
      )}
    </section>
  );
}
