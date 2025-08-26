'use client'
import React from "react"
import { Container } from "@chakra-ui/react"
import { DevLayer } from "../DevLayer"

export const ResizableComponent: any = ({ children, ...rest }: any) => {


  return (
    <DevLayer tagName="ResizableComponent">
      <Container p={0} h={'full'} {...rest}>{children}</Container>
    </DevLayer>
  )
}
