/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['three'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'epictechai.github.io',
      },
    ],
  },
  // Enabling experimental features for edge-ready performance
  experimental: {
    serverActions: true,
  },
  webpack: (config) => {
    // Allows loading of GLSL shaders for reality-weaving visuals
    config.module.rules.push({
      test: /\.(glsl|vs|fs|vert|frag)$/,
      use: ['raw-loader', 'glslify-loader'],
    });
    return config;
  },
};
