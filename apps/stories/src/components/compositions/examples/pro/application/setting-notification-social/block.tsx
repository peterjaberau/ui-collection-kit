import { Card, Container, Field, RadioGroup, Stack, Text } from '@chakra-ui/react'
import {
  LuAtSign,
  LuBellOff,
  LuBellRing,
  LuInfo,
  LuMessageCircle,
  LuMessageSquarePlus,
  LuSpeaker,
  LuTags,
} from 'react-icons/lu'
import { NotificationRadioItem } from './notification-radio-item'
import { NotificationSwitchItem } from './notification-switch-item'

export const Block = () => {
  return (
    <Container maxW="2xl" py="20">
      <Stack gap="12">
        <Stack gap="4">
          <Text fontWeight="semibold" textStyle="lg">
            Notification Methods
          </Text>
          <Stack gap="6">
            <NotificationSwitchItem
              title="Enable desktop notifications"
              description="Whether you want to receive notifications on your desktop"
              checked={true}
            />
            <NotificationSwitchItem
              title="Enable unread notifications"
              description="Display unread notifications in the sidebar"
              checked={false}
            />
            <Field.Root gap="3">
              <Field.Label>Notify me about</Field.Label>
              <RadioGroup.Root size="sm" defaultValue="new-messages">
                <Stack gap="3">
                  <NotificationRadioItem
                    icon={<LuMessageSquarePlus />}
                    title="All new messages"
                    description="Receive notifications for all new messages"
                    value="new-messages"
                  />

                  <NotificationRadioItem
                    icon={<LuAtSign />}
                    title="Mentions Only"
                    description="Only receive notifications when you are mentioned"
                    value="mentions-only"
                  />

                  <NotificationRadioItem
                    icon={<LuBellOff />}
                    title="Nothing"
                    description="Don&apos;t receive any notifications"
                    value="nothing"
                  />
                </Stack>
              </RadioGroup.Root>
            </Field.Root>
          </Stack>
        </Stack>

        <Stack gap="4">
          <Text fontWeight="semibold" textStyle="lg">
            Notification type
          </Text>
          <Card.Root>
            <Card.Body gap="6">
              <NotificationSwitchItem
                icon={<LuMessageCircle />}
                title="New messages, comments, and mentions"
                checked={true}
              />
              <NotificationSwitchItem
                icon={<LuAtSign />}
                title="Social emails and updates"
                checked={false}
              />
              <NotificationSwitchItem
                icon={<LuSpeaker />}
                title="Product announcements"
                checked={false}
              />
              <NotificationSwitchItem
                icon={<LuInfo />}
                title="Tips and tutorials"
                checked={false}
              />
              <NotificationSwitchItem
                icon={<LuTags />}
                title="Deals and promotions"
                checked={false}
              />
              <NotificationSwitchItem
                icon={<LuBellRing />}
                title="Reminders and alerts"
                checked={false}
              />
            </Card.Body>
          </Card.Root>
        </Stack>
      </Stack>
    </Container>
  )
}
