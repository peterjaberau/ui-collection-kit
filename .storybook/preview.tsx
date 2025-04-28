import { withThemeByClassName } from "@storybook/addon-themes"
import type { Preview, ReactRenderer } from "@storybook/react"
import React from "react"
import "./styles/tailwind.css"
import "./styles/styles.css"

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    options: {
      storySort: {
        method: "alphabetical",
        order: ["Templates", "Styled", "Unstyled"],
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
        <div className="font-mono antialiased">
          <Story />
        </div>
      </>
    ),
  ],
}

export default preview
