import { Button, Container, Field, Input, Stack, Text } from '@chakra-ui/react'
import { FormSection } from './form-section'
import { PhotoUpload } from './photo-upload'

export const Block = () => {
  return (
    <Container maxW="4xl" py="20">
      <Stack gap="10">
        <form>
          <FormSection title="Profile Information" description="Update your profile information">
            <PhotoUpload mb="8" />
            <Field.Root>
              <Field.Label>Name</Field.Label>
              <Input name="name" />
            </Field.Root>
            <Field.Root>
              <Field.Label>Emaill address</Field.Label>
              <Input type="email" name="email" />
            </Field.Root>
            <Button>Save</Button>
          </FormSection>
        </form>

        <form>
          <FormSection title="Password" description="Update your password">
            <Field.Root>
              <Field.Label>Current password</Field.Label>
              <Input type="password" name="currentPassword" />
            </Field.Root>
            <Field.Root>
              <Field.Label>New password</Field.Label>
              <Input type="password" name="newPassword" />
            </Field.Root>
            <Button>Save</Button>
          </FormSection>
        </form>

        <form>
          <FormSection
            title="Two-factor authentication"
            description="Add an extra layer of security"
          >
            <Text color="fg.muted">
              Two-factor authentication is a security system that requires more than one form of
              authentication from independent categories of credentials.
            </Text>
            <Button>Enable</Button>
          </FormSection>
        </form>

        <FormSection title="Danger Zone" description="Delete your account">
          <Text color="fg.muted">
            Once you delete your account, there is no going back. All of your information will be
            lost. Before you go, please download your information.
          </Text>
          <Button colorPalette="red">Delete account</Button>
        </FormSection>
      </Stack>
    </Container>
  )
}
