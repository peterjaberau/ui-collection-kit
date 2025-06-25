import type { ChannelProps } from '@ui-collection-kit/color-picker'
import { createContext } from '../../utils/create-context'

export interface UseColorPickerChannelPropsContext extends ChannelProps {}

export const [ColorPickerChannelPropsProvider, useColorPickerChannelPropsContext] =
  createContext<UseColorPickerChannelPropsContext>({
    name: 'ColorPickerChannelSliderContext',
    hookName: 'useColorPickerChannelSliderContext',
    providerName: '<ColorPickerChannelSliderProvider />',
  })
