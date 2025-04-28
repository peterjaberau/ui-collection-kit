import type { ItemState } from '@ui-collection-kit/listbox'
import { createContext } from '../../utils/create-context'

export interface UseListboxItemContext extends ItemState {}

export const [ListboxItemProvider, useListboxItemContext] = createContext<UseListboxItemContext>({
  name: 'ListboxItemContext',
  hookName: 'useListboxItemContext',
  providerName: '<ListboxItemProvider />',
})
