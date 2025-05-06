import React from "react"
import type { Preview, ReactRenderer } from "@storybook/react"
import { withThemeByClassName } from "@storybook/addon-themes"

// twenty imports
import { ThemeProvider } from "@emotion/react"
import { THEME_DARK, THEME_LIGHT, ThemeContextProvider } from "../packages/twenty-ui/src/theme"

// chakra imports
import { ChakraProvider } from "@chakra-ui/react"
import { defaultSystem, SuiProvider } from "../packages/saas/src/react"

const chakraLightSystem = {
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
}

const chakraDarkSystem = {
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
}

const emotionLightTheme = { mode: "light" }
const emotionDarkTheme = { mode: "dark" }

const CustomDecoratorRenderer: any = (Story: any, context: any) => {
  const storyPath = context?.title
  const shouldApplyTwentyTheme = storyPath.includes("Twenty UI")
  const currentTheme = context?.globals?.theme
  const isTwentyStory = storyPath.includes("Twenty UI")

  const ChakraThemeDecorator: any[] = [
    withThemeByClassName({
      themes: {
        light: "light",
        dark: "dark",
      },
      defaultTheme: "light",
    }),
    (Story: any) => (
      <ChakraProvider value={defaultSystem}>
        <div className="font-mono antialiased">
          <Story />
        </div>
      </ChakraProvider>
    ),
  ]

  const twentyTheme = currentTheme === "dark" ? THEME_DARK : THEME_LIGHT

  const TwentyThemeDecorator = [
    withThemeByClassName({
      themes: {
        light: "light",
        dark: "dark",
      },
      defaultTheme: "light",
    }),
    (Story: any) => (
      <ThemeProvider theme={twentyTheme}>
        <ThemeContextProvider theme={twentyTheme}>
          <Story />
        </ThemeContextProvider>
      </ThemeProvider>
    ),
  ]

  return isTwentyStory ? TwentyThemeDecorator : ChakraThemeDecorator
}

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
  decorators: CustomDecoratorRenderer,
}

export default preview
