/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/contact",
        destination: "/movies",
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/api/movies",
        destination: "https://api.themoviedb.org/3/movie/popular",
      },
    ];
  },
};

module.exports = nextConfig;
