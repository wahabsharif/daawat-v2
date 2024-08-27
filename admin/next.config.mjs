/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable React strict mode
  reactStrictMode: true,

  // Add support for environment variables
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    JWT_SECRET: process.env.JWT_SECRET,
  },

  // Custom Webpack configuration
  webpack: (config) => {
    // Modify the config here if needed
    return config;
  },
};

export default nextConfig;
