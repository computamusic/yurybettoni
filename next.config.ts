import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // Lets Next trigger a browser view-transition on route navigations, so
    // pages crossfade instead of hard-cutting + jumping to the top.
    viewTransition: true,
  },
};

export default nextConfig;
