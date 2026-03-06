import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'barcomade.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.example.com',
      },
      // Add more hostnames as needed
    ]
  }
};

export default nextConfig;
