import { createProps } from "@ui-collection-kit/types"
import { createSplitProps } from "@ui-collection-kit/utils"
import type { EllipsisProps, ItemProps, PaginationProps } from "./pagination.types"

export const props = createProps<PaginationProps>()([
  "count",
  "dir",
  "getRootNode",
  "id",
  "ids",
  "onPageChange",
  "onPageSizeChange",
  "page",
  "defaultPage",
  "pageSize",
  "defaultPageSize",
  "siblingCount",
  "translations",
  "type",
])
export const splitProps = createSplitProps<Partial<PaginationProps>>(props)

export const itemProps = createProps<ItemProps>()(["value", "type"])
export const splitItemProps = createSplitProps<ItemProps>(itemProps)

export const ellipsisProps = createProps<EllipsisProps>()(["index"])
export const splitEllipsisProps = createSplitProps<EllipsisProps>(ellipsisProps)
