/** @type {import('next').NextConfig} */
const NextConfig = {
  images: {
    // hostname: "assets.myntassets.com",
     remotePatterns: [
      {
        protocol: 'https',
        hostname: 'assets.myntassets.com',
        port: '',
        pathname: '/**',
      },]
  },
};

module.exports = NextConfig;
