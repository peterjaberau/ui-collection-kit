import { Button, Clipboard, Input, InputGroup } from '@chakra-ui/react'
import { LuClipboard } from 'react-icons/lu'

export const ClipboardEntry = (props: { value: string }) => {
  return (
    <Clipboard.Root colorPalette="gray" value={props.value} w="full">
      <InputGroup
        flex="1"
        endElement={
          <Button size="sm" variant="outline" bg="bg.panel" me="-2.5">
            <LuClipboard />
            Copy
          </Button>
        }
      >
        <Clipboard.Input asChild>
          <Input variant="subtle" />
        </Clipboard.Input>
      </InputGroup>
    </Clipboard.Root>
  )
}
