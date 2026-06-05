import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // This project lives beside other lockfiles (including a stray one in $HOME),
  // so pin the workspace root to this directory for correct file tracing.
  turbopack: {
    root: "/Users/mohamedfarran/Projects/trt-boost",
  },
};

export default nextConfig;
