import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
};
module.exports = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://localhost:4000/api/:path*",
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "4000",
        pathname: "/users/**",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "4000",
        pathname: "/teachers/**",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "4000",
        pathname: "/rainbow/**",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "4000",
        pathname: "/api/users/**",
      },
      {
        protocol: "https",
        hostname: "localhost",
        port: "4000",
        pathname: "/users/**",
      },
      {
        protocol: "https",
        hostname: "localhost",
        port: "4000",
        pathname: "/teachers/**",
      },
      {
        protocol: "https",
        hostname: "localhost",
        port: "4000",
        pathname: "/rainbow/**",
      },
      {
        protocol: "https",
        hostname: "localhost",
        port: "4000",
        pathname: "/api/users/**",
      },
      {
        protocol: "https",
        hostname: "api-cdo-iues.sfedu.ru",
        port: "10001",
        pathname: "/api/**",
      },
    ],
  },
};
export default nextConfig;
