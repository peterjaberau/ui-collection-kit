import React from "react"
import { Container } from "@chakra-ui/react"
import { DevLayer } from "#components/app/DevLayer"

export const FixedLayoutEditorCanvas: any = ({ children, ...rest }: any) => {


  return (
    <DevLayer tagName="FixedLayoutEditorCanvas">
      <Container p={0} h={'full'} {...rest}>{children}</Container>
    </DevLayer>
  )
}
