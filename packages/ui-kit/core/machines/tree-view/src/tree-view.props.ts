import { createProps } from "@ui-kit/core-types"
import { createSplitProps } from "@ui-kit/core-utils"
import type { NodeProps, TreeViewProps } from "./tree-view.types"

export const props = createProps<TreeViewProps>()([
  "ids",
  "collection",
  "dir",
  "expandedValue",
  "expandOnClick",
  "focusedValue",
  "getRootNode",
  "id",
  "onExpandedChange",
  "onFocusChange",
  "onSelectionChange",
  "selectedValue",
  "selectionMode",
  "typeahead",
  "defaultExpandedValue",
  "defaultSelectedValue",
])

export const splitProps = createSplitProps<Partial<TreeViewProps>>(props)

export const itemProps = createProps<NodeProps>()(["node", "indexPath"])

export const splitItemProps = createSplitProps<NodeProps>(itemProps)
