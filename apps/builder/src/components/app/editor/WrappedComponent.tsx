import React, { useRef } from "react"
import { Container } from "@chakra-ui/react"
import { DevLayer } from "#components/app/DevLayer"

export const WrappedComponent: any = ({ children, propWrappedComponent, ...rest }: any) => {
  const wrapperRef = useRef<HTMLDivElement>(null)

  return (
    <DevLayer tagName="WrappedComponent (withLazyRender)">
      <Container wrapperRef={wrapperRef} p={0} h={"full"} {...rest} {...propWrappedComponent}>
        {children}
      </Container>
    </DevLayer>
  )
}
