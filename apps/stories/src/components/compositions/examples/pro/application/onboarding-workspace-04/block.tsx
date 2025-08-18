import { Button, Icon, RadioCard } from '@chakra-ui/react'
import { LuBuilding, LuUser, LuUsers } from 'react-icons/lu'
import { Layout } from './layout-workspace'

export const Block = () => {
  return (
    <Layout
      title="How are you planning to use Logo Ipsum?"
      description="This will help us personalize your experience."
    >
      <RadioCard.Root>
        {items.map((item) => (
          <RadioCard.Item key={item.value} value={item.value}>
            <RadioCard.ItemHiddenInput />
            <RadioCard.ItemControl>
              <RadioCard.ItemContent>
                <RadioCard.ItemText>
                  <Icon size="lg" color="colorPalette.fg" mb="2">
                    {item.icon}
                  </Icon>
                </RadioCard.ItemText>
                <RadioCard.ItemDescription>{item.description}</RadioCard.ItemDescription>
              </RadioCard.ItemContent>
              <RadioCard.ItemIndicator />
            </RadioCard.ItemControl>
          </RadioCard.Item>
        ))}
      </RadioCard.Root>
      <Button>Continue</Button>
    </Layout>
  )
}

const items = [
  {
    icon: <LuUser />,
    label: 'Personal',
    description: 'Improve my personal brand and get feedback on my work',
    value: 'personal',
  },
  {
    icon: <LuUsers />,
    label: 'Team',
    description: 'Collaborate with my team to create better products',
    value: 'team',
  },
  {
    icon: <LuBuilding />,
    label: 'Company',
    description: 'Create a brand presence and engage with customers',
    value: 'company',
  },
]
