/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images:{domains: ['xsgames.co', 'mdbcdn.b-cdn.net', 'www.google.com']}
}

module.exports = nextConfig
