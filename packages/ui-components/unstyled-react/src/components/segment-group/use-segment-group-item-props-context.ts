import type { ItemProps } from '@ui-collection-kit/radio-group'
import { createContext } from '../../utils/create-context'

export const [SegmentGroupItemPropsProvider, useSegmentGroupItemPropsContext] = createContext<ItemProps>({
  name: 'SegmentGroupItemPropsContext',
  hookName: 'useSegmentGroupItemPropsContext',
  providerName: '<SegmentGroupItemPropsProvider />',
})
