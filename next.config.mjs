/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'images.pexels.com' },
    ],
  },
  output: 'standalone',
  cacheComponents: true,
  partialPrefetching: true,
  async redirects() {
    return [
      { source: '/wedding-venues-in/:city', destination: '/wedding-venues/:city', statusCode: 301 },
      { source: '/wedding-venues-in/:city/:area', destination: '/wedding-venues/:city', statusCode: 301 },
      { source: '/wedding-venues-in-:city', destination: '/wedding-venues/:city', statusCode: 301 },
      { source: '/wedding-venues-in-:city/:area', destination: '/wedding-venues/:city', statusCode: 301 },
      { source: '/venues/:city/:slug', destination: '/wedding-venues/:city', statusCode: 301 },
    ];
  },
  turbopack: {
    rules: {
      '*.css': {
        loaders: ['@tailwindcss/turbopack'],
        as: '*.css',
      },
    },
  },
};

export default nextConfig;

