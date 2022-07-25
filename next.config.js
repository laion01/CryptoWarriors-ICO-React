/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    urlImports: ['https://www.paypal.com/sdk/'],
  },
}

module.exports = nextConfig