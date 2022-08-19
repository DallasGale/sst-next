/** @type {import('next').NextConfig} */
const withVideos = require("next-videos");

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: "/",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=0, must-revalidate, Origin Control: Off",
          },
          {
            key: "Origin-Control",
            value: "Off",
          },
        ],
      },
    ];
  },
};

module.exports = withVideos(nextConfig);
