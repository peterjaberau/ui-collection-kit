import * as clipboard from '@ui-collection-kit/clipboard'
import { type PropTypes, normalizeProps, useMachine } from '@ui-collection-kit/react'
import { useId } from 'react'
import { useEnvironmentContext } from '../../providers/environment'
import type { Optional } from '../../types'

export interface UseClipboardProps extends Optional<Omit<clipboard.Props, 'getRootNode'>, 'id'> {}
export interface UseClipboardReturn extends clipboard.Api<PropTypes> {}

export const useClipboard = (props?: UseClipboardProps): UseClipboardReturn => {
  const id = useId()
  const { getRootNode } = useEnvironmentContext()

  const machineProps: clipboard.Props = {
    id,
    getRootNode,
    ...props,
  }

  const service = useMachine(clipboard.machine, machineProps)
  return clipboard.connect(service, normalizeProps)
}
