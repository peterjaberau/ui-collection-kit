import React from "react"
import { Container } from "@chakra-ui/react"

export const Editor: any = ({ children, ...rest }: any) => {
  return (
    <Container h="full" {...rest} px={0}>{children}</Container>
  )
}
