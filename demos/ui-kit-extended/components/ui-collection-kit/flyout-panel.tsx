"use client"
import "./style.css"
import { Box } from "@chakra-ui/react"
import { Portal } from "@chakra-ui/react"
import { FloatingPanel } from '@ark-ui/react'
import { ArrowDownLeft, Maximize2, Minus, XIcon } from "lucide-react"
import { useState } from "react"
import { useRef } from 'react'

//top, left, right, bottom: use for position: absolute | relative | fixed | sticky
// x, y: use for x and y (via transform: translate(x, y))
const cssMap = {
  top: {
    start: 80,
    min: 60,
    max: 100,
    position: {
      top: 0,
      left: 0,
      right: 0,
    },
    size: {
      height: "50px",
    },
  },
  bottom: {
    start: 200,
    min: 150,
    max: 400,
    position: {
      bottom: "0",
      left: 0,
      right: 0,
    },
    size: {
      height: "100px",
    },
  },
  left: {
    start: 260,
    min: 150,
    max: 450,
    position: {
      top: 80,
      bottom: 100,
      left: 0,
    },
    size: {
      width: "250px",
    },
  },
  right: {
    start: 260,
    min: 150,
    max: 450,
    position: {
      top: 80,
      bottom: 100,
      right: 0,
    },
    size: {
      width: "250px",
    },
  },
}
type Side = "left" | "right" | "top" | "bottom"

function getDefaultSize(side: Side) {
  if (typeof window === "undefined") {

    return { width: 400, height: 300 } // SSR-safe fallback
  }

  return side === "left" || side === "right"
    ? { width: 400, height: window.innerHeight }
    : { width: window.innerWidth, height: 300 }
}

function getAnchorPosition(side: Side, size: { width: number; height: number }) {
  if (typeof window === "undefined") {
    return { x: 0, y: 0 }
  }

  const { width, height } = size
  const winW = window.innerWidth
  const winH = window.innerHeight

  switch (side) {
    case "left":
      return { x: 0, y: winH / 2 - height / 2 }
    case "right":
      return { x: winW - width, y: winH / 2 - height / 2 }
    case "top":
      return { x: winW / 2 - width / 2, y: 0 }
    case "bottom":
      return { x: winW / 2 - width / 2, y: winH - height }
    default:
      return { x: 0, y: 0 }
  }
}

// --local-resizing-width
// --local-resizing-height

export const FlyoutPanel = ({ children, side }: { children: React.ReactNode; side: Side, defaultSize?: any }) => {
  // const defaultSize = getDefaultSize(side)
  const [position, setPosition] = useState({ x: 0, y: 80 })
  const [size, setSize] = useState({ width: 250, height: 100 })


  return (
      <FloatingPanel.Root
        defaultOpen
        position={position}
        onPositionChange={(e) => setPosition(e.position)}
        size={size}
        onSizeChange={(e) => setSize(e.size)}
        // getAnchorPosition={() => getAnchorPosition(side, size)}
      >
        {/*<FloatingPanel.Trigger>open</FloatingPanel.Trigger>*/}
        <Portal>
        <FloatingPanel.Positioner>
          <FloatingPanel.Content >
            <FloatingPanel.DragTrigger>
              <FloatingPanel.Header>
                <FloatingPanel.Title>{`${side} panel`}</FloatingPanel.Title>
                <FloatingPanel.Control>
                  <FloatingPanel.StageTrigger stage="minimized">
                    <Minus />
                  </FloatingPanel.StageTrigger>
                  <FloatingPanel.StageTrigger stage="maximized">
                    <Maximize2 />
                  </FloatingPanel.StageTrigger>
                  <FloatingPanel.StageTrigger stage="default">
                    <ArrowDownLeft />
                  </FloatingPanel.StageTrigger>
                  <FloatingPanel.CloseTrigger>
                    <XIcon />
                  </FloatingPanel.CloseTrigger>
                </FloatingPanel.Control>
              </FloatingPanel.Header>
            </FloatingPanel.DragTrigger>
            <FloatingPanel.Body>{children}</FloatingPanel.Body>

            {side === "left" && <FloatingPanel.ResizeTrigger axis="e" />}
            {side === "right" && <FloatingPanel.ResizeTrigger axis="w" />}
            {side === "top" && <FloatingPanel.ResizeTrigger axis="s" />}
            {side === "bottom" && <FloatingPanel.ResizeTrigger axis="n" />}

            {/*<FloatingPanel.ResizeTrigger axis="ne" />*/}
            {/*<FloatingPanel.ResizeTrigger axis="se" />*/}
            {/*<FloatingPanel.ResizeTrigger axis="sw" />*/}
            {/*<FloatingPanel.ResizeTrigger axis="nw" />*/}
          </FloatingPanel.Content>
        </FloatingPanel.Positioner>
        </Portal>
      </FloatingPanel.Root>
  )
}
