import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  experimental: {
    reactCompiler: true,
    // ppr: true,
    after: true,
  },
}

export default nextConfig
