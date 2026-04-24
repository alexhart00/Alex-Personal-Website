import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },
};

module.exports = {
  images: {
    remotePatterns: [new URL('https://www.facebook.com/favicon.ico'), new URL('https://www.linkedin.com/favicon.ico'), new URL('https://www.tiktok.com/favicon.ico')],

  },
}

export default nextConfig;
