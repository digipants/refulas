/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "media.istockphoto.com" },
      { protocol: "https", hostname: "randomuser.me" },
      { protocol: "https", hostname: "nextcomms.co.uk" }
    ],
  },
};

export default nextConfig;