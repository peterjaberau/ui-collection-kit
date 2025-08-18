import { Text } from '@chakra-ui/react'
import { Divider } from './components/divider'

export const DividerWithText = () => {
  return (
    <Divider>
      <Text fontWeight="medium">Members of the team</Text>
    </Divider>
  )
}
