'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { cities, venues } from '@/data/site';
import { ImageBox, VenueCard } from '@/components/Site';
import LocationThumb from '@/components/LocationThumb';

function CityFilterLabel({ city }) {
  return <span className="filter-city-heading"><LocationThumb cityName={city || 'India'}/>City</span>;
}

export function VenueResults({ initial = venues }) {
  const [city, setCity] = useState('');
  const [area, setArea] = useState('');
  const [type, setType] = useState('');
  const [guests, setGuests] = useState('');
  const [budget, setBudget] = useState('');
  const [veg, setVeg] = useState(false);
  const [nonVeg, setNonVeg] = useState(false);
  const [ac, setAc] = useState(false);
  const [parking, setParking] = useState(false);
  const [sort, setSort] = useState('recommended');
  const [page, setPage] = useState(1);
  const areas = city ? cities.find((item) => item.name === city)?.areas || [] : [];
  const result = useMemo(() => initial.filter((venue) => (!city || venue.city === city)
    && (!area || venue.area === area)
    && (!type || venue.type === type)
    && (!guests || venue.capacity.max >= Number(guests))
    && (!budget || venue.pricePerPlate <= Number(budget))
    && (!veg || venue.veg)
    && (!nonVeg || venue.nonVeg)
    && (!ac || venue.ac)
    && (!parking || venue.parking))
    .sort((a, b) => sort === 'price' ? a.pricePerPlate - b.pricePerPlate : sort === 'rating' ? b.rating - a.rating : 0),
  [initial, city, area, type, guests, budget, veg, nonVeg, ac, parking, sort]);
  const pageCount = Math.max(1, Math.ceil(result.length / 9));
  const shown = result.slice((page - 1) * 9, page * 9);
  function change(setter, value) { setter(value); setPage(1); }

  return <>
    <div className="filters">
      <label><CityFilterLabel city={city}/><select value={city} onChange={(event) => { change(setCity, event.target.value); setArea(''); }}><option value="">All cities</option>{cities.map((item) => <option key={item.slug}>{item.name}</option>)}</select></label>
      <label>Area<select value={area} onChange={(event) => change(setArea, event.target.value)}><option value="">All areas</option>{areas.map((item) => <option key={item}>{item}</option>)}</select></label>
      <label>Venue type<select value={type} onChange={(event) => change(setType, event.target.value)}><option value="">All types</option>{['banquet', 'resort', 'farmhouse', 'palace', 'beach', 'destination'].map((item) => <option key={item}>{item}</option>)}</select></label>
      <label>Guests<input type="number" min="1" placeholder="Minimum capacity" value={guests} onChange={(event) => change(setGuests, event.target.value)}/></label>
      <label>Max price per plate<input type="number" min="0" placeholder="Any budget" value={budget} onChange={(event) => change(setBudget, event.target.value)}/></label>
      <label>Sort by<select value={sort} onChange={(event) => change(setSort, event.target.value)}><option value="recommended">Recommended</option><option value="price">Price: low to high</option><option value="rating">Highest rated</option></select></label>
    </div>
    <div className="checks">{[['Vegetarian menu', veg, setVeg], ['Non-vegetarian menu', nonVeg, setNonVeg], ['Air conditioned', ac, setAc], ['Parking', parking, setParking]].map(([name, value, setter]) => <label key={name}><input type="checkbox" checked={value} onChange={(event) => change(setter, event.target.checked)}/>{name}</label>)}</div>
    <p>{result.length} venues to explore</p>
    {shown.length ? <><div className="grid venue-grid">{shown.map((venue) => <VenueCard key={venue.slug} venue={venue}/>)}</div><div className="pagination"><button className="chip" disabled={page <= 1} onClick={() => setPage(page - 1)}>Previous</button><span>Page {page} of {pageCount}</span><button className="chip" disabled={page >= pageCount} onClick={() => setPage(page + 1)}>Next</button></div></> : <p className="empty">No venues match these filters yet. Try adjusting your options.</p>}
  </>;
}

export function StoryFilters({ items }) {
  const [city, setCity] = useState('');
  const list = items.filter((item) => !city || item.city === city);
  return <><div className="filters"><label><CityFilterLabel city={city}/><select value={city} onChange={(event) => setCity(event.target.value)}><option value="">All cities</option>{cities.map((item) => <option key={item.slug}>{item.name}</option>)}</select></label></div><div className="grid venue-grid">{list.map((wedding) => <Link href={`/real-weddings/${wedding.slug}`} key={wedding.slug} className="card"><ImageBox image={wedding.images[0]} alt={`${wedding.couple} wedding in ${wedding.city}`}/><div className="cardbody"><h3>{wedding.couple}</h3><p className="venue-location"><LocationThumb cityName={wedding.city}/>{wedding.title} · {wedding.city}</p></div></Link>)}</div></>;
}
