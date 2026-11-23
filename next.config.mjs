/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  output: "standalone",
  cacheComponents: true,
  partialPrefetching: true,
  async rewrites() {
    return [
      { source: '/wedding-venues-in-:city', destination: '/wedding-venues-in/:city' },
      { source: '/wedding-venues-in-:city/:area', destination: '/wedding-venues-in/:city/:area' },
    ]
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
