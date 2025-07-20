import { DrawerResizer } from '#components/ui-plus/DrawerResizer';
import {
  Center,
  Text,
  Drawer as ChakraDrawer,
  Tabs as ChakraTabs,
  Icon as ChakraIcon,
  Heading,
  Box,
  HStack,
  Stack,
  IconButton,
  Badge,
  Button, CloseButton, Drawer, Portal

} from "@chakra-ui/react"
import { useState } from 'react';


export const Inspector = ({trigger}: any) => {

  const [width, setWidth] = useState(650)


  return (
    <Drawer.Root
      modal={false}
      closeOnEscape={true}
      contained={false}
      // open={opened}
      // onOpenChange={(e) => !e && onClose()}
      placement="end"
      trapFocus={false}
    >
      <Drawer.Trigger asChild>
        {trigger}
      </Drawer.Trigger>
      <Portal>
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content px={6} py={2} maxW={width} width={width}>
            <DrawerResizer minSize={500} maxSize={1500} onResize={setWidth} />
            <Drawer.Header>
              <Drawer.Title>Drawer Title</Drawer.Title>
            </Drawer.Header>
            <Drawer.Body>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </Drawer.Body>
            <Drawer.Footer>
              <Button variant="outline">Cancel</Button>
              <Button>Save</Button>
            </Drawer.Footer>
            <Drawer.CloseTrigger asChild>
              <CloseButton size="sm" />
            </Drawer.CloseTrigger>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  )
}
