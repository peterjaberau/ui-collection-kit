'use client'

import type { HTMLChakraProps, RecipeVariantProps } from '@chakra-ui/react'
import { Avatar, createSlotRecipeContext, defineSlotRecipe } from '@chakra-ui/react'

const recipe = defineSlotRecipe({
  className: 'ai-message',
  slots: ['root', 'content'],
  base: {
    root: {
      display: 'flex',
      width: 'full',
      alignItems: 'end',
      justifyContent: 'end',
      gap: '2',
      pt: '2',
    },
    content: {
      display: 'flex',
      flexDirection: 'column',
      gap: '2',
      rounded: 'lg',
      textStyle: 'sm',
      px: '4',
      py: '3',
      overflow: 'hidden',
    },
  },
  variants: {
    from: {
      user: {
        root: {
          flexDirection: 'row',
          '& > div': {
            maxWidth: '80%',
          },
        },
        content: {
          bg: 'bg.emphasized',
        },
      },
      assistant: {
        root: {
          width: 'full',
          flexDirection: 'row-reverse',
        },
        content: {
          width: 'full',
        },
      },
    },
  },
  defaultVariants: {
    from: 'user',
  },
})

const { withProvider, withContext } = createSlotRecipeContext({ recipe })

type VariantProps = RecipeVariantProps<typeof recipe>

export interface MessageRootProps extends HTMLChakraProps<'div'>, VariantProps {}
export const MessageRoot = withProvider<HTMLDivElement, MessageRootProps>('div', 'root')

export interface MessageContentProps extends HTMLChakraProps<'div'>, VariantProps {}
export const MessageContent = withContext<HTMLDivElement, MessageContentProps>('div', 'content')

export interface MessageAvatarProps extends Avatar.RootProps {
  src: string
  name?: string
}

export const MessageAvatar = (props: MessageAvatarProps) => {
  const { src, name, ...rest } = props
  return (
    <Avatar.Root size="sm" ring="1px" ringColor="border" {...rest}>
      <Avatar.Image alt="" my="0" src={src} />
      <Avatar.Fallback>{name?.slice(0, 2) || 'ME'}</Avatar.Fallback>
    </Avatar.Root>
  )
}
