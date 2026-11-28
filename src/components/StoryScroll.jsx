'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { weddingImages } from '@/data/wedding-images';

export default function StoryScroll() {
  const ref = useRef(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce || !('IntersectionObserver' in window)) {
      const frame = window.requestAnimationFrame(() => setOpen(true));
      return () => window.cancelAnimationFrame(frame);
    }

    // jab section screen ke neeche se ~30% andar aa jaye tab khule
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setOpen(true);
          io.disconnect();
        }
      },
      { rootMargin: '0px 0px -30% 0px', threshold: 0 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section className="ltr-sec">
      <div className="wrap">
        <div ref={ref} className={'ltr-scroll' + (open ? ' is-open' : '')}>
          <div className="ltr-rod" aria-hidden="true" />

          <div className="ltr-paper">
            <div className="ltr-paper-inner">
              <div className="ltr-body">
                <div
                  className="ltr-photo"
                  role="img"
                  aria-label="A couple at their wedding"
                  style={{ backgroundImage: `url("${weddingImages.couple}")` }}
                />

                <div className="ltr-text">
                  <p className="ltr-eyebrow">A NOTE FROM US</p>
                  <h2>
                    Every wedding begins with a <em>story</em>
                  </h2>
                  <p>
                    Planning a wedding should feel like a celebration, not a
                    to-do list. We started Weddings Vibe to help families find
                    the right venue without endless calls, hidden costs and
                    confusion.
                  </p>
                  <p>
                    From the first shortlist to the last dance, our team stays
                    with you, so you can enjoy every ritual, every laugh and
                    every blessing.
                  </p>
                  <div className="ltr-sign">
                    <span>With love,</span>
                    <strong>Team Weddings Vibe</strong>
                  </div>
                  <Link className="btn ltr-btn" href="/about">
                    Read our story
                  </Link>
                </div>

                {/* <span className="ltr-seal" aria-hidden="true">WV</span> */}
              </div>
            </div>
          </div>

          <div className="ltr-rod" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
