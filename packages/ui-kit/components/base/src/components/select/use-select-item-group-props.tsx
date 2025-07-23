import type { ItemGroupProps } from '@ui-kit/core-select'
import { createContext } from '../../utils/create-context'

export interface UseSelectItemGroupPropsContext extends ItemGroupProps {}

export const [SelectItemGroupPropsProvider, useSelectItemGroupPropsContext] = createContext<ItemGroupProps>({
  name: 'SelectItemGroupPropsContext',
  hookName: 'useSelectItemGroupPropsContext',
  providerName: '<SelectItemGroupPropsProvider />',
})
