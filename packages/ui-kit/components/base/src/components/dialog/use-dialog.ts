import * as dialog from '@ui-kit/core-dialog'
import { type PropTypes, normalizeProps, useMachine } from '@ui-kit/core-react'
import { useId } from 'react'
import { useEnvironmentContext, useLocaleContext } from '../../providers'
import type { Optional } from '../../types'

export interface UseDialogProps extends Optional<Omit<dialog.Props, 'getRootNode' | 'dir'>, 'id'> {}

export interface UseDialogReturn extends dialog.Api<PropTypes> {}

export const useDialog = (props?: UseDialogProps): UseDialogReturn => {
  const id = useId()
  const { getRootNode } = useEnvironmentContext()
  const { dir } = useLocaleContext()

  const machineProps: dialog.Props = {
    id,
    getRootNode,
    dir,
    ...props,
  }

  const service = useMachine(dialog.machine, machineProps)
  return dialog.connect(service, normalizeProps)
}
