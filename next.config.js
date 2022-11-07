/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
  sw: 'sw.js',
})
module.exports = withPWA({
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
})