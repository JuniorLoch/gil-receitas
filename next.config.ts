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

  /* config options here */
}

export default nextConfig
