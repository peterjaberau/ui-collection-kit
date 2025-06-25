import { mergeProps } from '@ui-collection-kit/react'
import { forwardRef } from 'react'
import { type HTMLProps, type PolymorphicProps, ark } from '../factory'
import { usePopoverContext } from './use-popover-context'

export interface PopoverAnchorBaseProps extends PolymorphicProps {}
export interface PopoverAnchorProps extends HTMLProps<'div'>, PopoverAnchorBaseProps {}

export const PopoverAnchor = forwardRef<HTMLDivElement, PopoverAnchorProps>((props, ref) => {
  const popover = usePopoverContext()
  const mergedProps = mergeProps(popover.getAnchorProps(), props)

  return <ark.div {...mergedProps} ref={ref} />
})

PopoverAnchor.displayName = 'PopoverAnchor'
