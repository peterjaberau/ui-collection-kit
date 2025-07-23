import type { ItemState } from '@ui-kit/core-accordion'
import { createContext } from '../../utils/create-context'

export interface UseAccordionItemContext extends ItemState {}

export const [AccordionItemProvider, useAccordionItemContext] = createContext<UseAccordionItemContext>({
  name: 'AccordionItemContext',
  hookName: 'useAccordionItemContext',
  providerName: '<AccordionItemProvider />',
})
