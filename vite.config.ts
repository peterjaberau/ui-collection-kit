import { defineConfig } from "vitest/config"

import path from "path"

export default defineConfig({
  plugins: [

  ],
  test: {
    globals: true,
  },

  resolve: {
    alias: {
      '@assets': path.join(__dirname, 'packages/twenty-ui/src/assets'),
      '@twenty-ui': path.join(__dirname, 'packages/twenty-ui/src'),
      '@twenty-modules': path.join(__dirname, 'packages/twenty-ui/src/modules'),
    },
  }
})
