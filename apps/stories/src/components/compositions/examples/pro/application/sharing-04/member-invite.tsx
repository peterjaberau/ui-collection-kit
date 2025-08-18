import { Avatar, HStack, Text } from '@chakra-ui/react'
import { AccessLevel } from './access-level'

interface MemberInviteData {
  name: string
  email: string
  accepted: boolean
  role: 'admin' | 'member'
  avatar: string
}

interface MemberInviteProps {
  member: MemberInviteData
}

export const MemberInvite = (props: MemberInviteProps) => {
  const { member } = props
  return (
    <HStack gap="4">
      <Avatar.Root size="xs">
        <Avatar.Fallback name={member.name} />
        <Avatar.Image src={member.avatar} />
      </Avatar.Root>

      <Text textStyle="sm" flex="1">
        {member.email}
      </Text>

      {member.accepted === false && (
        <Text textStyle="sm" fontWeight="medium" color="fg.muted">
          Invited
        </Text>
      )}

      {member.accepted && <AccessLevel defaultValue="editor" />}
    </HStack>
  )
}
