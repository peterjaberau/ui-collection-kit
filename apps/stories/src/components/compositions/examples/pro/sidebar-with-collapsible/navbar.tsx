import type { ContainerProps } from '@chakra-ui/react'
import { CloseButton, Container, Drawer, HStack, IconButton, Portal } from '@chakra-ui/react'
import { LuAlignRight } from 'react-icons/lu'
import { Logo } from './logo'
import { Sidebar } from './sidebar'

export const Navbar = (props: ContainerProps) => {
  return (
    <Container py="2.5" background="bg.panel" borderBottomWidth="1px" {...props}>
      <HStack justify="space-between">
        <Logo />
        <Drawer.Root placement="start">
          <Drawer.Trigger asChild>
            <IconButton aria-label="Open Menu" variant="ghost" colorPalette="gray">
              <LuAlignRight />
            </IconButton>
          </Drawer.Trigger>
          <Portal>
            <Drawer.Backdrop />
            <Drawer.Positioner>
              <Drawer.Content>
                <Drawer.CloseTrigger asChild>
                  <CloseButton size="sm" colorPalette="gray" />
                </Drawer.CloseTrigger>
                <Sidebar />
              </Drawer.Content>
            </Drawer.Positioner>
          </Portal>
        </Drawer.Root>
      </HStack>
    </Container>
  )
}
