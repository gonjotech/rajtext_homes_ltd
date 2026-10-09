/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true, // Generates clean directory structure (e.g. /about/index.html) for cPanel Apache
  images: {
    unoptimized: true, // Ensures 100% compatibility with cPanel static hosting without Node server dependencies
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default nextConfig;
