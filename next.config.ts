import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // optimisation activée (on supprime unoptimized: true)
    // Next.js 16 gère le cache images en local automatiquement
  },
};

export default nextConfig;
