import type { ItemProps } from '@ui-collection-kit/radio-group'
import { createContext } from '../../utils/create-context'

export const [RadioGroupItemPropsProvider, useRadioGroupItemPropsContext] = createContext<ItemProps>({
  name: 'RadioGroupItemPropsContext',
  hookName: 'useRadioGroupItemPropsContext',
  providerName: '<RadioGroupItemPropsProvider />',
})
