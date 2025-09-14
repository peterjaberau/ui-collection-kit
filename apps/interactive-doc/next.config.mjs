/** @type {import('next').NextConfig} */
/** @type {import('postcss-load-config').Config} */

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
}

export default nextConfig
