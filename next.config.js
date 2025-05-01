/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['framer-motion'],
  experimental: {
    serverActions: true,
  },
}

export default nextConfig
