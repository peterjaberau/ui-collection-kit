import { Container, Icon, Input, InputGroup } from '@chakra-ui/react'
import { LuSearch } from 'react-icons/lu'
import { PageHeader } from './page-header'

export const Block = () => {
  return (
    <Container py={{ base: '16', md: '24' }}>
      <PageHeader
        tagline="Support"
        headline="How Can We Help You?"
        description="Find instant answers in our knowledge base or reach out to our support team for assistance."
        align="center"
        textAlign="center"
      >
        <InputGroup
          flex="1"
          startElement={
            <Icon size="md">
              <LuSearch />
            </Icon>
          }
        >
          <Input placeholder="Search" size={{ base: 'lg', md: 'xl' }} />
        </InputGroup>
      </PageHeader>
    </Container>
  )
}
