'use client'
import React from "react"
import { Container } from "@chakra-ui/react"
import { DevLayer } from "./DevLayer"
import { FixedLayoutResizable } from "./layout/FixedLayoutResizable"

export const FixedLayoutRenderer: any = ({ children, ...rest }: any) => {


  return (
    <DevLayer tagName="FixedLayoutRenderer" variant='surface'>
      <Container p={0} h={'full'} {...rest}>
        <FixedLayoutResizable>
          {children}
        </FixedLayoutResizable>
      </Container>
    </DevLayer>
  )
}
