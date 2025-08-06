import { DecoratorRenderer } from "../decorators"
import { Badge } from "@chakra-ui/react"
import React from "react"
import { schemaComponents } from "../../schema/schema.formily.uikit"

export const ComponentRenderer = (props: any) => {
  return <Badge {...props}>{props.text || "Badge"}</Badge>
}

export const BadgeDecorator = (props: any) => {

  return (
    <DecoratorRenderer component={ComponentRenderer} schema={schemaComponents.Badge} />
  )
}
