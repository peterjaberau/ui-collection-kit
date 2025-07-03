import { Box, Flex } from "@chakra-ui/react"
import { Fragment, memo, useEffect, useRef, useState } from "react"
import invariant from "ts-tiny-invariant"
import { draggable } from "@atlaskit/pragmatic-drag-and-drop/element/adapter"
import { disableNativeDragPreview } from "@atlaskit/pragmatic-drag-and-drop/element/disable-native-drag-preview"
import { preventUnhandled } from "@atlaskit/pragmatic-drag-and-drop/prevent-unhandled"
import type { DragLocationHistory } from "@atlaskit/pragmatic-drag-and-drop/types"

const sizes = {
  top: {
    start: 80,
    min: 60,
    max: 100,
  },
  bottom: {
    start: 200,
    min: 150,
    max: 400,
  },
  left: {
    start: 260,
    min: 150,
    max: 450,
  },
  right: {
    start: 260,
    min: 150,
    max: 450,
  },
}

function getProposedWidth({
  initialWidth,
  location,
  direction,
}: {
  initialWidth: number
  location: DragLocationHistory
  direction: "left" | "right"
}): number {
  const diffX =
    direction === "left"
      ? location.current.input.clientX - location.initial.input.clientX
      : location.initial.input.clientX - location.current.input.clientX

  return Math.min(Math.max(sizes[direction].min, initialWidth + diffX), sizes[direction].max)
}

function getProposedHeight({
  initialHeight,
  location,
  direction,
}: {
  initialHeight: number
  location: DragLocationHistory
  direction: "top" | "bottom"
}): number {
  const diffY =
    direction === "top"
      ? location.current.input.clientY - location.initial.input.clientY
      : location.initial.input.clientY - location.current.input.clientY

  return Math.min(Math.max(sizes[direction].min, initialHeight + diffY), sizes[direction].max)
}


export function FlyoutPanel({ children, side }: { children: any, side: "left" | "right" | "top" | "bottom" }) {
  const [initialWidth, setInitialWidth] = useState(sizes[side].start)
  const [initialHeight, setInitialHeight] = useState(sizes[side].start)

  const [dragging, setDragging] = useState(false)
  const contentRef = useRef<HTMLDivElement | null>(null)
  const dividerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const divider: any = dividerRef.current
    const content: any = contentRef.current
    invariant(divider)
    invariant(content)

    return draggable({
      element: divider,
      onGenerateDragPreview: ({ nativeSetDragImage }) => {
        disableNativeDragPreview({ nativeSetDragImage })
        preventUnhandled.start()
      },
      onDragStart() {
        setDragging(true)
      },
      onDrag({ location }) {
        if (side === "left" || side === "right") {
          const newWidth = getProposedWidth({
            initialWidth,
            location,
            direction: side,
          })
          content.style.setProperty("--local-resizing-width", `${newWidth}px`)
        } else if (side === "top" || side === "bottom") {
          const newHeight = getProposedHeight({
            initialHeight,
            location,
            direction: side,
          })
          content.style.setProperty("--local-resizing-height", `${newHeight}px`)
        }
      },
      onDrop({ location }) {
        preventUnhandled.stop()
        setDragging(false)

        if (side === "left" || side === "right") {
          const finalWidth = getProposedWidth({
            initialWidth,
            location,
            direction: side,
          })

          setInitialWidth(finalWidth)
          content.style.removeProperty("--local-resizing-width")
        } else if (side === "top" || side === "bottom") {
          const finalHeight = getProposedHeight({
            initialHeight,
            location,
            direction: side,
          })
          setInitialHeight(finalHeight)
          content.style.removeProperty("--local-resizing-height")
        }
      },
    })
  }, [initialHeight, initialWidth, side])

  if (side === "left" || side === "right") {
    return (
      <Flex flexShrink={0} flexGrow={0} flexDir="row" order={side === "right" ? 2 : 0}>
        {/* Right Panel*/}
        {side === "right" && (
          <Box
            ref={dividerRef}
            width="4"
            position="relative"
            cursor="ew-resize"
            bg="transparent"
            _before={{
              content: '""',
              position: "absolute",
              top: 0,
              bottom: 0,
              right: 0,
              width: "2px",
              bg: "blue.500",
            }}
          />
        )}
        <Box
          ref={contentRef}
          w={`var(--local-resizing-width, ${initialWidth}px)`}
          style={{ willChange: "width" }}
          transition={dragging ? "none" : "width 0.2s ease"}
        >
          {children}
        </Box>

        {/* Left Panel*/}
        {side === "left" && (
          <Box
            ref={dividerRef}
            width="4"
            position="relative"
            cursor="ew-resize"
            bg="transparent"
            _before={{
              content: '""',
              position: "absolute",
              top: 0,
              bottom: 0,
              left: 0,
              width: "2px",
              bg: "blue.500",
            }}
          />
        )}
      </Flex>
    )
  } else if (side === "top" || side === "bottom") {
    return (
      <Flex flexDir="column" flexShrink={0} flexGrow={0} order={side === "bottom" ? 2 : 0}>
        {side === "bottom" && (
          <Box
            ref={dividerRef}
            height="4"
            position="relative"
            cursor="ns-resize"
            bg="transparent"
            _before={{
              content: '""',
              position: "absolute",
              left: 0,
              right: 0,
              bottom: 0,
              height: "2px",
              bg: "blue.500",
            }}
          />
        )}
        <Box
          ref={contentRef}
          h={`var(--local-resizing-height, ${initialHeight}px)`}
          style={{ willChange: "height" }}
          transition={dragging ? "none" : "height 0.2s ease"}
          w="full"
        >
          {children}
        </Box>
        {side === "top" && (
          <Box
            ref={dividerRef}
            height="4"
            position="relative"
            cursor="ns-resize"
            bg="transparent"
            _before={{
              content: '""',
              position: "absolute",
              left: 0,
              right: 0,
              top: 0,
              height: "2px",
              bg: "blue.500",
            }}
          />
        )}
      </Flex>
    )
  }
}
