import { Card } from '@chakra-ui/react'

interface PlanCardProps {
  title: string
  description: string
  children?: React.ReactNode
}

export const PlanCard = (props: PlanCardProps) => {
  const { title, description, children } = props
  return (
    <Card.Root size="sm">
      <Card.Body alignItems="flex-start">
        <Card.Title>{title}</Card.Title>
        <Card.Description mb="4">{description}</Card.Description>
        {children}
      </Card.Body>
    </Card.Root>
  )
}
