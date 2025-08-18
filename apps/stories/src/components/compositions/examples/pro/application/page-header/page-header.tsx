import { Heading, Stack, type StackProps, Text } from '@chakra-ui/react'
import type React from 'react'

/**
 * Props for the PageHeader component.
 * @extends StackProps from Chakra UI
 */
export interface PageHeaderProps extends StackProps {
  /** The text to display above the main heading */
  tagline?: React.ReactNode
  /** The main heading text */
  headline: React.ReactNode
  /** The descriptive text that appears below the heading */
  description: React.ReactNode
  /** Optional content to render below the header section */
  children?: React.ReactNode
}

export const PageHeader = (props: PageHeaderProps) => {
  const { tagline, headline, description, ...rootProps } = props
  return (
    <Stack gap={{ base: '6', md: '8' }} {...rootProps}>
      <Stack gap={{ base: '5', md: '6' }}>
        <Stack gap={{ base: '3', md: '4' }}>
          <Text textStyle={{ base: 'sm', md: 'md' }} fontWeight="medium" color="colorPalette.fg">
            {tagline}
          </Text>
          <Heading as="h1" textStyle={{ base: '4xl', md: '5xl' }}>
            {headline}
          </Heading>
        </Stack>
        <Text color="fg.muted" textStyle={{ base: 'lg', md: 'xl' }} maxW="3xl">
          {description}
        </Text>
      </Stack>
      {props.children}
    </Stack>
  )
}
