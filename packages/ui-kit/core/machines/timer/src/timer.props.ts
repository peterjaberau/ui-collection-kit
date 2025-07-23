import { createProps } from "@ui-kit/core-types"
import { createSplitProps } from "@ui-kit/core-utils"
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
