import { Group, RadioCard } from '@chakra-ui/react'
import { LuGlobe, LuLock } from 'react-icons/lu'

export const ViewAccess = () => {
  return (
    <RadioCard.Root defaultValue="secret" size="sm">
      <Group attached orientation="vertical">
        {items.map((item) => (
          <RadioCardItem key={item.value} item={item} />
        ))}
      </Group>
    </RadioCard.Root>
  )
}

const RadioCardItem = (props: { item: Item }) => {
  const { item, ...rest } = props
  return (
    <RadioCard.Item key={item.value} value={item.value} width="full" boxShadow="none" {...rest}>
      <RadioCard.ItemHiddenInput />
      <RadioCard.ItemControl>
        <RadioCard.ItemContent>
          <RadioCard.ItemText
            display="flex"
            alignItems="center"
            gap="2"
            _checked={{ color: 'colorPalette.fg' }}
          >
            {item.icon} {item.title}
          </RadioCard.ItemText>
          <RadioCard.ItemDescription>{item.description}</RadioCard.ItemDescription>
        </RadioCard.ItemContent>
        <RadioCard.ItemIndicator />
      </RadioCard.ItemControl>
    </RadioCard.Item>
  )
}

interface Item {
  value: string
  title: string
  description: string
  icon: React.ReactNode
}

const items: Item[] = [
  {
    value: 'secret',
    title: 'Secret',
    description: 'Only you can view this',
    icon: <LuLock />,
  },
  {
    value: 'shareable',
    title: 'Shareable',
    description: 'Anyone with the link can view this',
    icon: <LuGlobe />,
  },
]
