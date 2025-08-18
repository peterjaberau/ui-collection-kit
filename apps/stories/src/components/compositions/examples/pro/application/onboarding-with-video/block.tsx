import { AspectRatio, Container, Stack, Steps, Text } from '@chakra-ui/react'
import { VideoPlaceholder } from './video-placeholder'
import * as OnboardingStep from './onboarding-step'

export const Block = () => {
  return (
    <Container maxW="4xl" py="20">
      <Stack gap={{ base: '6', md: '10' }}>
        <Text textStyle="xl" fontWeight="semibold">
          Get started with LogoIpsum
        </Text>
        <Steps.Root
          size="xs"
          orientation="vertical"
          defaultValue={1}
          count={steps.length}
          gap={{ base: '4', md: '20' }}
        >
          <Stack gap="20" hideBelow="md">
            <Steps.List flex="1" css={{ '--steps-gutter': 'spacing.1' }}>
              {steps.map((step, index) => (
                <Steps.Item index={index} key={step.title}>
                  <Steps.Indicator />
                  <Steps.Title>{step.title}</Steps.Title>
                </Steps.Item>
              ))}
            </Steps.List>
            <OnboardingStep.Actions />
          </Stack>

          <Stack gap={{ base: '6', md: '0' }} flex="1">
            <OnboardingStep.CurrentStep hideFrom="md" items={steps} />

            {steps.map((step, index) => (
              <Steps.Content index={index} key={step.title}>
                <AspectRatio ratio={16 / 9}>
                  <VideoPlaceholder rounded="l3" />
                </AspectRatio>
              </Steps.Content>
            ))}

            <OnboardingStep.CompletedContent />

            <OnboardingStep.Actions hideFrom="md" />
          </Stack>
        </Steps.Root>
      </Stack>
    </Container>
  )
}

const steps = [
  { title: 'What is LogoIpsum?', videoUrl: '#' },
  { title: 'How to use LogoIpsum', videoUrl: '#' },
  { title: 'Customize your LogoIpsum', videoUrl: '#' },
  { title: 'Download your video', videoUrl: '#' },
]
