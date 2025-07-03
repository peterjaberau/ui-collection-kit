"use client"
import { Box, IconButton } from "@chakra-ui/react"
import { FaThumbtack } from "react-icons/fa"
import Draggable from "react-draggable"
import { useEdgePanelActor } from "#actors/hooks/useEdgePanelActor"
import { useState, useRef } from "react"

export const EdgePanel = ({ id }: { id: "top" | "bottom" | "left" | "right" }) => {
  const nodeRef = useRef<HTMLDivElement>(null)
  const resizeLeftRef = useRef<HTMLDivElement>(null)
  const resizeRightRef = useRef<HTMLDivElement>(null)
  const resizeTopRef = useRef<HTMLDivElement>(null)
  const resizeBottomRef = useRef<HTMLDivElement>(null)

  const { pinned, position, size, minSize, fireTogglePin, fireResize } = useEdgePanelActor({ id: id })
  const [floating, setFloating] = useState({ x: 100, y: 100 })

  const renderResizeHandle = () => {
    if (!pinned) return null

    const thickness = 6
    const commonProps = {
      bg: "gray.400",
      zIndex: 1000,
      opacity: 0.3,
      _hover: { opacity: 0.8 },
      transition: "opacity 0.2s",
    }

    switch (position) {
      case "left":
        return (
          <Draggable
            nodeRef={resizeLeftRef}
            axis="x"
            position={{ x: 0, y: 0 }}
            onDrag={(_, data) => {
              const newSize = Math.max(minSize || 50, size + data.deltaX)
              fireResize(newSize)
            }}
          >
            <Box
              ref={resizeLeftRef}
              {...commonProps}
              position="absolute"
              right={`-${thickness / 2}px`}
              top="0"
              bottom="0"
              width={`${thickness}px`}
              cursor="col-resize"
            />
          </Draggable>
        )
      case "right":
        return (
          <Draggable
            nodeRef={resizeRightRef}
            axis="x"
            position={{ x: 0, y: 0 }}
            onDrag={(_, data) => {
              const newSize = Math.max(minSize || 50, size - data.deltaX)
              fireResize(newSize)
            }}
          >
            <Box
              ref={resizeRightRef}
              {...commonProps}
              position="absolute"
              left={`-${thickness / 2}px`}
              top="0"
              bottom="0"
              width={`${thickness}px`}
              cursor="col-resize"
            />
          </Draggable>
        )
      case "top":
        return (
          <Draggable
            nodeRef={resizeTopRef}
            axis="y"
            position={{ x: 0, y: 0 }}
            onDrag={(_, data) => {
              const newSize = Math.max(minSize || 50, size + data.deltaY)
              fireResize(newSize)
            }}
          >
            <Box
              ref={resizeTopRef}
              {...commonProps}
              position="absolute"
              bottom={`-${thickness / 2}px`}
              left="0"
              right="0"
              height={`${thickness}px`}
              cursor="row-resize"
            />
          </Draggable>
        )
      case "bottom":
        return (
          <Draggable
            nodeRef={resizeBottomRef}
            axis="y"
            position={{ x: 0, y: 0 }}
            onDrag={(_, data) => {
              const newSize = Math.max(minSize || 50, size - data.deltaY)
              fireResize(newSize)
            }}
          >
            <Box
              ref={resizeBottomRef}
              {...commonProps}
              position="absolute"
              top={`-${thickness / 2}px`}
              left="0"
              right="0"
              height={`${thickness}px`}
              cursor="row-resize"
            />
          </Draggable>
        )
      default:
        return null
    }
  }

  const getPinnedBoxProps = () => {
    const baseProps = {
      position: "fixed" as const, // Changed to fixed for proper docking
      zIndex: 10,
      bg: "gray.50",
      borderColor: "gray.300",
      overflow: "hidden",
    }

    switch (position) {
      case "left":
        return {
          ...baseProps,
          top: 0,
          bottom: 0,
          left: 0,
          width: `${size}px`,
          height: "100vh", // Fill full height
          borderRight: "1px solid",
        }
      case "right":
        return {
          ...baseProps,
          top: 0,
          bottom: 0,
          right: 0,
          width: `${size}px`,
          height: "100vh", // Fill full height
          borderLeft: "1px solid",
        }
      case "top":
        return {
          ...baseProps,
          top: 0,
          left: 0,
          right: 0,
          height: `${size}px`,
          width: "100vw", // Fill full width
          borderBottom: "1px solid",
        }
      case "bottom":
        return {
          ...baseProps,
          bottom: 0,
          left: 0,
          right: 0,
          height: `${size}px`,
          width: "full", // Fill full width
          borderTop: "1px solid",
        }
      default:
        return baseProps
    }
  }

  const getFloatingBoxProps = () => {
    // For floating panels, use reasonable default dimensions
    const getFloatingDimensions = () => {
      switch (position) {
        case "left":
        case "right":
          return { width: `${size}px`, height: "400px" }
        case "top":
        case "bottom":
          return { width: "400px", height: `${size}px` }
        default:
          return { width: "300px", height: "200px" }
      }
    }

    const dimensions = getFloatingDimensions()

    return {
      position: "fixed" as const,
      top: `${floating.y}px`,
      left: `${floating.x}px`,
      ...dimensions,
      zIndex: 999,
      bg: "white",
      boxShadow: "xl",
      border: "1px solid",
      borderColor: "gray.300",
      borderRadius: "md",
      overflow: "hidden",
    }
  }

  const boxProps = pinned ? getPinnedBoxProps() : getFloatingBoxProps()

  const renderDraggable = (node: React.ReactNode) => {
    if (pinned) {
      return node
    }

    return (
      <Draggable
        nodeRef={nodeRef}
        handle=".handle"
        position={floating}
        onStop={(_, data) => {
          setFloating({ x: data.x, y: data.y })
        }}
      >
        <Box ref={nodeRef}>{node}</Box>
      </Draggable>
    )
  }

  return renderDraggable(
    <Box {...boxProps}>
      <Box
        className="handle"
        p={3}
        fontWeight="semibold"
        position="relative"
        bg={pinned ? "gray.100" : "blue.50"}
        cursor={pinned ? "default" : "move"}
        borderBottom={pinned ? "1px solid" : "none"}
        borderColor="gray.200"
        fontSize="sm"
      >
        {position} Panel
        <IconButton
          aria-label="Toggle pin"
          size="xs"
          onClick={fireTogglePin}
          position="absolute"
          top="8px"
          right="8px"
          colorScheme={pinned ? "blue" : "gray"}
          variant="ghost"
        >
          <FaThumbtack />
        </IconButton>
      </Box>
      <Box p={4} height="calc(100% - 60px)" overflow="auto">
        <Box fontSize="xs" color="gray.500" mb={3}>
          Position: {position} | Size: {size}px | Pinned: {pinned ? "Yes" : "No"}
          {minSize && ` | Min: ${minSize}px`}
        </Box>
        <Box>
          <Box fontWeight="medium" mb={2}>
            Panel Content
          </Box>
          <Box fontSize="sm" color="gray.600">
            This is the {position} panel content.
            {pinned ? " It is currently docked and fills the available space." : " It is currently floating."}
          </Box>
        </Box>
      </Box>
      {renderResizeHandle()}
    </Box>,
  )
}
