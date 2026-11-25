import Image from "next/image";
import Link from "next/link";

const STATS = [
  { value: "500+", label: "Verified venues" },
  { value: "10,000+", label: "Weddings planned" },
  { value: "4.8★", label: "Average rating" },
];

export default function About() {
  return (
    <section className="relative bg-[#faf7f1] py-20 lg:py-28 overflow-hidden">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2 lg:gap-20">
        {/* LEFT: image with 2 animated borders */}
        <div className="group relative mx-auto w-full max-w-[520px] p-5">
          {/* Border 1: bold gold, bottom-right */}
          <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-[28px] border-2 border-[#c9a24d] transition-all duration-500 ease-out group-hover:translate-x-5 group-hover:translate-y-5 group-hover:rotate-3" />

          {/* Border 2: thin light gold, top-left */}
          <div className="absolute inset-0 -translate-x-4 -translate-y-4 rounded-[28px] border border-[#c9a24d]/50 transition-all duration-500 ease-out group-hover:-translate-x-5 group-hover:-translate-y-5 group-hover:-rotate-3" />

          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] shadow-2xl">
            <Image
              src="/images/about.jpg"
              alt="Wedding celebration by Weddings Vibe"
              fill
              sizes="(min-width: 1024px) 520px, 100vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
          </div>

          {/* Floating badge */}
         
        </div>

        {/* RIGHT: content */}
        <div>
          <span className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#c9a24d]">
            <span className="h-px w-10 bg-[#c9a24d]" />
            About Weddings Vibe
          </span>

          <h2 className="mt-5 font-[family-name:var(--font-playfair)] text-4xl leading-tight text-neutral-900 md:text-5xl">
            We turn your wedding dream into a{" "}
            <span className="italic text-[#c9a24d]">venue you'll love</span>
          </h2>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-neutral-600">
            Weddings Vibe helps couples find the perfect venue across India,
            from royal palaces in Udaipur to beach resorts in Goa. Compare
            verified venues, check prices per plate and send one enquiry
            instead of making endless calls.
          </p>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-neutral-600">
            Our team stays with you from the first shortlist to the final
            booking, so you can enjoy the celebration while we handle the
            details.
          </p>

          {/* Stats */}
          <div className="mt-10 grid max-w-xl grid-cols-3 gap-6 border-y border-neutral-200 py-6">
            {STATS.map((s) => (
              <div key={s.label}>
                <p className="font-[family-name:var(--font-playfair)] text-2xl font-semibold text-neutral-900 md:text-3xl">
                  {s.value}
                </p>
                <p className="mt-1 text-xs text-neutral-500 md:text-sm">
                  {s.label}
                </p>
              </div>
            ))}
          </div>

          {/* CTAs */}
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
        </div>
      </div>
    </section>
  );
}