import type { ItemProps } from '@ui-collection-kit/listbox'
import { createContext } from '../../utils/create-context'

export const [ListboxItemPropsProvider, useListboxItemPropsContext] = createContext<ItemProps>({
  name: 'ListboxItemPropsContext',
  hookName: 'useListboxItemPropsContext',
  providerName: '<ListboxItemPropsProvider />',
})
