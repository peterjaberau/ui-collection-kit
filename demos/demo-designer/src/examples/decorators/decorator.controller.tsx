import React from "react"
import { createSchemaField } from "@formily/react"
import { FormItem, Input, Select, Switch } from "@ui-kit/forms"

const SchemaField = createSchemaField({
  components: {
    FormItem,
    Input,
    Select,
    Switch,
  },
})

export const DecoratorController = ({ schema }: any) => {
  return (
    <SchemaField schema={schema} />
  )
}
