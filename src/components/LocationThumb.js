import { locationImages, weddingImages } from '@/data/wedding-images';

export default function LocationThumb({ cityName = 'India', className = '' }) {
  const citySlug = cityName.toLowerCase().replaceAll(' ', '-');
  const image = locationImages[citySlug] || weddingImages.mandap;
  return <span className={`location-thumb ${className}`} role="img" aria-label={`${cityName} landmark`} style={{ backgroundImage: `url("${image}")` }} />;
}
