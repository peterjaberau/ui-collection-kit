import { Box, Icon, RadioGroup, Text } from '@chakra-ui/react'

interface NotificationRadioItemProps {
  icon?: React.ReactNode
  title: string
  description?: string
  value: string
}

export const NotificationRadioItem = (props: NotificationRadioItemProps) => {
  const { icon, title, description, value } = props
  return (
    <RadioGroup.Item value={value} alignItems="flex-start">
      <RadioGroup.ItemHiddenInput />
      <RadioGroup.ItemIndicator />
      <RadioGroup.ItemText display="flex" gap="2">
        <Icon color="fg.subtle" size="sm">
          {icon}
        </Icon>
        <Box pos="relative" top="-0.5">
          <Text>{title}</Text>
          <Text color="fg.muted" fontWeight="normal">
            {description}
          </Text>
        </Box>
      </RadioGroup.ItemText>
    </RadioGroup.Item>
  )
}
