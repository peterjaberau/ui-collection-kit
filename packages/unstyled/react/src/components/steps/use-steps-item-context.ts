import type { ItemState } from '@ui-collection-kit/steps'
import { createContext } from '../../utils/create-context'

export interface UseStepsItemContext extends ItemState {}

export const [StepsItemProvider, useStepsItemContext] = createContext<UseStepsItemContext>({
  name: 'StepsItemContext',
  hookName: 'useStepsItemContext',
  providerName: '<StepsItem />',
})
