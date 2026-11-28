import { notFound } from 'next/navigation';
import { weddings } from '@/data/content';
import { ImageBox } from '@/components/Site';

export function generateStaticParams() {
  return weddings.map((wedding) => ({ slug: wedding.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const wedding = weddings.find((item) => item.slug === slug);
  return { title: wedding?.title || 'Real wedding', description: wedding ? `${wedding.couple} wedding story and celebration.` : '' };
}

export default async function WeddingStory({ params }) {
  const { slug } = await params;
  const wedding = weddings.find((item) => item.slug === slug);
  if (!wedding) notFound();

  return (
    <article className="sec"><div className="wrap">
      <p className="eyebrow">REAL WEDDING</p>
      <h1 className="h2">{wedding.title}</h1>
      <p className="sub">{wedding.couple}</p>
      <ImageBox image={wedding.images[0]} className="story-cover" alt={wedding.title} />
      <div className="narrow story-text">
        <h2>A day that felt like theirs</h2>
        <p>When {wedding.couple} started planning, they wanted a celebration full of warmth, personal touches and time with the people they love. Their team helped bring the details together.</p>
        <p>From the first welcome to the last dance, every detail reflected their story. They could enjoy the day knowing someone had the small things taken care of.</p>
        <blockquote>“We could be there for every moment. The planning felt simple and the day felt like us.”<cite>— {wedding.couple}</cite></blockquote>
      </div>
    </div></article>
  );
}
