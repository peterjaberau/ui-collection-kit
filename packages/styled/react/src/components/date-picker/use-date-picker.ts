import * as datePicker from '@ui-collection-kit/date-picker'
import { type PropTypes, normalizeProps, useMachine } from '@ui-collection-kit/react'
import { useId } from 'react'
import { useEnvironmentContext, useLocaleContext } from '../../providers'
import type { Optional } from '../../types'

export interface UseDatePickerProps extends Optional<Omit<datePicker.Props, 'dir' | 'getRootNode'>, 'id'> {}

export interface UseDatePickerReturn extends datePicker.Api<PropTypes> {}

export const useDatePicker = (props?: UseDatePickerProps): UseDatePickerReturn => {
  const id = useId()
  const { getRootNode } = useEnvironmentContext()
  const { dir, locale } = useLocaleContext()

  const machineProps: datePicker.Props = {
    id,
    dir,
    locale,
    getRootNode,
    ...props,
  }

  const service = useMachine(datePicker.machine, machineProps)
  return datePicker.connect(service, normalizeProps)
}
