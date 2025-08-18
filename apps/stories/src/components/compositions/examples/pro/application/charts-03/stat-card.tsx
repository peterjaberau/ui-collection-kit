import type { BarListData } from '@chakra-ui/charts'
import { Card } from '@chakra-ui/react'
import { BarList } from './bar-list'

interface StatCardProps {
  labels: { title: string; value: string }
  data: BarListData[]
}

export const StatCard = (props: StatCardProps) => {
  const { labels, data } = props
  return (
    <Card.Root size="sm">
      <Card.Header>
        <Card.Title>{labels.title}</Card.Title>
      </Card.Header>
      <Card.Body>
        <BarList data={data} labels={labels} />
      </Card.Body>
    </Card.Root>
  )
}
