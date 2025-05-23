import * as checkbox from '@ui-collection-kit/checkbox'
import { type PropTypes, mergeProps, normalizeProps, useMachine } from '@ui-collection-kit/react'
import { useId, useMemo } from 'react'
import { useEnvironmentContext, useLocaleContext } from '../../providers'
import type { Optional } from '../../types'
import { useFieldContext } from '../field'
import { useCheckboxGroupContext } from './use-checkbox-group-context'

export interface UseCheckboxProps extends Optional<Omit<checkbox.Props, 'dir' | 'getRootNode'>, 'id'> {}
export interface UseCheckboxReturn extends checkbox.Api<PropTypes> {}

export const useCheckbox = (ownProps: UseCheckboxProps = {}): UseCheckboxReturn => {
  const checkboxGroup = useCheckboxGroupContext()
  const field = useFieldContext()

  const props = useMemo(() => {
    return mergeProps(ownProps, checkboxGroup?.getItemProps({ value: ownProps.value }) ?? {})
  }, [ownProps, checkboxGroup])

  const id = useId()
  const { getRootNode } = useEnvironmentContext()
  const { dir } = useLocaleContext()

  const machineProps: checkbox.Props = {
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

  const service = useMachine(checkbox.machine, machineProps)
  return checkbox.connect(service, normalizeProps)
}
