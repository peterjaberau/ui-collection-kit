import type { OptionItemProps } from '@ui-collection-kit/menu'
import { createContext } from '../../utils/create-context'

export const [MenuOptionItemPropsProvider, useMenuOptionItemPropsContext] = createContext<OptionItemProps>({
  name: 'MenuOptionItemPropsContext',
  hookName: 'useMenuOptionItemPropsContext',
  providerName: '<MenuOptionItemPropsProvider />',
})
