import { Button, Field, HStack, Input, InputGroup, Span, Stack } from '@chakra-ui/react'
import { LuChevronRight } from 'react-icons/lu'
import { Layout } from './layout-simple'

export const Block = () => {
  return (
    <Layout title="Welcome, User" description="Please customize your profile to get started.">
      <Stack gap="4" w="full">
        <Field.Root>
          <Field.Label>Username</Field.Label>
          <Input placeholder="@username" />
        </Field.Root>
        <Field.Root>
          <Field.Label>Public URL</Field.Label>
          <InputGroup startElement="https://" w="full">
            <Input placeholder="" ps="7ch" />
          </InputGroup>
        </Field.Root>
      </Stack>
      <Button>
        Next <LuChevronRight />
      </Button>
      <HStack textStyle="sm" color="fg.muted" gap="1">
        Step <Span color="fg">1</Span> of 4
      </HStack>
    </Layout>
  )
}
