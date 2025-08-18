import {
  Box,
  Button,
  Center,
  Flex,
  HStack,
  Popover,
  Portal,
  Spacer,
  Stack,
  Text,
  Textarea,
} from '@chakra-ui/react'
import { LuCircleX, LuCode, LuPlay, LuPlus, LuSettings } from 'react-icons/lu'
import { ModelParamaters } from './model-parameters'
import { ModelPresetSelect } from './model-preset-select'
import { ModelSelect } from './model-select'

export const Block = () => {
  return (
    <Flex height="full">
      <Flex direction="column" flex="2">
        <HStack px="4" py="4" justify="space-between" borderBottomWidth="1px">
          <HStack gap="8">
            <HStack gap="4">
              <Text fontWeight="medium" textStyle="sm" hideBelow="sm">
                Model
              </Text>
              <ModelSelect defaultValue={['gpt-4o']} width="160px" />
            </HStack>

            <HStack gap="4" hideBelow="md">
              <Text fontWeight="medium" textStyle="sm">
                Preset
              </Text>
              <ModelPresetSelect defaultValue={['summarize']} width="160px" />
            </HStack>
          </HStack>

          <HStack gap="0">
            <Button variant="ghost" size="sm">
              <LuCode />
              Code
            </Button>
            <Button variant="ghost" size="sm">
              <LuPlus />
              New
            </Button>
            <Popover.Root>
              <Popover.Trigger asChild>
                <Button variant="ghost" size="sm" hideFrom="lg">
                  <LuSettings />
                </Button>
              </Popover.Trigger>
              <Portal>
                <Popover.Positioner>
                  <Popover.Content pb="4">
                    <ModelParamaters />
                  </Popover.Content>
                </Popover.Positioner>
              </Portal>
            </Popover.Root>
          </HStack>
        </HStack>

        <Box flex="1" width="full" px="4" py="4">
          <Center boxSize="full" bg="bg.muted" rounded="l2" />
        </Box>

        <Box px="4">
          <Flex gap="4">
            <Box position="relative" flex="1">
              <Textarea rows={4} placeholder="Enter your prompt here..." resize="none" />
              <Text position="absolute" bottom="2" right="2" fontSize="xs" color="text.muted">
                Tokens: 50
              </Text>
            </Box>
            <Stack>
              <Button size="sm">
                <LuPlay /> Save and run
              </Button>
              <Button variant="outline" colorPalette="gray" size="sm">
                <LuCircleX /> Clear chat
              </Button>
            </Stack>
          </Flex>
          <Spacer h="4" />
        </Box>
      </Flex>

      <Box borderLeftWidth="1px" hideBelow="lg" flex="1" maxW="sm">
        <ModelParamaters />
      </Box>
    </Flex>
  )
}
