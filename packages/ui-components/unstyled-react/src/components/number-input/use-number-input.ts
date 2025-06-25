import * as numberInput from '@ui-collection-kit/number-input'
import { type PropTypes, normalizeProps, useMachine } from '@ui-collection-kit/react'
import { useId } from 'react'
import { useEnvironmentContext, useLocaleContext } from '../../providers'
import type { Optional } from '../../types'
import { useFieldContext } from '../field'

export interface UseNumberInputProps extends Optional<Omit<numberInput.Props, 'dir' | 'getRootNode'>, 'id'> {}
export interface UseNumberInputReturn extends numberInput.Api<PropTypes> {}

export const useNumberInput = (props?: UseNumberInputProps): UseNumberInputReturn => {
  const id = useId()
  const { getRootNode } = useEnvironmentContext()
  const { dir, locale } = useLocaleContext()
  const field = useFieldContext()

  const machineProps: numberInput.Props = {
    id,
    ids: {
      label: field?.ids.label,
      input: field?.ids.control,
    },
    disabled: field?.disabled,
    readOnly: field?.readOnly,
    required: field?.required,
    invalid: field?.invalid,
    dir,
    locale,
    getRootNode,
    ...props,
  }

  const service = useMachine(numberInput.machine, machineProps)
  return numberInput.connect(service, normalizeProps)
}
