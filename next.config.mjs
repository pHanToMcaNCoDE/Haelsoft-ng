/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
  images: {
    domains: ['staging.haelsoftmasterclass.com'],
  },
};

export default nextConfig;