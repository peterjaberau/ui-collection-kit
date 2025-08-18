'use client'

import {
  Badge,
  Button,
  Flex,
  HStack,
  IconButton,
  Popover,
  Portal,
  Tabs,
  Text,
} from '@chakra-ui/react'
import { useState } from 'react'
import { LuBell, LuCircleCheck } from 'react-icons/lu'
import { notifications } from './data'
import { NotificationTrayEmptyState } from './empty-state'
import { NotificationList } from './notification-list'

export const Block = () => {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <Flex py="6" w="full" justifyContent="center" alignItems="center">
      <Popover.Root open={isOpen} onOpenChange={(d) => setIsOpen(d.open)}>
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

const Header = () => (
  <HStack justify="space-between" px="4" py="3">
    <Text textStyle="sm" fontWeight="medium">
      Notifications
    </Text>
    <Button variant="ghost" colorPalette="gray" size="xs">
      <LuCircleCheck />
      Mark all as read
    </Button>
  </HStack>
)

const Content = () => {
  return (
    <Tabs.Root defaultValue="all" size="sm" variant="line">
      <Tabs.List px="4">
        <Tabs.Trigger value="all">
          All <Badge ms="1">{notifications.length}</Badge>
        </Tabs.Trigger>
        <Tabs.Trigger value="new">New</Tabs.Trigger>
        <Tabs.Trigger value="archived">Archived</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content py="0" value="all">
        <NotificationList data={notifications} />
      </Tabs.Content>
      <Tabs.Content py="0" value="new">
        <NotificationList data={notifications.filter((n) => !n.read)} />
      </Tabs.Content>
      <Tabs.Content py="3" value="archived">
        <NotificationTrayEmptyState />
      </Tabs.Content>
    </Tabs.Root>
  )
}
