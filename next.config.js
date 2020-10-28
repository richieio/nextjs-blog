// next.config.js
const withMDX = require('@next/mdx')({
    extension: /\.mdx?$/,
  })
  module.exports = withMDX({
    target: "serverless",
    options: {
      remarkPlugins: [require('remark-unwrap-images')],
    },
    pageExtensions: ['js', 'jsx', 'mdx'],
  })
