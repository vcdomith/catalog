import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    reactCompiler: true,
    serverActions: {
      bodySizeLimit: '3mb',
    }
  },
  // images: {
  //   remotePatterns: {

  //   }
  // }
};

export default nextConfig;
