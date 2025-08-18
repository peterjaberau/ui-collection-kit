import { Button, HStack, IconButton, Menu, Portal, Text } from '@chakra-ui/react'
import { FiEdit, FiMoreVertical, FiStar, FiTrash } from 'react-icons/fi'
import { SiGithub, SiRocket } from 'react-icons/si'

interface TopNavProps {
  title: string
}

export const TopNav = (props: TopNavProps) => {
  const { title } = props
  return (
    <HStack
      justify="space-between"
      borderBottomWidth="1px"
      px="4"
      h="var(--top-nav-height)"
      flexShrink="0"
      align="center"
    >
      <Text fontWeight="bold" fontSize="lg" flex="1">
        Logo
      </Text>

      <HStack align="center" gap="2" flex="1" justify="center">
        <Text textStyle="sm" flexShrink="0" fontWeight="medium">
          {title}
        </Text>
        <Menu.Root positioning={{ placement: 'bottom-end' }}>
          <Menu.Trigger asChild>
            <IconButton size="xs" variant="ghost" colorPalette="gray" borderRadius="md" p="1">
              <FiMoreVertical />
            </IconButton>
          </Menu.Trigger>
          <Portal>
            <Menu.Positioner>
              <Menu.Content minW="40">
                <Menu.Arrow />
                <Menu.ItemGroup>
                  <Menu.ItemGroupLabel>Project Settings</Menu.ItemGroupLabel>
                  <Menu.Item value="rename">
                    <FiEdit />
                    Rename
                  </Menu.Item>
                  <Menu.Item value="duplicate">
                    <FiStar />
                    Favorite
                  </Menu.Item>
                  <Menu.Item value="export" color="fg.error">
                    <FiTrash />
                    Delete
                  </Menu.Item>
                </Menu.ItemGroup>
              </Menu.Content>
            </Menu.Positioner>
          </Portal>
        </Menu.Root>
      </HStack>

      <HStack flex="1" justify="flex-end">
        <IconButton size="xs" variant="outline" colorPalette="gray">
          <SiGithub />
        </IconButton>
        <Button size="xs">
          <SiRocket />
          Deploy
        </Button>
      </HStack>
    </HStack>
  )
}
