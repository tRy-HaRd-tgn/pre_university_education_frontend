import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
};
module.exports = {
  async rewrites() {
    return [
      {
        source: "/api/:path*", // Все запросы, начинающиеся с /api/
        destination: "http://localhost:4000/api/:path*", // Адрес вашего NestJS приложения (например, порт 3001)
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
        protocol: "http",
        hostname: "api.sitetrialbox.ru",
        port: "4000",
        pathname: "/api/users/**",
      },
      {
        protocol: "https",
        hostname: "api.sitetrialbox.ru",
        port: "4000",
        pathname: "/api/users/**",
      },
      {
        protocol: "http",
        hostname: "sitetrialbox.ru",
        port: "4000",
        pathname: "/api/users/**",
      },
      {
        protocol: "https",
        hostname: "sitetrialbox.ru",
        port: "4000",
        pathname: "/api/users/**",
      },
      {
        protocol: "https",
        hostname: "sitetrialbox.ru",
        port: "10001",
        pathname: "/rainbow/**",
      },
      {
        protocol: "http",
        hostname: "sitetrialbox.ru",
        port: "10001",
        pathname: "/rainbow/**",
      },
      {
        protocol: "http",
        hostname: "sitetrialbox.ru",
        port: "10001",
        pathname: "/api/users/**",
      },
      {
        protocol: "https",
        hostname: "sitetrialbox.ru",
        port: "10001",
        pathname: "/api/users/**",
      },
    ],
  },
};
export default nextConfig;
