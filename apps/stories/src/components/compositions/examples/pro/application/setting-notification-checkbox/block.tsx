import { Container, Stack, Text } from '@chakra-ui/react'
import { NotificationItem } from './notification-item'

export const Block = () => {
  return (
    <Container maxW="2xl" py="20">
      <Stack gap="8">
        <Stack gap="1">
          <Text fontWeight="semibold" textStyle="lg">
            Notification Methods
          </Text>
          <Text color="fg.muted">Choose how you want to receive notifications</Text>
        </Stack>

        <Stack divideY="1px">
          <NotificationItem
            title="Beta feedback"
            description="Participate in beta testing and provide feedback"
            value={[
              { type: 'slack', enabled: true },
              { type: 'email', enabled: false },
            ]}
          />
          <NotificationItem
            title="Product updates"
            description="You will receive updates about new features and updates"
            value={[{ type: 'email', enabled: true }]}
          />
          <NotificationItem
            title="Security alerts"
            description="You will receive alerts about security issues"
            value={[
              { type: 'email', enabled: true },
              { type: 'slack', enabled: true },
            ]}
          />
          <NotificationItem
            title="Assigned Task"
            description="You will be notified when you are assigned a new task"
            value={[
              { type: 'slack', enabled: true },
              { type: 'email', enabled: true },
            ]}
          />
          <NotificationItem
            title="Community event"
            description="Get notified about upcoming community events and meetups"
            value={[{ type: 'email', enabled: false }]}
          />
        </Stack>
      </Stack>
    </Container>
  )
}
