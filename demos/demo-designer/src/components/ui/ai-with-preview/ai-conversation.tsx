'use client'

import type { HTMLChakraProps, IconButtonProps } from '@chakra-ui/react'
import { AbsoluteCenter, chakra, IconButton } from '@chakra-ui/react'
import { useCallback } from 'react'
import { LuArrowDown } from 'react-icons/lu'
import { StickToBottom as StickToBottomEl, useStickToBottomContext } from 'use-stick-to-bottom'

export interface ConversationRootProps
  extends HTMLChakraProps<'div', React.ComponentProps<typeof StickToBottomEl>> {}

export const ConversationRoot = chakra(
  StickToBottomEl,
  {
    base: {
      position: 'relative',
      flex: 1,
      overflowY: 'auto',
      height: 'full',
    },
  },
  {
    forwardProps: ['resize'],
    defaultProps: {
      'aria-roledescription': 'conversation',
      initial: 'instant',
      resize: 'smooth',
      role: 'log',
    },
  },
)

export interface ConversationContentProps extends HTMLChakraProps<'div'> {}

export const ConversationContent = chakra(StickToBottomEl.Content, {
  base: {
    p: '4',
  },
})

export interface ConversationScrollButtonProps extends IconButtonProps {}

export const ConversationScrollButton = (props: ConversationScrollButtonProps) => {
  const { isAtBottom, scrollToBottom } = useStickToBottomContext()

  const handleScrollToBottom = useCallback(() => {
    scrollToBottom()
  }, [scrollToBottom])

  return (
    !isAtBottom && (
      <AbsoluteCenter axis="horizontal" bottom="4">
        <IconButton
          rounded="full"
          onClick={handleScrollToBottom}
          variant="outline"
          size="xs"
          colorPalette="gray"
          bg="bg"
          {...props}
        >
          <LuArrowDown />
        </IconButton>
      </AbsoluteCenter>
    )
  )
}
