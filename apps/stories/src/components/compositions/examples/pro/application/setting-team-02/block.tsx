import { Avatar, Badge, Container, HStack, Separator, Stack, Text } from '@chakra-ui/react'
import { LuMail } from 'react-icons/lu'
import { InviteForm } from './invite-form'
import { MemberActions } from './member-actions'

export const Block = () => {
  return (
    <Container py="20" maxW="5xl">
      <Stack gap="8">
        <InviteForm />
        <Separator variant="dashed" />
        <Stack gap="6">
          {data.map((item) => (
            <HStack key={item.name}>
              <HStack gap="4" flex="1">
                <Avatar.Root>
                  <Avatar.Fallback name={item.name} />
                  <Avatar.Image src={item.avatar || undefined} />
                </Avatar.Root>
                <Stack textStyle="sm" gap="0">
                  <HStack color="fg.muted">
                    {item.status === 'pending' ? <LuMail /> : null}
                    {item.status === 'pending' ? 'Pending' : item.name}
                    {item.role === 'Admin' ? <Badge variant="solid">admin</Badge> : null}
                  </HStack>
                  <Text>{item.email}</Text>
                </Stack>
              </HStack>
              <MemberActions item={item.name} />
            </HStack>
          ))}
        </Stack>
      </Stack>
    </Container>
  )
}

interface Item {
  name: string
  status: 'active' | 'pending'
  email: string
  role: string
  avatar: string | null
  addedAt: string
}

const data: Item[] = [
  {
    name: 'John Doe',
    email: 'john.doe@example.com',
    status: 'active',
    role: 'Owner',
    avatar: 'https://i.pravatar.cc/300?u=1',
    addedAt: '2022-06-04',
  },
  {
    name: 'Jane Doe',
    email: 'jane.doe@example.com',
    status: 'active',
    role: 'Admin',
    avatar: 'https://i.pravatar.cc/300?u=2',
    addedAt: '2021-01-01',
  },
  {
    name: 'Alex Smith',
    email: 'alex.smith@example.com',
    status: 'pending',
    role: 'Member',
    avatar: null,
    addedAt: '2024-01-15',
  },
]
