import {
  Button,
  Container,
  Heading,
  HStack,
  IconButton,
  Input,
  InputGroup,
  Link,
  Separator,
  Span,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react'
import { BsArrowRight } from 'react-icons/bs'
import { Logo } from './logo'

export const Block = () => (
  <Container maxW="lg" py={{ base: '12', md: '24' }}>
    <Stack gap="8">
      <VStack gap="20">
        <Logo />
        <VStack gap="2" textAlign="center">
          <Heading size="3xl">Sign in to your workspace</Heading>
          <Text color="fg.muted">Enter your team's workspace URL</Text>
        </VStack>
      </VStack>

      <Stack gap="6">
        <InputGroup endElement={<Span color="fg">.chakra.com</Span>}>
          <Input size="lg" placeholder="myteam" pe="10ch" />
        </InputGroup>

        <Button size="lg">Continue</Button>
      </Stack>

      <HStack>
        <Separator flex="1" />
        <Text color="fg.muted" textStyle="sm">
          or
        </Text>
        <Separator flex="1" />
      </HStack>

      <VStack gap="2">
        <Text textStyle="sm" color="fg.muted">
          Find your workspace URL
        </Text>
        <HStack width="full">
          <Input placeholder="Email address" />
          <IconButton aria-label="Send">
            <BsArrowRight />
          </IconButton>
        </HStack>
      </VStack>

      <VStack textStyle="sm" color="fg.muted" textAlign="center">
        Don't have an account?{' '}
        <Link href="/register" variant="underline">
          Create your first workspace <BsArrowRight />
        </Link>
      </VStack>
    </Stack>
  </Container>
)
