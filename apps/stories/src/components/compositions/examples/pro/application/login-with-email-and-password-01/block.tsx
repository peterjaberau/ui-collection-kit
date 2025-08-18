import {
  Button,
  Checkbox,
  Container,
  Field,
  Heading,
  HStack,
  Input,
  Link,
  Stack,
  Text,
} from '@chakra-ui/react'
import { BsGoogle } from 'react-icons/bs'
import { Logo } from './logo'
import { PasswordInput } from '@/components/ui/password-input'

export const Block = () => (
  <Container maxW="md" py={{ base: '12', md: '24' }}>
    <Stack gap="8">
      <Logo />
      <Stack gap={{ base: '2', md: '3' }} textAlign="center">
        <Heading size={{ base: '2xl', md: '3xl' }}>Welcome back</Heading>
        <Text color="fg.muted">Start using Chakra in your projects</Text>
      </Stack>

      <Stack gap="6">
        <Stack gap="5">
          <Field.Root>
            <Field.Label>Email</Field.Label>
            <Input type="email" />
          </Field.Root>
          <Field.Root>
            <Field.Label>Password</Field.Label>
            <PasswordInput />
          </Field.Root>
        </Stack>
        <HStack justify="space-between">
          <Checkbox.Root defaultChecked>
            <Checkbox.HiddenInput />
            <Checkbox.Control />
            <Checkbox.Label>Remember me</Checkbox.Label>
          </Checkbox.Root>
          <Button variant="plain" size="sm">
            Forgot password
          </Button>
        </HStack>
        <Stack gap="4">
          <Button>Sign in</Button>
          <Button variant="outline">
            <BsGoogle />
            Sign in with Google
          </Button>
        </Stack>
      </Stack>

      <Text textStyle="sm" color="fg.muted" textAlign="center">
        Don't have an account?{' '}
        <Link variant="underline" href="#">
          Sign up
        </Link>
      </Text>
    </Stack>
  </Container>
)
