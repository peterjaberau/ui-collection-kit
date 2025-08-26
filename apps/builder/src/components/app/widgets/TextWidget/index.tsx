"use client"
import React from "react"
import { Text } from "@chakra-ui/react"
import { DevLayer } from "../../DevLayer"

export const getProfile = {
  widgetName: "Text",
}

export const getDefaults = {
  text: "Hello {{appsmith.user.name || appsmith.user.email}}",
  textStyle: "md",
  version: 1,
}

const TextWidget: any = (props: any) => {
  return (
    <DevLayer tagName="TextWidget" variant="surface" type='widget'>
      <Text {...getDefaults} {...props}>
        {props.text || getDefaults.text}
      </Text>
    </DevLayer>
  )
}

export default TextWidget
