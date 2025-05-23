import { mergeProps } from '@ui-collection-kit/react'
import { forwardRef } from 'react'
import { createSplitProps } from '../../utils/create-split-props'
import { type HTMLProps, type PolymorphicProps, ark } from '../factory'
import { PresenceProvider, type UsePresenceProps, splitPresenceProps, usePresence } from '../presence'
import type { UseColorPickerReturn } from './use-color-picker'
import { ColorPickerProvider } from './use-color-picker-context'

interface RootProviderProps {
  value: UseColorPickerReturn
}

export interface ColorPickerRootProviderBaseProps extends RootProviderProps, UsePresenceProps, PolymorphicProps {}
export interface ColorPickerRootProviderProps extends HTMLProps<'div'>, ColorPickerRootProviderBaseProps {}

export const ColorPickerRootProvider = forwardRef<HTMLDivElement, ColorPickerRootProviderProps>((props, ref) => {
  const [presenceProps, colorPickerProps] = splitPresenceProps(props)
  const [{ value: colorPicker }, localProps] = createSplitProps<RootProviderProps>()(colorPickerProps, ['value'])
  const presence = usePresence(mergeProps({ present: colorPicker.open }, presenceProps))
  const mergedProps = mergeProps(colorPicker.getRootProps(), localProps)

  return (
    <ColorPickerProvider value={colorPicker}>
      <PresenceProvider value={presence}>
        <ark.div {...mergedProps} ref={ref} />
      </PresenceProvider>
    </ColorPickerProvider>
  )
})

ColorPickerRootProvider.displayName = 'ColorPickerRootProvider'
