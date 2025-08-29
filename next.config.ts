import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ['@chakra-ui/react'],
  },
  modularizeImports: {
    'react-icons/?(((\\w*)?/?)*)': {
      transform: '@react-icons/all-files/{{ matches.[1] }}/{{ member }}',
      skipDefaultConversion: true,
    },
  },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'lh3.googleusercontent.com', pathname: '**' },
      { protocol: 'https', hostname: 'gilreceitas-20aa1.firebaseapp.com', pathname: '**' },
      { protocol: 'https', hostname: 'gilreceitas-20aa1.web.app/', pathname: '**' },
    ],
  },

  /* config options here */
}

export default nextConfig
