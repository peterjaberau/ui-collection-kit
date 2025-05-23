import type { TransparencyGridProps } from '@ui-collection-kit/color-picker'
import { mergeProps } from '@ui-collection-kit/react'
import { forwardRef } from 'react'
import { createSplitProps } from '../../utils/create-split-props'
import { type HTMLProps, type PolymorphicProps, ark } from '../factory'
import { useColorPickerContext } from './use-color-picker-context'

export interface ColorPickerTransparencyGridBaseProps extends TransparencyGridProps, PolymorphicProps {}
export interface ColorPickerTransparencyGridProps extends HTMLProps<'div'>, ColorPickerTransparencyGridBaseProps {}

export const ColorPickerTransparencyGrid = forwardRef<HTMLDivElement, ColorPickerTransparencyGridProps>(
  (props, ref) => {
    const [gridProps, localProps] = createSplitProps<TransparencyGridProps>()(props, ['size'])
    const colorPicker = useColorPickerContext()
    const mergedProps = mergeProps(colorPicker.getTransparencyGridProps(gridProps), localProps)

    return <ark.div {...mergedProps} ref={ref} />
  },
)

ColorPickerTransparencyGrid.displayName = 'ColorPickerTransparencyGrid'
