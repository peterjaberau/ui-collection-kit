'use client'
import { Flex, FlexProps } from "@chakra-ui/react"
import React from "react"

export const Space: React.FC<React.PropsWithChildren<FlexProps>> = (props: any) => {
  return React.createElement(Flex, {
    size: props.size,
    ...props,
  })
}

export default Space
