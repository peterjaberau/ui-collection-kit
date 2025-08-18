import { Button, Container, Stack } from '@chakra-ui/react'
import { SectionHeader } from './section-header'

export const Block = () => {
  return (
    <Container py={{ base: '16', md: '24' }}>
      <Stack gap={{ base: '12', xl: '24' }} direction={{ base: 'column', lg: 'row' }}>
        <SectionHeader
          tagline="We're hiring"
          headline="Meet our Team"
          description="Our talented team blends skills and experiences, driving our success."
        >
          <Stack direction={{ base: 'column', sm: 'row' }} gap="3">
            <Button size={{ base: 'lg', sm: 'xl' }}>Join our team</Button>
            <Button variant="outline" size={{ base: 'lg', sm: 'xl' }} colorPalette="gray">
              Contact us
            </Button>
          </Stack>
        </SectionHeader>
      </Stack>
    </Container>
  )
}
