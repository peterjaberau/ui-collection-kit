import type { ItemProps } from '@ui-kit/core-combobox'
import { createContext } from '../../utils/create-context'

export interface UseComboboxItemPropsContext extends ItemProps {}

export const [ComboboxItemPropsProvider, useComboboxItemPropsContext] = createContext<ItemProps>({
  name: 'ComboboxItemPropsContext',
  hookName: 'useComboboxItemPropsContext',
  providerName: '<ComboboxItemPropsProvider />',
})
