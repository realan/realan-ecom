/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ protocol: "https", hostname: "ui-lib.com" }]
  }
};

module.exports = nextConfig;
