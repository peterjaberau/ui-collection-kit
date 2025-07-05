"use client"
import { Box, Flex, HStack, Stack } from "@chakra-ui/react"
import { FlyoutPanel } from "./flyout-panel"

const ContentPanel = ({ children }: any) => {
  return (
    <Box flex="1" p="4">
      {children}
    </Box>
  )
}

export function FloatingPanelResize() {
  return (
    <Flex
      direction="column"
      w="100wh"
      h="100vh"
      border="1px solid"
      borderColor="gray.200"
      borderRadius="md"
      bg="white"
      overflow="hidden"
    >
      <HStack shadow={"sm"}>
        <Box p={4}>Top panel content</Box>
      </HStack>
      <HStack flex="1" w='full' alignItems="stretch">
        <Stack shadow={"sm"}>
          <FlyoutPanel side="left">
            <Box p={4}>left content</Box>
          </FlyoutPanel>
        </Stack>
        <Stack shadow={"sm"} flex={1}><Box p={4}> content</Box></Stack>
        <Stack shadow={"sm"}>
          <Box p={4}>Right panel content</Box>
        </Stack>
      </HStack>

      <HStack shadow={"sm"}>
        <Box p={4}>Bottom panel content</Box>
      </HStack>
    </Flex>
  )
}

// export function FloatingPanelResize() {
//   return (
//     <Flex
//       direction="column"
//       w="100wh"
//       h="100vh"
//       border="1px solid"
//       borderColor="gray.200"
//       borderRadius="md"
//       bg="white"
//       overflow="hidden"
//     >
//       <FlyoutPanel side="top">
//         <Box p={4}>Top panel content</Box>
//       </FlyoutPanel>
//       <Flex flex="1" direction="row" minH="0">
//         <FlyoutPanel side="left">
//           <Box p={4}>Left panel content</Box>
//         </FlyoutPanel>
//         <ContentPanel>using pragmatic-drag-and-drop</ContentPanel>
//         <FlyoutPanel side="right">
//           <Box p={4}>Right panel content</Box>
//         </FlyoutPanel>
//       </Flex>
//
//       <FlyoutPanel side="bottom">
//         <Box p={4}>Bottom panel content</Box>
//       </FlyoutPanel>
//
//     </Flex>
//   )
// }
