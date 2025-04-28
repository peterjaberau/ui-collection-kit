import { withThemeByClassName } from "@storybook/addon-themes";
import type { Preview, ReactRenderer } from "@storybook/react"
import React from "react"
import '../styles/globals.css'
import './styles.css'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    options: {
        storySort: {
          method: "alphabetical",
          order: ["Templates", "Styled", "Unstyled"],
        },
    },
    layout: 'padded',
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
          <Story />
        </>
    )
  ]
}



export default preview
