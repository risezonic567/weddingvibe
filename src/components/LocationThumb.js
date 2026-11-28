import Image from 'next/image';
import { cities } from '@data/venues';

export default function LocationThumb({ cityName = 'India', className = '' }) {
  const citySlug = cityName.toLowerCase().replaceAll(' ', '-');
  const city = cities.find((item) => item.slug === citySlug || item.name === cityName);
  return (
    <span className={`location-thumb ${className}`} role="img" aria-label={`${cityName} landmark`}>
      {city?.image ? (
        <Image src={city.image} alt="" fill sizes="40px" className="object-cover" />
      ) : (
        <span className="location-thumb-placeholder" aria-hidden="true" />
      )}
    </span>
  );
}
