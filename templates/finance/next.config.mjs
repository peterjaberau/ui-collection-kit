/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',

  async redirects() {
    return [
      {
        source: '/settings',
        destination: '/settings/profile-settings',
        permanent: true,
      },
    ];
  },

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
            // removeAttributes: {}
          },
        },
      ],
    });

    return config;
  },
};

export default nextConfig;
