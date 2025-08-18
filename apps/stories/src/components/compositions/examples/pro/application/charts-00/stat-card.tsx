import { Card, FormatNumber, HStack, StackSeparator, Stat } from '@chakra-ui/react'
import type { StatItem } from './data'

export interface StatCardProps {
  name: string
  series: Array<StatItem>
  items: Array<{ title: string; value: number }>
}

export const StatCard = (props: StatCardProps) => {
  const { name, series, items } = props
  const { color, label } = series.find((item) => item.name === name) ?? {}
  return (
    <Card.Root size="sm" borderTopWidth="4px" borderTopColor={color}>
      <Card.Header>
        <Card.Title>{label}</Card.Title>
      </Card.Header>
      <Card.Body>
        <HStack gap="8" separator={<StackSeparator />}>
          {items.map((item, index) => (
            <Stat.Root key={index} size="sm">
              <Stat.Label fontWeight="medium">{item.title}</Stat.Label>
              <Stat.ValueText>
                <FormatNumber value={item.value / 100} style="percent" minimumFractionDigits={2} />
              </Stat.ValueText>
            </Stat.Root>
          ))}
        </HStack>
      </Card.Body>
    </Card.Root>
  )
}
