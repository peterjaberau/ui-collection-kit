"use client"
import React from "react"
import { Input } from "@chakra-ui/react"
import { DevLayer } from "../../DevLayer"

export const getProfile = {
  widgetName: "Input",
}

export const getDefaults = {
  text: "",
  version: 1,
}

const InputWidget: any = (props: any) => {
  return (
    <DevLayer tagName="TextWidget" variant="surface" type='widget'>
      <Input {...getDefaults} {...props} />
    </DevLayer>
  )
}

export default InputWidget
