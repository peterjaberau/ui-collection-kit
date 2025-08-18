import {
  Box,
  Button,
  Checkbox,
  Container,
  Field,
  Flex,
  Heading,
  HStack,
  Input,
  Link,
  Separator,
  Stack,
  Text,
} from '@chakra-ui/react'
import { BsApple, BsGoogle, BsKeyFill, BsLinkedin } from 'react-icons/bs'
import { LuExternalLink } from 'react-icons/lu'
import { PasswordInput } from '@/components/ui/password-input'
import { ImagePlaceholder } from './image-placeholder'
import { SocialLoginButton } from './social-login-button'

export const Block = () => (
  <Flex height="full" flex="1">
    <Box flex="1" hideBelow="lg">
      <ImagePlaceholder />
    </Box>
    <Box flex="1.5" py={{ base: '24', md: '32' }}>
      <Container maxW="md">
        <Stack gap="8">
          <Stack gap={{ base: '2', md: '3' }} textAlign="center">
            <Heading size={{ base: '2xl', md: '3xl' }}>Sign in to Chakra</Heading>
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

            <HStack justify="space-between" textStyle="sm" fontWeight="medium">
              <Link variant="plain">Forgot password?</Link>
              <Link>
                Help <LuExternalLink />
              </Link>
            </HStack>

            <Stack gap="4">
              <Button>Sign in</Button>
              <Text textStyle="sm" color="fg.muted">
                By signing in, you agree to our{' '}
                <Link variant="underline" href="#">
                  Terms of Service
                </Link>{' '}
                and{' '}
                <Link variant="underline" href="#">
                  Privacy Policy
                </Link>
              </Text>
            </Stack>

            <Checkbox.Root defaultChecked>
              <Checkbox.HiddenInput />
              <Checkbox.Control />
              <Checkbox.Label>Keep me signed ine</Checkbox.Label>
            </Checkbox.Root>
          </Stack>

          <HStack gap="6">
            <Separator flex="1" />
            <Text textStyle="sm" color="fg.muted" whiteSpace="nowrap">
              or continue with
            </Text>
            <Separator flex="1" />
          </HStack>

          <HStack wrap="wrap" justify="space-around">
            <SocialLoginButton icon={<BsKeyFill />}>SSO</SocialLoginButton>
            <SocialLoginButton icon={<BsGoogle />}>Google</SocialLoginButton>
            <SocialLoginButton icon={<BsApple />}>Apple</SocialLoginButton>
            <SocialLoginButton icon={<BsLinkedin />}>LinkedIn</SocialLoginButton>
          </HStack>
        </Stack>
      </Container>
    </Box>
  </Flex>
)
