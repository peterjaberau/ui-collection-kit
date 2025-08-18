import { Box, HStack, Separator, type StackProps } from '@chakra-ui/react'

export const Divider = (props: StackProps) => {
  const { children, ...rootProps } = props
  return (
    <HStack {...rootProps}>
      <Separator flex="1" />
      <Box flexShrink="0">{children}</Box>
      <Separator flex="1" />
    </HStack>
  )
}
