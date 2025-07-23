import type { NodeProps } from '@ui-kit/core-tree-view'
import { createContext } from '../../utils/create-context'

export interface UseTreeViewNodePropsContext extends NodeProps {}

export const [TreeViewNodePropsProvider, useTreeViewNodePropsContext] = createContext<UseTreeViewNodePropsContext>({
  name: 'TreeViewNodePropsContext',
  hookName: 'useTreeViewNodePropsContext',
  providerName: '<TreeViewItemProvider />',
})
