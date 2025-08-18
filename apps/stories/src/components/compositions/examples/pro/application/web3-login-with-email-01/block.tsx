import {
  Button,
  Container,
  Heading,
  HStack,
  Input,
  Separator,
  Span,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react'

import { CoinbaseLogo, MetamaskLogo, WalletConnectLogo } from './logos'

export const Block = () => (
  <Container maxW="md" py={{ base: '12', md: '24' }}>
    <Stack gap="6">
      <VStack gap="2" textAlign="center" mt="4">
        <Heading size="3xl">Sign in or Sign up </Heading>
        <Text color="fg.muted">
          Please sign in with your <Span fontWeight="medium">web3 wallet</Span>
        </Text>
      </VStack>

      <Stack gap="3" colorPalette="gray">
        <Button variant="surface">
          <MetamaskLogo />
          MetaMask
        </Button>
        <Button variant="surface">
          <CoinbaseLogo />
          Coinbase Wallet
        </Button>
        <Button variant="surface">
          <WalletConnectLogo />
          WalletConnect
        </Button>
      </Stack>

      <HStack gap="6">
        <Separator flex="1" />
        <Text textStyle="sm" color="fg.muted" whiteSpace="nowrap">
          or continue with
        </Text>
        <Separator flex="1" />
      </HStack>

      <Stack gap="4">
        <Input variant="subtle" placeholder="Enter your email" />
        <Button>Continue</Button>
      </Stack>
    </Stack>
  </Container>
)
