import { createLocales } from '#packages/core'

export const DatePicker = {
  'zh-CN': {
    title: 'DatePicker',
    settings: {
      'x-component-props': {
        disabledDate: {
          title: 'Disabled Date',
          tooltip: 'Format (currentDate: moment) => boolean',
        },
        disabledTime: {
          title: 'Disabled Time',
          tooltip: 'Format (currentDate: moment) => boolean',
        },
        inputReadOnly: 'Input ReadOnly',
        format: 'Format',
        picker: {
          title: 'Picker Type',
          dataSource: ['Time', 'Date', 'Month', 'Year', 'Quarter', 'Decade'],
        },
        showNow: 'Show Now',
        showTime: 'Show Time',
        showToday: 'Show Today',
      },
    },
  },
  'en-US': {
    title: 'DatePicker',
    settings: {
      'x-component-props': {
        disabledDate: {
          title: 'Disabled Date',
          tooltip: 'Format (currentDate: moment) => boolean',
        },
        disabledTime: {
          title: 'Disabled Time',
          tooltip: 'Format (currentDate: moment) => boolean',
        },
        inputReadOnly: 'Input ReadOnly',
        format: 'Format',
        picker: {
          title: 'Picker Type',
          dataSource: ['Time', 'Date', 'Month', 'Year', 'Quarter', 'Decade'],
        },
        showNow: 'Show Now',
        showTime: 'Show Time',
        showToday: 'Show Today',
      },
    },
  },
  'ko-KR': {
    title: 'DatePicker',
    settings: {
      'x-component-props': {
        disabledDate: {
          title: 'Disabled Date',
          tooltip: 'Format (currentDate: moment) => boolean',
        },
        disabledTime: {
          title: 'Disabled Time',
          tooltip: 'Format (currentDate: moment) => boolean',
        },
        inputReadOnly: 'Input ReadOnly',
        format: 'Format',
        picker: {
          title: 'Picker Type',
          dataSource: ['Time', 'Date', 'Month', 'Year', 'Quarter', 'Decade'],
        },
        showNow: 'Show Now',
        showTime: 'Show Time',
        showToday: 'Show Today',
      },
    },
  },
}

export const DateRangePicker = createLocales(DatePicker, {
  'zh-CN': {
    title: 'DateRange',
  },
  'en-US': {
    title: 'DateRange',
  },
  'ko-KR': {
    title: 'DateRange',
  },
})
