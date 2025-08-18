'use client'

import { Button, Flex, HStack, IconButton, Popover, Portal, Stack, Text } from '@chakra-ui/react'
import { useState } from 'react'
import { LuBell, LuCircleCheck } from 'react-icons/lu'
import { notifications } from './data'
import { NotificationList } from './notification-list'

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
    <Stack borderBottomWidth="1px">
      <HStack justify="space-between" py="2" px="4">
        <Text textStyle="sm" fontWeight="medium">
          Notifications
        </Text>
        <Button variant="ghost" colorPalette="gray" size="xs">
          <LuCircleCheck />
          Mark all as read
        </Button>
      </HStack>
    </Stack>
  )
}

const Content = () => {
  return <NotificationList data={notifications} />
}
