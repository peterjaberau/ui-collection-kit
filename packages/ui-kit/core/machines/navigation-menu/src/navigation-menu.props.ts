import { createProps } from "@ui-kit/core-types"
import { createSplitProps } from "@ui-kit/core-utils"
import type { NavigationMenuProps } from "./navigation-menu.types"

export const props = createProps<NavigationMenuProps>()([
  "id",
  "dir",
  "getRootNode",
  "value",
  "defaultValue",
  "onValueChange",
  "openDelay",
  "closeDelay",
  "orientation",
  "ids",
  "disableClickTrigger",
  "disableHoverTrigger",
])

export const splitProps = createSplitProps<Partial<NavigationMenuProps>>(props)
