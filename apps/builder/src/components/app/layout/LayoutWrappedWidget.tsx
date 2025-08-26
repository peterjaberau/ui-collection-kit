'use client'
import React from "react"
import { Container } from "@chakra-ui/react"
import { DevLayer } from "../DevLayer"

export const LayoutWrappedWidget: any = ({ children, ...rest }: any) => {


  return (
    <DevLayer tagName="LayoutWrappedWidget">
      <Container p={0} h={'full'} {...rest}>{children}</Container>
    </DevLayer>
  )
}
