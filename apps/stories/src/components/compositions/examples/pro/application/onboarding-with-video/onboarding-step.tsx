'use client'

import {
  AspectRatio,
  Badge,
  Button,
  Center,
  HStack,
  Icon,
  IconButton,
  Show,
  type StackProps,
  Steps,
  Text,
  useStepsContext,
} from '@chakra-ui/react'
import { LuArrowLeft, LuChevronRight, LuCircleCheck, LuPartyPopper } from 'react-icons/lu'

export const Actions = (props: StackProps) => (
  <HStack {...props}>
    <Steps.PrevTrigger asChild>
      <IconButton variant="outline" colorPalette="gray" size="sm">
        <LuArrowLeft />
      </IconButton>
    </Steps.PrevTrigger>
    <Steps.NextTrigger asChild>
      <Button size="sm" flex="1">
        Next <LuChevronRight />
      </Button>
    </Steps.NextTrigger>
  </HStack>
)

export const CurrentStep = (props: StackProps & { items: { title: string }[] }) => {
  const { items, ...rest } = props
  const steps = useStepsContext()
  return (
    <HStack {...rest}>
      <Badge size="lg">
        <Show when={steps.value < steps.count} fallback={<LuCircleCheck />}>
          {steps.value + 1} / {steps.count}
        </Show>
      </Badge>
      <Text>{items[steps.value]?.title ?? 'All steps are complete!'}</Text>
    </HStack>
  )
}

export const CompletedContent = () => (
  <Steps.CompletedContent>
    <AspectRatio ratio={16 / 9}>
      <Center gap="4">
        <Icon size="xl" color="colorPalette.fg">
          <LuPartyPopper />
        </Icon>
        <Text textStyle="lg" fontWeight="semibold">
          All steps are complete!
        </Text>
      </Center>
    </AspectRatio>
  </Steps.CompletedContent>
)
