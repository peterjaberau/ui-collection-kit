'use client'

import { Button, CloseButton, Dialog, Field, Input, Portal, Stack, Text } from '@chakra-ui/react'

interface Props extends Omit<Dialog.RootProps, 'children'> {
  secretMasked: string
}

export const RevokeApiKeyDialog = (props: Props) => {
  const { secretMasked, ...dialogProps } = props

  return (
    <Dialog.Root placement="center" size="sm" {...dialogProps}>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Header pt="8">
              <Dialog.CloseTrigger asChild>
                <CloseButton size="sm" colorPalette="gray" variant="ghost" />
              </Dialog.CloseTrigger>
              <Dialog.Title textStyle="lg">Revoke secret key</Dialog.Title>
            </Dialog.Header>

            <Dialog.Body px="6" pt="1">
              <Stack gap="4">
                <Text color="fg">
                  This API key will immediately be disabled. Once revoked, you'll no longer be able
                  to view or modify this API key.
                </Text>

                <Field.Root>
                  <Field.Label>Secret key</Field.Label>
                  <Input readOnly value={secretMasked} fontFamily="mono" />
                </Field.Root>
              </Stack>
            </Dialog.Body>

            <Dialog.Footer pb="6">
              <Dialog.ActionTrigger asChild>
                <Button colorPalette="red">Revoke key</Button>
              </Dialog.ActionTrigger>
            </Dialog.Footer>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  )
}
