import { createLocales } from '#packages/core'
import { DatePicker } from './DatePicker'

export const TimePicker = createLocales(DatePicker, {
  'zh-CN': {
    title: 'Time Picker',
    settings: {
      'x-component-props': {
        clearText: 'Clear Text',
        disabledHours: 'Disbaled Hours',
        disabledMinutes: 'Disabled Minutes',
        disabledSeconds: 'Disabled Seconds',
        hideDisabledOptions: 'Hide Disabled Options',
        hourStep: 'Hour Step',
        minuteStep: 'Minute Step',
        secondStep: 'Second Step',
        use12Hours: 'Use 12-hour',
        inputReadOnly: 'Input ReadOnly',
        showNow: 'Show Now',
        format: 'Format',
      },
    },
  },
  'en-US': {
    title: 'Time Picker',
    settings: {
      'x-component-props': {
        clearText: 'Clear Text',
        disabledHours: 'Disbaled Hours',
        disabledMinutes: 'Disabled Minutes',
        disabledSeconds: 'Disabled Seconds',
        hideDisabledOptions: 'Hide Disabled Options',
        hourStep: 'Hour Step',
        minuteStep: 'Minute Step',
        secondStep: 'Second Step',
        use12Hours: 'Use 12-hour',
        inputReadOnly: 'Input ReadOnly',
        showNow: 'Show Now',
        format: 'Format',
      },
    },
  },
  'ko-KR': {
    title: 'Time Picker',
    settings: {
      'x-component-props': {
        clearText: 'Clear Text',
        disabledHours: 'Disbaled Hours',
        disabledMinutes: 'Disabled Minutes',
        disabledSeconds: 'Disabled Seconds',
        hideDisabledOptions: 'Hide Disabled Options',
        hourStep: 'Hour Step',
        minuteStep: 'Minute Step',
        secondStep: 'Second Step',
        use12Hours: 'Use 12-hour',
        inputReadOnly: 'Input ReadOnly',
        showNow: 'Show Now',
        format: 'Format',
      },
    },
  },
})

export const TimeRangePicker = createLocales(TimePicker, {
  'zh-CN': {
    title: 'Time Range',
  },
  'en-US': {
    title: 'Time Range',
  },
  'ko-KR': {
    title: 'Time Range',
  },
})
