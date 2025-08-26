'use client'
import React, { useRef } from "react"
import { Container } from "@chakra-ui/react"
import { DevLayer } from "../DevLayer"

export const FixedLayoutResizable: any = ({ children, ...rest }: any) => {
  const resizableRef = useRef<HTMLDivElement>(null);

  return (
    <DevLayer tagName="FixedLayoutResizable">
      <Container p={0} h={'full'} {...rest}>{children}</Container>
    </DevLayer>
  )
}
