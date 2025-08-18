import {
  Box,
  Center,
  Container,
  Flex,
  Heading,
  HStack,
  IconButton,
  SimpleGrid,
  Span,
  Stack,
  Text,
  Textarea,
} from '@chakra-ui/react'
import { HiBookOpen, HiLightBulb, HiMap } from 'react-icons/hi'
import { LuImagePlus, LuMic, LuSendHorizontal } from 'react-icons/lu'
import { PromptButton } from './prompt-button'

export const Block = () => {
  return (
    <Flex direction="column" height="full">
      <Box flex="1" overflow="auto">
        <Container maxW="4xl" pt="32">
          <Stack gap="10">
            <Heading size="4xl" fontWeight="normal">
              <Span color="colorPalette.fg">Hello, User</Span> <br />
              <Span color="fg.muted">How can I help you today?</Span>
            </Heading>

            <SimpleGrid columns={{ base: 2, md: 4 }} gap="4">
              <PromptButton icon={<HiLightBulb />}>What's the weather like today?</PromptButton>
              <PromptButton icon={<HiMap />}>Share the closest coffee shop around me</PromptButton>
              <PromptButton icon={<HiLightBulb />}>What does React.js do?</PromptButton>
              <PromptButton icon={<HiBookOpen />}>Recommend some books I can read</PromptButton>
            </SimpleGrid>
          </Stack>
        </Container>
      </Box>
      <Box flex="0">
        <Container maxW="4xl">
          <Flex bg="bg.muted" borderRadius="l2" px="4" py="3" align="flex-start">
            <Textarea
              unstyled
              outline="none"
              bg="transparent"
              resize="none"
              width="full"
              placeholder="Ask me anything..."
            />
            <HStack>
              <IconButton variant="ghost" aria-label="Add image">
                <LuImagePlus />
              </IconButton>
              <IconButton variant="ghost" aria-label="Record audio">
                <LuMic />
              </IconButton>
              <IconButton aria-label="Send message">
                <LuSendHorizontal />
              </IconButton>
            </HStack>
          </Flex>
        </Container>
        <Center height="10" bg="currentBg">
          <Text textStyle="xs" color="fg.subtle" textAlign="center">
            Our AI model can make mistakes. Please be kind and respectful.
          </Text>
        </Center>
      </Box>
    </Flex>
  )
}
