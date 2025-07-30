import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    // Warning: This allows production builds to complete even if your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
