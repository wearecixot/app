/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ["buffer.com", "loremflickr.com", "picsum.photos", "i.imgur.com", "pbs.twimg.com"],
  },
};

export default nextConfig;
