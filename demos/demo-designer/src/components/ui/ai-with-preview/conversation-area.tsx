'use client'

import { Box, Flex, type FlexProps, HStack, Spacer, Textarea } from '@chakra-ui/react'
import {
  LuCopy,
  LuPaperclip,
  LuRefreshCcw,
  LuSparkles,
  LuThumbsDown,
  LuThumbsUp,
  LuUpload,
} from 'react-icons/lu'
import { Action } from './action'
import {
  ConversationContent,
  ConversationRoot,
  ConversationScrollButton,
} from './ai-conversation'
import { MessageContent, MessageRoot } from './ai-message'
import { ReasoningContent, ReasoningRoot, ReasoningTrigger } from './ai-reasoning'
import { Response } from './ai-response'
import type { Message } from './data'

interface ConversationAreaProps extends FlexProps {
  messages: Message[]
  streaming: boolean
}

export const ConversationArea = (props: ConversationAreaProps) => {
  const { messages, streaming, ...rest } = props
  return (
    <Flex
      position="relative"
      direction="column"
      w={{ base: 'full', md: 'var(--sidebar-width)' }}
      h="full"
      borderRightWidth="1px"
      overflow="hidden"
      {...rest}
    >
      <ConversationRoot>
        <ConversationContent>
          {messages.map((message, messageIndex) => (
            <MessageRoot from={message.role} key={message.id}>
              <MessageContent>
                {message.parts.map((part, partIndex) => {
                  const key = `${message.id}-${partIndex}`
                  const last = messageIndex === messages.length - 1
                  switch (part.type) {
                    case 'text': {
                      return (
                        <div key={key}>
                          <Response>{part.text}</Response>
                          {message.role === 'assistant' && last && (
                            <AssistantMessageActions text={part.text} />
                          )}
                        </div>
                      )
                    }
                    case 'reasoning': {
                      return (
                        <ReasoningRoot width="full" streaming={streaming} key={key}>
                          <ReasoningTrigger />
                          <ReasoningContent>{part.text}</ReasoningContent>
                        </ReasoningRoot>
                      )
                    }
                    default:
                      return null
                  }
                })}
              </MessageContent>
            </MessageRoot>
          ))}
        </ConversationContent>
        <ConversationScrollButton />
      </ConversationRoot>

      <Box px="4" py="4" bg="bg" borderTopWidth="1px">
        <PromptInput />
      </Box>
    </Flex>
  )
}

const AssistantMessageActions = (props: { text: string }) => {
  const { text } = props
  return (
    <HStack gap="0" mt="2">
      <Action title="Good response" icon={<LuThumbsUp />} />
      <Action title="Bad response" icon={<LuThumbsDown />} />
      <Action title="Copy" icon={<LuCopy />} onClick={() => navigator.clipboard.writeText(text)} />
      <Action title="Retry" icon={<LuRefreshCcw />} />
    </HStack>
  )
}

const PromptInput = () => {
  return (
    <Box position="relative" isolation="isolate">
      <Textarea autoresize bg="bg" pb="12" placeholder="How can I help you today?" minH="28" />
      <HStack gap="1" position="absolute" bottom="4" insetStart="2" insetEnd="2" zIndex="1">
        <Action icon={<LuPaperclip />} title="Upload file" />
        <Action icon={<LuSparkles />} title="Enhance prompt" />
        <Spacer />
        <Action icon={<LuUpload />} title="Send Message" variant="solid" />
      </HStack>
    </Box>
  )
}
