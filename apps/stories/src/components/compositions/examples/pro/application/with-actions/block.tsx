'use client'

import type { ButtonProps, SquareProps } from '@chakra-ui/react'
import { Badge, Button, HStack, Icon, Menu, Portal, Square, Text, VStack } from '@chakra-ui/react'
import { useState } from 'react'
import { LuCheck, LuChevronsUpDown } from 'react-icons/lu'
import type { MenuAction, Organization } from './data'
import { getGroupedActions, getOrgById, menuActions, organizations } from './data'

export const Block = () => {
  const [selectedOrgId, setSelectedOrgId] = useState<string>(organizations[0].id)
  const selectedOrg = getOrgById(selectedOrgId)
  const actions = getGroupedActions(menuActions)

  return (
    <Menu.Root positioning={{ placement: 'bottom-start', sameWidth: true }}>
      <Menu.Trigger asChild>
        <SelectedOrgButton org={selectedOrg} />
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            {organizations.map((org) => (
              <OrgMenuItem
                key={org.id}
                org={org}
                selectedId={selectedOrgId}
                onSelect={() => setSelectedOrgId(org.id)}
              />
            ))}
            {actions.management.map((action) => (
              <OrgActionItem key={action.id} value={action.id} action={action} />
            ))}
            <Menu.Separator />
            {actions.account.map((action) => (
              <OrgActionItem key={action.id} value={action.id} action={action} />
            ))}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  )
}

const OrgIcon = (props: SquareProps) => {
  return <Square bg="bg" size="8" rounded="l2" {...props} />
}

interface OrgMenuItemProps extends Omit<Menu.ItemProps, 'value'> {
  org: Organization
  selectedId: string
}

const OrgMenuItem = (props: OrgMenuItemProps) => {
  const { org, selectedId } = props
  return (
    <Menu.Item {...props} value={org.id}>
      <HStack gap="3" flex="1">
        <OrgIcon _icon={{ boxSize: '4' }}>{org.icon}</OrgIcon>
        <Text fontWeight="medium" textStyle="sm" flex="1">
          {org.name}
        </Text>
      </HStack>
      {selectedId === org.id && (
        <Icon>
          <LuCheck />
        </Icon>
      )}
    </Menu.Item>
  )
}

const OrgActionItem = (props: Menu.ItemProps & { action: MenuAction }) => {
  const { action, ...rest } = props
  return (
    <Menu.Item {...rest} value={action.id}>
      <Icon boxSize="4" color="fg.muted">
        {action.icon}
      </Icon>
      <Text fontWeight="medium" textStyle="sm" flex="1">
        {action.label}
      </Text>
      {action.shortcut && <Menu.ItemCommand>{action.shortcut}</Menu.ItemCommand>}
    </Menu.Item>
  )
}

const SelectedOrgButton = (props: { org: Organization } & ButtonProps) => {
  const { org, ...rest } = props
  return (
    <Button variant="outline" colorPalette="gray" h="14" ps="3" {...rest}>
      <HStack gap="1.5">
        <OrgIcon size="10" _icon={{ boxSize: '6' }}>
          {org.icon}
        </OrgIcon>
        <VStack gap="0" align="start">
          <HStack gap="2">
            <Text fontWeight="semibold" textStyle="sm">
              {org.name}
            </Text>
            <Badge size="xs" variant="surface" textTransform="uppercase" letterSpacing="wider">
              {org.type}
            </Badge>
          </HStack>
          <Text textStyle="sm" color="fg.muted">
            {org.member_count} {org.member_count === 1 ? 'member' : 'members'}
          </Text>
        </VStack>
      </HStack>
      <Icon color="fg.subtle" ms="2" size="sm">
        <LuChevronsUpDown />
      </Icon>
    </Button>
  )
}
