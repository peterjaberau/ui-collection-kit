import { mergeProps } from '@ui-collection-kit/react'
import { forwardRef } from 'react'
import { type HTMLProps, type PolymorphicProps, ark } from '../factory'
import { useToastContext } from './use-toast-context'

export interface ToastCloseTriggerBaseProps extends PolymorphicProps {}
export interface ToastCloseTriggerProps extends HTMLProps<'button'>, ToastCloseTriggerBaseProps {}

export const ToastCloseTrigger = forwardRef<HTMLButtonElement, ToastCloseTriggerProps>((props, ref) => {
  const toast = useToastContext()
  const mergedProps = mergeProps(toast.getCloseTriggerProps(), props)

  return <ark.button {...mergedProps} ref={ref} />
})

ToastCloseTrigger.displayName = 'ToastCloseTrigger'
