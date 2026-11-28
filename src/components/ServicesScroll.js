'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { services } from '@/data/content';

const serviceImages = {
  decor: '/images/wedding/Decor.jpg.jpeg',
  'photography-film': '/images/wedding/Photography%20%26%20film.jpg.jpeg',
  catering: '/images/wedding/Catering.jpg.jpeg',
  'mehendi-artists': '/images/wedding/Mehendi%20artists.jpg.jpeg',
  'dj-music': '/images/wedding/DJ%20%26%20music.jpg.jpeg',
  'bridal-makeup': '/images/wedding/Bridal%20makeup.jpg.jpeg',

};

export default function ServicesScroll() {
  const wrapRef = useRef(null);
  const stageRef = useRef(null);
  const [active, setActive] = useState(0);
  const count = services.length;

  useEffect(() => {
    let raf = 0;

    function update() {
      raf = 0;
      const wrap = wrapRef.current;
      const stage = stageRef.current;
      if (!wrap || !stage) return;

      const top = parseFloat(getComputedStyle(stage).top) || 0;
      const rect = wrap.getBoundingClientRect();
      const travel = wrap.offsetHeight - stage.offsetHeight;
      if (travel <= 0) return;

      const p = Math.min(1, Math.max(0, (top - rect.top) / travel));
      const next = Math.min(count - 1, Math.floor(p * count));
      setActive((prev) => (prev === next ? prev : next));
    }

    function onScroll() {
      if (!raf) raf = requestAnimationFrame(update);
    }

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [count]);

  function goTo(i) {
    const wrap = wrapRef.current;
    const stage = stageRef.current;
    if (!wrap || !stage) return;
    const top = parseFloat(getComputedStyle(stage).top) || 0;
    const travel = wrap.offsetHeight - stage.offsetHeight;
    const wrapTop = wrap.getBoundingClientRect().top + window.scrollY;
    const p = (i + 0.5) / count;
    window.scrollTo({ top: wrapTop - top + p * travel, behavior: 'smooth' });
  }

  return (
    <section className="svs-section">
      <div className="wrap">
        <div className="svs-head">
          <h2>Everything for your wedding</h2>
          <p>Book the venue, then build the rest around it. Scroll to explore.</p>
        </div>

        <div
          className="svs-wrap"
          ref={wrapRef}
          style={{ '--svs-count': count }}
        >
          <div className="svs-stage" ref={stageRef}>
            <div className="svs-dots" aria-hidden="true">
              {services.map((s, i) => (
                <button
                  key={s.slug}
                  type="button"
                  tabIndex={-1}
                  className={i === active ? 'on' : ''}
                  onClick={() => goTo(i)}
                />
              ))}
            </div>

            {services.map((s, i) => (
              <article
                key={s.slug}
                className={
                  'svs-card' +
                  (i === active ? ' is-active' : '') +
                  (i < active ? ' is-past' : '')
                }
                aria-hidden={i !== active}
              >
                <div className="svs-text">
                  <span className="svs-num">{String(i + 1).padStart(2, '0')}</span>
                  <h3>{s.name}</h3>
                  <p>{s.short || s.description}</p>
                  <Link
                    href={`/services/${s.slug}`}
                    className="svs-link"
                    tabIndex={i === active ? 0 : -1}
                  >
                    Explore service <span aria-hidden="true">→</span>
                  </Link>

                  <div className="svs-progress">
                    <span>{String(i + 1).padStart(2, '0')}</span>
                    <div className="svs-bar">
                      <i style={{ width: `${((i + 1) / count) * 100}%` }} />
                    </div>
                    <span>{String(count).padStart(2, '0')}</span>
                  </div>
                </div>

                <div
                  className="svs-img"
                  role="img"
                  aria-label={s.name}
                  style={{ backgroundImage: `url("${serviceImages[s.slug] || s.image}")` }}
                />
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
