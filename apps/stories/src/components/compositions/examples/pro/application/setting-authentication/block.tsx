import { Button, Container, Flex, HStack, Stack, Text } from '@chakra-ui/react'
import { LuAtSign } from 'react-icons/lu'
import { SiApple, SiGoogle } from 'react-icons/si'
import { AuthCard } from './auth-card'

export const Block = () => {
  return (
    <Container maxW="xl" py="20">
      <Stack gap="6">
        <Stack gap="1">
          <Text fontWeight="semibold" textStyle="lg">
            Authentication
          </Text>
          <Text color="fg.muted">Manage your authentication settings</Text>
        </Stack>
        <Stack gap="4">
          <AuthCard
            icon={<LuAtSign />}
            title="Email"
            description="You can use your email to sign in"
            connected
          >
            <Flex gap="4" align="center" width="full">
              <Text textStyle="sm" flex="1">
                john@doe.com
              </Text>
              <HStack colorPalette="gray">
                <Button size="xs" variant="outline">
                  Change email
                </Button>
                <Button size="xs" variant="outline">
                  Change password
                </Button>
              </HStack>
            </Flex>
          </AuthCard>
          <AuthCard icon={<SiGoogle />} title="Google" description="Connect your Google account" />
          <AuthCard icon={<SiApple />} title="Apple" description="Connect your Apple account" />
        </Stack>
      </Stack>
    </Container>
  )
}
