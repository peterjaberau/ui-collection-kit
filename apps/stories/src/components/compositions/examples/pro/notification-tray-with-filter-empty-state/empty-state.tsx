'use client'

import { EmptyState as ChakraEmptyState } from '@chakra-ui/react'
import { LuBellOff } from 'react-icons/lu'

export const NotificationTrayEmptyState = () => {
  return (
    <ChakraEmptyState.Root>
      <ChakraEmptyState.Content>
        <ChakraEmptyState.Indicator
          display="flex"
          bg="bg.muted"
          rounded="full"
          boxSize="12"
          alignItems="center"
          justifyContent="center"
        >
          <LuBellOff size={4} />
        </ChakraEmptyState.Indicator>
        <ChakraEmptyState.Description textStyle="xs" color="fg.muted">
          Quiet for now. Check back later.
        </ChakraEmptyState.Description>
      </ChakraEmptyState.Content>
    </ChakraEmptyState.Root>
  )
}
