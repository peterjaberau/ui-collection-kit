import type { PropTypes } from '@ui-kit/core-react'
import type * as tour from '@ui-kit/core-tour'
import { createContext } from '../../utils/create-context'

export interface UseTourContext extends tour.Api<PropTypes> {}

export const [TourProvider, useTourContext] = createContext<UseTourContext>({
  name: 'TourContext',
  hookName: 'useTourContext',
  providerName: '<TourProvider />',
})
