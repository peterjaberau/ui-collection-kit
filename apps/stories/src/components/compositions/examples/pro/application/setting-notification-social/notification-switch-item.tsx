'use client'

import { Box, HStack, Icon, Stack, Switch } from '@chakra-ui/react'

interface NotificationSwitchItemProps {
  icon?: React.ReactNode
  title: string
  description?: string
  checked?: boolean
  onCheckedChange?: (value: boolean) => void
}

export const NotificationSwitchItem = (props: NotificationSwitchItemProps) => {
  const { icon, title, description, checked, onCheckedChange } = props
  return (
    <HStack gap="4">
      {icon && (
        <Icon size="sm" color="fg.subtle">
          {icon}
        </Icon>
      )}
      {title && description && (
        <Stack textStyle="sm" flex="1" gap="1">
          <Box fontWeight="medium">{title}</Box>
          <Box color="fg.muted">{description}</Box>
        </Stack>
      )}
      {title && !description && (
        <Box flex="1" textStyle="sm">
          {title}
        </Box>
      )}

      <Switch.Root defaultChecked={checked} onCheckedChange={(e) => onCheckedChange?.(e.checked)}>
        <Switch.HiddenInput />
        <Switch.Control />
        <Switch.Label />
      </Switch.Root>
    </HStack>
  )
}
