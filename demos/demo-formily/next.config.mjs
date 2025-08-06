/** @type {import('next').NextConfig} */

const nextConfig = {
  /* config options here */
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  experimental: {
    optimizePackageImports: ["@chakra-ui/react", "@ark-ui/react"],
    externalDir: true,
    inlineCss: true,
    useCache: true,
    clientSegmentCache: true,
  },
}

export default nextConfig
