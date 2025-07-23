import type { ItemProps } from '@ui-kit/core-select'
import { createContext } from '../../utils/create-context'

export const [SelectItemPropsProvider, useSelectItemPropsContext] = createContext<ItemProps>({
  name: 'SelectItemPropsContext',
  hookName: 'useSelectItemPropsContext',
  providerName: '<SelectItemPropsProvider />',
})
