import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static Exports
  // https://nextjs.org/docs/app/building-your-application/deploying/static-exports
  output: "export",
  // Hot reload in docker
  // https://github.com/vercel/next.js/issues/36774
  webpack: (config) => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
    };
    return config;
  },
};

export default nextConfig;
