import type { ItemProps } from '@ui-kit/core-tags-input'
import { createContext } from '../../utils/create-context'

export const [TagsInputItemPropsProvider, useTagsInputItemPropsContext] = createContext<ItemProps>({
  name: 'TagsInputItemPropsContext',
  hookName: 'useTagsInputItemPropsContext',
  providerName: '<TagsInputItemPropsProvider />',
})
