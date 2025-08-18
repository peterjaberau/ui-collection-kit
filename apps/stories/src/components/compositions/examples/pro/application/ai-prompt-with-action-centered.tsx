import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Heading,
  HStack,
  Textarea,
  VStack,
} from '@chakra-ui/react'
import { LuArrowRight, LuBook, LuCirclePlus, LuSparkle } from 'react-icons/lu'

import { Tooltip } from '@/components/ui/tooltip'

const prompts = [
  { text: "🌧️ What's the weather like today?" },
  { text: '🏪 Share the closest coffee shop around me' },
  { text: '💻 What does React.js do?' },
  { text: '📚 Recommend some books I can read' },
]

export const Block = () => {
  return (
    <Container maxW="4xl" height="full">
      <Center height="full">
        <VStack gap="10">
          <Heading size="4xl" fontWeight="normal" textAlign="center">
            What do you want to do today?
          </Heading>
          <Box w="full">
            <Box borderWidth="1px" rounded="l2" _focusWithin={{ borderColor: 'border.emphasized' }}>
              <Textarea
                px="4"
                py="4"
                unstyled
                bg="transparent"
                outline="none"
                width="full"
                resize="none"
                placeholder="Ask me anything..."
              />
              <HStack px="2" py="2" justify="space-between">
                <HStack colorPalette="gray">
                  <Tooltip content="Add knowledge sources">
                    <Button variant="ghost" size="xs">
                      <LuBook /> Knowledge
                    </Button>
                  </Tooltip>
                  <Tooltip content="Upload files">
                    <Button variant="ghost" size="xs">
                      <LuCirclePlus />
                      File
                    </Button>
                  </Tooltip>
                </HStack>
                <Button size="xs">
                  <LuArrowRight />
                </Button>
              </HStack>
            </Box>
          </Box>
          <Container maxW="2xl">
            <Flex align="flex-start" gap="4">
              <HStack
                hideBelow="md"
                flexShrink="0"
                color="colorPalette.fg"
                textStyle="sm"
                pos="relative"
                top="2"
                fontWeight="medium"
              >
                <LuSparkle />
                Try these
              </HStack>
              <HStack wrap="wrap" colorPalette="gray" justify="center">
                {prompts.map((prompt) => (
                  <Button px="3" key={prompt.text} size="xs" rounded="full" variant="outline">
                    {prompt.text}
                  </Button>
                ))}
              </HStack>
            </Flex>
          </Container>
        </VStack>
      </Center>
    </Container>
  )
}
