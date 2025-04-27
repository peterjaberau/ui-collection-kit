import type { ItemState } from '@ui-collection-kit/rating-group'
import { createContext } from '../../utils/create-context'

export interface UseRatingGroupItemContext extends ItemState {}

export const [RatingGroupItemProvider, useRatingGroupItemContext] = createContext<UseRatingGroupItemContext>({
  name: 'RatingGroupItemContext',
  hookName: 'useRatingGroupItemContext',
  providerName: '<RatingGroupItemProvider />',
})
