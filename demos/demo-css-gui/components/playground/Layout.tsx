import { HTMLAttributes } from 'react'
import { Header } from '../Header'
import { chakra } from '@chakra-ui/react'
interface Props extends HTMLAttributes<HTMLDivElement> {}
export const Layout = (props: Props) => {
  return (
    <>
      <Header />
      <chakra.div
        css={{
          fontFamily: 'body',
          marginRight: '1px',
        }}
        {...props}
      />
    </>
  )
}
