'use client'

import { Button, Flex, HStack, IconButton, Popover, Portal, Tabs, Text } from '@chakra-ui/react'
import { useState } from 'react'
import { LuBell, LuCircleCheck } from 'react-icons/lu'
import { NotificationTrayEmptyState } from './empty-state'

export const Block = () => {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <Flex py="6" w="full" justifyContent="center" alignItems="center">
      <Popover.Root open={isOpen} onOpenChange={(details) => setIsOpen(details.open)}>
        <Popover.Trigger asChild>
          <IconButton aria-label="Notifications" variant="ghost" colorPalette="gray" size="sm">
            <LuBell />
          </IconButton>
        </Popover.Trigger>
        <Portal>
          <Popover.Positioner>
            <Popover.Content minW="sm" boxShadow="sm">
              <Popover.Body p="0">
                <Header />
                <Content />
              </Popover.Body>
            </Popover.Content>
          </Popover.Positioner>
        </Portal>
      </Popover.Root>
    </Flex>
  )
}

const Header = () => {
  return (
    <HStack justify="space-between" px="4" py="3">
      <HStack gap="3">
        <Text textStyle="sm" fontWeight="medium">
          Notifications
        </Text>
      </HStack>
      <Button disabled variant="ghost" colorPalette="gray" size="xs">
        <LuCircleCheck />
        Mark all as read
      </Button>
    </HStack>
  )
}

const Content = () => {
  return (
    <Tabs.Root defaultValue="all" size="sm" variant="line">
      <Tabs.List px="4">
        <Tabs.Trigger value="all">All</Tabs.Trigger>
        <Tabs.Trigger value="new">New</Tabs.Trigger>
        <Tabs.Trigger value="archived">Archived</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="all">
        <NotificationTrayEmptyState />
      </Tabs.Content>
      <Tabs.Content value="new">
        <NotificationTrayEmptyState />
      </Tabs.Content>
      <Tabs.Content value="archived">
        <NotificationTrayEmptyState />
      </Tabs.Content>
    </Tabs.Root>
  )
}
