/** @type {import('next').NextConfig} */
/** @type {import('postcss-load-config').Config} */
import { codeInspectorPlugin } from 'code-inspector-plugin';

const nextConfig = {
  /* config options here */
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  experimental: {
    inlineCss: true,
    useCache: true,
    clientSegmentCache: true,
    optimizePackageImports: ["@chakra-ui/react", "@ark-ui/react"],
    externalDir: true,
  },
  // turbopack: {
  //   rules: codeInspectorPlugin({
  //     bundler: 'turbopack',
  //     showSwitch: true,
  //     editor: 'idea'
  //   }),
  // },

  // webpack: (config, { dev, isServer }) => {
  //   config.plugins.push(codeInspectorPlugin({
  //     bundler: "webpack", showSwitch: true, editor: "idea", enforcePre: false
  //   }))
  //   return config
  // },
}

export default nextConfig
