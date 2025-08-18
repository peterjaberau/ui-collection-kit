import {
  Avatar,
  Badge,
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  Span,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react'
import { LuCheckCheck, LuMessageCircle, LuUserPlus } from 'react-icons/lu'

export const Block = () => {
  return (
    <Container py="20" maxW="3xl">
      <VStack gap="6">
        <Flex gap="8" direction={{ base: 'column-reverse', md: 'row' }}>
          <Stack flex="1" gap="4">
            <Stack gap="1">
              <Heading size="2xl">
                {data.name}
                <VerifiedBadge />
              </Heading>
              <Text color="fg.muted">
                {data.role} @ {data.company}
              </Text>
            </Stack>

            <Text>{data.description}</Text>

            <HStack mt="2" gap="4">
              <HStack gap="1">
                <Span fontWeight="semibold">{data.followers}</Span>
                <Span color="fg.muted">followers</Span>
              </HStack>
              <HStack gap="1">
                <Span fontWeight="semibold">{data.following}</Span>
                <Span color="fg.muted">following</Span>
              </HStack>
            </HStack>

            <HStack mt="2" wrap="wrap">
              <Button>
                <LuUserPlus /> Follow
              </Button>
              <Button variant="subtle" colorPalette="gray">
                <LuMessageCircle /> Message
              </Button>
            </HStack>
          </Stack>

          <Avatar.Root
            borderWidth="1px"
            borderColor="blackAlpha.50"
            css={{ '--avatar-size': 'sizes.32', '--avatar-font-size': 'fontSizes.3xl' }}
          >
            <Avatar.Fallback name={data.name} />
            <Avatar.Image src={data.image} />
          </Avatar.Root>
        </Flex>
      </VStack>
    </Container>
  )
}

const VerifiedBadge = () => (
  <Badge size="md" variant="outline" colorPalette="gray" ms="2" verticalAlign="middle">
    <LuCheckCheck /> verified
  </Badge>
)

const data = {
  name: 'Marcus Doe',
  role: 'Product Designer & Developer',
  company: 'Ipsum Technologies',
  username: 'marcus',
  website: '#',
  image: 'https://i.pravatar.cc/300?u=87',
  description:
    'Building logos and websites over the last 8 years. Leading design systems at Ipsum Technologies.',
  followers: 1200,
  following: 100,
}
