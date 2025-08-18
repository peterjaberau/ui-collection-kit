import { Button, Field, Input, InputGroup } from '@chakra-ui/react'
import { Layout } from './layout-workspace'
import { PhotoUpload } from './photo-upload'

export const Block = () => {
  return (
    <Layout
      title="Create your workspace"
      description="Add a name and public URL to your workspace."
    >
      <PhotoUpload alignSelf="center" />
      <Field.Root>
        <Field.Label>Username</Field.Label>
        <Input placeholder="@username" />
      </Field.Root>
      <Field.Root>
        <Field.Label>Public URL</Field.Label>
        <InputGroup startElement="logo.ipsum.com/" w="full">
          <Input placeholder="" ps="14ch" />
        </InputGroup>
      </Field.Root>
      <Button>Create workspace</Button>
    </Layout>
  )
}
