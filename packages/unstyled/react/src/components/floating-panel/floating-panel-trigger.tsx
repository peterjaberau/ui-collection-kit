import { mergeProps } from '@ui-collection-kit/react'
import { forwardRef } from 'react'
import { type HTMLProps, type PolymorphicProps, ark } from '../factory'
import { usePresenceContext } from '../presence'
import { useFloatingPanelContext } from './use-floating-panel-context'

export interface FloatingPanelTriggerBaseProps extends PolymorphicProps {}
export interface FloatingPanelTriggerProps extends HTMLProps<'button'>, FloatingPanelTriggerBaseProps {}

export const FloatingPanelTrigger = forwardRef<HTMLButtonElement, FloatingPanelTriggerProps>((props, ref) => {
  const floatingPanel = useFloatingPanelContext()
  const presence = usePresenceContext()

  const triggerProps = floatingPanel.getTriggerProps()
  const mergedProps = mergeProps(
    {
      ...triggerProps,
      'aria-controls': presence.unmounted ? undefined : triggerProps['aria-controls'],
    },
    props,
  )

  return <ark.button {...mergedProps} ref={ref} />
})

FloatingPanelTrigger.displayName = 'FloatingPanelTrigger'
