import { DecoratorRenderer } from "../decorators"
import { Field, Input } from "@chakra-ui/react"
import React from "react"
import { schemaComponents } from "../../schema/schema.formily.uikit"

export const ComponentRenderer = (props: any) => {
  return (
    <Field.Root
      colorPalette={props.colorPalette}
      orientation={props.orientation}
      disabled={props.disabled}
      invalid={props.invalid}
      readOnly={props.readOnly}
      required={props.required}
      unstyled={props.unstyled}
    >
      {props.label && (
        <Field.Label>
          {props.label}
          {props.required && <Field.RequiredIndicator fallback={<>{props.optionalText}</>} />}
        </Field.Label>
      )}
      <Input placeholder={props.placeholder} />

      {props.helperText && <Field.HelperText>{props.helperText}</Field.HelperText>}
      {props.errorText && <Field.ErrorText>{props.errorText}</Field.ErrorText>}
    </Field.Root>
  )
}

export const FieldDecorator = () => {
  return <DecoratorRenderer component={ComponentRenderer} schema={schemaComponents.Field} />
}
