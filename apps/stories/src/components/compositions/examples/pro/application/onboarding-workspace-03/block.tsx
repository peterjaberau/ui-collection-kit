'use client'

import { Button, Checkbox, Span, Stack } from '@chakra-ui/react'
import { Layout } from './layout-workspace'
import { InviteLink } from './invite-link'
import { TeamForm } from './team-form'
import { useInviteState } from './use-invite-state'

export const Block = () => {
  const state = useInviteState()
  return (
    <Layout title="Invite team members" description="Add your team members to your workspace.">
      <InviteLink value="https://app.logoipsum.com/workspace/invite?code=dfr3def" />

      <Stack gap="8">
        <TeamForm state={state} />

        <Checkbox.Root alignItems="flex-start">
          <Checkbox.HiddenInput />
          <Checkbox.Control />
          <Checkbox.Label>
            Allow anyone with the <Span fontWeight="medium">@email.com</Span> domain to join this
            workspace
          </Checkbox.Label>
        </Checkbox.Root>

        <Button>Finish setup</Button>
      </Stack>
    </Layout>
  )
}
