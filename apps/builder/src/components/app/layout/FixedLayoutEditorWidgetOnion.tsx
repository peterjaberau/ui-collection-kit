'use client'
import React from "react"
import { Container } from "@chakra-ui/react"
import { DevLayer } from "../DevLayer"

export const FixedLayoutEditorWidgetOnion: any = ({ children, ...rest }: any) => {


  return (
    <DevLayer tagName="FixedLayoutEditorWidgetOnion ****">
      <Container p={0} h={'full'} {...rest}>{children}</Container>
    </DevLayer>
  )
}
