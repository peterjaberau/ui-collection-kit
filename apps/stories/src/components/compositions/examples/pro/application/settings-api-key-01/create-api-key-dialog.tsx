'use client'

import {
  Button,
  CloseButton,
  Dialog,
  Field,
  Input,
  Link,
  NativeSelect,
  Portal,
  SegmentGroup,
  Stack,
  Text,
} from '@chakra-ui/react'

export const CreateApiKeyDialog = (props: Omit<Dialog.RootProps, 'children'>) => {
  const handleCreate = (formData: FormData) => {
    console.log(formData.entries())
  }

  return (
    <Dialog.Root size="sm" placement="center" {...props}>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            <form
              action={(formData) => {
                handleCreate(formData)
              }}
            >
              <Dialog.Header pt="8">
                <Dialog.CloseTrigger asChild>
                  <CloseButton size="sm" colorPalette="gray" variant="ghost" />
                </Dialog.CloseTrigger>
                <Dialog.Title textStyle="lg">Create new secret key</Dialog.Title>
              </Dialog.Header>

              <Dialog.Body px="6" pt="1">
                <Stack gap="6">
                  <Field.Root>
                    <Field.Label>Name</Field.Label>
                    <Input name="name" placeholder="My Test Key" />
                  </Field.Root>

                  <Field.Root>
                    <Field.Label>Project</Field.Label>
                    <NativeSelect.Root>
                      <NativeSelect.Field defaultValue="default" name="project">
                        <option value="default">Default project</option>
                      </NativeSelect.Field>
                      <NativeSelect.Indicator />
                    </NativeSelect.Root>
                  </Field.Root>

                  <Field.Root>
                    <Field.Label>Permissions</Field.Label>
                    <SegmentGroup.Root name="permission" defaultValue="all" size="sm" p="0.5">
                      <SegmentGroup.Items
                        items={[
                          { value: 'all', label: 'All' },
                          { value: 'restricted', label: 'Restricted' },
                          { value: 'read-only', label: 'Read only' },
                        ]}
                        px="2"
                        rounded="l1"
                        _checked={{ bg: 'bg.panel', shadow: 'xs' }}
                      />
                    </SegmentGroup.Root>
                  </Field.Root>

                  <Text textStyle="sm" color="fg.muted">
                    Learn more in the{' '}
                    <Link href="#" colorPalette="primary">
                      API reference
                    </Link>
                    .
                  </Text>
                </Stack>
              </Dialog.Body>

              <Dialog.Footer pb="6">
                <Dialog.ActionTrigger asChild>
                  <Button variant="outline" colorPalette="gray">
                    Cancel
                  </Button>
                </Dialog.ActionTrigger>
                <Button type="submit">Create secret key</Button>
              </Dialog.Footer>
            </form>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  )
}
