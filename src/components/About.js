'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { ImageBox } from '@/components/Site';
import { cities, venues } from '@data/venues';

const STATS = [
  { value: String(venues.length), label: 'Venue options' },
  { value: '10,000+', label: 'Weddings planned' },
  { value: String(cities.length), label: 'Cities listed' },
];

function useReveal(threshold = 0.4) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce || !('IntersectionObserver' in window)) {
      setShown(true);
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);

  return [ref, shown];
}

/* andar ka content: patrika khulne ke baad ek ke baad ek aata hai */
function Rise({ show, delay = 0, children, className = '' }) {
  return (
    <div
      className={`transition-all duration-[1100ms] ease-[cubic-bezier(0.22,0.8,0.2,1)] ${
        show ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
      } ${className}`}
      style={{ transitionDelay: show ? `${delay}ms` : '0ms' }}
    >
      {children}
    </div>
  );
}

export default function About() {
  const [ref, shown] = useReveal();

  return (
    <section ref={ref} className="relative overflow-hidden bg-[#faf7f1] py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6" style={{ perspective: '2200px' }}>
        <div className="relative">
          {/* ===== ANDAR KA PAGE (About content) ===== */}
          <div className="relative overflow-hidden rounded-[28px] border border-[#c9a24d]/60 bg-gradient-to-br from-[#fffaf0] to-[#f7efdc] p-6 shadow-2xl sm:p-10 lg:p-14">
            {/* left binding strip */}
            <div className="absolute inset-y-0 left-0 w-3 bg-gradient-to-r from-[#8f6b2e] via-[#e3c878] to-[#b08d3c] sm:w-4" />

            <div className="grid items-center gap-10 pl-3 lg:grid-cols-2 lg:gap-16 lg:pl-4">
              {/* image */}
              <Rise show={shown} delay={900}>
                <div className="group relative mx-auto w-full max-w-[460px] p-5">
                  <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-[28px] border-2 border-[#c9a24d] transition-all duration-500 ease-out group-hover:translate-x-5 group-hover:translate-y-5 group-hover:rotate-3" />
                  <div className="absolute inset-0 -translate-x-4 -translate-y-4 rounded-[28px] border border-[#c9a24d]/50 transition-all duration-500 ease-out group-hover:-translate-x-5 group-hover:-translate-y-5 group-hover:-rotate-3" />

                  <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] bg-[#f1ece2] shadow-2xl">
                    <ImageBox
                      image="/images/wedding/wedding vibes Decor.jpg.jpeg"
                      alt="Wedding celebration by Weddings Vibe"
                      className="absolute inset-0 h-full w-full rounded-[28px] transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                  </div>
                </div>
              </Rise>

              {/* text */}
              <div>
                <Rise show={shown} delay={1000}>
                  <span className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#c9a24d]">
                    <span className="h-px w-10 bg-[#c9a24d]" />
                    About Weddings Vibe
                  </span>
                </Rise>

                <Rise show={shown} delay={1100}>
                  <h2 className="mt-5 font-[family-name:var(--font-playfair)] text-4xl leading-tight text-neutral-900 md:text-5xl">
                    We turn your wedding dream into a{' '}
                    <span className="italic text-[#c9a24d]">venue you&apos;ll love</span>
                  </h2>
                </Rise>

                <Rise show={shown} delay={1200}>
                  <p className="mt-6 max-w-xl text-base leading-relaxed text-neutral-600">
                    Weddings Vibe helps couples explore wedding venues and share
                    their plans with our team. Compare the details and starting
                    prices, then send one enquiry for help with your shortlist.
                  </p>
                </Rise>

                <Rise show={shown} delay={1300}>
                  <p className="mt-4 max-w-xl text-base leading-relaxed text-neutral-600">
                    Our team stays with you from the first shortlist to the final
                    booking, so you can enjoy the celebration while we handle the
                    details.
                  </p>
                </Rise>

                <Rise show={shown} delay={1400}>
                  <div className="mt-10 grid max-w-xl grid-cols-3 gap-6 border-y border-[#c9a24d]/30 py-6">
                    {STATS.map((s) => (
                      <div key={s.label}>
                        <p className="font-[family-name:var(--font-playfair)] text-2xl font-semibold text-neutral-900 md:text-3xl">
                          {s.value}
                        </p>
                        <p className="mt-1 text-xs text-neutral-500 md:text-sm">{s.label}</p>
                      </div>
                    ))}
                  </div>
                </Rise>

                <Rise show={shown} delay={1500}>
                  <div className="mt-8 flex flex-wrap items-center gap-4">
                    <Link
                      href="/venues"
                      className="rounded-full bg-gradient-to-r from-[#b8923f] to-[#d9b865] px-7 py-3 text-sm font-semibold text-white shadow-md transition hover:scale-[1.03] hover:shadow-lg"
                    >
                      Explore venues
                    </Link>
                    <Link
                      href="/contact"
                      className="rounded-full border border-neutral-300 px-7 py-3 text-sm font-semibold text-neutral-800 transition hover:border-[#c9a24d] hover:text-[#c9a24d]"
                    >
                      Talk to us
                    </Link>
                  </div>
                </Rise>
              </div>
            </div>
          </div>

          {/* ===== PATRIKA KA COVER (left hinge par khulta hai) ===== */}
         {/* ===== PATRIKA KA COVER ===== */}
<div
  aria-hidden="true"
  className={`patrika-cover absolute inset-0 z-20 ${shown ? 'is-open' : ''}`}
>
  <div className="patrika-front absolute inset-0 flex flex-col items-center justify-center overflow-hidden rounded-[28px] border border-[#c9a24d] bg-gradient-to-br from-[#7a1f2b] via-[#8c2433] to-[#5e1520] text-center shadow-2xl">
    <div className="absolute inset-3 rounded-[22px] border-2 border-[#d9b865]" />
    <div className="absolute inset-6 rounded-[18px] border border-[#d9b865]/60" />
    <div className="absolute inset-y-0 left-0 w-3 bg-gradient-to-r from-[#8f6b2e] via-[#e3c878] to-[#b08d3c] sm:w-4" />

    <svg viewBox="0 0 120 60" className="mb-5 w-24 text-[#e3c878] sm:w-32" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
      <path d="M60 8c-6 10-6 18 0 26 6-8 6-16 0-26Z" />
      <path d="M60 34c-14-2-24 4-30 14M60 34c14-2 24 4 30 14" />
      <path d="M10 52c14-8 26-8 36-2M110 52c-14-8-26-8-36-2" />
      <circle cx="60" cy="44" r="2.5" fill="currentColor" />
    </svg>

    <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-[#e3c878] sm:text-xs">
      You are invited
    </p>
    <h3 className="mt-3 font-[family-name:var(--font-playfair)] text-3xl tracking-[0.18em] text-[#f7e6b4] sm:text-5xl">
      WEDDINGS VIBE
    </h3>
    <span className="mt-5 h-px w-24 bg-[#d9b865]" />
    <p className="mt-4 font-[family-name:var(--font-playfair)] text-base italic text-[#f3dfa5] sm:text-lg">
      Your story begins here
    </p>
  </div>

  <div
    className="patrika-back absolute inset-0 rounded-[28px] border border-[#c9a24d] bg-gradient-to-br from-[#fffaf0] to-[#f1e4c7]"
    style={{ transform: 'rotateY(180deg)' }}
  />
</div>
        </div>
      </div>
    </section>
  );
}
