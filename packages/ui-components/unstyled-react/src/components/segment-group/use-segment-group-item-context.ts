import type { ItemState } from '@ui-collection-kit/radio-group'
import { createContext } from '../../utils/create-context'

export interface UseSegmentGroupItemContext extends ItemState {}

export const [SegmentGroupItemProvider, useSegmentGroupItemContext] = createContext<UseSegmentGroupItemContext>({
  name: 'SegmentGroupItemContext',
  hookName: 'useSegmentGroupItemContext',
  providerName: '<SegmentGroupItemProvider />',
})
