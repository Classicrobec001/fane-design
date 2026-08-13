/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        // Static media is served fresh within the hour, and the CDN keeps
        // serving the cached copy while it revalidates in the background.
        source: "/assets/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=3600, stale-while-revalidate=604800",
          },
        ],
      },
    ];
  },
};
export default nextConfig;
