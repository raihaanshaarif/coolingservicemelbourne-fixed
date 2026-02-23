/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.facebook.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        destination: "https://www.coolingservicemelbourne.com.au/:path*",
        permanent: true,
        has: [
          {
            type: "host",
            value: "coolingservicemelbourne.com.au",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
