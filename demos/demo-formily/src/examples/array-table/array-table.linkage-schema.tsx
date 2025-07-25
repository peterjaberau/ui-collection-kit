import React from 'react'
import {
  FormItem,
  Input,
  ArrayTable,
  Switch,
  FormButtonGroup,
  Submit,
} from '../../components'
import { createForm } from '@formily/core'
import { FormProvider, createSchemaField } from '@formily/react'

const SchemaField: any = createSchemaField({
  components: {
    FormItem,
    Switch,
    Input,
    ArrayTable,
  },
})

const form = createForm()

const schema = {
  type: 'object',
  properties: {
    hideFirstColumn: {
      type: 'boolean',
      title: 'Hide A2',
      'x-decorator': 'FormItem',
      'x-component': 'Switch',
    },
    array: {
      type: 'array',
      'x-decorator': 'FormItem',
      'x-component': 'ArrayTable',
      'x-component-props': {
        pagination: { pageSize: 10 },
        scroll: { x: '100%' },
      },
      items: {
        type: 'object',
        properties: {
          column1: {
            type: 'void',
            'x-component': 'ArrayTable.Column',
            'x-component-props': { width: 50, title: 'Sort', align: 'center' },

            properties: {
              sort: {
                type: 'void',
                'x-component': 'ArrayTable.SortHandle',
              },
            },
          },
          column2: {
            type: 'void',
            'x-component': 'ArrayTable.Column',
            'x-component-props': { width: 80, title: 'Index', align: 'center' },
            properties: {
              index: {
                type: 'void',
                'x-component': 'ArrayTable.Index',
              },
            },
          },
          column3: {
            type: 'void',
            'x-component': 'ArrayTable.Column',
            'x-component-props': { width: 100, title: 'Explicitly hidden->A2' },
            properties: {
              a1: {
                type: 'boolean',
                'x-decorator': 'FormItem',
                'x-component': 'Switch',
              },
            },
          },
          column4: {
            type: 'void',
            'x-component': 'ArrayTable.Column',
            'x-component-props': { width: 200, title: 'A2' },
            'x-reactions': [
              {
                dependencies: ['hideFirstColumn'],
                when: '{{$deps[0]}}',
                fulfill: {
                  schema: {
                    'x-visible': false,
                  },
                },
                otherwise: {
                  schema: {
                    'x-visible': true,
                  },
                },
              },
            ],
            properties: {
              a2: {
                type: 'string',
                'x-decorator': 'FormItem',
                'x-component': 'Input',
                required: true,
                'x-reactions': [
                  {
                    dependencies: ['.a1', 'hideFirstColumn'],
                    when: '{{$deps[1] || $deps[0]}}',
                    fulfill: {
                      schema: {
                        'x-visible': false,
                      },
                    },
                    otherwise: {
                      schema: {
                        'x-visible': true,
                      },
                    },
                  },
                ],
              },
            },
          },
          column5: {
            type: 'void',
            'x-component': 'ArrayTable.Column',
            'x-component-props': { width: 200, title: 'A3' },
            properties: {
              a3: {
                type: 'string',
                required: true,
                'x-decorator': 'FormItem',
                'x-component': 'Input',
              },
            },
          },
          column6: {
            type: 'void',
            'x-component': 'ArrayTable.Column',
            'x-component-props': {
              title: 'Operations',
              dataIndex: 'operations',
              width: 200,
              fixed: 'right',
            },
            properties: {
              item: {
                type: 'void',
                'x-component': 'FormItem',
                properties: {
                  remove: {
                    type: 'void',
                    'x-component': 'ArrayTable.Remove',
                  },
                  moveDown: {
                    type: 'void',
                    'x-component': 'ArrayTable.MoveDown',
                  },
                  moveUp: {
                    type: 'void',
                    'x-component': 'ArrayTable.MoveUp',
                  },
                },
              },
            },
          },
        },
      },
      properties: {
        add: {
          type: 'void',
          'x-component': 'ArrayTable.Addition',
          title: 'Add entry',
        },
      },
    },
  },
}

export const ArrayTableLinkageSchema = () => {
  return (
    <FormProvider form={form}>
      <SchemaField schema={schema} />
      <FormButtonGroup>
        <Submit onSubmit={console.log}>Submit</Submit>
      </FormButtonGroup>
    </FormProvider>
  )
}
