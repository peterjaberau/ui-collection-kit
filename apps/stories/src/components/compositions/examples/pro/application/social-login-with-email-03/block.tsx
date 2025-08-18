import { Button, Container, Heading, HStack, Link, Separator, Stack, Text } from '@chakra-ui/react'
import { BsBucketFill, BsGithub, BsGitlab, BsLock, BsPersonLock } from 'react-icons/bs'
import { Logo } from './logo'

export const Block = () => (
  <Container maxW="md" py={{ base: '12', md: '24' }}>
    <Stack gap="10">
      <Logo height="40" />

      <Heading size="4xl" textAlign="center">
        Log in to Chakra
      </Heading>

      <Stack gap="3" colorPalette="gray">
        <Button colorPalette="gray">
          <BsGithub />
          Login with Github
        </Button>
        <Button colorPalette="purple">
          <BsGitlab />
          Login with Gitlab
        </Button>
        <Button colorPalette="blue">
          <BsBucketFill />
          Login with Bitbucket
        </Button>
      </Stack>

      <HStack gap="6">
        <Separator flex="1" />
        <Text textStyle="sm" color="fg.muted">
          or
        </Text>
        <Separator flex="1" />
      </HStack>

      <Stack gap="4">
        <Button variant="subtle" colorPalette="gray">
          <BsLock /> Continue with SAML SSO
        </Button>
        <Button variant="subtle" colorPalette="gray">
          <BsPersonLock /> Login with Passkey
        </Button>
      </Stack>

      <Text textStyle="sm" color="fg.muted" fontWeight="medium" textAlign="center">
        Not a member?{' '}
        <Link href="#" variant="underline">
          Create your account
        </Link>
        .
      </Text>
    </Stack>
  </Container>
)
