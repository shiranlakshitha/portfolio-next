import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      'res.cloudinary.com',
      'cdn.example.com'
    ]
  }
};

export default nextConfig;
