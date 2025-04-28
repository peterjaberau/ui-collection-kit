import * as popover from '@ui-collection-kit/popover'
import { type PropTypes, normalizeProps, useMachine } from '@ui-collection-kit/react'
import { useId } from 'react'
import { useEnvironmentContext, useLocaleContext } from '../../providers'
import type { Optional } from '../../types'

export interface UsePopoverProps extends Optional<Omit<popover.Props, 'dir' | 'getRootNode'>, 'id'> {}

export interface UsePopoverReturn extends popover.Api<PropTypes> {}

export const usePopover = (props?: UsePopoverProps): UsePopoverReturn => {
  const id = useId()
  const { getRootNode } = useEnvironmentContext()
  const { dir } = useLocaleContext()

  const machineProps: popover.Props = {
    id,
    dir,
    getRootNode,
    ...props,
  }

  const service = useMachine(popover.machine, machineProps)
  return popover.connect(service, normalizeProps)
}
