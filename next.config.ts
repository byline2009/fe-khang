import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,

  /* config options here */
  // async rewrites() {
  //   return [
  //     {
  //       source: "/api/job/solution/:id*", // FE gọi
  //       destination: "http://170.64.179.146:8060/api/job/solution/:id*", // BE
  //     },
  //   ];
  // },
};

export default nextConfig;
