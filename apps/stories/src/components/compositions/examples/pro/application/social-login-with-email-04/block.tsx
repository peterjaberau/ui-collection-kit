import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  Input,
  Link,
  Stack,
  Text,
} from '@chakra-ui/react'
import { BsApple, BsGoogle, BsMicrosoft } from 'react-icons/bs'
import { Logo } from './logo'
import { ImagePlaceholder } from './image-placeholder'
import { SocialLoginButton } from './social-login-button'

export const Block = () => (
  <Flex height="full" flex="1">
    <Flex direction="column" flex="1.5">
      <HStack justify="space-between" px={{ base: '4', md: '8' }} minH="16">
        <Logo />
        <Link href="#" variant="underline" textStyle="sm">
          Not working? Get help
        </Link>
      </HStack>

      <Container maxW="md" flex="1" py={{ base: '24', md: '32' }}>
        <Stack gap="8">
          <Stack gap={{ base: '2', md: '3' }}>
            <Heading size={{ base: '2xl', md: '3xl' }}>Sign in your account</Heading>
            <Text color="fg.muted">
              New to our platform?{' '}
              <Link variant="underline" href="#">
                Create an account.
              </Link>
            </Text>
          </Stack>

          <Stack gap="4">
            <SocialLoginButton icon={<BsGoogle />}>Continue with Google</SocialLoginButton>
            <SocialLoginButton variant="outline" colorPalette="gray" icon={<BsMicrosoft />}>
              Continue with Microsoft
            </SocialLoginButton>
            <SocialLoginButton variant="outline" colorPalette="gray" icon={<BsApple />}>
              Continue with Apple
            </SocialLoginButton>
          </Stack>

          <Stack gap="4">
            <Text textStyle="sm" color="fg.muted">
              Or continue with email
            </Text>
            <Input placeholder="me@example.com" />
            <Button>Continue</Button>
          </Stack>
        </Stack>
      </Container>
    </Flex>
    <Box flex="1" hideBelow="lg">
      <ImagePlaceholder />
    </Box>
  </Flex>
)
