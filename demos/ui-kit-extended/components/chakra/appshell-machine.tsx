"use client"
import React, { useState, useRef, useEffect, useCallback } from "react"
import { Box, VStack, HStack, Text, Flex, For, Stack } from "@chakra-ui/react"
import { GripHorizontal, GripVertical, Menu, Settings, BarChart3, MessageSquare } from "lucide-react"
import { draggable } from "@atlaskit/pragmatic-drag-and-drop/element/adapter"
import { autoScrollForElements } from "@atlaskit/pragmatic-drag-and-drop-auto-scroll/element"
import { combine } from "@atlaskit/pragmatic-drag-and-drop/combine"
import { useFlyoutManagerActor} from "#actors/hooks/useFlyoutManagerActor"
import { useFlyoutActor } from "#actors/hooks/useFlyoutActor"


interface PanelState {
  top: number
  left: number
  right: number
  bottom: number
}

interface DragHandleProps {
  onDrag: (deltaX: number, deltaY: number) => void
  cursor: string
  children: React.ReactNode
  panelType: keyof PanelState
  axis?: "x" | "y" | "both"
}

function DragHandle({ onDrag, cursor, children, panelType, axis = "both" }: DragHandleProps) {
  const elementRef = useRef<HTMLDivElement>(null)
  const dragStartPos = useRef({ x: 0, y: 0 })
  const isDragging = useRef(false)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    return combine(
      draggable({
        element,
        getInitialData: () => ({ panelType, axis }),
        onGenerateDragPreview: ({ nativeSetDragImage }: any) => {
          // Hide the default drag preview
          const canvas = document.createElement("canvas")
          canvas.width = 1
          canvas.height = 1
          const ctx = canvas.getContext("2d")
          if (ctx) {
            ctx.globalAlpha = 0
          }
          nativeSetDragImage(canvas, 0, 0)
        },
        onDragStart: ({ location }) => {
          isDragging.current = true
          dragStartPos.current = {
            x: location.current.input.clientX,
            y: location.current.input.clientY,
          }

          // Add visual feedback
          element.style.opacity = "0.8"
          document.body.style.cursor = cursor
        },
        onDrag: ({ location }) => {
          if (!isDragging.current) return

          const currentX = location.current.input.clientX
          const currentY = location.current.input.clientY

          const deltaX = currentX - dragStartPos.current.x
          const deltaY = currentY - dragStartPos.current.y

          // Apply axis constraints
          const constrainedDeltaX = axis === "y" ? 0 : deltaX
          const constrainedDeltaY = axis === "x" ? 0 : deltaY

          onDrag(constrainedDeltaX, constrainedDeltaY)

          // Update start position for next delta calculation
          dragStartPos.current = { x: currentX, y: currentY }
        },
        onDrop: () => {
          isDragging.current = false
          element.style.opacity = "1"
          document.body.style.cursor = "default"
        },
      }),
      autoScrollForElements({
        element,
      }),
    )
  }, [onDrag, cursor, panelType, axis])

  return (
    <Box ref={elementRef} cursor={cursor} userSelect="none" position="relative">
      {children}
    </Box>
  )
}

const FlayoutItem = ({ actorRef }) => {
  const {
    flyoutActorRef, flyoutState, isReady,
    fixture, isVertical, isHorizontal,
    displayName, id, name,
    pixelPlacements, pixelSizes, cursor, handlerPlacement,
    // allFixtures, pixelSizes, pixelPlacements
  } = useFlyoutActor(actorRef)


  return (
    isReady && (
      <Box
        position="absolute"
        {...pixelPlacements}
        {...pixelSizes}
        boxShadow="sm"
        zIndex="10"
        bg="white"
        // top="0"
        // left="0"
        // right="0"
        // h={`${panelSizes.top}px`}
        // bg="white"
        // borderBottom="1px solid"
        // borderColor="gray.200"

      >
        <Flex h="full"   align="center" justify="space-between" px="6">
          {displayName}
        </Flex>

        <DragHandle
          // onDrag={(_, deltaY) => updatePanelSize("top", deltaY)}
          cursor={cursor}
          panelType="top"
          axis={fixture.axis}
        >
          {
            isVertical && (
              <Box  h={'500px'} justify={'space-between'} zIndex={'1000'}
                position="absolute"
                 w="4px"
                    left="-2px"

                _hover={{ bg: "blue.100" }}
                transition="background-color 0.2s"
                      bg={'red'}
              >
                <Box
                  position="absolute"
                  top="50%"
                  left="50%"
                  transform="translate(-50%, -50%)"
                  color="gray.400"
                  _hover={{ color: "blue.500" }}
                >
                  <GripHorizontal size={16} />
                </Box>
              </Box>
            )
          }

          {
            isHorizontal && (
              <Box
                // position="absolute"
                // bottom="-2px"
                // left="0"
                // right="0"
                {...handlerPlacement}
                h={isHorizontal ? '4px' : 'full'}
                w={isVertical ? '4px': 'full'}
                // bg="transparent"
                _hover={{ bg: "blue.100" }}
                transition="background-color 0.2s"
                bg={'red'}
              >
                <Box
                  position="absolute"
                  top="50%"
                  left="50%"
                  transform="translate(-50%, -50%)"
                  color="gray.400"
                  _hover={{ color: "blue.500" }}
                >
                  <GripHorizontal size={16} />
                </Box>
              </Box>
            )
          }


        </DragHandle>
      </Box>
    )
  )

}

function AppShell() {
  const { flyoutManagerState, isReady, getFlyoutActor, flyouts } = useFlyoutManagerActor()






  const [panelSizes, setPanelSizes] = useState<PanelState>({
    top: 80,
    left: 250,
    right: 250,
    bottom: 120,
  })

  const updatePanelSize = useCallback((panel: keyof PanelState, delta: number) => {
    setPanelSizes((prev) => ({
      ...prev,
      [panel]: Math.max(50, Math.min(400, prev[panel] + delta)),
    }))
  }, [])

  return (
    <Stack h="100vh" w="100vw" bg="gray.50" overflow="hidden" position="relative">
      {/* Top Panel */}

      <For each={flyouts}>
        {(item, index) => <FlayoutItem key={index} actorRef={item}/>}
      </For>

      {/* Main Content Area */}
      <Box
        position="absolute"
        top={`${panelSizes.top}px`}
        left={`${panelSizes.left}px`}
        right={`${panelSizes.right}px`}
        bottom={`${panelSizes.bottom}px`}
        bg="gray.50"
        p="8"
      >
        <Flex
          h="full"
          align="center"
          justify="center"
          bg="white"
          borderRadius="lg"
          boxShadow="sm"
          border="1px solid"
          borderColor="gray.200"
        >
          <VStack>
            <Text fontSize="2xl" fontWeight="700" color="gray.700" textAlign="center">
              Draggable Panel Layout
            </Text>
            <Text fontSize="md" color="gray.500" textAlign="center" maxW="md">
              Drag the grip handles on each panel edge to resize them. Each panel is constrained to maintain usability
              while providing flexible workspace customization.
            </Text>
            <Box mt="6" p="4" bg="blue.50" borderRadius="md" border="1px solid" borderColor="blue.200">
              <Text fontSize="sm" color="blue.700">
                Panel Sizes: Top: {panelSizes.top}px | Left: {panelSizes.left}px | Right: {panelSizes.right}px | Bottom:{" "}
                {panelSizes.bottom}px
              </Text>
            </Box>
          </VStack>
        </Flex>
      </Box>
    </Stack>
  )
}

export default AppShell
