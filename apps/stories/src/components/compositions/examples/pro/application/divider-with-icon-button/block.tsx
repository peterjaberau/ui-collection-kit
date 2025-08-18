import { IconButton } from '@chakra-ui/react'
import { LuPlus } from 'react-icons/lu'
import { Divider } from './divider'

export const Block = () => {
  return (
    <Divider>
      <IconButton colorPalette="gray" variant="ghost">
        <LuPlus />
      </IconButton>
    </Divider>
  )
}
