import { HTMLAttributes } from 'react'
import { chakra } from '@chakra-ui/react'
interface Props extends HTMLAttributes<HTMLDivElement> {}
export const PageWrap = (props: Props) => {
  return (
    <chakra.div
      css={{
        width: '100%',
        height: '100vh',
        overflow: 'auto',
        position: 'relative',
        order: [1, 2, 2],
      }}
      {...props}
    />
  )
}
