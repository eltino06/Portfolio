/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  cleanDistDir: true,
  basePath: process.env.GITHUB_ACTIONS ? '/Portfolio' : '',
  assetPrefix: process.env.GITHUB_ACTIONS ? '/Portfolio/' : '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;