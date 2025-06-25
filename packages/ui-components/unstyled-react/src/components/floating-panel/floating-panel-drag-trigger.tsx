import { mergeProps } from '@ui-collection-kit/react'
import { forwardRef } from 'react'
import { type HTMLProps, type PolymorphicProps, ark } from '../factory'
import { useFloatingPanelContext } from './use-floating-panel-context'

export interface FloatingPanelDragTriggerBaseProps extends PolymorphicProps {}
export interface FloatingPanelDragTriggerProps extends HTMLProps<'div'>, FloatingPanelDragTriggerBaseProps {}

export const FloatingPanelDragTrigger = forwardRef<HTMLDivElement, FloatingPanelDragTriggerProps>((props, ref) => {
  const floatingPanel = useFloatingPanelContext()
  const mergedProps = mergeProps(floatingPanel.getDragTriggerProps(), props)

  return <ark.div {...mergedProps} ref={ref} />
})

FloatingPanelDragTrigger.displayName = 'FloatingPanelDragTrigger'
