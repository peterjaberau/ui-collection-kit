'use client'
import React from "react"
import { Button as ChakraButton } from "@chakra-ui/react"
import { createBehavior, createResource } from "#packages/core"
import { DnFC } from "#packages/react"
import { createVoidFieldSchema } from "../Field"
import { AllSchemas } from "../../schemas"
import { AllLocales } from "../../locales"

export const Button: DnFC<React.ComponentProps<typeof ChakraButton>> = (props: any) => {
  return (
    <ChakraButton {...props} title={props.title}>
      {props.text}
    </ChakraButton>
  )
}
Button.Behavior = createBehavior({
  name: "Button",
  extends: ["Field"],
  selector: (node) => node.props["x-component"] === "Button",
  designerProps: {
    droppable: true,
    propsSchema: createVoidFieldSchema(AllSchemas.Button),
  },
  designerLocales: AllLocales.Button,
})

Button.Resource = createResource({
  icon: "CardSource",
  elements: [
    {
      componentName: "Field",
      props: {
        type: "void",
        title: "Button",
        "x-component": "Button",
        "x-component-props": {
          text: "Button",
          variant: "outline",
        },
      },
    },
  ],
})
