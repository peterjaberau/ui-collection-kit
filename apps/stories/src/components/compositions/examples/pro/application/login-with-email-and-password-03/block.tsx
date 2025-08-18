import {
  Avatar,
  Box,
  Button,
  Card,
  Container,
  Field,
  Flex,
  Heading,
  HStack,
  Input,
  InputGroup,
  Link,
  Stack,
  Text,
} from '@chakra-ui/react'
import { LuCalendar, LuLock, LuMail } from 'react-icons/lu'
import { Logo } from './logo'
import { ImagePlaceholder } from './image-placeholder'

export const Block = () => (
  <Flex height="full" flex="1">
    <Box flex="1.5" py={{ base: '24', md: '32' }}>
      <Container maxW="md">
        <Stack gap="8">
          <Logo />
          <Stack gap={{ base: '2', md: '3' }} textAlign="center">
            <Heading size={{ base: '2xl', md: '3xl' }}>Sign in to Chakra</Heading>
            <Text color="fg.muted">Start using Chakra in your projects</Text>
          </Stack>

          <Stack gap="6">
            <Stack gap="5">
              <Field.Root>
                <Field.Label>Email</Field.Label>
                <InputGroup startElement={<LuMail />} width="full">
                  <Input type="email" placeholder="me@example.com" />
                </InputGroup>
              </Field.Root>
              <Field.Root>
                <Field.Label>Password</Field.Label>
                <InputGroup startElement={<LuLock />} width="full">
                  <Input type="password" placeholder="••••••••" />
                </InputGroup>
              </Field.Root>
              <Button>Sign in</Button>
              <Link variant="plain">Forgot password?</Link>
            </Stack>

            <Card.Root size="sm" mt="10">
              <Card.Body>
                <HStack textStyle="sm">
                  <Avatar.Root size="xs">
                    <Avatar.Fallback />
                    <Avatar.Image src="https://i.pravatar.cc/300?u=12" />
                  </Avatar.Root>
                  <Text>Want to try Chakra?</Text>
                  <Link variant="underline" href="#" fontWeight="semibold">
                    <LuCalendar /> Book a demo
                  </Link>
                </HStack>
              </Card.Body>
            </Card.Root>
          </Stack>
        </Stack>
      </Container>
    </Box>
    <Box flex="1" hideBelow="lg">
      <ImagePlaceholder />
    </Box>
  </Flex>
)
