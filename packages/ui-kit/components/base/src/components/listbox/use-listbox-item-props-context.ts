import type { ItemProps } from '@ui-kit/core-listbox'
import { createContext } from '../../utils/create-context'

export const [ListboxItemPropsProvider, useListboxItemPropsContext] = createContext<ItemProps>({
  name: 'ListboxItemPropsContext',
  hookName: 'useListboxItemPropsContext',
  providerName: '<ListboxItemPropsProvider />',
})
