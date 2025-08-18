import { Button, Card, HStack, Text } from '@chakra-ui/react'
import { BiLogoApple, BiLogoWindows } from 'react-icons/bi'
import { LuLaptop } from 'react-icons/lu'
import { Layout } from './layout-workspace'

export const Block = () => {
  return (
    <Layout
      title="Download desktop app"
      description="Install the desktop app for a seamless experience."
    >
      <Card.Root size="sm">
        <Card.Header asChild>
          <HStack>
            <LuLaptop />
            <Text fontWeight="medium">Download desktop app</Text>
          </HStack>
        </Card.Header>
        <Card.Body>
          <Card.Description>Install the desktop app for a seamless experience.</Card.Description>
        </Card.Body>
        <Card.Footer>
          <Button size="sm" flex="1">
            <BiLogoApple /> Download Mac
          </Button>
          <Button size="sm" variant="outline" colorPalette="gray" flex="1">
            <BiLogoWindows /> Download Windows
          </Button>
        </Card.Footer>
      </Card.Root>
      <Button variant="outline" colorPalette="gray">
        Continue without download
      </Button>
    </Layout>
  )
}
