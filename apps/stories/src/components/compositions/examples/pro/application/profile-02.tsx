import {
  Avatar,
  Button,
  Container,
  Flex,
  Float,
  Heading,
  HStack,
  Icon,
  Span,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react'
import { LuBell, LuCheck, LuMessageCircle, LuUserPlus } from 'react-icons/lu'

export const Block = () => {
  return (
    <Container py="20" maxW="3xl">
      <VStack gap="6">
        <Flex gap="8" direction={{ base: 'column', md: 'row' }}>
          <Avatar.Root
            borderWidth="1px"
            borderColor="blackAlpha.50"
            css={{ '--avatar-size': 'sizes.32', '--avatar-font-size': 'fontSizes.3xl' }}
          >
            <Avatar.Fallback name={data.name} />
            <Avatar.Image src={data.image} />

            <Float
              offset="4"
              placement="bottom-end"
              boxSize="8"
              layerStyle="fill.solid"
              rounded="full"
              borderWidth="4px"
              borderColor="bg"
            >
              <Icon rounded="full" size="sm">
                <LuCheck />
              </Icon>
            </Float>
          </Avatar.Root>

          <Stack flex="1">
            <Heading size="2xl" mb="2">
              {data.name}
            </Heading>
            <Text>{data.description}</Text>
            <HStack mt="2">
              <HStack>
                {data.followers}
                <Span color="fg.muted">followers</Span>
              </HStack>
              <Span>·</Span>
              <HStack>
                {data.following}
                <Span color="fg.muted">following</Span>
              </HStack>
            </HStack>

            <HStack mt="4" wrap="wrap">
              <Button>
                <LuUserPlus /> Follow
              </Button>
              <Button variant="outline" colorPalette="gray">
                <LuMessageCircle /> Message
              </Button>
              <Button variant="outline" colorPalette="gray">
                <LuBell /> Notify
              </Button>
            </HStack>
          </Stack>
        </Flex>
      </VStack>
    </Container>
  )
}

const data = {
  name: 'Elena Doe',
  username: 'elena',
  image: 'https://i.pravatar.cc/300?u=20',
  description:
    'Product Designer & Developer with over 8 years of experience. Leading design systems at Ipsum Technologies.',
  followers: 1200,
  following: 100,
}
