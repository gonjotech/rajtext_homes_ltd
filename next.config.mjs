/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true, // Optimizes compatibility for cPanel & shared hosting
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default nextConfig;
