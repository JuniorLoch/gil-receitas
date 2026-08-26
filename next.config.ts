import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ['@chakra-ui/react', 'react-icons'],
  },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'lh3.googleusercontent.com', pathname: '**' },
      { protocol: 'https', hostname: 'gilreceitas-20aa1.firebaseapp.com', pathname: '**' },
      { protocol: 'https', hostname: 'gilreceitas-20aa1.web.app/', pathname: '**' },
    ],
  },
}

export default nextConfig
