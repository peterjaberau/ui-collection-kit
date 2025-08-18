'use client'

import { Button, CloseButton, Dialog, IconButton, Menu, Portal, Span } from '@chakra-ui/react'
import { useState } from 'react'
import { LuEllipsis, LuRefreshCcw, LuX } from 'react-icons/lu'
import { toaster } from '@/components/ui/toaster'

export const MemberActions = (props: { item: string }) => {
  const [showConfirmDialog, setShowConfirmDialog] = useState(false)

  const handleResendInvite = () => {
    // do something
    toaster.success({ title: `The invite has been sent to ${props.item}` })
  }

  const handleBeforeRevoke = () => {
    setShowConfirmDialog(true)
  }

  const handleRevoke = () => {
    // do something
    setShowConfirmDialog(false)
    toaster.success({ title: 'Member revoked' })
  }

  return (
    <>
      <Menu.Root
        onSelect={(e) => {
          const actionMap: Record<string, VoidFunction> = {
            'resend-invite': handleResendInvite,
            revoke: handleBeforeRevoke,
          }
          actionMap[e.value]?.()
        }}
      >
        <Menu.Trigger asChild>
          <IconButton variant="ghost" size="2xs">
            <LuEllipsis />
          </IconButton>
        </Menu.Trigger>
        <Portal>
          <Menu.Positioner>
            <Menu.Content>
              <Menu.Item value="resend-invite">
                <LuRefreshCcw /> Resend invite
              </Menu.Item>
              <Menu.Item value="revoke" color="fg.error">
                <LuX /> Revoke access
              </Menu.Item>
            </Menu.Content>
          </Menu.Positioner>
        </Portal>
      </Menu.Root>

      <Dialog.Root
        size="xs"
        role="alertdialog"
        open={showConfirmDialog}
        onOpenChange={() => setShowConfirmDialog(false)}
      >
        <Portal>
          <Dialog.Backdrop />
          <Dialog.Positioner>
            <Dialog.Content>
              <Dialog.Header>
                <Dialog.Title>Remove member</Dialog.Title>
                <Dialog.CloseTrigger asChild>
                  <CloseButton size="sm" colorPalette="gray" />
                </Dialog.CloseTrigger>
              </Dialog.Header>
              <Dialog.Body>
                <Dialog.Description>
                  Are you sure you want to remove{' '}
                  <Span fontWeight="medium" color="fg">
                    {props.item}
                  </Span>{' '}
                  from the team?
                </Dialog.Description>
              </Dialog.Body>
              <Dialog.Footer>
                <Button onClick={handleRevoke} flex="1">
                  Remove member
                </Button>
              </Dialog.Footer>
            </Dialog.Content>
          </Dialog.Positioner>
        </Portal>
      </Dialog.Root>
    </>
  )
}
