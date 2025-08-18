import {
  Avatar,
  Box,
  Button,
  Container,
  DataList,
  Heading,
  HStack,
  Span,
  Stack,
} from '@chakra-ui/react'
import { LuHeart, LuMail, LuPhone } from 'react-icons/lu'

export const Block = () => {
  return (
    <Container py="20" maxW="md">
      <Stack gap="4">
        <Avatar.Root
          borderWidth="1px"
          borderColor="blackAlpha.50"
          css={{ '--avatar-size': 'sizes.20', '--avatar-font-size': 'fontSizes.xl' }}
        >
          <Avatar.Fallback name={data.name} />
          <Avatar.Image src={data.image} />
        </Avatar.Root>

        <Stack flex="1" gap="4">
          <Box>
            <Heading size="lg">{data.name}</Heading>
            <HStack color="fg.muted" textStyle="sm">
              <Span>{data.role}</Span>
              <Span>·</Span>
              <Span>Earned {data.totalEarned}</Span>
            </HStack>
          </Box>
          <HStack wrap="wrap">
            <Button variant="surface" size="sm">
              <LuHeart /> Favorite
            </Button>
            <Button variant="surface" size="sm">
              <LuPhone /> Call
            </Button>
            <Button variant="surface" size="sm">
              <LuMail /> Email
            </Button>
          </HStack>
          <DataList.Root mt="2">
            <DataList.Item>
              <DataList.ItemLabel>Bio</DataList.ItemLabel>
              <DataList.ItemValue>{data.description}</DataList.ItemValue>
            </DataList.Item>
            <DataList.Item>
              <DataList.ItemLabel>Address</DataList.ItemLabel>
              <DataList.ItemValue>{data.address}</DataList.ItemValue>
            </DataList.Item>
            <DataList.Item>
              <DataList.ItemLabel>Email</DataList.ItemLabel>
              <DataList.ItemValue>{data.email}</DataList.ItemValue>
            </DataList.Item>
            <DataList.Item>
              <DataList.ItemLabel>Phone</DataList.ItemLabel>
              <DataList.ItemValue>{data.phone}</DataList.ItemValue>
            </DataList.Item>
          </DataList.Root>
        </Stack>
      </Stack>
    </Container>
  )
}

const data = {
  name: 'Elena Doe',
  username: 'elena',
  role: 'Product Designer',
  totalEarned: '$120K+',
  address: '12345, Somewhere, Some City, Some Country',
  description:
    'Product Designer & Developer with over 8 years of experience. Leading design systems at Ipsum Technologies.',
  email: 'elena@doe.com',
  phone: '(123) 456-7890',
  image: 'https://i.pravatar.cc/300?u=20',
}
