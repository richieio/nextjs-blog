// next.config.js
const withMDX = require('@next/mdx')({
    extension: /\.mdx?$/,
  })
  module.exports = withMDX({
    options: {
      remarkPlugins: [require('remark-unwrap-images')],
    },
    pageExtensions: ['js', 'jsx', 'mdx'],
  })
