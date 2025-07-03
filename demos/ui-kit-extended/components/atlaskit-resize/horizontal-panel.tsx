import { Box, Flex } from "@chakra-ui/react"
import { useEffect, useRef, useState, memo } from "react"
import invariant from "ts-tiny-invariant"
import { draggable } from "@atlaskit/pragmatic-drag-and-drop/element/adapter"
import { disableNativeDragPreview } from "@atlaskit/pragmatic-drag-and-drop/element/disable-native-drag-preview"
import { preventUnhandled } from "@atlaskit/pragmatic-drag-and-drop/prevent-unhandled"
import type { DragLocationHistory } from "@atlaskit/pragmatic-drag-and-drop/types"

const heights = {
  start: 200,
  min: 100,
  max: 400,
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

  return Math.min(Math.max(heights.min, initialHeight + diffY), heights.max)
}

const PanelContent = memo(() => <Box p="4">Horizontal panel content</Box>)

export function HorizontalPanel({ side }: { side: "top" | "bottom" }) {
  const [initialHeight, setInitialHeight] = useState(heights.start)
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
        const newHeight = getProposedHeight({
          initialHeight,
          location,
          direction: side,
        })
        content.style.setProperty("--local-resizing-height", `${newHeight}px`)
      },
      onDrop({ location }) {
        preventUnhandled.stop()
        setDragging(false)
        const finalHeight = getProposedHeight({
          initialHeight,
          location,
          direction: side,
        })
        setInitialHeight(finalHeight)
        content.style.removeProperty("--local-resizing-height")
      },
    })
  }, [initialHeight, side])

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
        <PanelContent />
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
