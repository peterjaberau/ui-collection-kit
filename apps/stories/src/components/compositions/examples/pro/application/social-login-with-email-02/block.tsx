import {
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  Icon,
  Input,
  Link,
  Separator,
  Span,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react'
import { BsApple, BsGithub, BsGoogle, BsInfoCircle } from 'react-icons/bs'
import { Logo } from './logo'

export const Block = () => (
  <Container maxW="md" py={{ base: '12', md: '24' }}>
    <Stack gap="6">
      <Logo />

      <VStack gap="2" textAlign="center" mt="4">
        <Heading size="3xl">Log in to Chakra</Heading>
        <Text color="fg.muted">
          Please sign in with your <Span fontWeight="medium">work email address</Span>
        </Text>
      </VStack>

      <Stack gap="3" colorPalette="gray">
        <Button variant="outline">
          <BsGoogle />
          Continue with Google
        </Button>
        <Button variant="outline">
          <BsApple />
          Continue with Apple
        </Button>
        <Button variant="outline">
          <BsGithub />
          Continue with GitHub
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
        <Input placeholder="name@company.com" />
        <Button>Continue with email</Button>
      </Stack>

      <Flex gap="2" bg="bg.muted" p="4" borderRadius="l2">
        <Icon size="sm" color="fg.muted" pos="relative" top="0.5">
          <BsInfoCircle />
        </Icon>
        <Text textStyle="sm" color="fg.muted">
          We'll send you a verification code to your email address. Or you can{' '}
          <Link href="#">sign in manually</Link>.
        </Text>
      </Flex>
    </Stack>
  </Container>
)
