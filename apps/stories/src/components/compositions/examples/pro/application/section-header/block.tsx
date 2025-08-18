import { Container } from '@chakra-ui/react'
import { SectionHeader } from './section-header'

export const Block = () => {
  return (
    <Container py={{ base: '16', md: '24' }}>
      <SectionHeader
        tagline="We're hiring"
        headline="Meet our Team"
        description="Our talented team blends skills and experiences, driving our success."
      />
    </Container>
  )
}
