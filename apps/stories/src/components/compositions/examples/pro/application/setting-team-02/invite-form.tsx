import { Button, Field, HStack, Input, Stack } from '@chakra-ui/react'
import { LuLink, LuSend } from 'react-icons/lu'

export const InviteForm = () => {
  return (
    <Stack gap="4">
      <Field.Root>
        <Field.Label>Invite members</Field.Label>
        <Input placeholder="member@example.com" />
      </Field.Root>
      <HStack>
        <Button variant="outline" colorPalette="gray" _icon={{ boxSize: '1em' }}>
          <LuLink />
          Copy invite link
        </Button>
        <Button _icon={{ boxSize: '1em' }}>
          <LuSend />
          Send invite
        </Button>
      </HStack>
    </Stack>
  )
}
