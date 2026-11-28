import { cities, venues } from '../data/venues.js';

// Check that every city has a unique URL slug.
for (let index = 0; index < cities.length; index += 1) {
  const city = cities[index];
  const firstCityIndex = cities.findIndex((item) => item.slug === city.slug);

  if (firstCityIndex !== index) {
    console.error(`Venue data error: city slug "${city.slug}" appears more than once.`);
    process.exitCode = 1;
  }
}

// Check venue cities and venue URL slugs before Next.js builds the site.
for (let index = 0; index < venues.length; index += 1) {
  const venue = venues[index];
  const cityExists = cities.some((city) => city.slug === venue.citySlug);

  if (!cityExists) {
    console.error(`Venue data error: "${venue.name}" uses citySlug "${venue.citySlug}", but that city is not in cities.`);
    process.exitCode = 1;
  }

  const firstVenueIndex = venues.findIndex(
    (item) => item.citySlug === venue.citySlug && item.slug === venue.slug
  );

  if (firstVenueIndex !== index) {
    console.error(`Venue data error: slug "${venue.slug}" appears more than once in city "${venue.citySlug}".`);
    process.exitCode = 1;
  }
}

if (process.exitCode) {
  process.exit(process.exitCode);
}
