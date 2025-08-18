'use client'

import {
  Button,
  CloseButton,
  Dialog,
  Field,
  Input,
  NativeSelect,
  Portal,
  Stack,
  Switch,
  Text,
} from '@chakra-ui/react'
import { useState } from 'react'

const expirationOptions = [
  { value: 7, label: '7 days', expiryDate: '2025-08-18' },
  { value: 30, label: '30 days', expiryDate: '2025-09-07' },
  { value: 60, label: '60 days', expiryDate: '2025-09-25' },
  { value: 90, label: '90 days', expiryDate: '2025-10-13' },
]

export const CreateApiKeyDialog = (props: Omit<Dialog.RootProps, 'children'>) => {
  const [neverExpires, setNeverExpires] = useState(false)
  const [days, setDays] = useState<number>(30)

  const handleSave = (formData: FormData) => {
    console.log(formData.entries())
  }

  return (
    <Dialog.Root size="md" placement="center" {...props}>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            <form action={(fd) => handleSave(fd)}>
              <Dialog.Header pt="8">
                <Dialog.CloseTrigger asChild>
                  <CloseButton size="sm" colorPalette="gray" variant="ghost" />
                </Dialog.CloseTrigger>
                <Dialog.Title textStyle="lg">Create an API key</Dialog.Title>
              </Dialog.Header>

              <Dialog.Body px="6" pt="1">
                <Stack gap="6">
                  <Field.Root>
                    <Field.Label>Name this key</Field.Label>
                    <Input name="name" placeholder="E.g. Development" />
                  </Field.Root>

                  <Switch.Root
                    checked={neverExpires}
                    onCheckedChange={(e) => setNeverExpires(e.checked)}
                  >
                    <Switch.HiddenInput />
                    <Switch.Control />
                    <Switch.Label>Never expires</Switch.Label>
                  </Switch.Root>
                  <Field.Root disabled={neverExpires}>
                    <Field.Label>Expiration date</Field.Label>
                    <NativeSelect.Root>
                      <NativeSelect.Field
                        defaultValue={String(days)}
                        onChange={(e) => setDays(Number(e.target.value))}
                        aria-label="Select expiration"
                      >
                        {expirationOptions.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </NativeSelect.Field>
                      <NativeSelect.Indicator />
                    </NativeSelect.Root>
                    {!neverExpires && (
                      <Text mt="2" color="fg.muted" textStyle="sm">
                        The API key will expire on{' '}
                        {expirationOptions.find((o) => o.value === days)?.expiryDate}
                      </Text>
                    )}
                  </Field.Root>
                </Stack>
              </Dialog.Body>

              <Dialog.Footer pb="6">
                <Dialog.ActionTrigger asChild>
                  <Button variant="outline" colorPalette="gray">
                    Cancel
                  </Button>
                </Dialog.ActionTrigger>
                <Button type="submit">Save</Button>
              </Dialog.Footer>
            </form>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  )
}
