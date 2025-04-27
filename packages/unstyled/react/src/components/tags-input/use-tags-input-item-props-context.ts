import type { ItemProps } from '@ui-collection-kit/tags-input'
import { createContext } from '../../utils/create-context'

export const [TagsInputItemPropsProvider, useTagsInputItemPropsContext] = createContext<ItemProps>({
  name: 'TagsInputItemPropsContext',
  hookName: 'useTagsInputItemPropsContext',
  providerName: '<TagsInputItemPropsProvider />',
})
