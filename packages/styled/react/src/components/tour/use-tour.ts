import { type PropTypes, normalizeProps, useMachine } from '@ui-collection-kit/react'
import * as tour from '@ui-collection-kit/tour'
import { useId } from 'react'
import { useEnvironmentContext, useLocaleContext } from '../../providers'
import type { Optional } from '../../types'

export interface UseTourProps extends Optional<Omit<tour.Props, 'dir' | 'getRootNode'>, 'id'> {}
export interface UseTourReturn extends tour.Api<PropTypes> {}

export const useTour = (props?: UseTourProps): UseTourReturn => {
  const id = useId()
  const { getRootNode } = useEnvironmentContext()
  const { dir } = useLocaleContext()

  const machineProps: tour.Props = {
    id,
    dir,
    getRootNode,
    ...props,
  }

  const service = useMachine(tour.machine, machineProps)
  return tour.connect(service, normalizeProps)
}
