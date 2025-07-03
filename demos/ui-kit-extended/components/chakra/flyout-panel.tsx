"use client"
import React from "react"
import { Box, BoxProps } from "@chakra-ui/react"
import { GripHorizontal, GripVertical } from "lucide-react"

interface FlyoutPanelProps
  extends Omit<BoxProps, "position" | "top" | "left" | "right" | "bottom" | "width" | "height"> {
  // Panel positioning - only one should be provided
  top?: number
  left?: number
  right?: number
  bottom?: number

  // Panel size
  size: number

  // Drag handle configuration
  onResize?: (delta: number) => void
  resizable?: boolean

  // Content
  children: React.ReactNode

  // Styling overrides
  showBorder?: boolean
  showShadow?: boolean
  zIndex?: number
}

interface DragHandleProps {
  onDrag: (deltaX: number, deltaY: number) => void
  cursor: string
  children: React.ReactNode
  panelType: "top" | "left" | "right" | "bottom"
  axis?: "x" | "y" | "both"
}

// Import your existing DragHandle component or define it here
function DragHandle({ onDrag, cursor, children, panelType, axis = "both" }: DragHandleProps) {
  // Your existing DragHandle implementation
  // ... (same as in your original code)
}

export function FlyoutPanel({
  top,
  left,
  right,
  bottom,
  size,
  onResize,
  resizable = true,
  children,
  showBorder = true,
  showShadow = true,
  zIndex = 9,
  bg = "white",
  ...boxProps
}: FlyoutPanelProps) {
  // Determine panel type and positioning
  const panelType =
    top !== undefined
      ? "top"
      : left !== undefined
        ? "left"
        : right !== undefined
          ? "right"
          : bottom !== undefined
            ? "bottom"
            : null

  if (!panelType) {
    throw new Error("FlyoutPanel requires one of: top, left, right, or bottom props")
  }

  // Calculate positioning styles
  const getPositionStyles = () => {
    const baseStyles = { position: "absolute" as const }

    switch (panelType) {
      case "top":
        return {
          ...baseStyles,
          top: `${top}px`,
          left: "0",
          right: "0",
          height: `${size}px`,
        }
      case "left":
        return {
          ...baseStyles,
          top: top ? `${top}px` : "0",
          left: "0",
          bottom: bottom ? `${bottom}px` : "0",
          width: `${size}px`,
        }
      case "right":
        return {
          ...baseStyles,
          top: top ? `${top}px` : "0",
          right: "0",
          bottom: bottom ? `${bottom}px` : "0",
          width: `${size}px`,
        }
      case "bottom":
        return {
          ...baseStyles,
          bottom: `${bottom}px`,
          left: "0",
          right: "0",
          height: `${size}px`,
        }
      default:
        return baseStyles
    }
  }

  // Calculate border styles
  const getBorderStyles = () => {
    if (!showBorder) return {}

    const borderStyle = "1px solid"
    const borderColor = "gray.200"

    switch (panelType) {
      case "top":
        return { borderBottom: borderStyle, borderColor }
      case "left":
        return { borderRight: borderStyle, borderColor }
      case "right":
        return { borderLeft: borderStyle, borderColor }
      case "bottom":
        return { borderTop: borderStyle, borderColor }
      default:
        return {}
    }
  }

  // Render drag handle
  const renderDragHandle = () => {
    if (!resizable || !onResize) return null

    const isHorizontal = panelType === "top" || panelType === "bottom"
    const isVertical = panelType === "left" || panelType === "right"

    const handleProps = {
      onDrag: (deltaX: number, deltaY: number) => {
        let delta = 0
        switch (panelType) {
          case "top":
            delta = deltaY
            break
          case "left":
            delta = deltaX
            break
          case "right":
            delta = -deltaX
            break
          case "bottom":
            delta = -deltaY
            break
        }
        onResize(delta)
      },
      cursor: isHorizontal ? "ns-resize" : "ew-resize",
      panelType,
      axis: isHorizontal ? ("y" as const) : ("x" as const),
    }

    const handlePositionStyles = () => {
      switch (panelType) {
        case "top":
          return {
            position: "absolute" as const,
            bottom: "-2px",
            left: "0",
            right: "0",
            height: "4px",
          }
        case "left":
          return {
            position: "absolute" as const,
            top: "0",
            right: "-2px",
            bottom: "0",
            width: "4px",
          }
        case "right":
          return {
            position: "absolute" as const,
            top: "0",
            left: "-2px",
            bottom: "0",
            width: "4px",
          }
        case "bottom":
          return {
            position: "absolute" as const,
            top: "-2px",
            left: "0",
            right: "0",
            height: "4px",
          }
        default:
          return {}
      }
    }

    const GripIcon = isHorizontal ? GripHorizontal : GripVertical

    return (
      <DragHandle {...handleProps}>
        <Box
          {...handlePositionStyles()}
          bg="transparent"
          _hover={{ bg: "blue.100" }}
          transition="background-color 0.2s"
        >
          <Box
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            color="gray.400"
            _hover={{ color: "blue.500" }}
          >
            <GripIcon size={16} />
          </Box>
        </Box>
      </DragHandle>
    )
  }

  return (
    <Box
      {...getPositionStyles()}
      bg={bg}
      boxShadow={showShadow ? "sm" : "none"}
      zIndex={zIndex}
      {...getBorderStyles()}
      {...boxProps}
    >
      {children}
      {renderDragHandle()}
    </Box>
  )
}

export default FlyoutPanel
