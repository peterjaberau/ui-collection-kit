import { Avatar, Badge, Box, Container, Flex, HStack, Link, Stack, Text } from '@chakra-ui/react'

export const FeedWithComments = () => {
  return (
    <Container width="full" maxW="2xl" py="8">
      <Box pos="relative">
        <Box pos="absolute" width="2px" left="8" top="12" bottom="0" bg="border" />
        <Flex gap="2" ps="4" pt="2" as="article" tabIndex={-1}>
          <Avatar.Root size="sm">
            <Avatar.Fallback name="John Doe" />
            <Avatar.Image src="https://i.pravatar.cc/300?u=px" />
          </Avatar.Root>
          <Stack>
            <Box bg="bg.muted" rounded="l3" py="2" px="3">
              <Text textStyle="sm" fontWeight="semibold">
                John Doe
              </Text>
              <Box textStyle="sm" color="fg.muted">
                This is a great feature request! I've been looking for something similar. The
                current theming system could definitely use some improvements in terms of
                customization options.
              </Box>
            </Box>
            <HStack fontWeight="semibold" textStyle="xs" ps="2">
              <Link color="fg.muted">1d</Link>
              <Link color="fg.muted">Like</Link>
              <Link color="fg.muted">Reply</Link>
            </HStack>
          </Stack>
        </Flex>
      </Box>
      <Box pos="relative" pt="2">
        <Box
          pos="absolute"
          width="5"
          height="8"
          left="8"
          top="0"
          bottom="0"
          roundedBottomLeft="l3"
          borderStartWidth="2px"
          borderBottomWidth="2px"
        />
        <Flex gap="2" ps="14" pt="2" as="article" tabIndex={-1}>
          <Avatar.Root size="xs">
            <Avatar.Fallback name="Emily Smith" />
            <Avatar.Image src="https://i.pravatar.cc/300?u=po" />
          </Avatar.Root>
          <Stack>
            <Box bg="bg.muted" rounded="l3" py="2" px="3">
              <HStack textStyle="sm" fontWeight="semibold">
                Emily Smith
                <Badge size="xs" variant="solid">
                  Author
                </Badge>
              </HStack>
              <Box textStyle="sm" color="fg.muted">
                Thank you for the suggestion! I'll look into it and get back to you soon.
              </Box>
            </Box>
            <HStack fontWeight="semibold" textStyle="xs" ps="2">
              <Link color="fg.muted">1d</Link>
              <Link color="fg.muted">Like</Link>
              <Link color="fg.muted">Reply</Link>
            </HStack>
          </Stack>
        </Flex>
      </Box>
    </Container>
  )
}
