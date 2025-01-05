import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**', // Allows all hostnames
                port: '', // No specific port
                pathname: '**', // Allows all paths
            },
        ],
    },
  };
  
  export default nextConfig;
  