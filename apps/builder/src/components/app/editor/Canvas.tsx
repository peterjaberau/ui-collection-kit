'use client'
import React from "react"
import { Container } from "@chakra-ui/react"
import { DevLayer } from "#components/app/DevLayer"

export const Canvas: any = ({ children, ...rest }: any) => {


  return (
    <DevLayer tagName="Canvas">
      <Container p={0} h={'full'} {...rest}>{children}</Container>
    </DevLayer>
  )
}
