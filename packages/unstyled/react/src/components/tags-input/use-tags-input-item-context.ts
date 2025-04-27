import type { ItemState } from '@ui-collection-kit/tags-input'
import { createContext } from '../../utils/create-context'

export interface UseTagsInputItemContext extends ItemState {}

export const [TagsInputItemProvider, useTagsInputItemContext] = createContext<UseTagsInputItemContext>({
  name: 'TagsInputItemContext',
  hookName: 'useTagsInputItemContext',
  providerName: '<TagsInputItemProvider />',
})
