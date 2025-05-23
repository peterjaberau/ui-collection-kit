import { mergeProps } from '@ui-collection-kit/react'
import { forwardRef } from 'react'
import { type HTMLProps, type PolymorphicProps, ark } from '../factory'
import { useColorPickerContext } from './use-color-picker-context'

export interface ColorPickerLabelBaseProps extends PolymorphicProps {}
export interface ColorPickerLabelProps extends HTMLProps<'label'>, ColorPickerLabelBaseProps {}

export const ColorPickerLabel = forwardRef<HTMLLabelElement, ColorPickerLabelProps>((props, ref) => {
  const colorPicker = useColorPickerContext()
  const mergedProps = mergeProps(colorPicker.getLabelProps(), props)

  return <ark.label {...mergedProps} ref={ref} />
})

ColorPickerLabel.displayName = 'ColorPickerLabel'
