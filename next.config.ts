import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    reactCompiler: true,
    serverActions: {
      bodySizeLimit: '3mb',
    }
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'd1opibu00aa7rl.cloudfront.net',
        port: '',
        pathname: '/uploads/**'
      }
    ]
  }
};

export default nextConfig;
