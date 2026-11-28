import Link from 'next/link';
import { notFound } from 'next/navigation';
import { services } from '@/data/content';
import { ImageBox, EnquiryForm } from '@/components/Site';

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  return { title: service?.name || 'Wedding service', description: service?.description || '' };
}

export default async function ServiceDetail({ params }) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();
  return <><section className="service-hero"><div className="wrap"><p className="crumb"><Link href="/">Home</Link> / <Link href="/services">Services</Link> / {service.name}</p><h1>{service.name} for your wedding day.</h1><p>{service.description} Find a team and package that fits your plans.</p><Link className="btn" href="/contact">Get a free quote</Link></div></section><section className="sec"><div className="wrap detail-split"><ImageBox image={service.image} className="detail-image" alt={service.name}/><div><p className="eyebrow">THOUGHTFUL SERVICE, CLEAR DETAILS</p><h2 className="h2">A team that understands your vision.</h2><p className="sub">Every wedding is different. We’ll help you find the right people, build a clear brief and choose a package that fits.</p><ul className="check-list"><li>Free consultation and tailored ideas</li><li>Written quote with inclusions listed</li><li>Vetted providers with work to explore</li><li>Coordination before and on your day</li></ul></div></div></section><section className="sec cream"><div className="wrap"><h2 className="h2 center">Choose your package</h2><p className="sub center">A starting point for a celebration that is entirely yours.</p><div className="grid packages">{service.packages.map((pack, index) => <article className={`card package ${index === 1 ? 'popular' : ''}`} key={pack.name}><h3>{pack.name}</h3><p>From ₹{pack.price.toLocaleString('en-IN')}</p>{pack.inclusions.map((item) => <p className="tick" key={item}>{item}</p>)}<Link className="btn" href="/contact">Choose {pack.name}</Link></article>)}</div></div></section><section className="sec"><div className="wrap narrow"><h2 className="h2">Questions about {service.name.toLowerCase()}</h2>{service.faqs.map(([question, answer]) => <details className="faq" key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div></section><section className="sec"><div className="wrap detail-split"><div><h2 className="h2">Let’s talk about your plans.</h2><p className="sub">Tell us what you have in mind and our team will be in touch.</p></div><EnquiryForm type="service" subject={`Ask about ${service.name}`} slug={service.slug}/></div></section></>;
}
