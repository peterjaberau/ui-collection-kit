import { Button, Container, Stack } from '@chakra-ui/react'
import { PageHeader } from './page-header'

export const Block = () => {
  return (
    <Container py={{ base: '16', md: '24' }}>
      <PageHeader
        tagline="Pricing"
        headline="Plans for Every Business"
        description="Choose the perfect plan for your needs. Whether you're just starting out or running a large enterprise, we have you covered."
      >
        <Stack direction={{ base: 'column', sm: 'row' }} gap="3">
          <Button size={{ base: 'lg', md: 'xl' }}>Buy Now</Button>
          <Button variant="outline" size={{ base: 'lg', md: 'xl' }} colorPalette="gray">
            Learn more
          </Button>
        </Stack>
      </PageHeader>
    </Container>
  )
}
