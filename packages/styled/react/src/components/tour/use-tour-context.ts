import type { PropTypes } from '@ui-collection-kit/react'
import type * as tour from '@ui-collection-kit/tour'
import { createContext } from '../../utils/create-context'

export interface UseTourContext extends tour.Api<PropTypes> {}

export const [TourProvider, useTourContext] = createContext<UseTourContext>({
  name: 'TourContext',
  hookName: 'useTourContext',
  providerName: '<TourProvider />',
})
