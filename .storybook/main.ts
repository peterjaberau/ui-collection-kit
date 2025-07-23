import type { StorybookConfig } from "@storybook/react-vite"
import { mergeConfig } from "vite"

const config: StorybookConfig = {
  stories: [
    "../packages/ui-kit/components/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../apps/stories/src/components/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: ["@storybook/addon-a11y", "@storybook/addon-themes", "@storybook/addon-docs"],
  framework: {
    name: "@storybook/react-vite",
    options: { builder: {} },
  },
  staticDirs: ["../public"],
  core: {
    disableTelemetry: true,
    disableProjectJson: true,
  },
  typescript: {
    reactDocgen: false,
  },
  refs: {
    "@chakra-ui/react": {
      disable: true,
    },
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
      // css: {
      //   postcss: {
      //     plugins: [require("tailwindcss")(tailwindConfig), require("autoprefixer")],
      //   },
      // },
      esbuild: {
        jsx: "automatic",
      },
    })
  },

}

export default config
