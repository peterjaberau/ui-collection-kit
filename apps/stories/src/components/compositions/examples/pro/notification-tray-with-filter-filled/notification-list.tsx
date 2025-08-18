import { Stack } from '@chakra-ui/react'
import type { Notification } from './data'
import { NotificationItem } from './notification-item'

export const NotificationList = (props: { data: Notification[] }) => {
  const { data } = props

  return (
    <Stack gap="0" divideY="1px" overflowY="auto" maxH="sm">
      {data.map((notification) => (
        <NotificationItem key={notification.id} data={notification} />
      ))}
    </Stack>
  )
}
