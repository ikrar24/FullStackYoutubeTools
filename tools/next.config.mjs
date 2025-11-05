/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Static site generation for Netlify
  images: {
    unoptimized: true, // Disable Next.js image optimization
  },
};

export default nextConfig;
