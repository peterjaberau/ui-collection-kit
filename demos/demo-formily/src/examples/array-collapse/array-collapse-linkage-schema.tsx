import React from 'react'
import {
  FormItem,
  Input,
  ArrayCollapse,
  FormButtonGroup,
  Submit,
} from '../../components'
import { createForm } from '@formily/core'
import { FormProvider, createSchemaField } from '@formily/react'

const SchemaField = createSchemaField({
  components: {
    FormItem,
    Input,
    ArrayCollapse,
  },
})

const form = createForm()

const schema = {
  type: 'object',
  properties: {
    array: {
      type: 'array',
      'x-component': 'ArrayCollapse',
      maxItems: 3,
      title: 'Object array',
      items: {
        type: 'object',
        'x-component': 'ArrayCollapse.CollapsePanel',
        'x-component-props': {
          header: 'Object array',
        },
        properties: {
          index: {
            type: 'void',
            'x-component': 'ArrayCollapse.Index',
          },
          aa: {
            type: 'string',
            'x-decorator': 'FormItem',
            title: 'AA',
            required: true,
            'x-component': 'Input',
            description: 'Enter 123',
          },
          bb: {
            type: 'string',
            title: 'BB',
            required: true,
            'x-decorator': 'FormItem',
            'x-component': 'Input',
            'x-reactions': [
              {
                dependencies: ['.aa'],
                when: "{{$deps[0] != '123'}}",
                fulfill: {
                  schema: {
                    title: 'BB',
                    'x-disabled': true,
                  },
                },
                otherwise: {
                  schema: {
                    title: 'Changed',
                    'x-disabled': false,
                  },
                },
              },
            ],
          },
          remove: {
            type: 'void',
            'x-component': 'ArrayCollapse.Remove',
          },
          moveUp: {
            type: 'void',
            'x-component': 'ArrayCollapse.MoveUp',
          },
          moveDown: {
            type: 'void',
            'x-component': 'ArrayCollapse.MoveDown',
          },
        },
      },
      properties: {
        addition: {
          type: 'void',
          title: 'Add entry',
          'x-component': 'ArrayCollapse.Addition',
        },
      },
    },
  },
}

export const ArrayCollapseLinkageSchema = () => {
  return (
    <FormProvider form={form}>
      <SchemaField schema={schema} />
      <FormButtonGroup>
        <Submit onSubmit={console.log}>Submit</Submit>
      </FormButtonGroup>
    </FormProvider>
  )
}
