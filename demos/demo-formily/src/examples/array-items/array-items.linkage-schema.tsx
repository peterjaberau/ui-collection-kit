import React from 'react'
import {
  FormItem,
  Input,
  ArrayItems,
  Editable,
  FormButtonGroup,
  Submit,
  Space,
} from '../../components'
import { createForm } from '@formily/core'
import { FormProvider, createSchemaField } from '@formily/react'

const SchemaField = createSchemaField({
  components: {
    Space,
    Editable,
    FormItem,
    Input,
    ArrayItems,
  },
})

const form = createForm()

const schema = {
  type: 'object',
  properties: {
    array: {
      type: 'array',
      'x-component': 'ArrayItems',
      'x-decorator': 'FormItem',
      maxItems: 3,
      title: 'Object array',
      'x-component-props': { style: { width: 300 } },
      items: {
        type: 'object',
        'x-decorator': 'ArrayItems.Item',
        properties: {
          left: {
            type: 'void',
            'x-component': 'Space',
            properties: {
              sort: {
                type: 'void',
                'x-decorator': 'FormItem',
                'x-component': 'ArrayItems.SortHandle',
              },
              index: {
                type: 'void',
                'x-decorator': 'FormItem',
                'x-component': 'ArrayItems.Index',
              },
            },
          },
          edit: {
            type: 'void',
            'x-component': 'Editable.Popover',
            title: 'Configuration data',
            properties: {
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
            },
          },
          right: {
            type: 'void',
            'x-component': 'Space',
            properties: {
              remove: {
                type: 'void',
                'x-component': 'ArrayItems.Remove',
              },
              moveUp: {
                type: 'void',
                'x-component': 'ArrayItems.MoveUp',
              },
              moveDown: {
                type: 'void',
                'x-component': 'ArrayItems.MoveDown',
              },
            },
          },
        },
      },
      properties: {
        addition: {
          type: 'void',
          title: 'Add entry',
          'x-component': 'ArrayItems.Addition',
        },
      },
    },
  },
}

export const ArrayItemsLinkageSchema = () => {
  return (
    <FormProvider form={form}>
      <SchemaField schema={schema} />
      <FormButtonGroup>
        <Submit onSubmit={console.log}>Submit</Submit>
      </FormButtonGroup>
    </FormProvider>
  )
}
