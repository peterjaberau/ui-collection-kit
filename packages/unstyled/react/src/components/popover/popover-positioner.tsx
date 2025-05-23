import { mergeProps } from '@ui-collection-kit/react'
import { forwardRef } from 'react'
import { type HTMLProps, type PolymorphicProps, ark } from '../factory'
import { usePresenceContext } from '../presence'
import { usePopoverContext } from './use-popover-context'

export interface PopoverPositionerBaseProps extends PolymorphicProps {}
export interface PopoverPositionerProps extends HTMLProps<'div'>, PopoverPositionerBaseProps {}

export const PopoverPositioner = forwardRef<HTMLDivElement, PopoverPositionerProps>((props, ref) => {
  const popover = usePopoverContext()
  const presence = usePresenceContext()
  const mergedProps = mergeProps(popover.getPositionerProps(), props)

  if (presence.unmounted) {
    return null
  }

  return <ark.div {...mergedProps} ref={ref} />
})

PopoverPositioner.displayName = 'PopoverPositioner'
