import { HStack, Stack, Text } from '@chakra-ui/react'

interface PropertySectionProps {
  title: string
  children: React.ReactNode
  action?: React.ReactElement
}

export function PropertySection(props: PropertySectionProps) {
  const { title, children, action } = props
  return (
    <Stack gap="0" _notLast={{ borderBottomWidth: '1px' }} borderColor="border.muted">
      <HStack px="4" py="4">
        <Text fontWeight="medium" flex="1" textStyle="xs">
          {title}
        </Text>
        {action}
      </HStack>
      <Stack gap="2" px="4" pb="4" css={{ '--field-label-width': '52px' }}>
        {children}
      </Stack>
    </Stack>
  )
}
