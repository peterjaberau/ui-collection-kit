import { Button, Flex, HStack, RadioCard, Span } from '@chakra-ui/react'
import { LuChevronRight } from 'react-icons/lu'
import { DarkModeIcon, LightModeIcon } from './theme-icons'
import { Layout } from './layout-simple'
import { ChoiceCard } from './choice-card'

export const Block = () => {
  return (
    <Layout
      title="Welcome, User"
      description="Select theme preferences to personalize your experience."
    >
      <RadioCard.Root size="sm" defaultValue="system" width="full">
        <Flex gap="4">
          <ChoiceCard icon={<LightModeIcon />} label="Light" value="light" />
          <ChoiceCard icon={<DarkModeIcon />} label="Dark" value="dark" />
        </Flex>
      </RadioCard.Root>

      <Button>
        Next <LuChevronRight />
      </Button>
      <HStack textStyle="sm" color="fg.muted" gap="1">
        Step <Span color="fg">3</Span> of 4
      </HStack>
    </Layout>
  )
}
