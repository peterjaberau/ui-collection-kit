import { Box, Heading, Text, VStack } from '@chakra-ui/react'
import { Logo } from './logo'

interface LayoutProps {
  title: string
  description: string
  children: React.ReactNode
}

export const Layout = (props: LayoutProps) => {
  const { title, description, children } = props
  return (
    <VStack textAlign="center" gap="24" h="full" py="8">
      <Box _icon={{ flexShrink: '0' }}>
        <Logo />
      </Box>
      <VStack flex="1" gap="8">
        <VStack gap="1" textAlign="center">
          <Heading fontWeight="medium">{title}</Heading>
          <Text color="fg.muted">{description}</Text>
        </VStack>
        {children}
      </VStack>
    </VStack>
  )
}
