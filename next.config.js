const runtimeCaching = require("next-pwa/cache");
const isProd = process.env.NODE_ENV === "production";

const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  runtimeCaching,
  buildExcludes: [/manifest.json$/],
  disable: !isProd,
});

const nextConfig = withPWA({
  reactStrictMode: false,
  // swcMinify: true,
  // compress: true,
  trailingSlash: true,
});

module.exports = nextConfig;
