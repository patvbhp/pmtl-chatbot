/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "ALLOWALL", // Cho phép iframe nhúng vào mọi trang
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
