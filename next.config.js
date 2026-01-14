/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['www.weedloversmarket.shop'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.weedloversmarket.shop',
      },
    ],
  },
};

module.exports = nextConfig;

