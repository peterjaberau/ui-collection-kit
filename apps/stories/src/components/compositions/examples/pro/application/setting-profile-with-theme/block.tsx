import { Button, Container, Field, HStack, Input, InputGroup, Stack, Text } from '@chakra-ui/react'
import { LuTriangleAlert } from 'react-icons/lu'
import { PhotoUpload } from './photo-upload'
import { ThemeSelector } from './theme-selector'

export const Block = () => {
  return (
    <Container maxW="xl" py="20">
      <Stack gap="20">
        <form>
          <Stack gap="5">
            <Field.Root mb="8">
              <PhotoUpload />
            </Field.Root>
            <Field.Root>
              <Field.Label>First name</Field.Label>
              <Input name="firstName" />
            </Field.Root>
            <Field.Root>
              <Field.Label>Last name</Field.Label>
              <Input name="lastName" />
            </Field.Root>
            <Field.Root>
              <Field.Label>Email address</Field.Label>
              <Input type="email" name="email" />
            </Field.Root>
            <Field.Root>
              <Field.Label>Password</Field.Label>
              <InputGroup
                width="full"
                endElement={
                  <Button variant="ghost" size="xs" textStyle="sm" me="-2">
                    Change password
                  </Button>
                }
              >
                <Input pe="16ch" type="password" name="password" />
              </InputGroup>
            </Field.Root>
            <Field.Root>
              <Field.Label>Theme</Field.Label>
              <ThemeSelector />
            </Field.Root>
            <Button alignSelf="flex-start">Save</Button>
          </Stack>
        </form>

        <Stack align="flex-start" gap="3" borderWidth="1px" p="6" rounded="l2">
          <HStack color="fg.error" fontWeight="medium">
            <LuTriangleAlert />
            Danger Zone
          </HStack>
          <Text color="fg.muted" textStyle="sm">
            Once you delete your account, there is no going back. All of your information will be
            lost. Before you go, please download your information.
          </Text>
          <Button colorPalette="red" mt="2">
            Delete account
          </Button>
        </Stack>
      </Stack>
    </Container>
  )
}
