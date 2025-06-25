import { type PropTypes, normalizeProps, useMachine } from '@ui-collection-kit/react'
import * as uiCollectionKitSwitch from '@ui-collection-kit/switch'
import { useId } from 'react'
import { useEnvironmentContext, useLocaleContext } from '../../providers'
import type { Optional } from '../../types'
import { useFieldContext } from '../field'

export interface UseSwitchProps extends Optional<Omit<uiCollectionKitSwitch.Props, 'dir' | 'getRootNode'>, 'id'> {}
export interface UseSwitchReturn extends uiCollectionKitSwitch.Api<PropTypes> {}

export const useSwitch = (props?: UseSwitchProps): UseSwitchReturn => {
  const id = useId()
  const { getRootNode } = useEnvironmentContext()
  const { dir } = useLocaleContext()
  const field = useFieldContext()

  const machineProps: uiCollectionKitSwitch.Props = {
    id,
    ids: {
      label: field?.ids.label,
      hiddenInput: field?.ids.control,
    },
    dir,
    disabled: field?.disabled,
    readOnly: field?.readOnly,
    invalid: field?.invalid,
    required: field?.required,
    getRootNode,
    ...props,
  }

  const service = useMachine(uiCollectionKitSwitch.machine, machineProps)
  return uiCollectionKitSwitch.connect(service, normalizeProps)
}
