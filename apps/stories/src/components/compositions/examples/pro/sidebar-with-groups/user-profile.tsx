import { Avatar, Box, HStack, IconButton, Text } from '@chakra-ui/react'
import { LuEllipsisVertical } from 'react-icons/lu'

export const UserProfile = () => {
  return (
    <HStack gap="3" justify="space-between">
      <HStack gap="3">
        <Avatar.Root>
          <Avatar.Fallback />
          <Avatar.Image src="https://i.pravatar.cc/300" />
        </Avatar.Root>
        <Box>
          <Text textStyle="sm" fontWeight="medium">
            John Doe
          </Text>
          <Text textStyle="sm" color="fg.muted">
            john@chakra-ui.com
          </Text>
        </Box>
      </HStack>
      <IconButton variant="ghost" colorPalette="gray" aria-label="Open Menu">
        <LuEllipsisVertical />
      </IconButton>
    </HStack>
  )
}
