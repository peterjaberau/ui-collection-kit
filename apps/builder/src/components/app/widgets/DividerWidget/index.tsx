"use client"
import React from "react"
import { Separator, Center } from "@chakra-ui/react"
import { DevLayer } from "../../DevLayer"

export const getProfile = {
  widgetName: "Divider",
  version: 1,
}


export const getDefaults = {
  variant: "solid",
  orientation: "horizontal",
  size: "md",
  width: "100%",

}

const DividerWidget: any = (props: any) => {
  return (
    <DevLayer tagName="DividerWidget" variant="surface" type='widget'>
      <Separator {...getDefaults} {...props} />
    </DevLayer>
  )
}

export default DividerWidget
