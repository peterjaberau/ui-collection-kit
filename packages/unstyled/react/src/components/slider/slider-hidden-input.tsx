import { mergeProps } from '@ui-collection-kit/react'
import { forwardRef } from 'react'
import { type HTMLProps, type PolymorphicProps, ark } from '../factory'
import { useSliderContext } from './use-slider-context'
import { useSliderThumbPropsContext } from './use-slider-thumb-props-context'

export interface SliderHiddenInputBaseProps extends PolymorphicProps {}
export interface SliderHiddenInputProps extends HTMLProps<'input'>, SliderHiddenInputBaseProps {}

export const SliderHiddenInput = forwardRef<HTMLInputElement, SliderHiddenInputProps>((props, ref) => {
  const slider = useSliderContext()
  const thumbProps = useSliderThumbPropsContext()
  const mergedProps = mergeProps(slider.getHiddenInputProps(thumbProps), props)

  return <ark.input {...mergedProps} ref={ref} />
})

SliderHiddenInput.displayName = 'SliderHiddenInput'
