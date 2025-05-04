import { withThemeByClassName } from "@storybook/addon-themes"
import type { Preview, ReactRenderer } from "@storybook/react"
import { ChakraProvider } from "@chakra-ui/react"
// import '@fontsource-variable/inter'
import { defaultSystem, SuiProvider } from "../packages/saas/src/react"
// import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'

import React from "react"
// import "./styles/tailwind.css"
// import "./styles/tailwind.css"
// import "./styles/styles.css"

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    options: {
      storySort: {
        method: "alphabetical",
        order: ["Templates", "React Lite", "Unstyled"],
      },
    },
    layout: "padded",
  },
  decorators: [
    withThemeByClassName({
      themes: {
        light: "light",
        dark: "dark",
      },
      defaultTheme: "light",
    }),
    (Story) => (
      <>
        <ChakraProvider value={defaultSystem as any}>
          <div className="font-mono antialiased">
            <Story />
          </div>
        </ChakraProvider>
      </>
    ),
  ],
}

export default preview
