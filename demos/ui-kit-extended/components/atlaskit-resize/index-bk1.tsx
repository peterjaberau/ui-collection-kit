import { Box, Flex } from "@chakra-ui/react"
import { Fragment, memo, useEffect, useRef, useState } from "react"
import invariant from "ts-tiny-invariant"
import { draggable } from "@atlaskit/pragmatic-drag-and-drop/element/adapter"
import { disableNativeDragPreview } from "@atlaskit/pragmatic-drag-and-drop/element/disable-native-drag-preview"
import { preventUnhandled } from "@atlaskit/pragmatic-drag-and-drop/prevent-unhandled"
import type { DragLocationHistory } from "@atlaskit/pragmatic-drag-and-drop/types"

const widths = {
  start: 260,
  min: 150,
  max: 450,
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

  return Math.min(Math.max(widths.min, initialWidth + diffX), widths.max)
}

const Menu = memo(function Menu() {
  return <Box p="4">Sidebar content</Box>
})

function Sidebar({ side }: { side: "left" | "right" }) {
  const [initialWidth, setInitialWidth] = useState(widths.start)
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
        const newWidth = getProposedWidth({
          initialWidth,
          location,
          direction: side,
        })
        content.style.setProperty("--local-resizing-width", `${newWidth}px`)
      },
      onDrop({ location }) {
        preventUnhandled.stop()
        setDragging(false)

        const finalWidth = getProposedWidth({
          initialWidth,
          location,
          direction: side,
        })

        setInitialWidth(finalWidth)
        content.style.removeProperty("--local-resizing-width")
      },
    })
  }, [initialWidth, side])

  return (
    <Flex flexShrink={0} flexGrow={0} flexDir="row" order={side === "right" ? 2 : 0}>
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
        <Menu />
      </Box>
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
}

function Content() {
  return (
    <Box flex="1" p="4">
      Content
    </Box>
  )
}

export function AtlaskitResize() {
  return (
    <Fragment>
      <Flex w="full" h="500px" border="1px solid" borderColor="gray.200" borderRadius="md" bg="white" overflow="hidden">
        <Sidebar side="left" />
        <Content />
        <Sidebar side="right" />
      </Flex>
    </Fragment>
  )
}
