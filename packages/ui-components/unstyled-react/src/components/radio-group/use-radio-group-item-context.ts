import type { ItemState } from '@ui-collection-kit/radio-group'
import { createContext } from '../../utils/create-context'

export interface UseRadioGroupItemContext extends ItemState {}

export const [RadioGroupItemProvider, useRadioGroupItemContext] = createContext<UseRadioGroupItemContext>({
  name: 'RadioGroupItemContext',
  hookName: 'useRadioGroupItemContext',
  providerName: '<RadioGroupItemProvider />',
})
