import { Button } from '@chakra-ui/react'
import { LuPlus } from 'react-icons/lu'
import { Divider } from './divider'

export const Block = () => {
  return (
    <Divider>
      <Button variant="outline" colorPalette="gray">
        <LuPlus />
        Create
      </Button>
    </Divider>
  )
}
