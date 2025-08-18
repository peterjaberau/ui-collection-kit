import { Group, IconButton } from '@chakra-ui/react'
import { LuArrowLeft, LuArrowRight, LuPlus } from 'react-icons/lu'
import { Divider } from './components/divider'

export const DividerWithButtonGroup = () => {
  return (
    <Divider>
      <Group attached colorPalette="gray">
        <IconButton variant="outline" aria-label="Go Left">
          <LuArrowLeft />
        </IconButton>
        <IconButton variant="outline" aria-label="Add one">
          <LuPlus />
        </IconButton>
        <IconButton variant="outline" aria-label="Go Right">
          <LuArrowRight />
        </IconButton>
      </Group>
    </Divider>
  )
}
