import type { ItemProps } from '@ui-collection-kit/select'
import { createContext } from '../../utils/create-context'

export const [SelectItemPropsProvider, useSelectItemPropsContext] = createContext<ItemProps>({
  name: 'SelectItemPropsContext',
  hookName: 'useSelectItemPropsContext',
  providerName: '<SelectItemPropsProvider />',
})
