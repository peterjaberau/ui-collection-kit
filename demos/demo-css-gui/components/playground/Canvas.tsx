import { styled } from '@ui-collection-kit/css-gui'
import { Element } from './types'
import { chakra } from '@chakra-ui/react'

type CanvasProps = {
  element: Element
  styles: any
}
export const Canvas = ({ styles, element }: CanvasProps) => {
  const Element = styled[element.name]

  return (
    <chakra.section
      css={{
        minHeight: '100vh',
        height: '100%',
        width: '100%',
        flexGrow: 1,
      }}
    >
      <Element styles={styles}>{element.children ?? null}</Element>
    </chakra.section>
  )
}
