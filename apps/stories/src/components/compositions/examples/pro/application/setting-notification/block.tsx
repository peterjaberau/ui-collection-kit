import { Container, Stack, Text } from '@chakra-ui/react'
import { LuMail, LuPhone, LuSlack } from 'react-icons/lu'
import { activityUpdates, productUpdates } from './data'
import { EmailFrequency } from './email-frequency'
import { NotificationItem } from './notification-item'

export const Block = () => {
  return (
    <Container maxW="2xl" py="20">
      <Stack gap="12">
        <Stack gap="6">
          <Stack gap="1">
            <Text fontWeight="semibold" textStyle="lg">
              Notification Methods
            </Text>
            <Text color="fg.muted">Where would you like to receive notifications?</Text>
          </Stack>
          <Stack gap="6">
            <NotificationItem
              icon={<LuMail />}
              title="Email"
              description="Receive notifications via email"
              checked={true}
            />
            <NotificationItem
              icon={<LuSlack />}
              title="Slack"
              description="Receive notifications via Slack"
              checked={false}
            />
            <NotificationItem
              icon={<LuPhone />}
              title="Mobile"
              description="Receive mobile notifications"
              checked={false}
            />
            <EmailFrequency />
          </Stack>
        </Stack>

        <Stack gap="6">
          <Stack gap="1">
            <Text fontWeight="semibold" textStyle="lg">
              App Updates
            </Text>
            <Text color="fg.muted">Let us know what app updates you'd like to receive</Text>
          </Stack>
          <Stack gap="6">
            {productUpdates.map((item) => (
              <NotificationItem
                key={item.value}
                title={item.title}
                description={item.description}
                checked={item.enabled}
              />
            ))}
          </Stack>
        </Stack>

        <Stack gap="6">
          <Stack gap="1">
            <Text fontWeight="semibold" textStyle="lg">
              Activity Updates
            </Text>
            <Text color="fg.muted">Let us know what activity updates you'd like to receive</Text>
          </Stack>
          <Stack gap="6">
            {activityUpdates.map((item) => (
              <NotificationItem
                key={item.value}
                title={item.title}
                description={item.description}
                checked={item.enabled}
              />
            ))}
          </Stack>
        </Stack>
      </Stack>
    </Container>
  )
}
