import type { ItemState } from '@ui-kit/core-combobox'
import { createContext } from '../../utils/create-context'

export interface UseComboboxItemContext extends ItemState {}

export const [ComboboxItemProvider, useComboboxItemContext] = createContext<UseComboboxItemContext>({
  name: 'ComboboxItemContext',
  hookName: 'useComboboxItemContext',
  providerName: '<ComboboxItemProvider />',
})
