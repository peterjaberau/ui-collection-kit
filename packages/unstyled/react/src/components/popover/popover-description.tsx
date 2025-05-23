import { mergeProps } from '@ui-collection-kit/react'
import { forwardRef } from 'react'
import { type HTMLProps, type PolymorphicProps, ark } from '../factory'
import { usePopoverContext } from './use-popover-context'

export interface PopoverDescriptionBaseProps extends PolymorphicProps {}
export interface PopoverDescriptionProps extends HTMLProps<'div'>, PopoverDescriptionBaseProps {}

export const PopoverDescription = forwardRef<HTMLDivElement, PopoverDescriptionProps>((props, ref) => {
  const popover = usePopoverContext()
  const mergedProps = mergeProps(popover.getDescriptionProps(), props)

  return <ark.div {...mergedProps} ref={ref} />
})

PopoverDescription.displayName = 'PopoverDescription'
