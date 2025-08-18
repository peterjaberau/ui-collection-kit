import {
  Avatar,
  Badge,
  Button,
  Container,
  Heading,
  HStack,
  Input,
  InputGroup,
  Show,
  Stack,
  Table,
  Text,
} from '@chakra-ui/react'
import { LuFilter, LuSearch, LuUserPlus } from 'react-icons/lu'
import { MemberActions } from './member-actions'

export const Block = () => {
  return (
    <Container py="20" maxW="5xl">
      <Stack gap="8">
        <Stack>
          <Heading as="h2" textStyle="3xl">
            Members
          </Heading>
          <Text color="fg.muted">Manage your team members and their access levels.</Text>
        </Stack>

        <HStack justify="space-between" gap="4">
          <InputGroup startElement={<LuSearch />} flex="1">
            <Input placeholder="Search members" />
          </InputGroup>
          <Button variant="surface">
            <LuFilter />
            Sort by
          </Button>
          <Button>
            <LuUserPlus />
            Invite
          </Button>
        </HStack>

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
      </Stack>
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
    name: 'User',
    key: 'user',
    render: (item) => (
      <HStack gap="3">
        <Avatar.Root size="xs">
          <Avatar.Fallback name={item.status === 'pending' ? '?' : item.name} />
          <Avatar.Image src={item.avatar || undefined} />
        </Avatar.Root>
        <Text>{item.value}</Text>
      </HStack>
    ),
  },
  {
    name: 'Access',
    key: 'level',
    render: (item) => <Badge variant="outline">{item.role}</Badge>,
  },
  {
    name: 'Actions',
    key: 'actions',
    align: 'end',
    render: (item) => (
      <HStack justify="flex-end">
        {item.status === 'pending' && <Badge variant="surface">Pending</Badge>}
        <MemberActions item={item.name} />
      </HStack>
    ),
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
