import type { Preview } from "@storybook/react-vite"
import { withThemeByClassName } from "@storybook/addon-themes"
import { MINIMAL_VIEWPORTS } from "storybook/viewport"
import { ChakraProvider, createSystem, defaultConfig } from "@chakra-ui/react"
import { WithTheme } from "./decorators/withTheme"
import { Title, Subtitle, Description, Primary, Controls, Stories } from "@storybook/addon-docs/blocks"

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
    actions: { argTypesRegex: "^on.*" },
    jsx: { showFunctions: true }, // To show functions in sources
    backgrounds: { disable: true },
    viewport: {
      viewports: MINIMAL_VIEWPORTS,
    },
    options: {
      storySort: {
        method: "alphabetical",
        order: ["Layout", "Typography", "Components", "Charts", "Foundations", "Hooks"],
      },
    },
    layout: "padded",
  },
  globalTypes: {
    theme: {
      toolbar: {
        title: "Theme",
        icon: "mirror",
        items: [
          { value: "light", right: "☼", title: "Light" },
          { value: "dark", right: "☾", title: "Dark" },
        ],
        dynamicTitle: true,
      },
    },
    lang: {
      toolbar: {
        title: "Language",
        icon: "globe",
        items: [{ value: "en", right: "English", title: "En" }],
        dynamicTitle: true,
      },
    },
    platform: {
      toolbar: {
        title: "Platform",
        items: [
          { value: "desktop", title: "Desktop", icon: "browser" },
          { value: "mobile", title: "Mobile", icon: "mobile" },
        ],
        dynamicTitle: true,
      },
    },
  },
  tags: ["autodocs"],
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
        <ChakraProvider value={system}>
          <Story />
        </ChakraProvider>
      )
    },
  ],
}

export default preview
