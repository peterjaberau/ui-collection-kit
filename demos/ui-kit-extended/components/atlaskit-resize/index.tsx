import { Box, Flex } from "@chakra-ui/react"
import { FlyoutPanel } from "./flyout-panel"

const ContentPanel = ({ children }: any) => {
  return (
    <Box flex="1" p="4">
      {children}
    </Box>
  )
}

export function AtlaskitResize() {
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
      <FlyoutPanel side="top">top panel</FlyoutPanel>
      <Flex flex="1" direction="row" minH="0">
        <FlyoutPanel side="left">left panel</FlyoutPanel>
        <ContentPanel>content panel</ContentPanel>
        <FlyoutPanel side="right">right panel</FlyoutPanel>
      </Flex>
      <FlyoutPanel side="bottom">bottom panel</FlyoutPanel>
    </Flex>
  )
}
