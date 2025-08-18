import {
  Button,
  Card,
  Clipboard,
  Container,
  Heading,
  HStack,
  Input,
  InputGroup,
  Stack,
  Text,
} from '@chakra-ui/react'

export const Block = () => {
  const apiKey = 'sk-proj-jGk9HVGeOjneg07KIPImFc9ZFW'

  return (
    <Container py="20" maxW="lg">
      <Card.Root size="sm">
        <Card.Header pt="8" pb="2">
          <Stack gap="2">
            <Heading as="h2" textStyle="xl">
              Save your key
            </Heading>
            <Text color="fg.muted">
              Please save your secret key in a safe place since you won't be able to view it again.
            </Text>
          </Stack>
        </Card.Header>

        <Card.Body>
          <Stack gap="6">
            <ClipboardField value={apiKey} />

            <Stack gap="1">
              <Heading as="h3" textStyle="sm" color="fg.muted">
                Permissions
              </Heading>
              <Text>Read and write API resources</Text>
            </Stack>
          </Stack>
        </Card.Body>

        <Card.Footer justifyContent="flex-end" pb="6">
          <HStack>
            <Button variant="solid">Done</Button>
          </HStack>
        </Card.Footer>
      </Card.Root>
    </Container>
  )
}

const ClipboardField = (props: { value: string }) => {
  const { value } = props

  return (
    <Clipboard.Root value={value} colorPalette="gray">
      <InputGroup
        endElement={
          <Clipboard.Trigger asChild me="-2">
            <Button size="xs" variant="surface" colorPalette="gray">
              <Clipboard.Indicator />
              Copy
            </Button>
          </Clipboard.Trigger>
        }
      >
        <Clipboard.Input asChild>
          <Input fontFamily="mono" readOnly />
        </Clipboard.Input>
      </InputGroup>
    </Clipboard.Root>
  )
}
