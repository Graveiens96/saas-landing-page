import type { NextConfig } from "next";
const withImages = require("next-images");

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;
module.exports = withImages({
  images: {
    domains: ["images.unsplash.com"],
  },
});
