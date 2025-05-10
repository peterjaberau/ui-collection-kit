import { HTMLAttributes } from 'react'
import { Header } from './Header'
import { chakra } from '@chakra-ui/react'

interface Props extends HTMLAttributes<HTMLDivElement> {}
export const Layout = (props: Props) => {
  return (
    <>
      <Header />
      <chakra.div
        css={{
          fontFamily: 'body',
          display: 'grid',
          gridTemplateColumns: ['1fr', '256px auto', '256px auto'],
        }}
        {...props}
      />
    </>
  )
}
