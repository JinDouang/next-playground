/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // windows issue https://github.com/vercel/next.js/issues/8733
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    return {
        ...config,
        mode: "development",
        watchOptions: {
            aggregateTimeout: 1000,
            poll: 1000,
            ignored: ['node_modules', '.next']
        }
    }
  },


}

module.exports = nextConfig
