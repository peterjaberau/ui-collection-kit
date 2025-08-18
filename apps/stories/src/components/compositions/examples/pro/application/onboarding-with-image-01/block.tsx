import { Box, Button, HStack, RadioCard } from '@chakra-ui/react'
import {
  LuArrowRight,
  LuBriefcase,
  LuCode,
  LuHeadphones,
  LuPencil,
  LuRocket,
  LuScale,
  LuSearch,
  LuSettings,
  LuSpeaker,
  LuTrendingUp,
  LuUsers,
  LuWallet,
} from 'react-icons/lu'
import { Layout } from './layout-with-image'

export const Block = () => {
  return (
    <Layout
      title="Which of these describes you best?"
      description="This information helps us personalize your experience."
      totalSteps={5}
      currentStep={1}
    >
      <RadioCard.Root align="center">
        <HStack wrap="wrap" gap="3">
          {items.map((item) => (
            <RadioCard.Item flex="0" whiteSpace="nowrap" key={item.value} value={item.value}>
              <RadioCard.ItemHiddenInput />
              <RadioCard.ItemControl>
                {item.icon}
                <RadioCard.ItemText>{item.label}</RadioCard.ItemText>
              </RadioCard.ItemControl>
            </RadioCard.Item>
          ))}
        </HStack>
      </RadioCard.Root>

      <Box mt="8">
        <Button size="xl" minW="8rem">
          Next <LuArrowRight />
        </Button>
      </Box>
    </Layout>
  )
}

const items = [
  { label: 'Marketing', icon: <LuSpeaker />, value: 'marketing' },
  { label: 'Sales', icon: <LuBriefcase />, value: 'sales' },
  { label: 'Engineering', icon: <LuCode />, value: 'engineering' },
  { label: 'Design', icon: <LuPencil />, value: 'design' },
  { label: 'Product', icon: <LuRocket />, value: 'product' },
  { label: 'Customer Support', icon: <LuHeadphones />, value: 'support' },
  { label: 'Finance', icon: <LuWallet />, value: 'finance' },
  { label: 'Human Resources', icon: <LuUsers />, value: 'hr' },
  { label: 'Operations', icon: <LuSettings />, value: 'operations' },
  { label: 'Research', icon: <LuSearch />, value: 'research' },
  { label: 'Legal', icon: <LuScale />, value: 'legal' },
  { label: 'Business Development', icon: <LuTrendingUp />, value: 'business-dev' },
]
