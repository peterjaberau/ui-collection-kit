import {
  Avatar,
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Link,
  Stack,
  Text,
} from '@chakra-ui/react'
import { LuGlobe, LuLinkedin, LuPlus, LuTwitter } from 'react-icons/lu'

export const Block = () => {
  return (
    <Container py="20" maxW="sm">
      <Stack gap="4">
        <Avatar.Root
          alignSelf="center"
          css={{ '--avatar-size': 'sizes.20', '--avatar-font-size': 'fontSizes.2xl' }}
        >
          <Avatar.Fallback name={data.name} />
          <Avatar.Image src={data.image} />
        </Avatar.Root>

        <Box textAlign="center" w="full">
          <Heading size="lg">{data.name}</Heading>
          <Text color="fg.muted">{data.title}</Text>
        </Box>

        <Button alignSelf="stretch" size="sm" mb="2">
          <LuPlus />
          Follow
        </Button>

        <Stack gap="2">
          <Text fontWeight="medium">About</Text>
          <Box color="fg.muted">{data.description}</Box>
        </Stack>

        <Stack gap="2">
          <Text fontWeight="medium">Socials</Text>
          <Stack>
            {data.social.map((item) => (
              <HStack key={item.label} color="fg.muted">
                {item.icon}
                <Link href={item.url} color="inherit">
                  {item.label}
                </Link>
              </HStack>
            ))}
          </Stack>
        </Stack>
      </Stack>
    </Container>
  )
}

const data = {
  name: 'Elena Doe',
  image: 'https://i.pravatar.cc/300?u=90',
  title: 'Product Designer & Developer',
  description:
    'Leading design systems at Ipsum Technologies. Passionate about creating user-friendly and accessible products.',
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
