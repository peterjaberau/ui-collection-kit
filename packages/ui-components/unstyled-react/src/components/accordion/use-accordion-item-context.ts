import type { ItemState } from '@ui-collection-kit/accordion'
import { createContext } from '../../utils/create-context'

export interface UseAccordionItemContext extends ItemState {}

export const [AccordionItemProvider, useAccordionItemContext] = createContext<UseAccordionItemContext>({
  name: 'AccordionItemContext',
  hookName: 'useAccordionItemContext',
  providerName: '<AccordionItemProvider />',
})
