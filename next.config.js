/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

// module.exports = nextConfig;
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['localhost:1337', 'localhost'],
  },
};
