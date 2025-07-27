
export const arraySchema = {
  type: 'object',
  properties: {
    arrayCardsStr: {
      type: 'array',
      'x-component': 'ArrayCards',
      maxItems: 3,
      'x-decorator': 'FormItem',
      'x-component-props': {
        title: 'Array Cards String',
      },
      items: {
        type: 'void',
        properties: {
          index: {
            type: 'void',
            'x-component': 'ArrayCards.Index',
          },
          input: {
            type: 'string',
            'x-decorator': 'FormItem',
            title: 'Input',
            required: true,
            'x-component': 'Input',
          },
          remove: {
            type: 'void',
            'x-component': 'ArrayCards.Remove',
          },
          moveUp: {
            type: 'void',
            'x-component': 'ArrayCards.MoveUp',
          },
          moveDown: {
            type: 'void',
            'x-component': 'ArrayCards.MoveDown',
          },
        },
      },
      properties: {
        addition: {
          type: 'void',
          title: 'Add entry',
          'x-component': 'ArrayCards.Addition',
        },
      },
    },
    arrayCardsObj: {
      type: 'array',
      'x-component': 'ArrayCards',
      maxItems: 3,
      'x-decorator': 'FormItem',
      'x-component-props': {
        title: 'Array Cards objects[]',
      },
      items: {
        type: 'object',
        properties: {
          index: {
            type: 'void',
            'x-component': 'ArrayCards.Index',
          },
          input: {
            type: 'string',
            'x-decorator': 'FormItem',
            title: 'Input',
            required: true,
            'x-component': 'Input',
          },
          remove: {
            type: 'void',
            'x-component': 'ArrayCards.Remove',
          },
          moveUp: {
            type: 'void',
            'x-component': 'ArrayCards.MoveUp',
          },
          moveDown: {
            type: 'void',
            'x-component': 'ArrayCards.MoveDown',
          },
        },
      },
      properties: {
        addition: {
          type: 'void',
          title: 'Add entry',
          'x-component': 'ArrayCards.Addition',
        },
      },
    },

  },
}

export const builtinSchema = {
  type: 'object',
  properties: {

    string: {
      type: 'string',
      title: 'input box',
      'x-decorator': 'FormItem',
      'x-component': 'Input',
      required: true,
      'x-component-props': {
        style: {
          width: 240,
        },
      },
    },

    textarea: {
      type: 'string',
      title: 'text box',
      required: true,
      'x-decorator': 'FormItem',
      'x-component': 'Input.TextArea',
      'x-component-props': {
        style: {
          width: 400,
        },
      },
    },

    password: {
      type: 'string',
      title: 'input box',
      'x-decorator': 'FormItem',
      'x-component': 'Password',
      'x-component-props': {
        checkStrength: true,
      },
    },

    numberPicker: {
      type: 'string',
      title: 'input box',
      'x-decorator': 'FormItem',
      'x-component': 'NumberPicker',
      required: true,
      'x-component-props': {
        style: {
          width: 240,
        },
      },
    },

    switch: {
      switch: {
        type: 'boolean',
        title: 'Switch',
        'x-decorator': 'FormItem',
        'x-component': 'Switch',
      },
    },

    radio: {
      radio: {
        type: 'number',
        title: 'Single selection',
        enum: [
          {
            label: 'Option 1',
            value: 1,
          },
          {
            label: 'Option 2',
            value: 2,
          },
        ],
        'x-decorator': 'FormItem',
        'x-component': 'Radio.Group',
      },
    },

    upload: {
      upload: {
        type: 'array',
        title: 'Upload',
        required: true,
        'x-decorator': 'FormItem',
        'x-component': 'NormalUpload',
      },
      upload2: {
        type: 'array',
        title: 'Card upload',
        required: true,
        'x-decorator': 'FormItem',
        'x-component': 'CardUpload',
      },
      upload3: {
        type: 'array',
        title: 'Drag and drop upload',
        required: true,
        'x-decorator': 'FormItem',
        'x-component': 'DraggerUpload',
      },
    },

    checkbox: {
      single: {
        type: 'boolean',
        title: 'Are you sure',
        'x-decorator': 'FormItem',
        'x-component': 'Checkbox',
        'x-component-props': {

        },
      },
      multiple: {
        type: 'array',
        title: 'Check',
        enum: [
          {
            label: 'Option 1',
            value: 1,
          },
          {
            label: 'Option 2',
            value: 2,
          },
        ],
        'x-decorator': 'FormItem',
        'x-component': 'Checkbox.Group',
      },
    },

    datePicker: {
      title: 'Normal date',
      'x-decorator': 'FormItem',
      'x-component': 'DatePicker',
      type: 'string',
    },
    weekPicker: {
      title: 'Week Selection',
      'x-decorator': 'FormItem',
      'x-component': 'DatePicker',
      'x-component-props': {
        picker: 'week',
      },
      type: 'string',
    },
    monthPicker: {
      title: 'Month Selection',
      'x-decorator': 'FormItem',
      'x-component': 'DatePicker',
      'x-component-props': {
        picker: 'month',
      },
      type: 'string',
    },
    quarterPicker: {
      title: 'Fiscal Year Selection',
      'x-decorator': 'FormItem',
      'x-component': 'DatePicker',
      'x-component-props': {
        picker: 'quarter',
      },
      type: 'string',
    },
    yearPicker: {
      title: 'Year selection',
      'x-decorator': 'FormItem',
      'x-component': 'DatePicker',
      'x-component-props': {
        picker: 'year',
      },
      type: 'string',
    },
    rangeDatePicker: {
      title: 'Date range',
      'x-decorator': 'FormItem',
      'x-component': 'DatePicker.RangePicker',
      'x-component-props': {
        showTime: true,
      },
      type: 'string',
    },
    rangeWeekPicker: {
      title: 'Week range selection',
      'x-decorator': 'FormItem',
      'x-component': 'DatePicker.RangePicker',
      'x-component-props': {
        picker: 'week',
      },
      type: 'string',
    },
    rangeMonthPicker: {
      title: 'Month Range Selection',
      'x-decorator': 'FormItem',
      'x-component': 'DatePicker.RangePicker',
      'x-component-props': {
        picker: 'month',
      },
      type: 'string',
    },
    rangeQuarterPicker: {
      title: 'Financial year range selection',
      'x-decorator': 'FormItem',
      'x-component': 'DatePicker.RangePicker',
      'x-component-props': {
        picker: 'quarter',
      },
      type: 'string',
    },
    rangeYearPicker: {
      name: 'range_year',
      title: 'Year range selection',
      'x-decorator': 'FormItem',
      'x-component': 'DatePicker.RangePicker',
      'x-component-props': {
        picker: 'year',
      },
      type: 'string',
    },

  }
}

export const layoutSchema = {

  type: 'object',
  properties: {
    formTab: {
      type: 'void',
      'x-component': 'FormTab',
      'x-component-props': {
        formTab: '{{formTab}}',
      },
      properties: {
        tab1: {
          type: 'void',
          'x-component': 'FormTab.TabPane',
          'x-component-props': {
            tab: 'A1',
          },
          properties: {
            aaa: {
              type: 'string',
              title: 'AAA',
              'x-decorator': 'FormItem',
              required: true,
              'x-component': 'Input',
            },
          },
        },
        tab2: {
          type: 'void',
          'x-component': 'FormTab.TabPane',
          'x-component-props': {
            tab: 'A2',
          },
          properties: {
            bbb: {
              type: 'string',
              title: 'BBB',
              'x-decorator': 'FormItem',
              required: true,
              'x-component': 'Input',
            },
          },
        },
        tab3: {
          type: 'void',
          'x-component': 'FormTab.TabPane',
          'x-component-props': {
            tab: 'A3',
          },
          properties: {
            ccc: {
              type: 'string',
              title: 'CCC',
              'x-decorator': 'FormItem',
              required: true,
              'x-component': 'Input',
            },
          },
        },
      },
    },
    formItem: {
      type: 'string',
      title: 'input box',
      'x-decorator': 'FormItem',
      'x-component': 'Input',
      'x-component-props': {
        style: {
          width: 240,
        },
      },
    },
    formGrid: {
      type: 'void',
      'x-component': 'FormGrid',
      'x-component-props': {
        minColumns: [4, 6, 10],
      },
      properties: {
        aaa: {
          type: 'string',
          title: 'AAA',
          'x-decorator': 'FormItem',
          'x-component': 'Input',
        },
        bbb: {
          type: 'string',
          title: 'BBB',
          'x-decorator': 'FormItem',
          'x-component': 'Input',
        },
        ccc: {
          type: 'string',
          title: 'CCC',
          'x-decorator': 'FormItem',
          'x-component': 'Input',
        },
        ddd: {
          type: 'string',
          title: 'DDD',
          'x-decorator': 'FormItem',
          'x-component': 'Input',
        },
        eee: {
          type: 'string',
          title: 'EEE',
          'x-decorator': 'FormItem',
          'x-component': 'Input',
        },
        fff: {
          type: 'string',
          title: 'FFF',
          'x-decorator': 'FormItem',
          'x-component': 'Input',
        },
        ggg: {
          type: 'string',
          title: 'GGG',
          'x-decorator': 'FormItem',
          'x-component': 'Input',
        },
      },
    }
  }

}
