import { mergeProps } from '@ui-collection-kit/react'
import { forwardRef } from 'react'
import { type HTMLProps, type PolymorphicProps, ark } from '../factory'
import { useSelectContext } from './use-select-context'

export interface SelectTriggerBaseProps extends PolymorphicProps {}
export interface SelectTriggerProps extends HTMLProps<'button'>, SelectTriggerBaseProps {}

export const SelectTrigger = forwardRef<HTMLButtonElement, SelectTriggerProps>((props, ref) => {
  const select = useSelectContext()
  const mergedProps = mergeProps(select.getTriggerProps(), props)

  return <ark.button {...mergedProps} ref={ref} />
})

SelectTrigger.displayName = 'SelectTrigger'
