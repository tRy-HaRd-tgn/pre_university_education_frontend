import type { NextConfig } from "next";

// NOTE: Disable TLS certificate verification in development/CI.
// This is a temporary workaround for invalid certificate on api-cdo-iues.sfedu.ru
// REMOVE when the server presents a valid certificate.
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://api-cdo-iues.sfedu.ru/api/:path*",
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
        pathname: "/api/**",
      },
      {
        protocol: "https",
        hostname: "api-cdo-iues.sfedu.ru",
        pathname: "/api/users/**",
      },
      {
        protocol: "https",
        hostname: "api-cdo-iues.sfedu.ru",
        pathname: "/api/teachers/**",
      },
      {
        protocol: "https",
        hostname: "api-cdo-iues.sfedu.ru",
        pathname: "/api/rainbow/**",
      },
      {
        protocol: "https",
        hostname: "api-cdo-iues.sfedu.ru",
        pathname: "/api/webinars/**",
      },
      {
        protocol: "https",
        hostname: "api-cdo-iues.sfedu.ru",
        pathname: "/api/courses/**",
      },
      {
        protocol: "https",
        hostname: "api-cdo-iues.sfedu.ru",
        pathname: "/api/reviews/**",
      },
    ],
  },
};

export default nextConfig;
