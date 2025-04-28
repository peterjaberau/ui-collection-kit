import type { ItemGroupProps } from '@ui-collection-kit/select'
import { createContext } from '../../utils/create-context'

export interface UseSelectItemGroupPropsContext extends ItemGroupProps {}

export const [SelectItemGroupPropsProvider, useSelectItemGroupPropsContext] = createContext<ItemGroupProps>({
  name: 'SelectItemGroupPropsContext',
  hookName: 'useSelectItemGroupPropsContext',
  providerName: '<SelectItemGroupPropsProvider />',
})
