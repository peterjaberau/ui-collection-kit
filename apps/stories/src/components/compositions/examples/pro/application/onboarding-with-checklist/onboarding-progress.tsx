'use client'

import { HStack, Progress, useStepsContext } from '@chakra-ui/react'

export const OnboardingProgress = () => {
  const steps = useStepsContext()
  return (
    <Progress.Root
      size="sm"
      flex="1"
      maxW={{ base: '32', md: 'xs' }}
      value={steps.percent}
      min={0}
      max={100}
    >
      <HStack width="full" gap="4">
        <Progress.Track flex="1">
          <Progress.Range />
        </Progress.Track>
        <Progress.ValueText>{steps.percent}%</Progress.ValueText>
      </HStack>
    </Progress.Root>
  )
}
