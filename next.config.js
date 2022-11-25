const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
    providerImportSource: "@mdx-js/react",
  },
});

/** @type {import('next').NextConfig} */
module.exports = withMDX({
  pageExtensions: ["ts", "tsx", "mdx"],
  reactStrictMode: true,
  rewrites: () => [
    {
      source: "/bee.js",
      destination: "https://cdn.splitbee.io/sb.js",
    },
    {
      source: "/_hive/:slug",
      destination: "https://hive.splitbee.io/:slug",
    },
  ],
});
