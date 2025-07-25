import React from 'react'
import { TreeSelect, FormItem, FormButtonGroup, Submit } from '../../components'
import { createForm } from '@formily/core'
import { FormProvider, createSchemaField } from '@formily/react'

const SchemaField = createSchemaField({
  components: {
    TreeSelect,
    FormItem,
  },
})

const form = createForm()

const schema = {
  type: 'object',
  properties: {
    select: {
      type: 'string',
      title: 'Select box',
      'x-decorator': 'FormItem',
      'x-component': 'TreeSelect',
      enum: [
        {
          label: 'Option 1',
          value: 1,
          children: [
            {
              title: 'Child Node1',
              value: '0-0-0',
              key: '0-0-0',
            },
            {
              title: 'Child Node2',
              value: '0-0-1',
              key: '0-0-1',
            },
            {
              title: 'Child Node3',
              value: '0-0-2',
              key: '0-0-2',
            },
          ],
        },
        {
          label: 'Option 2',
          value: 2,
          children: [
            {
              title: 'Child Node1',
              value: '0-1-0',
              key: '0-1-0',
            },
            {
              title: 'Child Node2',
              value: '0-1-1',
              key: '0-1-1',
            },
            {
              title: 'Child Node3',
              value: '0-1-2',
              key: '0-1-2',
            },
          ],
        },
      ],
      'x-component-props': {
        style: {
          width: 200,
        },
      },
    },
  },
}

export const TreeSelectSchema = () => (
  <FormProvider form={form}>
    <SchemaField schema={schema} />
    <FormButtonGroup>
      <Submit onSubmit={console.log}>Submit</Submit>
    </FormButtonGroup>
  </FormProvider>
)
