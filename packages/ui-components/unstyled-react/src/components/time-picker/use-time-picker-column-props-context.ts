import type { TimeUnit } from '@ui-collection-kit/time-picker'
import { createContext } from '../../utils/create-context'

export interface UseTimePickerColumnPropsContext {
  unit: TimeUnit
}

export const [TimePickerColumnPropsProvider, useTimePickerColumnPropsContext] =
  createContext<UseTimePickerColumnPropsContext>({
    name: 'TimePickerColumnPropsContext',
    hookName: 'useTimePickerColumnPropsContext',
    providerName: '<TimePickerColumnPropsProvider />',
  })
