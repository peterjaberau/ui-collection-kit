import { Container, HStack, Steps } from '@chakra-ui/react'
import { LuListChecks } from 'react-icons/lu'
import { OnboardingProgress } from './onboarding-progress'
import { OnboardingTask } from './onboarding-task'

export const Block = () => {
  return (
    <Container maxW="6xl" py="16">
      <Steps.Root count={steps.length} defaultStep={1} gap="6">
        <HStack justify="space-between">
          <HStack fontWeight="medium" textStyle="lg">
            <LuListChecks />
            Get started
          </HStack>
          <OnboardingProgress />
        </HStack>
        <Steps.List gap="2" alignItems="stretch" flexDirection={{ base: 'column', md: 'row' }}>
          {steps.map((step, index) => (
            <Steps.Item key={index} index={index} flex="1">
              <OnboardingTask>{step.title}</OnboardingTask>
            </Steps.Item>
          ))}
        </Steps.List>
      </Steps.Root>
    </Container>
  )
}

const steps = [
  { title: 'Create an account' },
  { title: 'View a demo project' },
  { title: 'Create your first project' },
  { title: 'Customize your project' },
  { title: 'Launch your project' },
]
