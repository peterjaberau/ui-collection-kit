import { createProps } from "@ui-collection-kit/types"
import { createSplitProps } from "@ui-collection-kit/utils"
import type { ContentProps, TriggerProps, TabsProps } from "./tabs.types"

export const props = createProps<TabsProps>()([
  "activationMode",
  "composite",
  "deselectable",
  "dir",
  "getRootNode",
  "id",
  "ids",
  "loopFocus",
  "navigate",
  "onFocusChange",
  "onValueChange",
  "orientation",
  "translations",
  "value",
  "defaultValue",
])

export const splitProps = createSplitProps<Partial<TabsProps>>(props)

export const triggerProps = createProps<TriggerProps>()(["disabled", "value"])
export const splitTriggerProps = createSplitProps<TriggerProps>(triggerProps)

export const contentProps = createProps<ContentProps>()(["value"])
export const splitContentProps = createSplitProps<ContentProps>(contentProps)
