import { Avatar, HStack, Text } from '@chakra-ui/react'

interface MemberInviteData {
  name: string
  email: string
  accepted: boolean
  accessLevel: 'can edit' | 'can view' | 'owner'
  avatar: string
}

interface MemberInviteProps {
  member: MemberInviteData
}

export const MemberInvite = (props: MemberInviteProps) => {
  const { member } = props
  return (
    <HStack gap="4">
      <Avatar.Root size="xs" shape="rounded">
        <Avatar.Fallback name={member.name} />
        <Avatar.Image src={member.avatar} />
      </Avatar.Root>

      <Text textStyle="sm" flex="1">
        {member.name}
      </Text>

      <Text textStyle="sm" fontWeight="medium" color="fg.muted">
        {member.accessLevel}
      </Text>
    </HStack>
  )
}
