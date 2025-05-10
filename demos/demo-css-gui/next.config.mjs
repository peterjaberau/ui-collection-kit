/** @type {import('next').NextConfig} */
import { codeInspectorPlugin } from 'code-inspector-plugin';
import nextMDX from '@next/mdx';
import remarkGFM from 'remark-gfm';
import remarkPrism from 'remark-prism';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

const nextConfig = {
  webpack: (config, { dev, isServer }) => {
    config.plugins.push(codeInspectorPlugin({ bundler: 'webpack', editor: 'idea' }));
    return config;
  },

  extension: /\.mdx?$/,
  options: {
    providerImportSource: '@mdx-js/react',
    remarkPlugins: [remarkGFM, remarkPrism],
    rehypePlugins: [rehypeSlug, [rehypeAutolinkHeadings, { behavior: 'wrap' }]],
  },
  /* config options here */
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
};

export default nextConfig
