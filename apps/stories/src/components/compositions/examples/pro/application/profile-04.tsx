import {
  Avatar,
  Badge,
  Box,
  Container,
  Flex,
  FormatNumber,
  Heading,
  HStack,
  Stack,
  Status,
  Text,
} from '@chakra-ui/react'
import { LuMapPin } from 'react-icons/lu'

export const Block = () => {
  return (
    <Container py="20" maxW="2xl">
      <Stack gap="4">
        <Flex gap="5" mb="2">
          <Avatar.Root size="2xl" css={{ '--avatar-size': 'sizes.20' }}>
            <Avatar.Fallback name={data.name} />
            <Avatar.Image src={data.image} />
          </Avatar.Root>
          <Box>
            <Text fontWeight="medium">{data.name}</Text>
            <Heading size="lg">{data.title}</Heading>
            <HStack gap="5" mt="1">
              <HStack color="fg.muted" textStyle="sm">
                <LuMapPin />
                {data.country}
              </HStack>
              <Status.Root colorPalette="green" color="fg.muted" alignItems="baseline">
                <Status.Indicator />
                online
              </Status.Root>
            </HStack>
          </Box>
        </Flex>

        <HStack color="fg.muted" gap={{ base: '5', md: '8' }} wrap="wrap" textStyle="sm">
          <HStack gap="0">
            <FormatNumber
              value={data.hourlyRate}
              style="currency"
              currency="USD"
              notation="compact"
            />
            /hr
          </HStack>
          <Text>100% Satisfaction</Text>
          <Text>
            <FormatNumber
              value={data.totalEarned}
              style="currency"
              currency="USD"
              notation="compact"
            />
            + earned
          </Text>
        </HStack>

        <HStack wrap="wrap">
          {data.skills.map((skill) => (
            <Badge size="lg" key={skill} variant="surface">
              {skill}
            </Badge>
          ))}
          <Badge size="lg" variant="surface">
            + 10
          </Badge>
        </HStack>

        <Text color="fg.muted">{data.description}</Text>
      </Stack>
    </Container>
  )
}

const data = {
  name: 'Elena D.',
  title: 'Product Designer & Developer',
  country: 'United States',
  hourlyRate: 120,
  totalEarned: 120000,
  image: 'https://i.pravatar.cc/300?u=12',
  skills: [
    'UI/UX Design',
    'Frontend Development',
    'User Research',
    'Design Systems',
    'Prototyping',
    'Figma',
  ],
  description:
    'Product Designer & Developer with over 8 years of experience. Leading design systems at Ipsum Technologies.',
}
