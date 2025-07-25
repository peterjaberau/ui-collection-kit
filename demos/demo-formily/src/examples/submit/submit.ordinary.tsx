import React from 'react'
import { Input, FormItem, FormButtonGroup } from '../../components'
import { Submit } from '../../components/submit'
import { createForm } from '@formily/core'
import { FormProvider, createSchemaField } from '@formily/react'

const SchemaField = createSchemaField({
  components: {
    Input,
    FormItem,
  },
})

const form = createForm()

export const SubmitOrdinary: React.FC = () => {
  return (
    <FormProvider form={form}>
      <SchemaField>
        <SchemaField.String name="input" title="input box" required x-decorator="FormItem" x-component="Input" />
        <SchemaField.String
          name="input2"
          title="input box"
          default="123"
          required
          x-decorator="FormItem"
          x-component="Input"
        />
      </SchemaField>
      <FormButtonGroup>
        <Submit onSubmit={console.log}>Submit</Submit>
      </FormButtonGroup>
    </FormProvider>
  )
}

