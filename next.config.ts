/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)", // Cho phép tất cả các route
        headers: [
          {
            key: "X-Frame-Options",
            value: "ALLOWALL", // Cho phép iframe
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
