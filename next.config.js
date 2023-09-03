/** @type {import('next').NextConfig} */

// import nextra from "nextra";

// const withNextra = nextra({
//   theme: "nextra-theme-blog",
//   themeConfig: "./theme.config.js",
//   // remarkPlugins: [
//   //   [remarkMdxDisableExplicitJsx, { whiteList: ['table', 'thead', 'tbody', 'tr', 'th', 'td'] }]
//   // ],
//   // rehypePlugins: []
// });

const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  compiler: {
    styledComponents: {
      displayName: false,
    },
  },
};

export default nextConfig;
