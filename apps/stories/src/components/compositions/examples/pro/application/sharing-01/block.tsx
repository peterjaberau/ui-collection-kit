import { Card, Heading } from '@chakra-ui/react'
import { ShareLinks } from './share-links'
import { ViewAccess } from './view-access'

export const Block = () => {
  return (
    <Card.Root>
      <Card.Body gap="4">
        <Heading size="md">View Access</Heading>
        <ViewAccess />

        <Heading size="md">Share Link</Heading>
        <ShareLinks />
      </Card.Body>
    </Card.Root>
  )
}
