import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // Pin the workspace root to the project directory so file tracing is correct
  // even when another lockfile exists in a parent folder (e.g. $HOME).
  // `next dev` / `next build` always run from the project root.
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
