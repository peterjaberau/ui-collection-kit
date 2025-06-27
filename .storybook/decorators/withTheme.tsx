import { defineConfig, defaultConfig, createSystem, ChakraProvider } from '@chakra-ui/react';
import { withThemeByClassName } from "@storybook/addon-themes"
import { ColorModeProvider } from "../../packages/ui/src"

const themeDefault = createSystem(defaultConfig, {
  cssVarsPrefix: 'theme-default'
})

const themeWithFont = createSystem(defaultConfig, {
  theme: {
    tokens: {
      fonts: {
        heading: { value: "Inter, sans-serif" },
        body: { value: "Inter, sans-serif" },
        mono: { value: "Roboto Mono, monospace" },
      },
    },
  },
  cssVarsPrefix: 'theme-with-font'
})

const themeCustom = createSystem(defaultConfig, {
  cssVarsPrefix: 'theme-custom'
})

const STYLES = {
  'style-default': themeDefault,
  'style-with-font': themeWithFont,
  'style-custom': themeCustom,
};

export const WithTheme = (Story: any, context: any) => {
  return (

      <ColorModeProvider
        forcedTheme={context?.global?.theme}
        enableSystem={false}
      >
        <ChakraProvider value={themeDefault}>
          <Story />
        </ChakraProvider>
      </ColorModeProvider>

  );
};

/*

import type {Decorator} from '@storybook/react-webpack5';

import {ThemeProvider} from '../../src';

export const WithTheme: Decorator = (Story, context) => {
    return (
        <ThemeProvider theme={context.globals.theme} direction={context.globals.direction}>
            <Story {...context} />
        </ThemeProvider>
    );
};


 */
