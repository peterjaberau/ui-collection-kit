import { Button, Container, Field, Input, InputGroup, Stack, Textarea } from '@chakra-ui/react'
import { LuLinkedin, LuTwitter } from 'react-icons/lu'
import { PhotoUpload } from './photo-upload'

export const Block = () => {
  return (
    <Container maxW="xl" py="20">
      <form>
        <Stack gap="8" css={{ '--field-label-width': 'sizes.24' }}>
          <Field.Root orientation="horizontal" mb="4">
            <Field.Label>Photo</Field.Label>
            <PhotoUpload />
          </Field.Root>
          <Field.Root orientation="horizontal">
            <Field.Label>Name</Field.Label>
            <Input name="name" />
          </Field.Root>
          <Field.Root orientation="horizontal">
            <Field.Label>Location</Field.Label>
            <Input name="location" />
          </Field.Root>
          <Field.Root orientation="horizontal">
            <Field.Label>Bio</Field.Label>
            <Textarea rows={4} name="bio" resize="none" />
          </Field.Root>
          <Field.Root orientation="horizontal">
            <Field.Label>LinkedIn</Field.Label>
            <InputGroup w="full" startElement={<LuLinkedin />}>
              <Input name="linkedIn" />
            </InputGroup>
          </Field.Root>
          <Field.Root orientation="horizontal">
            <Field.Label>Twitter</Field.Label>
            <InputGroup w="full" startElement={<LuTwitter />}>
              <Input name="twitter" />
            </InputGroup>
          </Field.Root>
          <Field.Root orientation="horizontal">
            <Field.Label>Website</Field.Label>
            <InputGroup w="full" startElement="https://">
              <Input name="website" ps="7ch" />
            </InputGroup>
          </Field.Root>
          <Button>Save</Button>
        </Stack>
      </form>
    </Container>
  )
}
