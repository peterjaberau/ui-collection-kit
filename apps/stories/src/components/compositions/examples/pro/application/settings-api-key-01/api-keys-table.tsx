'use client'

import { Badge, HStack, IconButton, Show, Table, Text } from '@chakra-ui/react'
import { LuCopy, LuPencil } from 'react-icons/lu'
import { type ApiKeyItem, apiKeyData, type ColumnDef, maskSecret } from './data'
import { RevokeActionButton } from './revoke-action-button'

export const ApiKeysTable = () => {
  return (
    <Table.ScrollArea>
      <Table.Root>
        <Table.Header>
          <Table.Row>
            {apiKeyColumns.map((column) => (
              <Show
                key={String(column.key)}
                when={!column.hidden}
                fallback={<Table.ColumnHeader />}
              >
                <Table.ColumnHeader hideBelow={column.hideBelow}>{column.name}</Table.ColumnHeader>
              </Show>
            ))}
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {apiKeyData.map((item) => (
            <Table.Row key={item.id}>
              {apiKeyColumns.map((column) => (
                <Table.Cell
                  hideBelow={column.hideBelow}
                  key={String(column.key)}
                  textAlign={column.align}
                >
                  {column.render(item)}
                </Table.Cell>
              ))}
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </Table.ScrollArea>
  )
}

const apiKeyColumns: ColumnDef<ApiKeyItem>[] = [
  {
    key: 'name',
    name: 'Name',
    render: (item) => <Text>{item.name}</Text>,
  },
  {
    key: 'secret',
    name: 'Secret key',
    render: (item) => <Text fontFamily="mono">{maskSecret(item.secret)}</Text>,
  },
  {
    key: 'createdAt',
    name: 'Created',
    render: (item) => <Text>{item.createdAt}</Text>,
    hideBelow: 'sm',
  },
  {
    key: 'lastUsed',
    name: 'Last used',
    render: (item) => <Text>{item.lastUsed}</Text>,
    hideBelow: 'md',
  },
  {
    key: 'createdBy',
    name: 'Created by',
    render: (item) => <Text>{item.createdBy}</Text>,
    hideBelow: 'md',
  },
  {
    key: 'permissions',
    name: 'Permissions',
    render: (item) => (
      <Badge variant="outline" colorPalette="gray">
        {item.permissions}
      </Badge>
    ),
  },
  {
    key: 'actions',
    name: '',
    align: 'end',
    render: (item) => (
      <HStack justify="flex-end" gap="1">
        <IconButton aria-label="Copy" variant="ghost" size="xs" colorPalette="gray">
          <LuCopy />
        </IconButton>
        <IconButton aria-label="Edit" variant="ghost" size="xs" colorPalette="gray">
          <LuPencil />
        </IconButton>
        <RevokeActionButton item={item} />
      </HStack>
    ),
    hidden: true,
  },
]
