import {
  Button,
  Card,
  Clipboard,
  Field,
  Flex,
  Input,
  InputGroup,
  QrCode,
  Separator,
  Stack,
  Text,
} from '@chakra-ui/react'
import { LuExternalLink, LuLink, LuLock } from 'react-icons/lu'
import { MemberInvite } from './member-invite'

const appUrl = 'http://chakra-v3-docs-12u7ugid6-chakra-ui.vercel.app'

export const Block = () => {
  return (
    <Card.Root w="full">
      <Card.Header>
        <Card.Title>Share & Collaborate</Card.Title>
      </Card.Header>

      <Card.Body gap="8">
        <Flex gap="4">
          <QrCode.Root size="sm" value={appUrl}>
            <QrCode.Frame />
          </QrCode.Root>

          <Stack flex="1">
            <ClipboardEntry value={appUrl} />
            <Button size="sm" variant="outline">
              Copy app link
            </Button>
          </Stack>
        </Flex>

        <Separator />

        <Stack>
          <Text textStyle="md" fontWeight="semibold">
            Share with your team
          </Text>
          <Field.Root>
            <InputGroup
              endElement={
                <Button bg="bg" size="sm" variant="outline" me="-2.5">
                  Send Invite
                </Button>
              }
            >
              <Input variant="subtle" placeholder="Enter email" />
            </InputGroup>
            <Field.HelperText>
              We'll send an invite to the email address you provide.
            </Field.HelperText>
          </Field.Root>
        </Stack>

        <Stack gap="4">
          <MemberInvite
            member={{
              name: 'John Doe',
              email: 'john.doe@example.com',
              accepted: false,
              role: 'admin',
              avatar: 'https://via.placeholder.com/150',
            }}
          />
          <MemberInvite
            member={{
              name: 'Jane Doe',
              email: 'jane.doe@example.com',
              accepted: true,
              role: 'member',
              avatar: 'https://via.placeholder.com/150',
            }}
          />
        </Stack>

        <Button variant="outline" w="auto">
          <LuLink />
          Create private link
        </Button>
      </Card.Body>
    </Card.Root>
  )
}

const ClipboardEntry = (props: { value: string }) => {
  return (
    <Clipboard.Root colorPalette="gray" value={props.value} w="full">
      <InputGroup flex="1" startElement={<LuLock />} endElement={<LuExternalLink />}>
        <Clipboard.Input asChild>
          <Input variant="subtle" />
        </Clipboard.Input>
      </InputGroup>
    </Clipboard.Root>
  )
}
