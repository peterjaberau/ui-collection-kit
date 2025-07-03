"use client"
import React, { useState, useRef, useCallback } from "react"
import { Box, VStack, HStack, Text, Flex } from "@chakra-ui/react"
import { GripHorizontal, GripVertical, Menu, Settings, BarChart3, MessageSquare } from "lucide-react"

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
  className?: string
}

function DragHandle({ onDrag, cursor, children, className }: DragHandleProps) {
  const isDragging = useRef(false)
  const startPos = useRef({ x: 0, y: 0 })

  const handleMouseDown = useCallback(
    (e: React.MouseEvent) => {
      isDragging.current = true
      startPos.current = { x: e.clientX, y: e.clientY }

      const handleMouseMove = (e: MouseEvent) => {
        if (!isDragging.current) return

        const deltaX = e.clientX - startPos.current.x
        const deltaY = e.clientY - startPos.current.y

        onDrag(deltaX, deltaY)
        startPos.current = { x: e.clientX, y: e.clientY }
      }

      const handleMouseUp = () => {
        isDragging.current = false
        document.removeEventListener("mousemove", handleMouseMove)
        document.removeEventListener("mouseup", handleMouseUp)
      }

      document.addEventListener("mousemove", handleMouseMove)
      document.addEventListener("mouseup", handleMouseUp)
    },
    [onDrag],
  )

  return (
    <Box className={className} cursor={cursor} onMouseDown={handleMouseDown} userSelect="none">
      {children}
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

  const updatePanelSize = useCallback((panel: keyof PanelState, delta: number) => {
    setPanelSizes((prev) => ({
      ...prev,
      [panel]: Math.max(50, Math.min(400, prev[panel] + delta)),
    }))
  }, [])

  return (
    <Box h="100vh" w="100vw" bg="gray.50" overflow="hidden" position="relative">
      {/* Top Panel */}
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        h={`${panelSizes.top}px`}
        bg="white"
        borderBottom="1px solid"
        borderColor="gray.200"
        boxShadow="sm"
        zIndex="10"
      >
        <Flex h="full" align="center" justify="space-between" px="6">
          <HStack>
            <Menu size={20} color="#4A5568" />
            <Text fontSize="lg" fontWeight="600" color="gray.700">
              Navigation Bar
            </Text>
          </HStack>
          <HStack>
            <Settings size={18} color="#4A5568" />
            <BarChart3 size={18} color="#4A5568" />
          </HStack>
        </Flex>

        <DragHandle onDrag={(_, deltaY) => updatePanelSize("top", deltaY)} cursor="ns-resize">
          <Box
            position="absolute"
            bottom="-2px"
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
      </Box>

      {/* Left Panel */}
      <Box
        position="absolute"
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
        <VStack p="4" align="stretch" h="full">
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

        <DragHandle onDrag={(deltaX) => updatePanelSize("left", deltaX)} cursor="ew-resize">
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
        <VStack p="4" align="stretch" h="full">
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

        <DragHandle onDrag={(deltaX) => updatePanelSize("right", -deltaX)} cursor="ew-resize">
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

        <DragHandle onDrag={(_, deltaY) => updatePanelSize("bottom", -deltaY)} cursor="ns-resize">
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
