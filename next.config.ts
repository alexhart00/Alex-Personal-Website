import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.facebook.com",
        pathname: "/favicon.ico",
      },
      {
        protocol: "https",
        hostname: "www.linkedin.com",
        pathname: "/favicon.ico",
      },
      {
        protocol: "https",
        hostname: "www.tiktok.com",
        pathname: "/favicon.ico",
      },
    ],
  },
};

export default nextConfig;