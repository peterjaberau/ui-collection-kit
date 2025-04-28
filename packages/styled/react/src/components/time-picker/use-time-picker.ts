import { type PropTypes, normalizeProps, useMachine } from '@ui-collection-kit/react'
import * as timePicker from '@ui-collection-kit/time-picker'
import { useId } from 'react'
import { useEnvironmentContext, useLocaleContext } from '../../providers'
import type { Optional } from '../../types'

export interface UseTimePickerProps extends Optional<Omit<timePicker.Props, 'dir' | 'getRootNode'>, 'id'> {}

export interface UseTimePickerReturn extends timePicker.Api<PropTypes> {}

export const useTimePicker = (props?: UseTimePickerProps): UseTimePickerReturn => {
  const id = useId()
  const { getRootNode } = useEnvironmentContext()
  const { dir, locale } = useLocaleContext()

  const machineProps: timePicker.Props = {
    id,
    dir,
    locale,
    getRootNode,
    ...props,
  }

  const service = useMachine(timePicker.machine, machineProps)
  return timePicker.connect(service, normalizeProps)
}
