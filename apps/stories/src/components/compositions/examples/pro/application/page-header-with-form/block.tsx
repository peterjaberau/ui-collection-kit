import { Button, Container, Field, Input, Stack, Text } from '@chakra-ui/react'
import { PageHeader } from './page-header'

export const Block = () => {
  return (
    <Container py={{ base: '16', md: '24' }}>
      <PageHeader
        tagline="Stay Connected"
        headline="Subscribe to our Newsletter"
        description="Stay informed with our curated updates on the latest insights and developments."
        align={{ base: 'stretch', md: 'center' }}
        textAlign={{ base: 'left', md: 'center' }}
      >
        <Stack gap="2" alignItems={{ base: 'stretch', md: 'start' }}>
          <Stack direction={{ base: 'column', sm: 'row' }} gap="3">
            <Field.Root>
              <Input
                type="email"
                placeholder="Enter your email address"
                size={{ base: 'lg', md: 'xl' }}
              />
            </Field.Root>
            <Button size={{ base: 'lg', md: 'xl' }}>Subscribe</Button>
          </Stack>
          <Text textStyle="xs" color="fg.muted">
            Your privacy is important to us. You can unsubscribe anytime.
          </Text>
        </Stack>
      </PageHeader>
    </Container>
  )
}
