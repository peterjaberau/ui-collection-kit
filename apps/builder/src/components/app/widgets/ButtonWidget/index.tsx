"use client"
import React from "react"
import { Button } from "@chakra-ui/react"
import { DevLayer } from "../../DevLayer"

export const getProfile = {
  widgetName: "Button",
  version: 1,
}

export const getDefaults = {
  text: "Button",
  variant: "solid",
  size: "md",
  spinnerPlacement: "start",
  loading: false,
  loadingText: null,
}

const ButtonWidget: any = (props: any) => {
  return (
    <DevLayer tagName="TextWidget" variant="surface" type="widget">
      <Button {...getDefaults} {...props}>
        {props.text || getDefaults.text}
      </Button>
    </DevLayer>
  )
}

export default ButtonWidget
