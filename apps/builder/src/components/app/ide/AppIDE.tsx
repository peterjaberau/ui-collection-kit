import React from "react"
import { Stack } from "@chakra-ui/react"
import { DevLayer } from "../DevLayer"

export const AppIDE: any = ({ children, ...rest }: any) => {
  return (
    <DevLayer tagName="AppIDE">
      <Stack
        h="full"
        {...rest}
      >{children}</Stack>
    </DevLayer>
  )
}
