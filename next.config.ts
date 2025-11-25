import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Mengizinkan gambar dari Github (avatar) dan Unsplash (contoh project nanti)
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'github.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'i.scdn.co',
      },
    ],
  },
};

export default nextConfig;