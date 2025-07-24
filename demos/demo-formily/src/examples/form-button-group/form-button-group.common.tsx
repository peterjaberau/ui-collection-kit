import React from 'react'
import {
  FormButtonGroup,
  Submit,
  Reset,
  FormItem,
  Input,
  FormLayout,
} from '@formily/antd-v5'
import { createForm } from '@formily/core'
import { FormProvider, createSchemaField } from '@formily/react'
const SchemaField = createSchemaField({
  components: {
    FormItem,
    Input,
  },
})

const form = createForm()

export const FormButtonGroupCommon = () => {
  return (
    <FormProvider form={form}>
      <FormLayout labelCol={6} wrapperCol={10}>
        <SchemaField>
          <SchemaField.String
            title="input box"
            x-decorator="FormItem"
            required
            x-component="Input"
          />
          <SchemaField.String
            title="input box"
            x-decorator="FormItem"
            required
            x-component="Input"
          />
          <SchemaField.String
            title="input box"
            x-decorator="FormItem"
            required
            x-component="Input"
          />
          <SchemaField.String
            title="input box"
            x-decorator="FormItem"
            required
            x-component="Input"
          />
          <SchemaField.String
            title="input box"
            x-decorator="FormItem"
            required
            x-component="Input"
          />
          <SchemaField.String
            title="input box"
            x-decorator="FormItem"
            required
            x-component="Input"
          />
          <SchemaField.String
            title="input box"
            x-decorator="FormItem"
            required
            x-component="Input"
          />
          <SchemaField.String
            title="input box"
            x-decorator="FormItem"
            required
            x-component="Input"
          />
          <SchemaField.String
            title="input box"
            x-decorator="FormItem"
            required
            x-component="Input"
          />
        </SchemaField>
        <FormButtonGroup.FormItem>
          <Submit onSubmit={console.log}>Submit</Submit>
          <Reset>Reset</Reset>
        </FormButtonGroup.FormItem>
      </FormLayout>
    </FormProvider>
  )
}
