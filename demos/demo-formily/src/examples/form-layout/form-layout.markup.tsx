import React from 'react'
import { Input, Select, FormItem, FormLayout } from '@ui-kit/forms'
import { createForm } from '@formily/core'
import { FormProvider, createSchemaField } from '@formily/react'

const SchemaField = createSchemaField({
  components: {
    Input,
    Select,
    FormItem,
    FormLayout,
  },
})

const form = createForm()

export const FormLayoutMarkup = () => (
  <FormProvider form={form}>
    <SchemaField>
      <SchemaField.Void
        x-component="FormLayout"
        x-component-props={{
          labelCol: 6,
          wrapperCol: 10,
        }}
      >
        <SchemaField.String
          name="input"
          title="input box"
          x-decorator="FormItem"
          x-decorator-props={{
            tooltip: <div>123</div>,
          }}
          x-component="Input"
          required
        />
        <SchemaField.String
          name="select"
          title="select box"
          x-decorator="FormItem"
          x-component="Select"
          required
        />
      </SchemaField.Void>
    </SchemaField>
  </FormProvider>
)
