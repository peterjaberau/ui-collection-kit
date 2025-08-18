'use client'

import { Button, Container, Heading, HStack, Stack, Text } from '@chakra-ui/react'
import { useState } from 'react'
import { LuPlus } from 'react-icons/lu'
import { ApiKeysTable } from './api-keys-table'
import { CreateApiKeyDialog } from './create-api-key-dialog'

export const Block = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Container py="20" maxW="5xl">
      <Stack gap="8">
        <HStack justify="space-between" align="center">
          <Heading as="h2" textStyle="3xl">
            API keys
          </Heading>
          <Button onClick={() => setIsOpen(true)}>
            <LuPlus />
            Create new secret key
          </Button>
        </HStack>

        <Text color="fg.muted">
          View and manage all API keys in this project. Do not share your API key with others.
        </Text>

        <ApiKeysTable />

        <CreateApiKeyDialog open={isOpen} onOpenChange={(e) => setIsOpen(e.open)} />
      </Stack>
    </Container>
  )
}
