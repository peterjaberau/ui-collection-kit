'use client'
import { Flex, FlexProps } from "@chakra-ui/react"
import React from "react"

export const Space: React.FC<React.PropsWithChildren<FlexProps>> = (props: any) => {

  console.log("Space props", props)

  return React.createElement(Flex, {
    flex: 1,

    gap: props.size || 4,
    ...props,
  })
}

export default Space
