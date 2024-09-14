const isProduction = process.env.NODE_ENV === 'production';
const isBuild = process.env.NEXT_BUILD === 'true';

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    reactCompiler: true,
    staleTimes: {
      dynamic: !isBuild ? 60 : undefined, // 1 min,
    },
  },
  compress: isProduction,
  output: 'standalone',
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  bundlePagesRouterDependencies: true,
  serverExternalPackages: ['@directus/sdk'],
};

export default nextConfig;
