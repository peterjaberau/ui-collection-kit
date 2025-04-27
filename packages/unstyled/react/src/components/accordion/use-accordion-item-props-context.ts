import type { ItemProps } from '@ui-collection-kit/accordion'
import { createContext } from '../../utils/create-context'

export interface UseAccordionItemPropsContext extends ItemProps {}

export const [AccordionItemPropsProvider, useAccordionItemPropsContext] = createContext<ItemProps>({
  name: 'AccordionItemPropsContext',
  hookName: 'useAccordionItemPropsContext',
  providerName: '<AccordionItemPropsProvider />',
})
