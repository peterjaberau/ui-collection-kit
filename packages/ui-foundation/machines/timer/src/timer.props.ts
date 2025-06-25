import { createProps } from "@ui-collection-kit/types"
import { createSplitProps } from "@ui-collection-kit/utils"
import type { TimerProps } from "./timer.types"

export const props = createProps<TimerProps>()([
  "autoStart",
  "countdown",
  "getRootNode",
  "id",
  "ids",
  "interval",
  "onComplete",
  "onTick",
  "startMs",
  "targetMs",
])

export const splitProps = createSplitProps<Partial<TimerProps>>(props)
