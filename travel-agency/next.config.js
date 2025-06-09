/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Recommended for new projects
  swcMinify: true,
  experimental: {
    // appDir: true, // Uncomment if you're using the app directory (Next.js 13+)
  },
  // images: { // Example configuration for Next.js Image Optimization
  //   domains: ['example.com'], // Add domains for external images
  // },
  // env: { // Example for setting environment variables
  //   CUSTOM_ENV_VARIABLE: process.env.CUSTOM_ENV_VARIABLE,
  // },
};

module.exports = nextConfig;
