import { Card, HStack, Progress, Span, Text } from '@chakra-ui/react'
import { InfoTip } from '@/components/ui/toggle-tip'

interface PlanUsageProps {
  title: string
  description: string
  info?: React.ReactNode
  max?: number
  value?: number
}

export const PlanUsage = (props: PlanUsageProps) => {
  const { title, description, info, max, value } = props
  return (
    <Card.Root size="sm">
      <Card.Body alignItems="flex-start" gap="4">
        <Progress.Root w="full" size="xs" min={0} max={max} value={value}>
          <HStack mb="3">
            <Progress.Label mb="2" flex="1">
              {title}
              {info && <InfoTip>{info}</InfoTip>}
            </Progress.Label>
            <HStack color="fg.muted" gap="1">
              <Span color="fg">{value}</Span>
              <Span>/</Span>
              <Span>{max}</Span>
            </HStack>
          </HStack>
          <Progress.Track>
            <Progress.Range />
          </Progress.Track>
        </Progress.Root>
        <Text textStyle="xs" color="fg.muted">
          {description}
        </Text>
      </Card.Body>
    </Card.Root>
  )
}
