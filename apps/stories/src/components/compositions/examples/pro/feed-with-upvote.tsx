import {
  Avatar,
  Badge,
  Container,
  Flex,
  HStack,
  Spacer,
  Stack,
  Status,
  Text,
  VStack,
} from '@chakra-ui/react'
import { BsChat, BsChevronUp } from 'react-icons/bs'

export const feeds = [
  {
    status: 'In Progress',
    id: '1',
    title: 'How to setup theming system in Chakra UI',
    description:
      "I'm trying to customize the theme in Chakra UI but having trouble understanding how to properly extend the default theme.",
    authorName: 'John Doe',
    authorImage: 'https://i.pravatar.cc/300?u=fg',
    createdAt: '4 days ago',
    comments: 12,
    upvotes: 24,
    tag: 'Theming',
  },
  {
    status: 'Open',
    id: '2',
    title: 'Dark mode implementation in Chakra UI',
    description:
      'Looking for guidance on implementing dark mode in my Chakra UI application. Should I use the built-in color mode hook or create custom theme variants.',
    authorName: 'Sarah Chen',
    authorImage: 'https://i.pravatar.cc/300?u=sc',
    createdAt: '2 days ago',
    comments: 8,
    upvotes: 24,
    tag: 'Dark Mode',
  },
  {
    status: 'Open',
    id: '3',
    title: 'Roadmap for v3',
    description:
      'We are planning the next major version of Chakra UI. Looking for community feedback on desired features, breaking changes, and overall direction. Share your thoughts on what you would like to see in v3.',
    authorName: 'Mark Wilson',
    authorImage: 'https://i.pravatar.cc/300?u=mw',
    createdAt: '1 day ago',
    comments: 24,
    upvotes: 16,
    tag: 'Planning',
  },
]


export const FeedWithUpvote = () => {
  return (
    <Container maxW="3xl" py={{ base: '12', md: '24' }}>
      <Stack gap="6">
        {feeds.map((feed) => (
          <Flex key={feed.id} borderWidth="1px" divideX="1px" borderRadius="l3" bg="bg">
            <Stack p="6" flex="1">
              <Badge variant="surface" alignSelf="flex-start">
                In Progress
              </Badge>
              <Text textStyle="lg" fontWeight="semibold" mt="2">
                {feed.title}
              </Text>
              <Text color="fg.muted" lineClamp={2}>
                {feed.description}
              </Text>

              <HStack fontWeight="medium" mt="4">
                <HStack>
                  <Avatar.Root size="xs">
                    <Avatar.Fallback />
                    <Avatar.Image src={feed.authorImage} />
                  </Avatar.Root>
                  <Text textStyle="sm" hideBelow="sm">
                    {feed.authorName}
                  </Text>
                </HStack>
                <Text textStyle="sm" color="fg.muted" ms="3">
                  {feed.createdAt}
                </Text>
                <Spacer />

                <HStack gap="4">
                  <HStack gap="1">
                    <BsChat />
                    <Text textStyle="sm" color="fg.muted">
                      {feed.comments}
                    </Text>
                  </HStack>
                  <Status.Root hideBelow="sm">
                    <Status.Indicator />
                    {feed.tag}
                  </Status.Root>
                </HStack>
              </HStack>
            </Stack>
            <VStack px="4" justify="center" flexShrink="0">
              <BsChevronUp />
              <Text textStyle="sm" fontWeight="semibold">
                {feed.upvotes}
              </Text>
            </VStack>
          </Flex>
        ))}
      </Stack>
    </Container>
  )
}
