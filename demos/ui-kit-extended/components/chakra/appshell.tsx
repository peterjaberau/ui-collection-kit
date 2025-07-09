"use client"
import React, { useState, useRef, useEffect, useCallback } from "react"
import { Box, VStack, HStack, Text, Flex } from "@chakra-ui/react"
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

const defaultFlyoutPanel = {
  topPanel: {
    height: 80,
    maxHeight: 100,
  },
  bottomPanel: {
    height: 120,
    maxHeight: 600,
  },
  leftPanel: {
    width: 250,
    maxWidth: 500,
  },
  rightPanel: {
    width: 250,
    maxWidth: 600,
  },


}

const FlyoutPanel = ({children, onResize, panelType = 'left', panelSize}: any) => {

  const handleStyles = () => {
    switch (panelType) {
      case "top":
        return {
          outer: {
            position: "absolute",
            background: "white",
            top: "0",
            left: "0",
            right: "0",
            height: `${panelSize}` || '80px',
            boxShadow: "sm",
            zIndex: "10"
          },
          handle: {
            position: 'absolute',
            bottom: '-2px',
            left: '0',
            right: '0',
            height: '4px',
            backgroundColor: "transparent",
            _hover: {
              backgroundColor: "gray.200",
            },
            transition: "background-color 0.2s ease",
          },
          handleInner: {
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "gray.400",
            _hover: {
              color: "blue.500",
            },
          }
        }
      case "left":
        return {
          outer: {

          },
          handle: {
            position: "absolute" as const,
            top: "0",
            right: "-2px",
            bottom: "0",
            width: "4px",
          }
        }
      case "right":
        return {
          outer: {

          },
          handle: {
            position: "absolute" as const,
            top: "0",
            left: "-2px",
            bottom: "0",
            width: "4px",
          }

        }
      case "bottom":
        return {
          outer: {

          },
          handle: {
            position: "absolute",
            top: "-2px",
            left: "0",
            right: "0",
            height: "4px",
          }
        }
      default:
        return {}
    }
  }

  const isHorizontal = panelType === "top" || panelType === "bottom"
  const isVertical = panelType === "left" || panelType === "right"

  const handleProps = {
    onDrag: (deltaX: number, deltaY: number) => {
      let delta = 0
      switch (panelType) {
        case "top":
          delta = deltaY
          onResize({ panelType: panelType, delta: deltaY })
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


    },
    cursor: isHorizontal ? "ns-resize" : "ew-resize",
    panelType,
    axis: isHorizontal ? ("y" as const) : ("x" as const),
  }

  const GripIcon = isHorizontal ? GripHorizontal : GripVertical

  return (
      <Box {...handleStyles().outer}>
        <Flex h="full" align="center" justify="space-between" px="6" >
          {children}
        </Flex>
        <DragHandle {...handleProps} >
          <Box {...handleStyles().handle}>
            <Box {...handleStyles().handleInner}>
              <GripIcon size={16} />
            </Box>
          </Box>
        </DragHandle>
      </Box>
  )
}

function AppShell() {



  const [panelSizes, setPanelSizes] = useState<PanelState>({
    top: 80,
    left: 250,
    right: 250,
    bottom: 120,
  })

  const updatePanelSize = useCallback((delta: number) => {

    // setPanelSizes((prev) => ({
    //   ...prev,
    //   [panel]: Math.max(50, Math.min(400, prev[panel] + delta)),
    // }))
  }, [])


  const updatePanelDelta = useCallback(({panelType, delta}: any) => {

    setPanelSizes((prev) => ({
      ...prev,
      [panelType]: Math.max(50, Math.min(400, prev[panelType] + delta)),
    }))

    // setPanelSizes((prev) => ({
    //   ...prev,
    //   [panel]: Math.max(50, Math.min(400, prev[panel] + delta)),
    // }))
  }, [])

  return (
    <Box h="100vh" w="100vw"  overflow="hidden" position="relative">
      {/* Top Panel */}

      <FlyoutPanel
        panelType="top"
        panelSize={panelSizes.top}
        onResize={updatePanelSize}
      >
        test
      </FlyoutPanel>
      {/*<Box*/}
      {/*  position="absolute"*/}
      {/*  top="0"*/}
      {/*  left="0"*/}
      {/*  right="0"*/}
      {/*  h={`${panelSizes.top}px`}*/}
      {/*  boxShadow="sm"*/}
      {/*  zIndex="10"*/}
      {/*>*/}
      {/*  <Flex h="full" align="center" justify="space-between" px="6" >*/}

      {/*  </Flex>*/}

      {/*  <DragHandle*/}
      {/*    onDrag={(_, deltaY) => updatePanelSize("top", deltaY)}*/}
      {/*    cursor="ns-resize"*/}
      {/*    panelType="top"*/}
      {/*    axis="y"*/}
      {/*  >*/}
      {/*    <Box*/}
      {/*      position="absolute"*/}
      {/*      bottom="-2px"*/}
      {/*      left="0"*/}
      {/*      right="0"*/}
      {/*      h="4px"*/}
      {/*      bg="transparent"*/}
      {/*      _hover={{ bg: "gray.900" }}*/}
      {/*      transition="background-color 0.2s"*/}
      {/*    >*/}
      {/*      <Box*/}
      {/*        position="absolute"*/}
      {/*        top="50%"*/}
      {/*        left="50%"*/}
      {/*        transform="translate(-50%, -50%)"*/}
      {/*        color="gray.400"*/}
      {/*        _hover={{ color: "blue.500" }}*/}
      {/*      >*/}
      {/*        <GripHorizontal size={16} />*/}
      {/*      </Box>*/}
      {/*    </Box>*/}
      {/*  </DragHandle>*/}
      {/*</Box>*/}

      {/* Left Panel */}
      <Box
        position="absolute"
        display='flex'
        flexDirection="row"
        top={`${panelSizes.top}px`}
        left="0"
        bottom={`${panelSizes.bottom}px`}
        w={`${panelSizes.left}px`}
        bg="white"
        borderRight="1px solid"
        borderColor="gray.200"
        boxShadow="sm"
        zIndex="9"
      >
          <VStack p="4" align="stretch" h="full" flex={1}>
            <Text fontSize="md" fontWeight="600" color="gray.700" mb="4">
              Sidebar
            </Text>
            <VStack align="stretch" gap="2">
              {["Dashboard", "Projects", "Tasks", "Settings", "Profile"].map((item) => (
                <Box
                  key={item}
                  p="3"
                  borderRadius="md"
                  _hover={{ bg: "gray.50", transform: "translateX(2px)" }}
                  transition="all 0.2s"
                  cursor="pointer"
                >
                  <Text fontSize="sm" color="gray.600">
                    {item}
                  </Text>
                </Box>
              ))}
            </VStack>
          </VStack>

          <DragHandle
            onDrag={(deltaX) => updatePanelSize("left", deltaX)}
            cursor="ew-resize"
            panelType="left"
            axis="x"
          >
            <Box
              position="absolute"
              top="0"
              right="-2px"
              bottom="0"
              w="4px"
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
                <GripVertical size={16} />
              </Box>
            </Box>
          </DragHandle>
      </Box>

      {/* Right Panel */}
      <Box
        position="absolute"
        display='flex'
        flexDirection="row"
        top={`${panelSizes.top}px`}
        right="0"
        bottom={`${panelSizes.bottom}px`}
        w={`${panelSizes.right}px`}
        bg="white"
        borderLeft="1px solid"
        borderColor="gray.200"
        boxShadow="sm"
        zIndex="9"
      >
        <DragHandle
          onDrag={(deltaX) => updatePanelSize("right", -deltaX)}
          cursor="ew-resize"
          panelType="right"
          axis="x"
        >
          <Box
            position="absolute"
            top="0"
            left="-2px"
            bottom="0"
            w="4px"
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
              <GripVertical size={16} />
            </Box>
          </Box>
        </DragHandle>
        <VStack p="4" align="stretch" h="full" flex={1}>
          <Text fontSize="md" fontWeight="600" color="gray.700" mb="4">
            Properties
          </Text>
          <VStack align="stretch" gap="3">
            <Box>
              <Text fontSize="sm" fontWeight="500" color="gray.600" mb="2">
                Width
              </Text>
              <Box h="8" bg="gray.100" borderRadius="md" />
            </Box>
            <Box>
              <Text fontSize="sm" fontWeight="500" color="gray.600" mb="2">
                Height
              </Text>
              <Box h="8" bg="gray.100" borderRadius="md" />
            </Box>
            <Box>
              <Text fontSize="sm" fontWeight="500" color="gray.600" mb="2">
                Color
              </Text>
              <HStack>
                <Box w="6" h="6" bg="red.400" borderRadius="full" />
                <Box w="6" h="6" bg="blue.400" borderRadius="full" />
                <Box w="6" h="6" bg="green.400" borderRadius="full" />
              </HStack>
            </Box>
          </VStack>
        </VStack>


      </Box>

      {/* Bottom Panel */}
      <Box
        position="absolute"
        bottom="0"
        left="0"
        right="0"
        h={`${panelSizes.bottom}px`}
        bg="white"
        borderTop="1px solid"
        borderColor="gray.200"
        boxShadow="sm"
        zIndex="10"
      >

        <DragHandle
          onDrag={(_, deltaY) => updatePanelSize("bottom", -deltaY)}
          cursor="ns-resize"
          panelType="bottom"
          axis="y"
        >
          <Box
            position="absolute"
            top="-2px"
            left="0"
            right="0"
            h="4px"
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
              <GripHorizontal size={16} />
            </Box>
          </Box>
        </DragHandle>

        <VStack p="4" h="full" justify="flex-start">
          <HStack w="full" justify="space-between">
            <HStack>
              <MessageSquare size={16} color="#4A5568" />
              <Text fontSize="md" fontWeight="600" color="gray.700">
                Console
              </Text>
            </HStack>
            <Text fontSize="xs" color="gray.500">
              3 messages
            </Text>
          </HStack>
          <VStack align="stretch" w="full" gap="1" flex="1">
            <Text fontSize="xs" color="green.600" fontFamily="mono">
              ✓ Build completed successfully
            </Text>
            <Text fontSize="xs" color="blue.600" fontFamily="mono">
              → Server running on http://localhost:3000
            </Text>
            <Text fontSize="xs" color="orange.600" fontFamily="mono">
              ⚠ Warning: Component not optimized
            </Text>
          </VStack>
        </VStack>

      </Box>

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
    </Box>
  )
}

export default AppShell
