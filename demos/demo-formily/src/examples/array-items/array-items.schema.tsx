import React from 'react'
import {
  FormItem,
  Editable,
  Input,
  Select,
  Radio,
  DatePicker,
  ArrayItems,
  FormButtonGroup,
  Submit,
  Space,
} from '../../components'
import { createForm } from '@formily/core'
import { FormProvider, createSchemaField } from '@formily/react'

const SchemaField = createSchemaField({
  components: {
    FormItem,
    Editable,
    DatePicker,
    Space,
    Radio,
    Input,
    Select,
    ArrayItems,
  },
})

const form = createForm()

const schema = {
  type: 'object',
  properties: {
    string_array: {
      type: 'array',
      'x-component': 'ArrayItems',
      'x-decorator': 'FormItem',
      title: 'String array',
      items: {
        type: 'void',
        'x-component': 'Space',
        properties: {
          sort: {
            type: 'void',
            'x-decorator': 'FormItem',
            'x-component': 'ArrayItems.SortHandle',
          },
          input: {
            type: 'string',
            'x-decorator': 'FormItem',
            'x-component': 'Input',
          },
          remove: {
            type: 'void',
            'x-decorator': 'FormItem',
            'x-component': 'ArrayItems.Remove',
          },
        },
      },
      properties: {
        add: {
          type: 'void',
          title: 'Add entry',
          'x-component': 'ArrayItems.Addition',
        },
      },
    },
    array: {
      type: 'array',
      'x-component': 'ArrayItems',
      'x-decorator': 'FormItem',
      title: 'Object array',
      items: {
        type: 'object',
        properties: {
          space: {
            type: 'void',
            'x-component': 'Space',
            properties: {
              sort: {
                type: 'void',
                'x-decorator': 'FormItem',
                'x-component': 'ArrayItems.SortHandle',
              },
              date: {
                type: 'string',
                title: 'Date',
                'x-decorator': 'FormItem',
                'x-component': 'DatePicker.RangePicker',
                'x-component-props': {
                  style: {
                    width: 160,
                  },
                },
              },
              input: {
                type: 'string',
                title: 'input box',
                'x-decorator': 'FormItem',
                'x-component': 'Input',
              },
              select: {
                type: 'string',
                title: 'drop-down box',
                enum: [
                  { label: 'Option 1', value: 1 },
                  { label: 'Option 2', value: 2 },
                ],
                'x-decorator': 'FormItem',
                'x-component': 'Select',
                'x-component-props': {
                  style: {
                    width: 160,
                  },
                },
              },
              remove: {
                type: 'void',
                'x-decorator': 'FormItem',
                'x-component': 'ArrayItems.Remove',
              },
            },
          },
        },
      },
      properties: {
        add: {
          type: 'void',
          title: 'Add entry',
          'x-component': 'ArrayItems.Addition',
        },
      },
    },
    array2: {
      type: 'array',
      'x-component': 'ArrayItems',
      'x-decorator': 'FormItem',
      'x-component-props': { style: { width: 300 } },
      title: 'Object array',
      items: {
        type: 'object',
        'x-decorator': 'ArrayItems.Item',
        properties: {
          sort: {
            type: 'void',
            'x-decorator': 'FormItem',
            'x-component': 'ArrayItems.SortHandle',
          },

          input: {
            type: 'string',
            title: 'input box',
            'x-decorator': 'Editable',
            'x-component': 'Input',
            'x-component-props': {
              bordered: false,
            },
          },
          config: {
            type: 'object',
            title: 'Configure complex data',
            'x-component': 'Editable.Popover',
            'x-reactions':
              '{{(field)=>field.title = field.value && field.value.input || field.title}}',
            properties: {
              date: {
                type: 'string',
                title: 'Date',
                'x-decorator': 'FormItem',
                'x-component': 'DatePicker.RangePicker',
                'x-component-props': {
                  style: {
                    width: 160,
                  },
                },
              },
              input: {
                type: 'string',
                title: 'input box',
                'x-decorator': 'FormItem',
                'x-component': 'Input',
              },
              select: {
                type: 'string',
                title: 'drop-down box',
                enum: [
                  { label: 'Option 1', value: 1 },
                  { label: 'Option 2', value: 2 },
                ],
                'x-decorator': 'FormItem',
                'x-component': 'Select',
                'x-component-props': {
                  style: {
                    width: 160,
                  },
                },
              },
            },
          },
          remove: {
            type: 'void',
            'x-decorator': 'FormItem',
            'x-component': 'ArrayItems.Remove',
          },
        },
      },
      properties: {
        add: {
          type: 'void',
          title: 'Add entry',
          'x-component': 'ArrayItems.Addition',
        },
      },
    },
  },
}

export const ArrayItemsSchema = () => {
  return (
    <FormProvider form={form}>
      <SchemaField schema={schema} />
      <FormButtonGroup>
        <Submit onSubmit={console.log}>Submit</Submit>
      </FormButtonGroup>
    </FormProvider>
  )
}
