'use client'

import { Button, HStack, Input, Stack } from '@chakra-ui/react'
import { LuPlus } from 'react-icons/lu'
import { RoleSelect } from './role-select'
import type { InviteState } from './use-invite-state'

export const TeamForm = (props: { state: InviteState }) => {
  const { state } = props
  return (
    <Stack gap="3" ref={state.containerRef}>
      {state.fields.map((field, index) => (
        <HStack key={index}>
          <Input
            placeholder="Email address"
            flex="1"
            defaultValue={field.email}
            data-index={index}
            onChange={(e) => state.setEmail(e, index)}
          />
          <RoleSelect
            width="120px"
            defaultValue={[field.role]}
            onValueChange={(e) => state.setRole(e.value[0], index)}
          />
        </HStack>
      ))}
      <Button
        variant="plain"
        size="sm"
        p="0"
        h="auto"
        colorPalette="gray"
        onClick={state.add}
        alignSelf="flex-start"
      >
        <LuPlus /> Add member
      </Button>
    </Stack>
  )
}
