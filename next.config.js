/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["www.pexels.com"],
  },
  experimental: {
    serverActions: true,
  }
}

module.exports = nextConfig
