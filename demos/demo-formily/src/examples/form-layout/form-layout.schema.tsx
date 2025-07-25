import React from 'react'
import { Input, Select, FormItem, FormLayout } from '../../components'
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

const schema = {
  type: 'object',
  properties: {
    layout: {
      type: 'void',
      'x-component': 'FormLayout',
      'x-component-props': {
        labelCol: 6,
        wrapperCol: 10,
        layout: 'vertical',
      },
      properties: {
        input: {
          type: 'string',
          title: 'input box',
          required: true,
          'x-decorator': 'FormItem',
          'x-decorator-props': {
            tooltip: <div>123</div>,
          },
          'x-component': 'Input',
        },
        select: {
          type: 'string',
          title: 'Select box',
          required: true,
          'x-decorator': 'FormItem',
          'x-component': 'Select',
        },
      },
    },
  },
}

const form = createForm()

export const FormLayoutSchema = () => (
  <FormProvider form={form}>
    <SchemaField schema={schema} />
  </FormProvider>
)
