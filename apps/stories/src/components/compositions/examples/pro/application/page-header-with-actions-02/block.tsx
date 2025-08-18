import {
  Badge,
  Button,
  Container,
  Heading,
  HStack,
  NativeSelect,
  SegmentGroup,
  Spacer,
  Tabs,
  Text,
} from '@chakra-ui/react'
import { LuLayoutGrid, LuLayoutList, LuPalette, LuPlus, LuSettings } from 'react-icons/lu'
import { ContentPlaceholder } from './content-placeholder'

export const Block = () => {
  return (
    <Container maxW="6xl" py={{ base: '16', md: '24' }}>
      <Heading size="3xl" py="6">
        Design Tokens
      </Heading>
      <Tabs.Root size="lg" defaultValue="tokens">
        <Tabs.List>
          <Tabs.Trigger value="tokens">
            <LuPalette /> Tokens <Badge>4</Badge>
          </Tabs.Trigger>
          <Tabs.Trigger value="automations">
            <LuSettings /> Automations <Badge>1</Badge>
          </Tabs.Trigger>
          <Spacer />
          <HStack pos="relative" bottom="2" gap="4">
            <HStack hideBelow="md">
              <Text fontWeight="medium" textStyle="sm">
                Sort by
              </Text>
              <NativeSelect.Root width="100px">
                <NativeSelect.Field>
                  <option value="name">Name</option>
                  <option value="date">Date</option>
                  <option value="type">Type</option>
                  <option value="status">Status</option>
                </NativeSelect.Field>
                <NativeSelect.Indicator />
              </NativeSelect.Root>
            </HStack>
            <SegmentGroup.Root hideBelow="md" defaultValue="list">
              <SegmentGroup.Indicator />
              <SegmentGroup.Items
                items={[
                  { value: 'list', label: <LuLayoutList /> },
                  { value: 'grid', label: <LuLayoutGrid /> },
                ]}
              />
            </SegmentGroup.Root>
            <Button size="sm">
              <LuPlus /> Add Token
            </Button>
          </HStack>
        </Tabs.List>
        <Tabs.Content value="tokens">
          <ContentPlaceholder h="100px" borderWidth="1px" />
        </Tabs.Content>
        <Tabs.Content value="automations">
          <ContentPlaceholder h="100px" borderWidth="1px" />
        </Tabs.Content>
      </Tabs.Root>
    </Container>
  )
}
