import { IconButton } from '@chakra-ui/react'
import { LuPlus } from 'react-icons/lu'
import { Divider } from './components/divider'

export const DividerWithIconButton = () => {
  return (
    <Divider>
      <IconButton colorPalette="gray" variant="ghost">
        <LuPlus />
      </IconButton>
    </Divider>
  )
}
