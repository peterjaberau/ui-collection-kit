import { Center, type CenterProps } from '@chakra-ui/react'
import { LuCirclePlay } from 'react-icons/lu'

export const VideoPlaceholder = (props: CenterProps) => (
  <Center w="full" h="full" bg="bg.muted" color="fg.subtle" {...props}>
    <LuCirclePlay size="48px" />
  </Center>
)
