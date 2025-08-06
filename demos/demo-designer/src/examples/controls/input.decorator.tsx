import { DecoratorRenderer } from "../decorators"
import { Input, InputGroup } from "@chakra-ui/react"
import React from "react"
import { schemaComponents } from "../../schema/schema.formily.uikit"

export const ComponentRenderer = (props: any) => {
  return (
    <InputGroup
      flex="1"
      startElement={props.startElement}
      endElement={props.endElement}
      startAddon={props.startAddon}
      endAddon={props.endAddon}
    >
    <Input
      colorPalette={props.colorPalette}
      placeholder={props.placeholder}
      size={props.size}
      variant={props.variant}
      disabled={props.disabled}
    />
    </InputGroup>
  )
}

export const InputDecorator = () => {
  return <DecoratorRenderer component={ComponentRenderer} schema={schemaComponents.Input} />
}
