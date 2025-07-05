import { forwardRef, type ReactNode, type Ref } from "react"
import { chakra } from "@chakra-ui/react"

export type ListProps = {
  children: ReactNode
  css?: any
}

function _List({ children, css }: ListProps, forwardedRef: Ref<HTMLDivElement>) {
  return (
    <chakra.div role="list" ref={forwardedRef} css={css}>
      {children}
    </chakra.div>
  )
}

export const List = forwardRef<HTMLDivElement, ListProps>(_List)
