/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    additionalData: `
    @import "./src/styles/variables.scss";
    @import "./src/styles/mediaquery.scss";
    @import "./src/styles/helpers.scss";
    `
  }
}

module.exports = nextConfig
