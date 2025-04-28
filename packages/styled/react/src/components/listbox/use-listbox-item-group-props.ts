import type { ItemGroupProps } from '@ui-collection-kit/listbox'
import { createContext } from '../../utils/create-context'

export interface UseListboxItemGroupPropsContext extends ItemGroupProps {}

export const [ListboxItemGroupPropsProvider, useListboxItemGroupPropsContext] = createContext<ItemGroupProps>({
  name: 'ListboxItemGroupPropsContext',
  hookName: 'useListboxItemGroupPropsContext',
  providerName: '<ListboxItemGroupPropsProvider />',
})
