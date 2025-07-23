import type { InputProps } from '@ui-kit/core-date-picker'
import { mergeProps } from '@ui-kit/core-react'
import { forwardRef } from 'react'
import { createSplitProps } from '../../utils/create-split-props'
import { type HTMLProps, type PolymorphicProps, ark } from '../factory'
import { useDatePickerContext } from './use-date-picker-context'

export interface DatePickerInputBaseProps extends InputProps, PolymorphicProps {}
export interface DatePickerInputProps extends HTMLProps<'input'>, DatePickerInputBaseProps {}

export const DatePickerInput = forwardRef<HTMLInputElement, DatePickerInputProps>((props, ref) => {
  const [inputProps, localProps] = createSplitProps<InputProps>()(props, ['index', 'fixOnBlur'])
  const datePicker = useDatePickerContext()
  const mergedProps = mergeProps(datePicker.getInputProps(inputProps), localProps)

  return <ark.input {...mergedProps} ref={ref} />
})

DatePickerInput.displayName = 'DatePickerInput'
