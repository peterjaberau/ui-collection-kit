import { mergeProps } from '@ui-collection-kit/react'
import { forwardRef } from 'react'
import { type HTMLProps, type PolymorphicProps, ark } from '../factory'
import { usePopoverContext } from './use-popover-context'

export interface PopoverTitleBaseProps extends PolymorphicProps {}
export interface PopoverTitleProps extends HTMLProps<'div'>, PopoverTitleBaseProps {}

export const PopoverTitle = forwardRef<HTMLDivElement, PopoverTitleProps>((props, ref) => {
  const popover = usePopoverContext()
  const mergedProps = mergeProps(popover.getTitleProps(), props)

  return <ark.div {...mergedProps} ref={ref} />
})

PopoverTitle.displayName = 'PopoverTitle'
