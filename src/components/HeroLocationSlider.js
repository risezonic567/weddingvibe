'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

const HERO_VIDEO = '/images/video/Wedding Vibe Banner01.mp4';

const HERO_PROOF = { venues: '500+', weddings: '10,000+', rating: '4.8' };

const enter = 'opacity-0 animate-fade-up motion-reduce:animate-none motion-reduce:opacity-100';
const gold = 'bg-[linear-gradient(145deg,#d2b570,#987137)] border border-[#e1c57d] text-white';

export default function HeroLocationSlider() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section className="relative isolate flex min-h-svh items-end overflow-hidden bg-[#201a16] pt-28 pb-20 md:min-h-[680px] lg:min-h-[760px]">
      {/* Video */}
      <video
        src={HERO_VIDEO}
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />

      {/* Overlay: neeche zyada dark taaki text padhne me aaye, upar video clear */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(0deg,#000000c0_0%,#00000070_35%,#00000015_65%,transparent_100%)]"
      />

      <div className="relative z-10 mx-auto w-full max-w-[1200px] px-5 text-white md:px-6">
        {/* Divider line + 2 columns */}
        <div className="grid gap-8 border-t border-white/30 pt-8 lg:grid-cols-[1.6fr_1fr] lg:items-end lg:gap-12">
          {/* LEFT: Headline */}
          <div>
            <h1
              className={`${enter} [animation-delay:.18s]    font-[family-name:var(--font-head)] text-[clamp(1.8rem,5.5vw,2.25rem)] font-medium leading-[1.15] tracking-[0.01em] [text-shadow:0_2px_16px_rgba(0,0,0,.4)] md:text-[2.75rem] lg:text-[3.25rem] [&_em]:block [&_em]:font-medium [&_em]:not-italic [&_em]:text-[#dfbf70]`}
            >
              Find the venue that feels like <em>your wedding.</em>
            </h1>
            <p className={`${enter} [animation-delay:.28s] mt-4 max-w-md text-sm text-white/85 md:text-base`}>
              Compare verified venues, check prices per plate and send one enquiry. No endless calls.
            </p>
          </div>

          {/* RIGHT: Stats + Buttons */}
          <div className={`${enter} [animation-delay:.38s] lg:justify-self-end`}>
            <div className="grid grid-cols-3 gap-6 md:gap-10">
              {[
                [HERO_PROOF.weddings, 'weddings planned'],
                [HERO_PROOF.rating, 'google rating'],
                [HERO_PROOF.venues, 'verified venues'],
              ].map(([num, label]) => (
                <div key={label}>
                  <div className="font-[family-name:var(--font-head)] text-2xl font-semibold md:text-4xl">{num}</div>
                  <div className="mt-1 text-[11px] text-white/80 md:text-sm">{label}</div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Link
                href="/venues"
                className={`${gold} inline-flex min-h-12 items-center justify-center rounded-xl px-6 text-sm font-semibold shadow-[0_6px_18px_rgba(0,0,0,.3)] transition hover:scale-[1.03] hover:text-white`}
              >
                Explore venues
              </Link>
              <Link
                href="/contact"
                className="inline-flex min-h-12 items-center justify-center rounded-xl border border-white/65 bg-white/10 px-6 text-sm font-semibold text-white backdrop-blur-md transition hover:scale-[1.03] hover:bg-white/20 hover:text-white"
              >
                Plan my wedding
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div
        aria-hidden="true"
        className={`absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2 text-[10px] uppercase tracking-[.12em] text-white/80 transition-opacity duration-300 ${scrolled ? 'pointer-events-none opacity-0' : ''}`}
      >
        <span className="grid h-[22px] w-3.5 place-items-start justify-center rounded-full border border-white/65 pt-1">
          <i className="h-[5px] w-0.5 animate-scroll-cue rounded-sm bg-[#d4af37] motion-reduce:animate-none" />
        </span>
        <span>Scroll</span>
      </div>
    </section>
  );
}