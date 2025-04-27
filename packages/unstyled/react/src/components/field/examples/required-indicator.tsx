import { Field } from '../../..'

export const RequiredIndicator = () => {
  return (
    <Field.Root required>
      <Field.Label>
        Username
        <Field.RequiredIndicator />
      </Field.Label>
      <Field.Input />
    </Field.Root>
  )
}
