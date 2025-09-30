"use client"
import { codeMirrorTooltipStyle } from "#codemirror-illa/components/CodeEditor/CodeMirror/theme"
import { ChakraProvider, defineConfig, defaultConfig, createSystem } from "@chakra-ui/react"
import { DndProvider } from "react-dnd"
import { TouchBackend } from "react-dnd-touch-backend"

import { ThemeProvider } from "next-themes"
import { Provider as TooltipProvider } from "#components/tw-ui/tooltip"
import { NotificationProvider } from "#components/tw-ui/notification-provider"

const dragOptions = {
  enableTouchEvents: true,
  enableMouseEvents: true,
}
const themeConfig: any = defineConfig({
  ...defaultConfig,
  cssVarsPrefix: "ck",
  preflight: false,
} as any)
const theme = createSystem(themeConfig, {
  disableLayers: true,
})

export const Provider = (props: { children: React.ReactNode }) => {
  return (
    <ChakraProvider value={theme}>
      <DndProvider backend={TouchBackend} options={dragOptions}>
        <ThemeProvider attribute="class" disableTransitionOnChange>
          <TooltipProvider>{props.children}</TooltipProvider>
          {/*<div*/}
          {/*  className="codeMirrorWrapper"*/}
          {/*  css={codeMirrorTooltipStyle}*/}
          {/*/>*/}
        </ThemeProvider>
        <NotificationProvider />
      </DndProvider>
    </ChakraProvider>
  )
}
