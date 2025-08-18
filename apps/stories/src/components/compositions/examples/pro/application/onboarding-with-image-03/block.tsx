import { Box, Button, HStack, RadioCard, Span } from '@chakra-ui/react'
import { LuArrowRight } from 'react-icons/lu'
import { Layout } from './layout-with-image'

export const Block = () => {
  return (
    <Layout
      title="How would you rate your skill level with these tools?"
      description="No stress, we only want to know how to deploy your first block."
      totalSteps={5}
      currentStep={3}
    >
      <RadioCard.Root>
        {items.map((item) => (
          <RadioCard.Item key={item.value} value={item.value}>
            <RadioCard.ItemHiddenInput />
            <RadioCard.ItemControl>
              <RadioCard.ItemText>
                <HStack align="center" gap="1">
                  {item.label}.
                  <Span fontWeight="normal" color="fg.muted">
                    {item.description}
                  </Span>
                </HStack>
              </RadioCard.ItemText>
            </RadioCard.ItemControl>
          </RadioCard.Item>
        ))}
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
  { label: 'Beginner', description: 'I rarely use these tools', value: 'beginner' },
  { label: 'Basic', description: "I'm somewhat comfortable with basic usage", value: 'basic' },
  {
    label: 'Intermediate',
    description: "I'm comfortable with intermediate usage",
    value: 'intermediate',
  },
  { label: 'Advanced', description: 'I can write code with these tools', value: 'advanced' },
]
