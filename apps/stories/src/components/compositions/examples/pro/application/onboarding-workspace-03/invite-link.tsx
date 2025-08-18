import { Card, Clipboard, IconButton, Input, InputGroup } from '@chakra-ui/react'

export const InviteLink = (props: { value: string }) => {
  return (
    <Card.Root size="sm" mt="5">
      <Card.Body>
        <Card.Description mb="2">
          Share this link to invite them to this workspace.
        </Card.Description>
        <Clipboard.Root value={props.value}>
          <InputGroup
            width="full"
            endElement={
              <Clipboard.Trigger asChild>
                <IconButton size="xs" variant="ghost" colorPalette="gray" me="-2">
                  <Clipboard.Indicator />
                </IconButton>
              </Clipboard.Trigger>
            }
          >
            <Clipboard.Input asChild>
              <Input pe="10" />
            </Clipboard.Input>
          </InputGroup>
        </Clipboard.Root>
      </Card.Body>
    </Card.Root>
  )
}
