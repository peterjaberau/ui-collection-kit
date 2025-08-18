import { Button, Field } from '@chakra-ui/react'
import { Layout } from './layout-workspace'
import { ReferralSelect, RoleSelect, TeamSizeSelect } from './select'

export const Block = () => {
  return (
    <Layout
      title="Tell us about yourself"
      description="This will help us personalize your experience."
    >
      <Field.Root>
        <Field.Label>What's your role?</Field.Label>
        <RoleSelect />
      </Field.Root>
      <Field.Root>
        <Field.Label>How many people will be using Logo Ipsum?</Field.Label>
        <TeamSizeSelect />
      </Field.Root>
      <Field.Root>
        <Field.Label>How did you hear about us?</Field.Label>
        <ReferralSelect />
      </Field.Root>
      <Button>Continue</Button>
    </Layout>
  )
}
