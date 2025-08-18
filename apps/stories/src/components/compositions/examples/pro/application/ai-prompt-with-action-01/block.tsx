import { Box, Button, Flex, SimpleGrid, Stack, Textarea } from '@chakra-ui/react'
import { BsImage, BsPalette2 } from 'react-icons/bs'
import { HiArrowUp, HiCode, HiSparkles } from 'react-icons/hi'
import { EmptyStatePrompt } from './empty-state'
import { PromptButton } from './prompt-button'

export const Block = () => {
  return (
    <Flex direction="column" pos="relative" bg="bg" height="100vh" overflow="hidden">
      <Box overflowY="auto" paddingTop="20" paddingBottom="40" height="full">
        <EmptyStatePrompt>How can I help you?</EmptyStatePrompt>
      </Box>

      <Box
        pos="absolute"
        bottom="0"
        insetX="0"
        bgImage="linear-gradient(to top, var(--gradient-from) 80%, var(--gradient-to))"
        gradientFrom="bg"
        gradientTo="rgba(0,0,0,0)"
        paddingY="8"
        marginX="4"
      >
        <Stack maxW="prose" mx="auto" gap="3">
          <SimpleGrid columns={2} gap="3">
            <PromptButton
              icon={<BsPalette2 />}
              title="Color Palette"
              description="Generate a color palette from an image"
            />
            <PromptButton
              icon={<BsImage />}
              title="Generate Image"
              description="Generate an image from a text prompt"
            />
            <PromptButton
              icon={<HiCode />}
              title="React component"
              description="Generate a React code from prompt"
            />
            <PromptButton
              icon={<HiSparkles />}
              title="Voice Magic"
              description="Create a magical UI from voice"
            />
          </SimpleGrid>

          <Box as="form" pos="relative" pb="1">
            <Textarea
              name="message"
              placeholder="Ask me anything..."
              maxHeight="200px"
              paddingEnd="9"
              resize="none"
              rows={1}
            />
            <Box pos="absolute" top="3px" right="3px" zIndex="2">
              <Button size="xs" type="submit">
                <HiArrowUp />
              </Button>
            </Box>
          </Box>
        </Stack>
      </Box>
    </Flex>
  )
}
