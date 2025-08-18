import { Container } from '@chakra-ui/react'
import { PageHeader } from './page-header'

export const Block = () => {
  return (
    <Container py={{ base: '16', md: '24' }}>
      <PageHeader
        tagline="Pricing"
        headline="Plans for Every Business"
        description="Choose the perfect plan for your needs. Whether you're just starting out or running a large enterprise, we have you covered."
      />
    </Container>
  )
}
