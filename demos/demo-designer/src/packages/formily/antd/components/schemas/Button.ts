import { ISchema } from '@formily/react'

export const Button: ISchema = {
  type: 'object',
  properties: {
    text: {
      type: 'string',
      'x-decorator': 'FormItem',
      'x-component': 'Input',
      'x-component-props': {
        defaultValue: 'Button',
      },
    },
    loading: {
      type: 'boolean',
      'x-decorator': 'FormItem',
      'x-component': 'Switch',
    },

    colorPalette: {
      type: 'string',
      enum: ['gray', 'red', 'orange', 'yellow', 'green', 'teal', 'blue', 'cyan', 'purple', 'pink'],
      'x-decorator': 'FormItem',
      'x-component': 'Select',
      'x-component-props': {
        defaultValue: 'gray',
      },
    },
    size: {
      type: 'string',
      enum: ['lg', 'md', 'sm', ''],
      'x-decorator': 'FormItem',
      'x-component': 'Select',
      'x-component-props': {
        defaultValue: 'md',
      },
    },
    variant: {
      type: 'string',
      enum: ['solid', 'subtle', 'surface', 'outline', 'ghost', 'plain'],
      'x-decorator': 'FormItem',
      'x-component': 'Select',
      'x-component-props': {
        defaultValue: 'solid',
      },
    },
  },
}
