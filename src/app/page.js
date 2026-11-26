import Link from 'next/link';
import { cities, venues, services, weddings, testimonials, faqs } from '@/data/site';
import { ImageBox, VenueCard, BudgetPlanner } from '@/components/Site';
import LocationThumb from '@/components/LocationThumb';
import { weddingImages } from '@/data/wedding-images';
import HeroLocationSlider from '@/components/HeroLocationSlider';
import About from '@/components/About';
import ServicesScroll from '@/components/ServicesScroll';

export const metadata = { title: 'Wedding venues and services across India', description: 'Compare verified wedding venues, check prices per plate and connect with trusted wedding teams across India.' };

export default function Home() {
  return <>
    <HeroLocationSlider />
    <About/>


    <section className="sec">
      <div className="wrap center">
        <h2 className="h2">Any location in mind?</h2>
        <p className="sub">Choose a wedding venue in your city</p>
        <div className="arches">{cities.map(c => <Link className="arch-item" href={`/wedding-venues-in/${c.slug}`} key={c.slug}>
          <span className="arch">
            <LocationThumb cityName={c.name} className="arch-photo" />
          </span>
          <strong>{c.name}</strong>
          <small>{venues.filter(v => v.city === c.name).length} venues</small></Link>)}</div>
        <Link className="btn btn-outline city-cta" href="/venues">View all cities</Link>
      </div>
    </section>

      <section className="sec">
      <ServicesScroll />
    </section>

    <section className="sec cream">
      <div className="wrap"
      ><h2 className="h2">Featured venues</h2>
        <p className="sub">Hand-picked places couples enquire about most.</p>
        <div className="grid venue-grid">{venues.filter(v => v.featured).slice(0, 3).map((v, i) => <VenueCard venue={v} image={[weddingImages.mandap, weddingImages.decor, weddingImages.venue][i]} key={v.slug} />)}</div>
      </div>
    </section>

    {/* <section className="sec ">
      <div className="wrap center">
        <h2 className="h2">Browse by venue type</h2>
        <p className="sub">From city banquets to palace weddings.</p>
        <div className="type-chips">{['Banquet halls', 'Resorts', 'Farmhouses', 'Palaces', 'Beach venues', 'Destination'].map(x => <Link className="chip" href="/venues" key={x}>{x}</Link>)}</div>
      </div>
    </section> */}
  
    <section className="sec">
      <div className="wrap">
        <div className="center">
          <h2 className="h2">How it works</h2>
          <p className="sub">From first idea to confirmed booking in four simple steps.</p>
        </div>
        <div className="hw">
          {[['01', 'Tell us what you need', 'Share your city, date, guest count and budget. It takes about two minutes.'], ['02', 'Compare venues', 'See matching venues side by side with photos and prices per plate.'], ['03', 'Talk to a planner', 'Get a free consultation and arrange site visits for your shortlist.'], ['04', 'Book and relax', 'Confirm your venue and add decor, catering and more. Pay in stages.']].map(([n, t, d], i) => (
            <article className="hw-step" key={n}>
              <div className="hw-num">{n}</div>
              <span className="hw-lbl">Step {i + 1}</span>
              <h3>{t}</h3>
              <p>{d}</p>
              <ul className="hw-li">
                <li>{[['Pick a city and date', 'Shortlist your favourites', 'Call or WhatsApp', 'One point of contact'][i]]}</li>
                <li>{[['Set guests and budget', 'Clear pricing upfront', 'No obligation', 'Coordinator on the day'][i]]}</li>
              </ul>
            </article>
          ))}
        </div>
        <div className="hw-cta">
          <div>
            <strong>Ready to find your venue?</strong>
            <p>Start with your city and date. We will do the shortlisting.</p>
          </div>
          <div className="actions">
            <Link className="btn" href="/contact">Start my wedding planning</Link>
            <a className="btn btn-light" href="https://wa.me/919266730494">Chat on WhatsApp</a>
          </div>
        </div>
      </div>
    </section>
    <section className="sec budget-section">
      <div className="wrap budget">
        <div className="budget-story">
          <div className="budget-collage" aria-label="Wedding celebrations and details">
            <ImageBox image={weddingImages.ceremony} className="budget-collage-main" alt="A beautifully decorated wedding ceremony" />
            <ImageBox image={weddingImages.couple} className="budget-collage-couple" alt="A couple celebrating their wedding" />
            <ImageBox image={weddingImages.decor} className="budget-collage-detail" alt="Wedding flowers and decor" />
            <svg className="budget-mandala" viewBox="0 0 120 120" aria-hidden="true"><g fill="none" stroke="currentColor" strokeWidth="1"><circle cx="60" cy="60" r="8"/><circle cx="60" cy="60" r="22"/><circle cx="60" cy="60" r="38"/><circle cx="60" cy="60" r="54"/>{Array.from({length:12},(_,i)=><path key={i} d="M60 6C75 22 75 38 60 60 45 38 45 22 60 6Z" transform={`rotate(${i*30} 60 60)`}/>)}</g></svg>
          </div>
          <p className="eyebrow budget-eyebrow">WEDDING BUDGET PLANNER</p>
          <h2 className="h2 budget-heading">What will your <em>wedding cost?</em></h2>
          <p className="budget-copy">A thoughtful first estimate, shaped around your guest list, city and the celebration you have in mind.</p>
          <div className="budget-trust">
            <span><i aria-hidden="true">✦</i>Free planning call</span>
            <span><i aria-hidden="true">✦</i>Verified venues only</span>
            <span><i aria-hidden="true">✦</i>No hidden charges</span>
          </div>
        </div>
        <div className="budget-card">
          <BudgetPlanner />
        </div>
      </div>
    </section>
    <section className="sec">
      <div className="wrap">
        <h2 className="h2">Real weddings</h2>
        <p className="sub">Stories and photos from couples who booked through us.</p>
        <div className="real-mosaic">
          {weddings.slice(0, 5).map((w, i) => (
            <ImageBox key={w.slug} image={w.images[i % w.images.length]} alt={i === 0 ? 'Newlyweds celebrating' : 'A real wedding celebration'} />
          ))}
        </div>
        <Link className="btn" href="/real-weddings">See all stories</Link>
      </div>
    </section>
    <section className="final-cta"><div className="wrap"><h2 className="h2">Ready to start planning?</h2><p>Tell us your date and city. We’ll help with the shortlisting.</p><div className="actions"><Link className="btn" href="/contact">Start planning</Link><a className="btn btn-light" href="https://wa.me/919266730494">Chat on WhatsApp</a></div></div></section>
  </>;
}
