import type { ItemState } from '@ui-kit/core-listbox'
import { createContext } from '../../utils/create-context'

export interface UseListboxItemContext extends ItemState {}

export const [ListboxItemProvider, useListboxItemContext] = createContext<UseListboxItemContext>({
  name: 'ListboxItemContext',
  hookName: 'useListboxItemContext',
  providerName: '<ListboxItemProvider />',
})
