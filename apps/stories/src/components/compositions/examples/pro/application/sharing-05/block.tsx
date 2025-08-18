import { Button, Card, HStack, Input, InputGroup, Separator, Stack, Text } from '@chakra-ui/react'
import { LuCode, LuLink2, LuUser, LuUsers } from 'react-icons/lu'
import { AccessLevel } from './access-level'
import { ClipboardEntry } from './clipboard-entry'
import { MemberInvite } from './member-invite'

const appUrl = 'http://chakra-v3-docs-12u7ugid6-chakra-ui.vercel.app'

export const Block = () => {
  return (
    <Card.Root w="full">
      <Card.Body gap="2.5">
        <HStack textStyle="sm" _icon={{ boxSize: '4' }}>
          <LuUser />
          Change permissions
        </HStack>
        <AccessLevel />

        <InputGroup
          endElement={
            <Button bg="bg" size="sm" variant="outline" me="-2.5">
              <LuUsers />
              Invite
            </Button>
          }
        >
          <Input variant="subtle" placeholder="Add collaborator email" />
        </InputGroup>

        <Stack gap="2.5" mt="2">
          <MemberInvite
            member={{
              name: 'John Doe',
              email: 'john.doe@example.com',
              accepted: false,
              accessLevel: 'can edit',
              avatar: 'https://via.placeholder.com/150',
            }}
          />
          <MemberInvite
            member={{
              name: 'Jane Doe',
              email: 'jane.doe@example.com',
              accepted: true,
              accessLevel: 'can view',
              avatar: 'https://via.placeholder.com/150',
            }}
          />
        </Stack>
      </Card.Body>

      <Separator />

      <Card.Body gap="2.5">
        <HStack textStyle="sm" flex="1" _icon={{ boxSize: '4' }}>
          <LuLink2 />
          Share link
        </HStack>
        <ClipboardEntry value={appUrl} />
      </Card.Body>

      <Separator />

      <Card.Footer mt="2">
        <Text textStyle="sm" flex="1">
          Embed in your app
        </Text>
        <Button variant="surface" size="sm">
          <LuCode /> Embed
        </Button>
      </Card.Footer>
    </Card.Root>
  )
}
