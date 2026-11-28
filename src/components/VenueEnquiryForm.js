'use client';

import { useState } from 'react';
import { cities } from '@data/venues';
import { site } from '@/data/site';

// Collect contact details and wedding preferences for a venue enquiry.
export default function VenueEnquiryForm({ venue, city }) {
  const [status, setStatus] = useState('');

  async function submit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    setStatus('Sending your enquiry...');
    try {
      if (process.env.NEXT_PUBLIC_API_URL) {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/enquiry`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ ...data, type: 'venue', subject: `Ask about ${venue.name}`, slug: venue.slug }),
        });
        if (!response.ok) throw new Error('Could not send enquiry');
      }
      setStatus('Thank you! A wedding planner will be in touch shortly.');
      form.reset();
    } catch {
      setStatus(`We could not send that just now. Please call us at ${site.phone}.`);
    }
  }

  return (
    <form id="enquiry" className="form enq" onSubmit={submit}>
      <div className="enq-head">
        <h2>Enquire about {venue.name}</h2>
        <p>Share a few details and our planning team will get in touch.</p>
      </div>
      <div className="enq-row">
        <label>Your name<input name="name" required autoComplete="name" /></label>
        <label>Phone number<input name="phone" type="tel" required autoComplete="tel" pattern="[+0-9 ()-]{8,}" /></label>
      </div>
      <div className="enq-row">
        <label>Email address<input name="email" type="email" required autoComplete="email" /></label>
        <label>Event date<input name="date" type="date" required /></label>
      </div>
      <div className="enq-row">
        <label>Guest count<input name="guests" type="number" min="1" required placeholder="e.g. 250" /></label>
        <label>Budget
          <select name="budget" defaultValue="" required>
            <option value="" disabled>Select your budget</option>
            <option>Under Rs 5 Lakh</option>
            <option>Rs 5 - 10 Lakh</option>
            <option>Rs 10 - 20 Lakh</option>
            <option>Above Rs 20 Lakh</option>
            <option>Not sure yet</option>
          </select>
        </label>
      </div>
      <label>City
        <select name="city" defaultValue={city.name} required>
          {cities.map((item) => <option key={item.slug} value={item.name}>{item.name}</option>)}
        </select>
      </label>
      <button className="btn" disabled={status.startsWith('Sending')}>Send enquiry</button>
      {status && <p role="status">{status}</p>}
    </form>
  );
}

