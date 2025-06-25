import * as floatingPanel from '@ui-collection-kit/floating-panel'
import { type PropTypes, normalizeProps, useMachine } from '@ui-collection-kit/react'
import { useId } from 'react'
import { useEnvironmentContext, useLocaleContext } from '../../providers'
import type { Optional } from '../../types'

export interface UseFloatingPanelProps extends Optional<Omit<floatingPanel.Props, 'getRootNode'>, 'id'> {}

export interface UseFloatingPanelReturn extends floatingPanel.Api<PropTypes> {}

export const useFloatingPanel = (props: UseFloatingPanelProps = {}): UseFloatingPanelReturn => {
  const { getRootNode } = useEnvironmentContext()
  const { dir } = useLocaleContext()

  const context: floatingPanel.Props = {
    id: useId(),
    dir,
    getRootNode,
    ...props,
  }

  const service = useMachine(floatingPanel.machine, context)

  return floatingPanel.connect(service, normalizeProps)
}
