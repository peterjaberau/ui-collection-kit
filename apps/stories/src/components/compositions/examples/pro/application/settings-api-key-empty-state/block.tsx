'use client'

import { Button, Card, Center, Container, Heading, Icon, Stack, Text } from '@chakra-ui/react'
import { useState } from 'react'
import { LuLink2, LuPlus } from 'react-icons/lu'
import { CreateApiKeyDialog } from './create-api-key-dialog'

export const Block = () => {
  const [open, setOpen] = useState(false)

  return (
    <Container py="20" maxW="5xl">
      <Card.Root>
        <Card.Header
          pb="6"
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          borderBottomWidth="1px"
        >
          <Stack gap="1">
            <Heading as="h2" textStyle="xl">
              API keys
            </Heading>
            <Text color="fg.muted">API keys allow other apps to communicate with your app.</Text>
          </Stack>
          <Button size="sm" onClick={() => setOpen(true)}>
            <LuPlus />
            Add
          </Button>
        </Card.Header>
        <Card.Body>
          <Center minH="72" textAlign="center">
            <Stack gap="4" align="center">
              <Icon fontSize="5xl" color="fg.muted">
                <LuLink2 />
              </Icon>
              <Heading as="h3" textStyle="xl">
                Create your first API key
              </Heading>
              <Text color="fg.muted">API keys allow other apps to communicate with your app.</Text>
              <Button onClick={() => setOpen(true)}>
                <LuPlus />
                Add
              </Button>
            </Stack>
          </Center>
        </Card.Body>
      </Card.Root>
      <CreateApiKeyDialog open={open} onOpenChange={(e) => setOpen(e.open)} />
    </Container>
  )
}
