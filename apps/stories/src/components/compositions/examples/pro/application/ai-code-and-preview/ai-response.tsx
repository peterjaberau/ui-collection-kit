'use client'

import type { BoxProps } from '@chakra-ui/react'
import { Box, CodeBlock, chakra, createShikiAdapter, IconButton } from '@chakra-ui/react'
import hardenReactMarkdown from 'harden-react-markdown'
import { useColorMode } from '@/components/ui/color-mode'
import 'katex/dist/katex.min.css'
import { memo, useMemo } from 'react'
import ReactMarkdown, { type Options } from 'react-markdown'
import rehypeKatex from 'rehype-katex'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import type { HighlighterGeneric } from 'shiki'

/**
 * Parses markdown text and removes incomplete tokens to prevent partial rendering
 * of links, images, bold, and italic formatting during streaming.
 */
function parseIncompleteMarkdown(text: string): string {
  if (!text || typeof text !== 'string') {
    return text
  }

  let result = text

  // Handle incomplete links and images
  // Pattern: [...] or ![...] where the closing ] is missing
  const linkImagePattern = /(!?\[)([^\]]*?)$/
  const linkMatch = result.match(linkImagePattern)
  if (linkMatch) {
    // If we have an unterminated [ or ![, remove it and everything after
    const startIndex = result.lastIndexOf(linkMatch[1])
    result = result.substring(0, startIndex)
  }

  // Handle incomplete bold formatting (**)
  const boldPattern = /(\*\*)([^*]*?)$/
  const boldMatch = result.match(boldPattern)
  if (boldMatch) {
    // Count the number of ** in the entire string
    const asteriskPairs = (result.match(/\*\*/g) || []).length
    // If odd number of **, we have an incomplete bold - complete it
    if (asteriskPairs % 2 === 1) {
      result = `${result}**`
    }
  }

  // Handle incomplete italic formatting (__)
  const italicPattern = /(__)([^_]*?)$/
  const italicMatch = result.match(italicPattern)
  if (italicMatch) {
    // Count the number of __ in the entire string
    const underscorePairs = (result.match(/__/g) || []).length
    // If odd number of __, we have an incomplete italic - complete it
    if (underscorePairs % 2 === 1) {
      result = `${result}__`
    }
  }

  // Handle incomplete single asterisk italic (*)
  const singleAsteriskPattern = /(\*)([^*]*?)$/
  const singleAsteriskMatch = result.match(singleAsteriskPattern)
  if (singleAsteriskMatch) {
    // Count single asterisks that aren't part of **
    const singleAsterisks = result.split('').reduce((acc, char, index) => {
      if (char === '*') {
        // Check if it's part of a ** pair
        const prevChar = result[index - 1]
        const nextChar = result[index + 1]
        if (prevChar !== '*' && nextChar !== '*') {
          return acc + 1
        }
      }
      return acc
    }, 0)

    // If odd number of single *, we have an incomplete italic - complete it
    if (singleAsterisks % 2 === 1) {
      result = `${result}*`
    }
  }

  // Handle incomplete single underscore italic (_)
  const singleUnderscorePattern = /(_)([^_]*?)$/
  const singleUnderscoreMatch = result.match(singleUnderscorePattern)
  if (singleUnderscoreMatch) {
    // Count single underscores that aren't part of __
    const singleUnderscores = result.split('').reduce((acc, char, index) => {
      if (char === '_') {
        // Check if it's part of a __ pair
        const prevChar = result[index - 1]
        const nextChar = result[index + 1]
        if (prevChar !== '_' && nextChar !== '_') {
          return acc + 1
        }
      }
      return acc
    }, 0)

    // If odd number of single _, we have an incomplete italic - complete it
    if (singleUnderscores % 2 === 1) {
      result = `${result}_`
    }
  }

  // Handle incomplete inline code blocks (`) - but avoid code blocks (```)
  const inlineCodePattern = /(`)([^`]*?)$/
  const inlineCodeMatch = result.match(inlineCodePattern)
  if (inlineCodeMatch) {
    // Check if we're dealing with a code block (triple backticks)
    const allTripleBackticks = (result.match(/```/g) || []).length

    // If we have an odd number of ``` sequences, we're inside an incomplete code block
    // In this case, don't complete inline code
    const insideIncompleteCodeBlock = allTripleBackticks % 2 === 1

    if (!insideIncompleteCodeBlock) {
      // Count the number of single backticks that are NOT part of triple backticks
      let singleBacktickCount = 0
      for (let i = 0; i < result.length; i++) {
        if (result[i] === '`') {
          // Check if this backtick is part of a triple backtick sequence
          const isTripleStart = result.substring(i, i + 3) === '```'
          const isTripleMiddle = i > 0 && result.substring(i - 1, i + 2) === '```'
          const isTripleEnd = i > 1 && result.substring(i - 2, i + 1) === '```'

          if (!isTripleStart && !isTripleMiddle && !isTripleEnd) {
            singleBacktickCount++
          }
        }
      }

      // If odd number of single backticks, we have an incomplete inline code - complete it
      if (singleBacktickCount % 2 === 1) {
        result = `${result}\``
      }
    }
  }

  // Handle incomplete strikethrough formatting (~~)
  const strikethroughPattern = /(~~)([^~]*?)$/
  const strikethroughMatch = result.match(strikethroughPattern)
  if (strikethroughMatch) {
    // Count the number of ~~ in the entire string
    const tildePairs = (result.match(/~~/g) || []).length
    // If odd number of ~~, we have an incomplete strikethrough - complete it
    if (tildePairs % 2 === 1) {
      result = `${result}~~`
    }
  }

  return result
}

// Create a hardened version of ReactMarkdown
const HardenedMarkdown = hardenReactMarkdown(ReactMarkdown)
type HardenedMarkdownReturn = ReturnType<typeof hardenReactMarkdown>

export interface ResponseProps extends Omit<BoxProps, 'children'> {
  options?: Options
  children: Options['children']
  allowedImagePrefixes?: HardenedMarkdownReturn['allowedImagePrefixes']
  allowedLinkPrefixes?: HardenedMarkdownReturn['allowedLinkPrefixes']
  defaultOrigin?: HardenedMarkdownReturn['defaultOrigin']
  parseIncompleteMarkdown?: boolean
}

const components: Options['components'] = {
  ol: ({ node, children, ...props }) => (
    <chakra.ol ml="4" listStylePosition="outside" listStyleType="decimal" {...props}>
      {children}
    </chakra.ol>
  ),
  li: ({ node, children, ...props }) => (
    <chakra.li py="1" {...props}>
      {children}
    </chakra.li>
  ),
  ul: ({ node, children, ...props }) => (
    <chakra.ul ml="4" listStylePosition="outside" listStyleType="decimal" {...props}>
      {children}
    </chakra.ul>
  ),
  strong: ({ node, children, ...props }) => (
    <chakra.span fontWeight="semibold" {...props}>
      {children}
    </chakra.span>
  ),
  a: ({ node, children, ...props }) => (
    <chakra.a
      fontWeight="medium"
      color="fg"
      textDecoration="underline"
      rel="noreferrer"
      target="_blank"
      {...props}
    >
      {children}
    </chakra.a>
  ),
  h1: ({ node, children, ...props }) => (
    <chakra.h1 mt="6" mb="2" fontWeight="semibold" fontSize="2xl" {...props}>
      {children}
    </chakra.h1>
  ),
  h2: ({ node, children, ...props }) => (
    <chakra.h2 mt="6" mb="2" fontWeight="semibold" fontSize="xl" {...props}>
      {children}
    </chakra.h2>
  ),
  h3: ({ node, children, ...props }) => (
    <chakra.h3 mt="6" mb="2" fontWeight="semibold" fontSize="lg" {...props}>
      {children}
    </chakra.h3>
  ),
  h4: ({ node, children, ...props }) => (
    <chakra.h4 mt="6" mb="2" fontWeight="semibold" fontSize="md" {...props}>
      {children}
    </chakra.h4>
  ),
  h5: ({ node, children, ...props }) => (
    <chakra.h5 mt="6" mb="2" fontWeight="semibold" fontSize="sm" {...props}>
      {children}
    </chakra.h5>
  ),
  h6: ({ node, children, ...props }) => (
    <chakra.h6 mt="6" mb="2" fontWeight="semibold" fontSize="xs" {...props}>
      {children}
    </chakra.h6>
  ),
  pre: ({ node, children }) => {
    let language = 'javascript'
    const { colorMode } = useColorMode()

    if (typeof node?.properties?.className === 'string') {
      language = node.properties.className.replace('language-', '')
    }

    const childrenIsCode =
      typeof children === 'object' &&
      children !== null &&
      'type' in children &&
      children.type === 'code'

    if (!childrenIsCode) {
      return <pre>{children}</pre>
    }

    const code = (children.props as { children: string }).children
    const colorScheme = colorMode === 'dark' ? 'dark' : 'light'

    return (
      <CodeBlock.Root code={code} language={language} size="sm" meta={{ colorScheme }}>
        <CodeBlock.Content isolation="isolate">
          <Box position="absolute" top="2" right="2" zIndex="1">
            <CodeBlock.CopyTrigger asChild>
              <IconButton variant="ghost" size="2xs">
                <CodeBlock.CopyIndicator />
              </IconButton>
            </CodeBlock.CopyTrigger>
          </Box>
          <CodeBlock.Code>
            <CodeBlock.CodeText />
          </CodeBlock.Code>
        </CodeBlock.Content>
      </CodeBlock.Root>
    )
  },
}

export const Response = memo(
  function Response(props: ResponseProps) {
    const {
      options,
      children,
      allowedImagePrefixes,
      allowedLinkPrefixes,
      defaultOrigin,
      parseIncompleteMarkdown: shouldParseIncompleteMarkdown = true,
      ...rest
    } = props

    // Parse the children to remove incomplete markdown tokens if enabled
    const parsedChildren = useMemo(() => {
      if (typeof children === 'string' && shouldParseIncompleteMarkdown) {
        return parseIncompleteMarkdown(children)
      }
      return children
    }, [children, shouldParseIncompleteMarkdown])

    return (
      <Box
        boxSize="full"
        css={{
          '& > :is(h1, h2, h3, h4, h5, h6):first-of-type': { mt: 0 },
          '& code:not(pre > code)': {
            fontSize: '0.925em',
            borderRadius: 'l1',
            bg: 'blackAlpha.100',
            fontWeight: '600',
            padding: '0.125em 0.25em',
          },
        }}
        {...rest}
      >
        <CodeBlock.AdapterProvider value={shikiAdapter}>
          <HardenedMarkdown
            components={components}
            rehypePlugins={[rehypeKatex]}
            remarkPlugins={[remarkGfm, remarkMath]}
            allowedImagePrefixes={allowedImagePrefixes ?? ['*']}
            allowedLinkPrefixes={allowedLinkPrefixes ?? ['*']}
            defaultOrigin={defaultOrigin}
            {...options}
          >
            {parsedChildren}
          </HardenedMarkdown>
        </CodeBlock.AdapterProvider>
      </Box>
    )
  },
  (prevProps, nextProps) => prevProps.children === nextProps.children,
)

const shikiAdapter = createShikiAdapter<HighlighterGeneric<any, any>>({
  async load() {
    const { createHighlighter } = await import('shiki')
    return createHighlighter({
      langs: ['tsx', 'ts', 'scss', 'html', 'bash', 'json'],
      themes: ['github-dark', 'github-light'],
    })
  },
})
