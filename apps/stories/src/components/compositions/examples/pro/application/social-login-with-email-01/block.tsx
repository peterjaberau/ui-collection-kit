import {
  Button,
  Container,
  Field,
  Heading,
  HStack,
  Input,
  Link,
  Separator,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react'
import { BsArrowRight, BsGithub, BsGoogle } from 'react-icons/bs'
import { Logo } from './logo'

export const Block = () => (
  <Container maxW="md" py={{ base: '12', md: '24' }}>
    <Stack gap="8">
      <VStack gap="12">
        <Logo />
        <VStack gap="2">
          <Heading size="2xl">Sign in to your account</Heading>
          <Text color="fg.muted">Welcome back! Please sign in to continue.</Text>
        </VStack>
      </VStack>

      <Stack gap="6">
        <HStack gap="4" colorPalette="gray">
          <Button variant="outline" flex="1">
            <BsGoogle />
            Google
          </Button>
          <Button variant="outline" flex="1">
            <BsGithub />
            Github
          </Button>
        </HStack>

        <HStack>
          <Separator flex="1" />
          <Text color="fg.muted" textStyle="sm">
            or
          </Text>
          <Separator flex="1" />
        </HStack>

        <Stack gap="6">
          <Field.Root>
            <Field.Label>Email address</Field.Label>
            <Input placeholder="me@example.com" />
          </Field.Root>
          <Button>
            Continue <BsArrowRight />
          </Button>
        </Stack>
      </Stack>

      <Button variant="plain" size="sm">
        Continue using Single Sign-on (SSO)
      </Button>

      <Separator variant="dashed" />

      <Text textStyle="sm" color="fg.muted" textAlign="center">
        Don't have an account? <Link href="/register">Sign up</Link>
      </Text>
    </Stack>
  </Container>
)
