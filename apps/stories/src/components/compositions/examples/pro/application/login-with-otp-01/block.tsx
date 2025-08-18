import {
  Button,
  Container,
  Heading,
  Link,
  PinInput,
  Span,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react'
import { LuArrowRight } from 'react-icons/lu'
import { Logo } from './logo'

export const Block = () => (
  <Container maxW="md" py={{ base: '12', md: '24' }}>
    <Stack gap="8">
      <Logo />
      <Stack gap={{ base: '2', md: '3' }} textAlign="center">
        <Heading size={{ base: '2xl', md: '3xl' }}>Confirm your email</Heading>
        <Text color="fg.muted">
          We sent a code to your email address{' '}
          <Span color="fg" fontWeight="medium">
            example@email.com
          </Span>
        </Text>
      </Stack>

      <VStack gap="6">
        <PinInput.Root size="xl" placeholder="">
          <PinInput.HiddenInput />
          <PinInput.Control>
            <PinInput.Input index={0} />
            <PinInput.Input index={1} />
            <PinInput.Input index={2} />
            <PinInput.Input index={3} />
            <PinInput.Input index={4} />
            <PinInput.Input index={5} />
          </PinInput.Control>
        </PinInput.Root>
        <Text textStyle="sm" color="fg.muted" textAlign="center">
          Didn't receive the code?{' '}
          <Link variant="underline" href="#">
            Resend it
          </Link>
        </Text>
      </VStack>

      <Button>
        Continue <LuArrowRight />
      </Button>
    </Stack>
  </Container>
)
