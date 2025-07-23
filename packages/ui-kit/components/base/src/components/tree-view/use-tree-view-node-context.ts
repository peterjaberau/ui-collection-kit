import type { NodeState } from '@ui-kit/core-tree-view'
import { createContext } from '../../utils/create-context'

export interface UseTreeViewNodeContext extends NodeState {}

export const [TreeViewNodeProvider, useTreeViewNodeContext] = createContext<UseTreeViewNodeContext>({
  name: 'TreeViewNodeContext',
  hookName: 'useTreeViewNodeContext',
  providerName: '<TreeViewNodeProvider />',
})
