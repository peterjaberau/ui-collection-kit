import { type PropTypes, normalizeProps, useMachine } from '@ui-collection-kit/react'
import * as tooltip from '@ui-collection-kit/tooltip'
import { useId } from 'react'
import { useEnvironmentContext, useLocaleContext } from '../../providers'
import type { Optional } from '../../types'

export interface UseTooltipProps extends Optional<Omit<tooltip.Props, 'dir' | 'getRootNode'>, 'id'> {}

export interface UseTooltipReturn extends tooltip.Api<PropTypes> {}

export const useTooltip = (props?: UseTooltipProps): UseTooltipReturn => {
  const id = useId()
  const { getRootNode } = useEnvironmentContext()
  const { dir } = useLocaleContext()

  const machineProps: tooltip.Props = {
    id,
    dir,
    getRootNode,
    ...props,
  }

  const service = useMachine(tooltip.machine, machineProps)
  return tooltip.connect(service, normalizeProps)
}
