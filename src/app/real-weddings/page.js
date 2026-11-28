import Link from 'next/link';
import { weddings } from '@/data/content';
import { ImageBox } from '@/components/Site';

export const metadata = {
  title: 'Real weddings',
  description: 'Read wedding stories and ideas from couples who planned their celebration with Weddings Vibe.',
};

export default function RealWeddings() {
  return (
    <section className="sec">
      <div className="wrap">
        <p className="eyebrow">REAL COUPLES, REAL CELEBRATIONS</p>
        <h1 className="h2">Weddings that feel like them.</h1>
        <p className="sub">Stories, ideas and little moments from celebrations.</p>
        <div className="grid venue-grid">
          {weddings.map((wedding) => (
            <Link className="card" href={`/real-weddings/${wedding.slug}`} key={wedding.slug}>
              <ImageBox image={wedding.images[0]} alt={wedding.title} />
              <div className="cardbody"><h2>{wedding.title}</h2><p>{wedding.couple}</p></div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
