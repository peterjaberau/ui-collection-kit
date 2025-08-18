import { Field, RadioGroup, Stack } from '@chakra-ui/react'

export const EmailFrequency = () => {
  return (
    <Field.Root gap="3">
      <Field.Label>Choose how often you receive emails</Field.Label>
      <RadioGroup.Root name="email-frequency" defaultValue="immediately">
        <Stack direction={{ base: 'column', md: 'row' }} gap="4">
          {items.map((item) => (
            <RadioGroup.Item key={item.value} value={item.value}>
              <RadioGroup.ItemHiddenInput />
              <RadioGroup.ItemIndicator />
              <RadioGroup.ItemText>{item.label}</RadioGroup.ItemText>
            </RadioGroup.Item>
          ))}
        </Stack>
      </RadioGroup.Root>
    </Field.Root>
  )
}

const items = [
  { label: 'Immediately', value: 'immediately' },
  { label: 'Daily', value: 'daily' },
  { label: 'Weekly', value: 'weekly' },
]
