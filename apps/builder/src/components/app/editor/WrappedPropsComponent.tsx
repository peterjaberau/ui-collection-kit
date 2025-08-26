import React from "react"
import { Container } from "@chakra-ui/react"
import { DevLayer } from "#components/app/DevLayer"

export const WrappedPropsComponent: any = ({ children, ...rest }: any) => {


  return (
    <DevLayer tagName="WrappedPropsComponent (withWidgetProps)">
      <Container p={0} h={'full'} {...rest}>{children}</Container>
    </DevLayer>
  )
}
