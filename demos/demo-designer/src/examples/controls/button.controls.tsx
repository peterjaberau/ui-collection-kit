import React from "react"
import { Input, Select, Switch, FormItem } from "@ui-kit/forms"
import { createForm } from "@formily/core"
import { FormProvider, createSchemaField } from "@formily/react"
import { schemaComponents } from "../../schema/schema.formily.uikit"

const SchemaField = createSchemaField({
  components: {
    FormItem,
    Input,
    Select,
    Switch
  },
})

const form = createForm()

export const ButtonControls = () => {
  return (
    <FormProvider form={form}>
      <SchemaField schema={schemaComponents.Button} />
    </FormProvider>
  )
}
