import type { TriggerProps } from '@ui-kit/core-combobox'
import { mergeProps } from '@ui-kit/core-react'
import { forwardRef } from 'react'
import { type HTMLProps, type PolymorphicProps, ark } from '../factory'
import { useComboboxContext } from './use-combobox-context'

export interface ComboboxTriggerBaseProps extends TriggerProps, PolymorphicProps {}
export interface ComboboxTriggerProps extends HTMLProps<'button'>, ComboboxTriggerBaseProps {}

export const ComboboxTrigger = forwardRef<HTMLButtonElement, ComboboxTriggerProps>((props, ref) => {
  const combobox = useComboboxContext()
  const mergedProps = mergeProps(combobox.getTriggerProps(), props)

  return <ark.button {...mergedProps} ref={ref} />
})

ComboboxTrigger.displayName = 'ComboboxTrigger'
