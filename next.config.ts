import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        pathname: "/images/**",
      },
    ],
  },
  turbopack: {
    resolveAlias: {
      "framer-motion": "./src/utils/framer-motion-mock.tsx",
    },
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "framer-motion": path.resolve(__dirname, "src/utils/framer-motion-mock.tsx"),
    };
    return config;
  },
};

export default nextConfig;
