'use client'

import { Box, HStack, Icon, Stack, Switch } from '@chakra-ui/react'

interface NotificationItemProps {
  icon?: React.ReactNode
  title: string
  description: string
  checked?: boolean
  onCheckedChange?: (value: boolean) => void
}

export const NotificationItem = (props: NotificationItemProps) => {
  const { icon, title, description, checked, onCheckedChange } = props
  return (
    <HStack gap="5">
      {icon && (
        <Icon alignSelf="flex-start" pos="relative" top="1" size="lg" color="fg.muted">
          {icon}
        </Icon>
      )}
      <Stack textStyle="sm" flex="1" gap="1">
        <Box fontWeight="medium">{title}</Box>
        <Box color="fg.muted">{description}</Box>
      </Stack>
      <Switch.Root
        size="lg"
        defaultChecked={checked}
        onCheckedChange={(e) => onCheckedChange?.(e.checked)}
      >
        <Switch.HiddenInput />
        <Switch.Control />
        <Switch.Label />
      </Switch.Root>
    </HStack>
  )
}
