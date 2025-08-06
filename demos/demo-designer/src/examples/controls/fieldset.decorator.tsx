import { DecoratorRenderer } from "../decorators"
import { Field, Input, Fieldset, Stack } from "@chakra-ui/react"
import React from "react"
import { schemaComponents } from "../../schema/schema.formily.uikit"

export const ComponentRenderer = (props: any) => {
  return (
    <>
      <Fieldset.Root
        colorPalette={props.colorPalette}
        size={props.size}
        invalid={props.invalid}
        disabled={props.disabled}
        unstyled={props.unstyled}
      >
        <Fieldset.Content>
          <Field.Root>
            <Field.Label>Name</Field.Label>
            <Input name="name" />
          </Field.Root>
          <Field.Root>
            <Field.Label>Email address</Field.Label>
            <Input name="email" type="email" />
          </Field.Root>
        </Fieldset.Content>
      </Fieldset.Root>

      </>
  )
}

export const FieldSetDecorator = () => {
  return <DecoratorRenderer component={ComponentRenderer} schema={schemaComponents.Fieldset} />
}
