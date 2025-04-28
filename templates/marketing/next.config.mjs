/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',

  webpack: (config) => {
    // svgr
    config.module.rules.push({
      test: /\.svg$/i,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            typescript: true,
            icon: true,
            dimensions: false,
            svgo: false,
            // removeAttributes: {}
          },
        },
      ],
    });

    return config;
  },
};

export default nextConfig;
