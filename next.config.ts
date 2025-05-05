import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
};
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "4000",
        pathname: "/users/**",
      },
    ],
  },
};
export default nextConfig;
