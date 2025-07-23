import { type PropTypes, normalizeProps, useMachine } from '@ui-kit/core-react'
import * as toggle from '@ui-kit/core-toggle'

export interface UseToggleProps extends toggle.Props {}

export interface UseToggleReturn extends toggle.Api<PropTypes> {}

export function useToggle(props?: UseToggleProps): UseToggleReturn {
  const service = useMachine(toggle.machine, props)
  return toggle.connect(service, normalizeProps)
}
