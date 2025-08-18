import { Container, Flex, Heading, Link, Stack, Text, VStack } from '@chakra-ui/react'
import { Logo } from './logo'

interface LayoutProps {
  title: string
  description: string
  children: React.ReactNode
}

export const Layout = (props: LayoutProps) => {
  const { title, description, children } = props
  return (
    <Stack minH="full">
      <Container py="4">
        <Flex justify="space-between">
          <Logo height="24px" />
          <Link href="#" textStyle="sm">
            Sign out
          </Link>
        </Flex>
      </Container>
      <VStack flex="1" gap="8" py="16">
        <VStack>
          <Heading size="2xl">{title}</Heading>
          <Text color="fg.muted">{description}</Text>
        </VStack>
        <Stack gap="4" w="full" maxW="sm">
          {children}
        </Stack>
      </VStack>
    </Stack>
  )
}
