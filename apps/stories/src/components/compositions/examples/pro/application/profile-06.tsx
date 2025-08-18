import {
  Avatar,
  Badge,
  Box,
  Container,
  Flex,
  Float,
  HStack,
  Icon,
  SimpleGrid,
  Span,
  Stack,
  Text,
} from '@chakra-ui/react'
import {
  LuBadgeCheck,
  LuCircleCheck,
  LuMapPin,
  LuMedal,
  LuMessageCircle,
  LuStar,
  LuWallet,
} from 'react-icons/lu'

export const Block = () => {
  return (
    <Container py="20" maxW="2xl">
      <Stack gap="8">
        <Flex gap="8">
          <Avatar.Root css={{ '--avatar-size': 'sizes.28', '--avatar-font-size': 'fontSizes.3xl' }}>
            <Avatar.Fallback name={data.name} />
            <Avatar.Image src={data.image} />

            <Float
              offset="4"
              placement="bottom-end"
              boxSize="10"
              layerStyle="fill.solid"
              rounded="full"
            >
              <Icon rounded="full" size="md">
                <LuBadgeCheck />
              </Icon>
            </Float>
          </Avatar.Root>

          <Stack flex="1">
            <HStack>
              <Text textStyle="xl" fontWeight="semibold">
                {data.name}
              </Text>
              <Text textStyle="sm" color="fg.muted">
                @{data.username}
              </Text>
            </HStack>

            <HStack columnGap="6" rowGap="2" textStyle="sm" wrap="wrap">
              <HStack gap="1">
                <LuStar />
                <Span fontWeight="medium">{data.rating}</Span>
                <Span color="fg.muted">({data.ratingCount})</Span>
              </HStack>

              <HStack gap="1" color="fg.muted">
                <LuMapPin />
                {data.location}
              </HStack>

              <Badge colorPalette="orange">
                <LuMedal /> Top Rated
              </Badge>
            </HStack>

            <Text color="fg.muted">{data.title}</Text>

            <HStack gap="6" textStyle="sm">
              <HStack gap="1">
                <LuWallet />
                120K USD earned
              </HStack>

              <HStack gap="1">
                <LuMessageCircle />
                {data.language}
              </HStack>
            </HStack>
          </Stack>
        </Flex>

        <Stack gap="4">
          <Text textStyle="sm" fontWeight="semibold">
            About
          </Text>
          <Box>{data.description}</Box>
        </Stack>

        <Stack gap="4">
          <Text textStyle="sm" fontWeight="semibold">
            Skills
          </Text>
          <SimpleGrid gap="4" columns={2}>
            {data.skills.map((skill) => (
              <HStack key={skill} flex="1">
                <Icon color="colorPalette.fg">
                  <LuCircleCheck />
                </Icon>
                {skill}
              </HStack>
            ))}
          </SimpleGrid>
        </Stack>

        <Stack gap="4">
          <Text textStyle="sm" fontWeight="semibold">
            Softwares
          </Text>
          <HStack wrap="wrap">
            {data.softwares.map((software) => (
              <Badge key={software} size="lg" variant="outline" colorPalette="gray">
                {software}
              </Badge>
            ))}
          </HStack>
        </Stack>
      </Stack>
    </Container>
  )
}

const data = {
  name: 'Jessica D.',
  location: 'New York, NY',
  language: 'English',
  username: 'jessx034',
  rating: 4.5,
  ratingCount: 120,
  topRated: true,
  image: 'https://i.pravatar.cc/300?u=40',
  title: 'Product Designer & Developer',
  description:
    'Product Designer & Developer with over 8 years of experience. Leading design systems at Ipsum Technologies.',
  skills: ['UI/UX Design', 'Frontend Development', 'User Research', 'Design Systems', 'Figma'],
  softwares: [
    'Figma',
    'Adobe Suite',
    'Sketch',
    'Webflow',
    'Zeplin',
    'InVision',
    'Principle',
    'Framer',
    'Abstract',
  ],
}
