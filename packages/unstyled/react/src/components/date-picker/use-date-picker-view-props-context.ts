import type { ViewProps } from '@ui-collection-kit/date-picker'
import { createContext } from '../../utils/create-context'

export interface UseDatePickerViewContext extends Required<ViewProps> {}

export const [DatePickerViewPropsProvider, useDatePickerViewPropsContext] = createContext<UseDatePickerViewContext>({
  name: 'DatePickerViewContext',
  hookName: 'useDatePickerViewContext',
  providerName: '<DatePickerViewProvider />',
  strict: false,
  defaultValue: { view: 'day' },
})
