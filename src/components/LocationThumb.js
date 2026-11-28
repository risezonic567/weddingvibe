import { locationImages, weddingImages } from '@/data/wedding-images';
import { cities } from '@data/venues';

export default function LocationThumb({ cityName = 'India', className = '' }) {
  const citySlug = cityName.toLowerCase().replaceAll(' ', '-');
  const city = cities.find((item) => item.slug === citySlug || item.name === cityName);
  const image = city?.image || locationImages[citySlug] || weddingImages.mandap;
  return <span className={`location-thumb ${className}`} role="img" aria-label={`${cityName} landmark`} style={{ backgroundImage: `url("${image}")` }} />;
}
