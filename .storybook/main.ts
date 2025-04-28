import { dirname, join } from "path";
import type { StorybookConfig } from '@storybook/react-vite'
import { mergeConfig } from 'vite';
import tailwindConfig from './tailwind.config';
import path from 'path';

const config: StorybookConfig = {
  stories: [
    "../templates/starter/stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../packages/styled/react/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../packages/unstyled/react/**/*.stories.@(js|jsx|mjs|ts|tsx)",

  ],
  addons: [
      '@storybook/addon-a11y',
      '@storybook/addon-essentials',
      '@storybook/addon-themes',
      '@storybook/addon-interactions',
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  staticDirs: ['../public'],
  core: {
    disableTelemetry: true,
  },
  typescript: {
    reactDocgen: false,
  },

  viteFinal: async (config, { configType }) => {
    return mergeConfig(config, {
      css: {
        postcss: {
          plugins: [
            require('tailwindcss')(tailwindConfig),
            require('autoprefixer'),
          ],
        },
      },
    });
  },
}

export default config
