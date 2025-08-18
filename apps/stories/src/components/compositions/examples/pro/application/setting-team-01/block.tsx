import { Avatar, Badge, Container, HStack, Show, Table, Text } from '@chakra-ui/react'
import { MemberActions } from './member-actions'

export const Block = () => {
  return (
    <Container py="20" maxW="5xl">
      <Table.ScrollArea>
        <Table.Root>
          <Table.Header>
            <Table.Row>
              {columns.map((column) => (
                <Show key={column.key} when={!column.hidden} fallback={<Table.ColumnHeader />}>
                  <Table.ColumnHeader>{column.name}</Table.ColumnHeader>
                </Show>
              ))}
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {data.map((item) => (
              <Table.Row key={item.name}>
                {columns.map((column) => (
                  <Table.Cell key={column.key} textAlign={column.align}>
                    {column.render(item)}
                  </Table.Cell>
                ))}
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
      </Table.ScrollArea>
    </Container>
  )
}

interface Item {
  name: string
  status: 'active' | 'pending'
  value: string
  role: string
  avatar: string | null
  addedAt: string
}

interface ColumnDef {
  name: string
  key: string
  hidden?: boolean
  align?: 'start' | 'center' | 'end'
  render: (item: Item) => React.ReactNode
}

const columns: ColumnDef[] = [
  {
    name: 'Name',
    key: 'name',
    render: (item) => (
      <HStack>
        <Avatar.Root size="xs" shape="rounded">
          <Avatar.Fallback name={item.name} />
          <Avatar.Image src={item.avatar || undefined} />
        </Avatar.Root>
        <Text>{item.name}</Text>
      </HStack>
    ),
  },
  {
    name: 'Email',
    key: 'value',
    render: (item) => (
      <HStack>
        <Text>{item.value}</Text>
        {item.status === 'pending' && <Badge variant="surface">Pending</Badge>}
      </HStack>
    ),
  },
  { name: 'Role', key: 'role', render: (item) => item.role },
  { name: 'Added', key: 'addedAt', render: (item) => item.addedAt },
  {
    name: 'Actions',
    key: 'actions',
    align: 'end',
    render: (item) => <MemberActions item={item.name} />,
    hidden: true,
  },
]

const data: Item[] = [
  {
    name: 'John Doe',
    value: 'john.doe@example.com',
    status: 'active',
    role: 'Owner',
    avatar: 'https://i.pravatar.cc/300?u=1',
    addedAt: '2022-06-04',
  },
  {
    name: 'Jane Doe',
    value: 'jane.doe@example.com',
    status: 'active',
    role: 'Admin',
    avatar: 'https://i.pravatar.cc/300?u=2',
    addedAt: '2021-01-01',
  },
  {
    name: 'Alex Smith',
    value: 'alex.smith@example.com',
    status: 'pending',
    role: 'Member',
    avatar: null,
    addedAt: '2024-01-15',
  },
]
