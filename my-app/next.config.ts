import type { NextConfig } from "next";
import { hostname } from "os";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: "fastly.picsum.photos",
        protocol: "https",
        port: "",
      },
    ],
  },
};

export default nextConfig;
