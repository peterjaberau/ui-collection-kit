import type { ResizeTriggerProps } from '@ui-collection-kit/floating-panel'
import { mergeProps } from '@ui-collection-kit/react'
import { forwardRef } from 'react'
import { createSplitProps } from '../../utils/create-split-props'
import { type HTMLProps, type PolymorphicProps, ark } from '../factory'
import { useFloatingPanelContext } from './use-floating-panel-context'

export interface FloatingPanelResizeTriggerBaseProps extends ResizeTriggerProps, PolymorphicProps {}
export interface FloatingPanelResizeTriggerProps extends HTMLProps<'div'>, FloatingPanelResizeTriggerBaseProps {}

export const FloatingPanelResizeTrigger = forwardRef<HTMLDivElement, FloatingPanelResizeTriggerProps>((props, ref) => {
  const [resizeProps, localProps] = createSplitProps<ResizeTriggerProps>()(props, ['axis'])
  const floatingPanel = useFloatingPanelContext()
  const mergedProps = mergeProps(floatingPanel.getResizeTriggerProps(resizeProps), localProps)

  return <ark.div {...mergedProps} ref={ref} />
})

FloatingPanelResizeTrigger.displayName = 'FloatingPanelResizeTrigger'
