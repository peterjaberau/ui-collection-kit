import type { ItemState } from '@ui-kit/core-select'
import { createContext } from '../../utils/create-context'

export interface UseSelectItemContext extends ItemState {}

export const [SelectItemProvider, useSelectItemContext] = createContext<UseSelectItemContext>({
  name: 'SelectItemContext',
  hookName: 'useSelectItemContext',
  providerName: '<SelectItemProvider />',
})
