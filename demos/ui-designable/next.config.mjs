/** @type {import('next').NextConfig} */
import withLess from 'next-with-less';

const nextConfig = {
  /* config options here */
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  experimental: {
      // inlineCss: true,
      useCache: true,
      clientSegmentCache: true,
      // ppr: true,
  },
  lessLoaderOptions: {
    javascriptEnabled: true
  },
};

export default withLess({
  ...nextConfig,
});
