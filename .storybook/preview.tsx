import React from "react"
import type { Preview, ReactRenderer } from "@storybook/react"
import { withThemeByClassName } from "@storybook/addon-themes"
import "react18-json-view/src/style.css"
import JsonView from "react18-json-view"
import { Box, Flex } from "@chakra-ui/react"

// twenty imports
import { ThemeProvider } from "@emotion/react"
import { THEME_DARK, THEME_LIGHT, ThemeContextProvider } from "../packages/twenty-ui/src/theme"

// chakra imports
import { ChakraProvider } from "@chakra-ui/react"
import { defaultSystem, SuiProvider } from "../packages/saas/src/react"


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
    (Story: any, context: any): any => {
      const storyPath = context?.title
      const shouldApplyTwentyTheme = storyPath.includes("Twenty") && !storyPath.includes("Refactor")
      const shouldApplyTwentyRefactoredTheme = storyPath.includes("Refactor")
      const shouldApplyChakraTheme = !shouldApplyTwentyTheme && !shouldApplyTwentyRefactoredTheme

      const currentTheme = context?.globals?.theme
      const twentyTheme = currentTheme === "dark" ? THEME_DARK : THEME_LIGHT

      const JsonViewWrapper = () => (
        <JsonView
          src={{ storyPath, shouldApplyTwentyTheme, shouldApplyTwentyRefactoredTheme, shouldApplyChakraTheme }}
          collapsed={1}
          style={{ fontSize: "13px" }}
          theme={"github"}
        />
      )

      return (
        <>
          {shouldApplyTwentyTheme && (
            <div style={{ fontSize: "13px" }}>
              <ThemeProvider theme={twentyTheme}>
                <ThemeContextProvider theme={twentyTheme}>
                  <Story />
                </ThemeContextProvider>
              </ThemeProvider>
            </div>
          )}
          {shouldApplyChakraTheme && (
            <>
              <ChakraProvider value={defaultSystem as any}>
                <div className="font-mono antialiased">
                  <Story />
                </div>
              </ChakraProvider>
            </>
          )}

          {shouldApplyTwentyRefactoredTheme && (
            <>
              <ChakraProvider value={defaultSystem as any}>
                <ThemeProvider theme={twentyTheme}>
                  <ThemeContextProvider theme={twentyTheme}>
                    <Story />
                  </ThemeContextProvider>
                </ThemeProvider>
              </ChakraProvider>
            </>
          )}


        </>
      )
    },
  ],
}

export default preview
