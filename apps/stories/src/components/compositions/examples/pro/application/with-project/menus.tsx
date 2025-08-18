import { Avatar, Badge, HStack, Icon, Menu, Portal, Text } from '@chakra-ui/react'
import type React from 'react'
import { LuCheck, LuChevronsUpDown, LuPlus, LuSettings } from 'react-icons/lu'
import { getOrgTypeBadge, getSelectedItem, type Organization, type Project } from './data'

interface OrgSwitcherMenuProps {
  selectedId: string
  items: Organization[]
  onSelect: (id: string) => void
}

const OrgAvatar = (props: { item: Organization }) => {
  const { name, avatar } = props.item
  return (
    <Avatar.Root size="xs" scale="0.92">
      <Avatar.Fallback name={name} />
      <Avatar.Image src={avatar} />
    </Avatar.Root>
  )
}

interface OrgMenuItemProps {
  item: Organization
  selectedId: string
  onSelect: (id: string) => void
}

const OrgMenuItem = (props: OrgMenuItemProps) => {
  const { item, selectedId, onSelect } = props
  const { colorPalette, label } = getOrgTypeBadge(item.type)
  return (
    <Menu.Item key={item.id} value={item.id} onSelect={() => onSelect(item.id)} rounded="l2">
      <HStack gap="2" flex="1">
        <OrgAvatar item={item} />
        <HStack>
          <Text fontWeight="medium" textStyle="sm">
            {item.name}
          </Text>
          <Badge size="sm" variant="surface" colorPalette={colorPalette}>
            {label}
          </Badge>
        </HStack>
      </HStack>
      {selectedId === item.id && <LuCheck />}
    </Menu.Item>
  )
}

interface MenuItemWithIconProps extends Omit<Menu.ItemProps, 'onSelect'> {
  onSelect: (id: string) => void
  icon: React.ReactNode
}

const MenuItemWithIcon = (props: MenuItemWithIconProps) => {
  const { onSelect, children, icon, ...rest } = props
  return (
    <Menu.Item onSelect={() => onSelect(rest.value)} fontWeight="medium" {...rest}>
      <Icon>{icon}</Icon>
      <Menu.ItemText>{children}</Menu.ItemText>
    </Menu.Item>
  )
}

const Trigger = (props: Menu.TriggerProps) => {
  return (
    <Menu.Trigger
      display="flex"
      alignItems="center"
      gap="1"
      focusVisibleRing="outside"
      _focusVisible={{ bg: 'bg.muted' }}
      rounded="l2"
      p="1"
      height="8"
      {...props}
    />
  )
}

const Content = (props: React.PropsWithChildren<{ label: string; action?: React.ReactNode }>) => {
  const { label, children, action } = props
  return (
    <Portal>
      <Menu.Positioner>
        <Menu.Content minW="64">
          <Menu.ItemGroup>
            <Menu.ItemGroupLabel>{label}</Menu.ItemGroupLabel>
            {children}
          </Menu.ItemGroup>
          {action && <Menu.Separator />}
          {action}
        </Menu.Content>
      </Menu.Positioner>
    </Portal>
  )
}

export const OrgSwitcherMenu = (props: OrgSwitcherMenuProps) => {
  const { selectedId, items, onSelect } = props
  const item = getSelectedItem(items, selectedId)
  return (
    <Menu.Root positioning={{ placement: 'bottom-start' }}>
      <Trigger>
        <OrgAvatar item={item} />
        <Text fontWeight="medium" ms="1">
          {item.name}
        </Text>
        <Icon color="fg.muted">
          <LuChevronsUpDown />
        </Icon>
      </Trigger>
      <Content
        label="Organizations"
        action={
          <MenuItemWithIcon onSelect={onSelect} icon={<LuPlus />} value="create-org" py="3">
            Create organization
          </MenuItemWithIcon>
        }
      >
        {items.map((org) => (
          <OrgMenuItem key={org.id} item={org} selectedId={selectedId} onSelect={onSelect} />
        ))}
      </Content>
    </Menu.Root>
  )
}

interface ProjectSwitcherMenuProps {
  selectedId: string
  items: Project[]
  onSelect: (id: string) => void
}

export const ProjectSwitcherMenu = (props: ProjectSwitcherMenuProps) => {
  const { selectedId, items, onSelect } = props
  const item = getSelectedItem(items, selectedId)
  return (
    <Menu.Root positioning={{ placement: 'bottom-start' }}>
      <Trigger gap="2">
        <Text fontWeight="medium" ms="1">
          {item.name}
        </Text>
        <Icon color="fg.muted">
          <LuChevronsUpDown />
        </Icon>
      </Trigger>
      <Content
        label="Projects"
        action={
          <>
            <MenuItemWithIcon onSelect={onSelect} icon={<LuPlus />} value="create-project">
              Create project
            </MenuItemWithIcon>
            <MenuItemWithIcon onSelect={onSelect} icon={<LuSettings />} value="manage-projects">
              Manage projects
            </MenuItemWithIcon>
          </>
        }
      >
        {items.map((project) => (
          <Menu.Item key={project.id} value={project.id} onSelect={() => onSelect(project.id)}>
            <Text fontWeight="medium" textStyle="sm" flex="1">
              {project.name}
            </Text>
            {selectedId === project.id && <LuCheck />}
          </Menu.Item>
        ))}
      </Content>
    </Menu.Root>
  )
}
