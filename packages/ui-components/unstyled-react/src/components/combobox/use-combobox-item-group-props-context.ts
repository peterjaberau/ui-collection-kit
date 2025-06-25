import type { ItemGroupProps } from '@ui-collection-kit/combobox'
import { createContext } from '../../utils/create-context'

export interface UseComboboxItemGroupPropsContext extends ItemGroupProps {}

export const [ComboboxItemGroupPropsProvider, useComboboxItemGroupPropsContext] = createContext<ItemGroupProps>({
  name: 'ComboboxItemGroupPropsContext',
  hookName: 'useComboboxItemGroupPropsContext',
  providerName: '<ComboboxItemGroupPropsProvider />',
})
