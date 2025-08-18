import { CheckboxCard } from '@chakra-ui/react'

export const ChoiceCard = (props: CheckboxCard.RootProps) => {
  return (
    <CheckboxCard.Root display="inline-flex" size="sm" {...props}>
      <CheckboxCard.HiddenInput />
      <CheckboxCard.Control display="inline-flex">{props.children}</CheckboxCard.Control>
    </CheckboxCard.Root>
  )
}
