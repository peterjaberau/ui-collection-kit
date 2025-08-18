import { Checkbox, Flex, HStack, Stack, Text } from '@chakra-ui/react'

interface NotificationItemProps {
  title: string
  description?: string
  value: Array<{ type: 'slack' | 'email'; enabled: boolean }>
}

export const NotificationItem = (props: NotificationItemProps) => {
  const { title, description, value } = props
  const sortedValue = [...value].sort((a, b) => {
    if (a.type === 'email') return 1
    if (b.type === 'email') return -1
    return 0
  })
  return (
    <Flex gap="2" py="4">
      <Stack gap="1" flex="1">
        <Text fontWeight="medium">{title}</Text>
        <Text color="fg.muted" fontWeight="normal" textStyle="sm">
          {description}
        </Text>
      </Stack>
      <HStack gap="6" alignSelf="flex-start">
        {sortedValue.map((item) => (
          <Checkbox.Root size="sm" key={item.type} defaultChecked={item.enabled}>
            <Checkbox.HiddenInput />
            <Checkbox.Control />
            <Checkbox.Label textTransform="capitalize">{item.type}</Checkbox.Label>
          </Checkbox.Root>
        ))}
      </HStack>
    </Flex>
  )
}
