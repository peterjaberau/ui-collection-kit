import {
  Button,
  Card,
  Clipboard,
  Heading,
  HStack,
  Input,
  InputGroup,
  Stack,
  Switch,
  Tabs,
  Text,
} from '@chakra-ui/react'
import { LuMonitor, LuTwitter, LuVideo } from 'react-icons/lu'

export const Block = () => {
  return (
    <Card.Root>
      <Card.Body gap="4">
        <HStack gap="8">
          <Stack gap="0" flex="1">
            <Heading size="md">Share link</Heading>
            <Text textStyle="sm" fontWeight="fg.muted">
              Collaborate with your team on this project.
            </Text>
          </Stack>
          <Switch.Root size="lg">
            <Switch.HiddenInput />
            <Switch.Control />
          </Switch.Root>
        </HStack>

        <ClipboardEntry value="http://localhost:3000/app/projects/123?share=true" />

        <Tabs.Root defaultValue="embed" variant="plain" size="sm" fitted>
          <Tabs.List bg="bg.muted" rounded="l3" p="1">
            <Tabs.Trigger value="embed">Embed</Tabs.Trigger>
            <Tabs.Trigger value="custom">Custom Link</Tabs.Trigger>
            <Tabs.Indicator rounded="l2" />
          </Tabs.List>

          <Tabs.Content value="embed">
            <Stack gap="3">
              {embedActions.map((item) => (
                <HStack key={item.value}>
                  <HStack textStyle="sm" fontWeight="medium" flex="1">
                    {item.icon} {item.label}
                  </HStack>
                  <Button variant="outline" size="xs">
                    {item.action}
                  </Button>
                </HStack>
              ))}
            </Stack>
          </Tabs.Content>

          <Tabs.Content value="custom">
            <Stack gap="3">
              <Text textStyle="sm" fontWeight="fg.muted">
                Customize the link to share with your team.
              </Text>
              <HStack>
                <Input size="sm" flex="1" placeholder="https://example.com/project/123" />
                <Button size="sm">Save</Button>
              </HStack>
            </Stack>
          </Tabs.Content>
        </Tabs.Root>
      </Card.Body>
    </Card.Root>
  )
}

const embedActions = [
  {
    icon: <LuMonitor />,
    label: 'Website',
    action: 'Copy code',
    value: '#',
  },
  {
    icon: <LuTwitter />,
    label: 'Embed on X',
    action: 'Post',
    value: '#',
  },
  {
    icon: <LuVideo />,
    label: 'Export GIF',
    action: 'Export',
    value: '#',
  },
]

const ClipboardEntry = (props: { value: string }) => {
  return (
    <Clipboard.Root colorPalette="gray" value={props.value}>
      <InputGroup
        endElement={
          <Clipboard.Trigger asChild>
            <Button variant="outline" size="xs" me="-2" bg="bg">
              Copy link
            </Button>
          </Clipboard.Trigger>
        }
      >
        <Clipboard.Input asChild>
          <Input variant="subtle" />
        </Clipboard.Input>
      </InputGroup>
    </Clipboard.Root>
  )
}
