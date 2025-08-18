'use client'

import { IconButton } from '@chakra-ui/react'
import { useState } from 'react'
import { LuTrash2 } from 'react-icons/lu'
import { type ApiKeyItem, maskSecret } from './data'
import { RevokeApiKeyDialog } from './revoke-api-key-dialog'

export const RevokeActionButton = (props: { item: ApiKeyItem }) => {
  const { item } = props
  const [open, setOpen] = useState(false)

  return (
    <>
      <IconButton
        aria-label="Delete"
        variant="ghost"
        size="xs"
        colorPalette="red"
        onClick={() => setOpen(true)}
      >
        <LuTrash2 />
      </IconButton>

      <RevokeApiKeyDialog
        open={open}
        onOpenChange={(e) => setOpen(e.open)}
        secretMasked={maskSecret(item.secret)}
      />
    </>
  )
}
