import type { TableProps } from '@ui-collection-kit/date-picker'
import { createContext } from '../../utils/create-context'

export interface UseDatePickerTablePropsContext extends TableProps {}

export const [DatePickerTablePropsProvider, useDatePickerTablePropsContext] =
  createContext<UseDatePickerTablePropsContext>({
    name: 'DatePickerTableContext',
    hookName: 'useDatePickerTableContext',
    providerName: '<DatePickerTableProvider />',
  })
