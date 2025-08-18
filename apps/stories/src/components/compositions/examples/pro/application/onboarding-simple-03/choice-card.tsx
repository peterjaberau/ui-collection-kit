import { RadioCard } from '@chakra-ui/react'

interface ChoiceCardProps extends RadioCard.ItemProps {
  icon: React.ReactNode
  label: string
}

export const ChoiceCard = (props: ChoiceCardProps) => {
  return (
    <RadioCard.Item key={props.value} value={props.value} overflow="hidden" flex="1">
      <RadioCard.ItemHiddenInput />
      {props.icon}
      <RadioCard.ItemControl p="2.5" alignItems="center">
        {props.label}
      </RadioCard.ItemControl>
    </RadioCard.Item>
  )
}
