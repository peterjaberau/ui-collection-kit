import {
  Button,
  Card,
  Clipboard,
  HStack,
  Input,
  InputGroup,
  QrCode,
  Separator,
  Switch,
  Text,
  VStack,
} from '@chakra-ui/react'

const appUrl = 'http://chakra-v3-docs-12u7ugid6-chakra-ui.vercel.app'

export const Block = () => {
  return (
    <Card.Root w="full">
      <Card.Header>
        <Card.Title>Share & Collaborate</Card.Title>
      </Card.Header>
      <Card.Body gap="4">
        <Card.Description>Your app is now published and live.</Card.Description>

        <ClipboardEntry value={appUrl} />

        <Switch.Root defaultChecked mt="4">
          <Switch.HiddenInput />
          <Switch.Label>Anyone with the link can view the app.</Switch.Label>
          <Switch.Control />
        </Switch.Root>

        <VStack mt="4" textAlign="center">
          <HStack alignSelf="stretch">
            <Separator flex="1" />
            <Text fontWeight="medium" textStyle="sm">
              or scan to install
            </Text>
            <Separator flex="1" />
          </HStack>
          <QrCode.Root size="lg" value={appUrl}>
            <QrCode.Frame />
          </QrCode.Root>
          <Text textStyle="sm" color="fg.muted" maxW="20ch">
            Scan this code with your phone to preview the app.
          </Text>
        </VStack>
      </Card.Body>
    </Card.Root>
  )
}

const ClipboardEntry = (props: { value: string }) => {
  const value = props.value.replace('.vercel.app', '')
  return (
    <Clipboard.Root colorPalette="gray" value={value} w="full">
      <HStack gap="3">
        <InputGroup flex="1" endElement={'.vercel.app'}>
          <Clipboard.Input pe="10ch" asChild>
            <Input />
          </Clipboard.Input>
        </InputGroup>
        <Clipboard.Trigger asChild>
          <Button variant="surface" size="sm" minW="10ch">
            <Clipboard.Indicator copied="Copied!">Copy</Clipboard.Indicator>
          </Button>
        </Clipboard.Trigger>
      </HStack>
    </Clipboard.Root>
  )
}
