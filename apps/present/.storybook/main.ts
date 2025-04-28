import { dirname, join } from "path";
import type { StorybookConfig } from '@storybook/react-vite'
import { mergeConfig } from 'vite';
import path from 'path';

function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, "package.json")));
}

const config: StorybookConfig = {
  stories: [
      '../../../packages/unstyled/react/src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    '../../../packages/styled/react/src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    '../../../templates/starter/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: [
      '@storybook/addon-a11y',
      '@storybook/addon-essentials',
      '@storybook/addon-themes',
      '@storybook/addon-interactions',
  ],
  framework: {
    name: getAbsolutePath("@storybook/react-vite"),
    options: {},
  },
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
            require('tailwindcss')({
              config: path.resolve(__dirname, '../templates/starter/tailwind.config.ts')
            }),
            require('autoprefixer'),
          ],
        },
      },
    });
  },
}

export default config
