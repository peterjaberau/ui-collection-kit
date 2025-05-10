import { defineConfig } from "vitest/config"
import path from "path"

export default defineConfig({
  test: {
    globals: true,
  },

  resolve: {
    alias: {
      '@assets': path.join(__dirname, 'packages/twenty-ui/src/assets'),
    },
  }
})
