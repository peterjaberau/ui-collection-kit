import { DecoratorRenderer } from "../decorators"
import { Button } from "@chakra-ui/react"
import React from "react"
import { schemaComponents } from "../../schema/schema.formily.uikit"

export const ComponentRenderer = (props: any) => {
  return <Button {...props}>{props.text || "Button"}</Button>
}

export const ButtonDecorator = (props: any) => {

  return (
    <DecoratorRenderer component={ComponentRenderer} schema={schemaComponents.Button} />
  )
}
