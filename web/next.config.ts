import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/musicroom/:path*",
        destination: "http://localhost:3001/api/musicroom/:path*",
      },
    ];
  },
};

export default nextConfig;
