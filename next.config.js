/** @type {import('next').NextConfig} */

const runtimeCaching = require("next-pwa/cache");

const withPWA = require("next-pwa")({
  disable: false,
  dest: "public",
  register: true,
  skipWaiting: true,
  runtimeCaching,
  buildExcludes: [/middleware-manifest.json$/],
  sw: "/server.js",
});

const nextConfig = withPWA({
  publicRuntimeConfig: {
    // you can change this name
    projectName: "nextlaunch",
  },
});
module.exports = nextConfig;
