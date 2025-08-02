import { ISchema } from '@formily/react'

export const Alert: ISchema = {
  type: 'object',
  properties: {
    title: {
      type: 'string',
      'x-decorator': 'FormItem',
      'x-component': 'Input',
      'x-component-props': {
        defaultValue: 'This is an alert',
      },
    },
    status: {
      type: 'string',
      enum: ['info', 'warning', 'success', 'error', 'neutral'],
      'x-decorator': 'FormItem',
      'x-component': 'Select',
      'x-component-props': {
        defaultValue: 'info',
      },
    },
    variant: {
      type: 'string',
      enum: ['subtle', 'surface', 'outline', 'solid'],
      'x-decorator': 'FormItem',
      'x-component': 'Select',
      'x-component-props': {
        defaultValue: 'subtle',
      },
    },
    size: {
      type: 'string',
      enum: ['lg', 'md', 'sm'],
      'x-decorator': 'FormItem',
      'x-component': 'Select',
      'x-component-props': {
        defaultValue: 'md',
      },
    },
    inline: {
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
  },
}
