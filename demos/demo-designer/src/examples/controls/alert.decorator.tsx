import { DecoratorRenderer } from "../decorators"
import { Alert } from "@chakra-ui/react"
import React from "react"
import { schemaComponents } from "../../schema/schema.formily.uikit"

export const ComponentRenderer = (props: any) => {
  return (
    <Alert.Root
      {...(props.status ? {
        status: props.status
      } : {
        colorScheme: props.colorPalette,
        variant: props.variant,
      })}
      status={props.status}
      size={props.size}
      inline={props.inline}
    >
      <Alert.Indicator />
      <Alert.Content>
        <Alert.Title>{props.title}</Alert.Title>
        {
          props.description && <Alert.Description>{props.description}</Alert.Description>
        }
      </Alert.Content>
    </Alert.Root>
  )
}

export const AlertDecorator = (props: any) => {

  return (
    <DecoratorRenderer component={ComponentRenderer} schema={schemaComponents.Alert} />
  )
}
