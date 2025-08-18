import {
  Avatar,
  Button,
  Container,
  Float,
  Heading,
  HStack,
  Icon,
  IconButton,
  Span,
  Text,
  VStack,
} from '@chakra-ui/react'
import { LuBadgeCheck, LuBriefcase, LuGlobe, LuLinkedin, LuMapPin, LuTwitter } from 'react-icons/lu'

export const Block = () => {
  return (
    <Container py="20" maxW="md">
      <VStack gap="6" textAlign="center">
        <Avatar.Root
          borderWidth="1px"
          borderColor="blackAlpha.50"
          css={{ '--avatar-size': 'sizes.32', '--avatar-font-size': 'fontSizes.3xl' }}
        >
          <Avatar.Fallback name={data.name} />
          <Avatar.Image src={data.image} />

          <Float
            offset="4"
            placement="top-end"
            boxSize="10"
            layerStyle="fill.solid"
            rounded="full"
            borderWidth="4px"
            borderColor="bg"
          >
            <Icon rounded="full" size="md">
              <LuBadgeCheck />
            </Icon>
          </Float>
        </Avatar.Root>

        <VStack>
          <Heading size="2xl">{data.name}</Heading>
          <HStack color="fg.muted">
            <LuMapPin />
            {data.location}
          </HStack>
        </VStack>

        <HStack fontWeight="medium" bg="bg.muted" gap="0" rounded="l2" px="4" py="1">
          <Span color="fg.muted">ipsum.com/</Span>
          <Span>{data.username}</Span>
        </HStack>
        <Text>{data.description}</Text>

        <HStack>
          {data.social.map((item) => (
            <IconButton key={item.label} variant="subtle" colorPalette="gray">
              <a href={item.url} target="_blank" rel="noopener noreferrer">
                {item.icon}
              </a>
            </IconButton>
          ))}
        </HStack>

        <Button size="lg">
          <LuBriefcase />
          Hire {data.name}
        </Button>
      </VStack>
    </Container>
  )
}

const data = {
  name: 'Elena Doe',
  location: 'New York, NY',
  username: 'elena',
  image: 'https://i.pravatar.cc/300?u=20',
  description:
    'Product Designer & Developer with over 8 years of experience. Leading design systems at Ipsum Technologies.',
  social: [
    {
      label: 'LinkedIn',
      icon: <LuLinkedin />,
      url: '#',
    },
    {
      label: 'Twitter',
      icon: <LuTwitter />,
      url: '#',
    },
    {
      label: 'Website',
      icon: <LuGlobe />,
      url: '#',
    },
  ],
}
