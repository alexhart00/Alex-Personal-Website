import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

module.exports = {
  images: {
    remotePatterns: [new URL('https://www.facebook.com/favicon.ico'), new URL('https://www.linkedin.com/favicon.ico')],
    
  },
}

export default nextConfig;
