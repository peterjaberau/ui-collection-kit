import React, { RefObject, useRef } from "react"
import { Container } from "@chakra-ui/react"
import { DevLayer } from "#components/app/DevLayer"

export const ContainerComponentWrapper: any = ({ children, ...rest }: any) => {
  const containerRef: RefObject<HTMLDivElement> | any = useRef<HTMLDivElement>(null);

  return (
    <DevLayer tagName="ContainerComponentWrapper">
      <Container
        ref={containerRef}
        p={0} h={'full'} {...rest}>{children}</Container>
    </DevLayer>
  )
}
