import { dirname, join } from "path"
import type { StorybookConfig } from "@storybook/react-vite"
import { mergeConfig } from "vite"
import tailwindConfig from "./tailwind.config"
import remarkGfm from "remark-gfm"

import path from "path"

const config: StorybookConfig = {
  stories: [
    "../demos/antd-storybook/src/components/**/*.mdx",
    "../demos/antd-storybook/src/components/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../demos/react-lite/**/*.stories.@(js|jsx|mjs|ts|tsx)",

    // "../templates/starter/stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../packages/unstyled/react/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../packages/saas/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../packages/twenty-ui/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../packages/icons-plus/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../packages/desing-system-plus/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-a11y",
    "@storybook/addon-essentials",
    "@storybook/addon-themes",
    "@storybook/addon-interactions",

    "@storybook/addon-toolbars",
    "@storybook/addon-storysource",
    "@storybook/addon-viewport",

    "@storybook/addon-controls",
    "@storybook/addon-links",

    {
      name: "@storybook/addon-docs",
      options: {
        mdxPluginOptions: {
          mdxCompileOptions: {
            remarkPlugins: [remarkGfm],
          },
        },
      },
    },
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  staticDirs: ["../public"],
  core: {
    disableTelemetry: true,
  },
  typescript: {
    reactDocgen: false,
  },

  viteFinal: async (config, { configType }) => {
    return mergeConfig(config, {
      optimizeDeps: {
        include: [
          "@emotion/react",
          "@emotion/styled",
          "react/jsx-runtime",
          "react/jsx-dev-runtime",
        ],
        exclude: ["@storybook/*"],
      },
      css: {
        postcss: {
          plugins: [require("tailwindcss")(tailwindConfig), require("autoprefixer")],
        },
      },
      esbuild: {
        jsx: "automatic",
      },
    })
  },
}

export default config
