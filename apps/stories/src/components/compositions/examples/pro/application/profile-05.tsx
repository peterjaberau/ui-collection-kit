import {
  Avatar,
  Badge,
  Box,
  Button,
  Container,
  DataList,
  HStack,
  Stack,
  Text,
} from '@chakra-ui/react'
import { LuBellOff, LuPhoneOutgoing, LuShare, LuVideo } from 'react-icons/lu'

export const Block = () => {
  return (
    <Container py="20" maxW="md">
      <Stack gap="4">
        <Avatar.Root size="xl">
          <Avatar.Fallback name={data.name} />
          <Avatar.Image src={data.image} />
        </Avatar.Root>

        <Box>
          <Text fontWeight="medium">{data.name}</Text>
          <Text color="fg.muted">{data.title}</Text>
        </Box>

        <HStack>
          <Button size="xs" colorPalette="green">
            <LuPhoneOutgoing />
            Call
          </Button>
          <Button size="xs">
            <LuVideo />
            Chat
          </Button>
          <Button size="xs" variant="subtle" colorPalette="gray">
            <LuBellOff />
            Mute
          </Button>
          <Button size="xs" variant="subtle" colorPalette="gray">
            <LuShare />
            Share
          </Button>
        </HStack>

        <DataList.Root orientation="horizontal" mt="2">
          <DataList.Item>
            <DataList.ItemLabel>Phone</DataList.ItemLabel>
            <DataList.ItemValue>{data.phone}</DataList.ItemValue>
          </DataList.Item>
          <DataList.Item>
            <DataList.ItemLabel>Email</DataList.ItemLabel>
            <DataList.ItemValue>{data.email}</DataList.ItemValue>
          </DataList.Item>
          <DataList.Item>
            <DataList.ItemLabel>Location</DataList.ItemLabel>
            <DataList.ItemValue>{data.location}</DataList.ItemValue>
          </DataList.Item>
          <DataList.Item>
            <DataList.ItemLabel>Domain</DataList.ItemLabel>
            <DataList.ItemValue>
              <Badge variant="outline">{data.domain}</Badge>
            </DataList.ItemValue>
          </DataList.Item>
          <DataList.Item>
            <DataList.ItemLabel alignItems="flex-start">Skills</DataList.ItemLabel>
            <DataList.ItemValue>
              {' '}
              <HStack wrap="wrap">
                {data.skills.map((skill) => (
                  <Badge key={skill} colorPalette="gray">
                    {skill}
                  </Badge>
                ))}
              </HStack>
            </DataList.ItemValue>
          </DataList.Item>
        </DataList.Root>
      </Stack>
    </Container>
  )
}

const data = {
  name: 'Elena D.',
  title: 'Product Designer & Developer',
  image: 'https://i.pravatar.cc/300?u=7',
  phone: '+1 202-555-0191',
  email: 'elena@example.com',
  location: 'New York, NY',
  domain: 'https://example.com',
  skills: ['UI/UX Design', 'Frontend Development', 'User Research', 'Design Systems'],
}
