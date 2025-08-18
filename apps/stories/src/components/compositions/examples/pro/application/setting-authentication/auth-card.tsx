import { Box, Button, Card, HStack, Icon } from '@chakra-ui/react'
import { LuCheck } from 'react-icons/lu'

interface AuthCardProps {
  icon: React.ReactNode
  title: string
  description: string
  connected?: boolean
  children?: React.ReactNode
}

export const AuthCard = (props: AuthCardProps) => {
  const { icon, title, description, connected, children } = props
  return (
    <Card.Root size="sm">
      <Card.Body>
        <HStack gap="4">
          {icon}
          <Box flex="1">
            <Card.Title>{title}</Card.Title>
            <Card.Description>{description}</Card.Description>
          </Box>
          <Button disabled={connected} size="sm" variant="outline" colorPalette="gray" bg="bg">
            {connected && (
              <Icon color="fg.success">
                <LuCheck />
              </Icon>
            )}
            {connected ? 'Connected' : 'Connect'}
          </Button>
        </HStack>
      </Card.Body>
      {children && <Card.Footer>{children}</Card.Footer>}
    </Card.Root>
  )
}
