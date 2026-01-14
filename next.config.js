/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['www.weedloversmarket.shop', 'source.unsplash.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.weedloversmarket.shop',
      },
      {
        protocol: 'https',
        hostname: 'source.unsplash.com',
      },
    ],
    unoptimized: false,
  },
  output: 'standalone',
};

module.exports = nextConfig;

