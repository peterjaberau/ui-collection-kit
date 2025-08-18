
import * as React from "react"
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area"
import { chakra, Box } from "@chakra-ui/react"

const ChakraScrollArea = chakra(ScrollAreaPrimitive.Root)
const ChakraScrollAreaViewport = chakra(ScrollAreaPrimitive.Viewport)
const ChakraScrollAreaScrollbar = chakra(ScrollAreaPrimitive.ScrollAreaScrollbar)
const ChakraScrollAreaThumb = chakra(ScrollAreaPrimitive.ScrollAreaThumb)
function ScrollArea({ children, ...props }: React.ComponentProps<typeof ChakraScrollArea>) {
  return (
    <ChakraScrollArea
      data-slot="scroll-area"
      css={{
        display: "relative",
      }}
      {...props}
    >
      <ChakraScrollAreaViewport
        data-slot="scroll-area-viewport"
        css={{
          width: "100%",
          height: "100%",
          borderRadius: "inherit",
          transition: "color 0.2s, box-shadow 0.2s",
          outline: "none",
          "&:focus-visible": {
            boxShadow: "0 0 0 3px var(--ring-color, rgba(59,130,246,0.5))",
            outline: "1px solid",
          },
        }}
      >
        {children}
      </ChakraScrollAreaViewport>
      <ScrollBar />
      <ScrollAreaPrimitive.Corner />
    </ChakraScrollArea>
  )
}

function ScrollBar({ orientation = "vertical", ...props }: React.ComponentProps<typeof ChakraScrollAreaScrollbar>) {
  return (
    <ChakraScrollAreaScrollbar
      data-slot="scroll-area-scrollbar"
      orientation={orientation}
      css={{
        display: "flex",
        touchAction: "none",
        padding: "1px",
        transition: "color 0.2s",
        userSelect: "none",
        ...(orientation === "vertical" && {
          height: "100%",
          width: "2.5",
          borderLeft: "1px solid transparent",
        }),
        ...(orientation === "horizontal" && {
          height: "2.5",
          flexDirection: "column",
          borderTop: "1px solid transparent",
        }),
      }}
      {...props}
    >
      <ChakraScrollAreaThumb
        data-slot="scroll-area-thumb"
        css={{
          background: "bg.muted",
          position: "relative",
          flex: 1,
          borderRadius: "9999px",
        }}
        {...props}
      ></ChakraScrollAreaThumb>
    </ChakraScrollAreaScrollbar>
  )
}

export { ScrollArea, ScrollBar }
