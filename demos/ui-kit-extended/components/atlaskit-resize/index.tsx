import { Badge, Box, Flex, Stack } from "@chakra-ui/react"
import { FlyoutPanel } from "./flyout-panel"
import AppLayout from "#components/app-layout"

const ContentPanel = ({ children }: any) => {
  return (
    <Stack flex={1} overflow={"auto"} bg={"gray.200"}>
      {children}
    </Stack>
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
        <Stack h="full" flex="1" overflow="hidden">
          <ContentPanel>
            <Box>
              <Box w={"200px"} h={"200px"} bg={"red.500"}></Box>
              <Box w={"200px"} h={"200px"} bg={"red.500"}></Box>
              <Box w={"200px"} h={"200px"} bg={"red.500"}></Box>
              <Box w={"200px"} h={"200px"} bg={"red.500"}></Box>
            </Box>
          </ContentPanel>
          <FlyoutPanel side="bottom">bottom panel</FlyoutPanel>
        </Stack>

        <FlyoutPanel side="right">right panel</FlyoutPanel>
      </Flex>
    </Flex>
  )
}

export function AtlasKitResizeWithAppLayout() {
  return (
    <AppLayout
      header={{
        start: (
          <>
            <Badge variant="solid">header</Badge>
            <Badge variant="outline">start</Badge>
          </>
        ),
        center: (
          <>
            <Badge variant="solid">header</Badge>
            <Badge variant="outline">center</Badge>
          </>
        ),
        end: (
          <>
            <Badge variant="solid">header</Badge>
            <Badge variant="outline">end</Badge>
          </>
        ),
      }}
      footer={{
        start: (
          <>
            <Badge variant="solid">footer</Badge>
            <Badge variant="outline">start</Badge>
          </>
        ),
        center: (
          <>
            <Badge variant="solid">footer</Badge>
            <Badge variant="outline">center</Badge>
          </>
        ),
        end: (
          <>
            <Badge variant="solid">footer</Badge>
            <Badge variant="outline">end</Badge>
          </>
        ),
      }}
      leftBar={{
        start: (
          <>
            <Badge variant="solid">LB</Badge>
            <Badge variant="outline">start</Badge>
          </>
        ),
        center: (
          <>
            <Badge variant="solid">LB</Badge>
            <Badge variant="outline">center</Badge>
          </>
        ),
        end: (
          <>
            <Badge variant="solid">LB</Badge>
            <Badge variant="outline">end</Badge>
          </>
        ),
      }}
      left={{
        propSizes: {
          start: 250,
          min: 150,
          max: 450,
        },

        start: (
          <>
            <Badge variant="solid">Left</Badge>
            <Badge variant="outline">start</Badge>
          </>
        ),
        center: (
          <>
            <Badge variant="solid">Left</Badge>
            <Badge variant="outline">center</Badge>
          </>
        ),
        end: (
          <>
            <Badge variant="solid">Left</Badge>
            <Badge variant="outline">end</Badge>
          </>
        ),
      }}
      main={<div>{/*<NavigationBarTop />*/}</div>}
      right={{
        propSizes: {
          start: 300,
          min: 150,
          max: 600,
        },
        start: (
          <>
            <Badge variant="solid">Right</Badge>
            <Badge variant="outline">start</Badge>
          </>
        ),
        center: (
          <>
            <Badge variant="solid">Right</Badge>
            <Badge variant="outline">center</Badge>
          </>
        ),
        end: (
          <>
            <Badge variant="solid">Right</Badge>
            <Badge variant="outline">end</Badge>
          </>
        ),
      }}
      rightBar={{
        start: (
          <>
            <Badge variant="solid">RB</Badge>
            <Badge variant="outline">start</Badge>
          </>
        ),
        center: (
          <>
            <Badge variant="solid">RB</Badge>
            <Badge variant="outline">center</Badge>
          </>
        ),
        end: (
          <>
            <Badge variant="solid">RB</Badge>
            <Badge variant="outline">end</Badge>
          </>
        ),
      }}
    />
  )
}
