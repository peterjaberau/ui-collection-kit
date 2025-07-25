import React from 'react'
import {
  FormItem,
  Input,
  ArrayTabs,
  FormButtonGroup,
  Submit,
} from '../../components'
import { createForm } from '@formily/core'
import { FormProvider, createSchemaField } from '@formily/react'

const SchemaField = createSchemaField({
  components: {
    FormItem,
    Input,
    ArrayTabs,
  },
})

const form = createForm()

const schema = {
  type: 'object',
  properties: {
    string_array: {
      type: 'array',
      title: 'String array',
      'x-decorator': 'FormItem',
      maxItems: 3,
      'x-component': 'ArrayTabs',
      items: {
        type: 'string',
        'x-decorator': 'FormItem',
        required: true,
        'x-component': 'Input',
      },
    },
    array: {
      type: 'array',
      title: 'Object array',
      'x-decorator': 'FormItem',
      maxItems: 3,
      'x-component': 'ArrayTabs',
      items: {
        type: 'object',
        properties: {
          aaa: {
            type: 'string',
            'x-decorator': 'FormItem',
            title: 'AAA',
            required: true,
            'x-component': 'Input',
          },
          bbb: {
            type: 'string',
            'x-decorator': 'FormItem',
            title: 'BBB',
            required: true,
            'x-component': 'Input',
          },
        },
      },
    },
  },
}

export const ArrayTabsSchema = () => {
  return (
    <FormProvider form={form}>
      <SchemaField schema={schema} />
      <FormButtonGroup>
        <Submit onSubmit={console.log}>Submit</Submit>
      </FormButtonGroup>
    </FormProvider>
  )
}
