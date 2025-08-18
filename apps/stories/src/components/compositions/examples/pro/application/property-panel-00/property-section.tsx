import { HStack, Stack, Text } from '@chakra-ui/react'

interface PropertySectionProps {
  title: string
  children: React.ReactNode
  action?: React.ReactElement
}

export function PropertySection(props: PropertySectionProps) {
  const { title, children, action } = props
  return (
    <Stack gap="4" _notLast={{ borderBottomWidth: '1px', pb: '6' }} borderColor="border.muted">
      <HStack>
        <Text fontWeight="semibold" flex="1" textStyle="sm">
          {title}
        </Text>
        {action}
      </HStack>
      <Stack gap="4" css={{ '--max-width': '160px' }}>
        {children}
      </Stack>
    </Stack>
  )
}
