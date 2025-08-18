import {
  Button,
  ButtonGroup,
  Card,
  Clipboard,
  Icon,
  IconButton,
  Input,
  InputGroup,
  Switch,
} from '@chakra-ui/react'
import { LuExternalLink, LuLink, LuMessageSquare } from 'react-icons/lu'

export const Block = () => {
  return (
    <Card.Root w="full">
      <Card.Header>
        <Card.Title>Share & Collaborate</Card.Title>
      </Card.Header>
      <Card.Body gap="4">
        <Card.Description>Share this project with your team to collaborate on it.</Card.Description>

        <Switch.Root>
          <Switch.HiddenInput />
          <Switch.Label flex="1" display="flex" alignItems="center" gap="2">
            <Icon color="fg.muted">
              <LuMessageSquare />
            </Icon>
            Enable comments and suggestions
          </Switch.Label>
          <Switch.Control />
        </Switch.Root>

        <ClipboardEntry value="http://localhost:3000/app/projects/123?share=true" />

        <ButtonGroup size="sm" gap="2">
          <Button flex="1">
            <LuLink />
            Copy Link
          </Button>
          <Button flex="1" variant="subtle">
            <LuExternalLink />
            Preview
          </Button>
        </ButtonGroup>
      </Card.Body>
    </Card.Root>
  )
}

const ClipboardEntry = (props: { value: string }) => {
  return (
    <Clipboard.Root colorPalette="gray" value={props.value}>
      <InputGroup
        endElement={
          <Clipboard.Trigger asChild>
            <IconButton variant="surface" size="xs" me="-2">
              <Clipboard.Indicator />
            </IconButton>
          </Clipboard.Trigger>
        }
      >
        <Clipboard.Input asChild>
          <Input />
        </Clipboard.Input>
      </InputGroup>
    </Clipboard.Root>
  )
}
