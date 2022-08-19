/** @type {import('next').NextConfig} */
const withVideos = require("next-videos");

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  headers: {
    async headers() {
      return [
        {
          source: "/",
          headers: [
            {
              key: "Cache-Control",
              value: "public, max-age=0, must-revalidate",
            },
          ],
        },
      ];
    },
  },
};

module.exports = withVideos(nextConfig);
