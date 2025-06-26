import type { Preview } from "@storybook/react-vite"
import { withThemeByClassName } from "@storybook/addon-themes"
import { ChakraProvider, createSystem, defaultConfig } from "@chakra-ui/react"
import {
  Title,
  Subtitle,
  Description,
  Primary,
  Controls,
  Stories,
} from '@storybook/addon-docs/blocks';

import { ColorModeProvider } from "../packages/ui/src/components/color-mode"

const system = createSystem(defaultConfig, {
  theme: {
    tokens: {
      fonts: {
        heading: { value: "Inter, sans-serif" },
        body: { value: "Inter, sans-serif" },
        mono: { value: "Roboto Mono, monospace" },
      },
    },
  },
})

const preview: Preview = {
  parameters: {
    docs: {
      codePanel: true,
      toc: true,

      // page: () => (
      //   <>
      //     <Title />
      //     <Subtitle />
      //     <Description />
      //     <Primary />
      //     <Controls />
      //     <Stories />
      //   </>
      // ),

    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    options: {
      storySort: {
        method: "alphabetical",
        order: ["Layout", "Typography", "Components", "Charts", "Foundations", "Hooks"],
      },
    },
    layout: "padded",
  },
  tags: ['autodocs'],
  decorators: [
    withThemeByClassName({
      defaultTheme: "light",
      themes: {
        light: "light",
        dark: "dark",
      },
    }),
    (Story: any, context: any) => {
      return (
        // <ColorModeProvider forcedTheme={context.globals.theme} enableSystem={false}>
        <ChakraProvider value={system}>
          <Story />
        </ChakraProvider>
        // </ColorModeProvider>
      )
    },
  ],
}

export default preview
