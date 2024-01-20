/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'static01.nyt.com',
      },
      {
        protocol: 'https',
        hostname: 'static.politico.com',
      },
      {
        protocol: 'https',
        hostname: 's.yimg.com',
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
      },
      {
        protocol: 'https',
        hostname: 'dims.apnews.com',
      },
      {
        protocol: 'https',
        hostname: 'nytimes.com',
      },
    ],
  }
}

module.exports = nextConfig


// /** @type {import('next').NextConfig} */
// const nextConfig = {}

// const path = require('path')

// module.exports = {
//   ...nextConfig,
//   images: {
//     remotePatterns: ['s.yimg.com', 'i.abcnewsfe.com', 'static.politico.com', 'via.placeholder.com']
//   }
// }
