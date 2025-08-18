import { Avatar, Box, Button, HStack, Stack, Text } from '@chakra-ui/react'
import { LuBell } from 'react-icons/lu'
import type { Notification } from './data'

function formatDate(isoDateString: string) {
  const date = new Date(isoDateString)
  if (Number.isNaN(date.getTime())) return isoDateString

  return new Intl.DateTimeFormat('en-GB').format(date)
}

export const NotificationItem = (props: { data: Notification }) => {
  const { data } = props

  return (
    <Stack px="4" py="3">
      <HStack justify="space-between" align="start">
        <Avatar.Root size="2xs" colorPalette="gray">
          <Avatar.Image src={data.sender.image} />
          <Avatar.Fallback>
            <LuBell />
          </Avatar.Fallback>
        </Avatar.Root>
        <Stack gap="2" flex="1">
          <Stack gap="1">
            {data.title && <Text fontWeight="semibold">{data.title}</Text>}
            <Text color="fg.muted">{data.message}</Text>
          </Stack>
          <HStack gap="2">
            {data.actions?.buttons?.map((button, index) => (
              <Button
                size="2xs"
                key={`${button.type}-${index}`}
                variant={button.type === 'primary' ? 'solid' : 'outline'}
                colorPalette={button.type === 'secondary' ? 'gray' : undefined}
              >
                {button.content}
              </Button>
            ))}
          </HStack>
          <Text color="fg.muted" textStyle="xs">
            {formatDate(data.created_at)}
          </Text>
        </Stack>
        {!data.read && <Box rounded="full" bg="colorPalette.solid" boxSize="2" />}
      </HStack>
    </Stack>
  )
}
