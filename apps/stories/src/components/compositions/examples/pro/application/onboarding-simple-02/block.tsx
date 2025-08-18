import { Button, CheckboxGroup, Fieldset, HStack, Span } from '@chakra-ui/react'
import { LuChevronRight } from 'react-icons/lu'
import { Layout } from './layout-simple'
import { ChoiceCard } from './choice-card'

export const Block = () => {
  return (
    <Layout title="Welcome, User" description="Select interests to personalize your experience.">
      <Fieldset.Root maxW="2xl" mx="auto" alignItems="center">
        <Fieldset.Legend w="full" textAlign="center">
          Choose up to 3 interests
        </Fieldset.Legend>
        <CheckboxGroup>
          <HStack flexWrap="wrap" gap="2" justify="center">
            {interests.map((interest) => (
              <ChoiceCard whiteSpace="nowrap" flex="0" value={interest.value} key={interest.value}>
                {interest.label}
              </ChoiceCard>
            ))}
          </HStack>
        </CheckboxGroup>
      </Fieldset.Root>
      <Button>
        Next <LuChevronRight />
      </Button>
      <HStack textStyle="sm" color="fg.muted" gap="1">
        Step <Span color="fg">2</Span> of 4
      </HStack>
    </Layout>
  )
}

const interests = [
  { label: '3D Design', value: '3d-design' },
  { label: 'UX Design', value: 'ux-design' },
  { label: 'UI Design', value: 'ui-design' },
  { label: 'Web Development', value: 'web-dev' },
  { label: 'Mobile Development', value: 'mobile-dev' },
  { label: 'Game Design', value: 'game-design' },
  { label: 'Motion Design', value: 'motion-design' },
  { label: 'Graphic Design', value: 'graphic-design' },
  { label: 'Product Design', value: 'product-design' },
]
