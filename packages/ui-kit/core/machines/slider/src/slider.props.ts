import { createProps } from "@ui-kit/core-types"
import { createSplitProps } from "@ui-kit/core-utils"
import type { ThumbProps, SliderProps } from "./slider.types"

export const props = createProps<SliderProps>()([
  "aria-label",
  "aria-labelledby",
  "dir",
  "disabled",
  "form",
  "getAriaValueText",
  "getRootNode",
  "id",
  "ids",
  "invalid",
  "max",
  "min",
  "minStepsBetweenThumbs",
  "name",
  "onFocusChange",
  "onValueChange",
  "onValueChangeEnd",
  "orientation",
  "origin",
  "readOnly",
  "step",
  "thumbAlignment",
  "thumbAlignment",
  "thumbSize",
  "value",
  "defaultValue",
])

export const splitProps = createSplitProps<Partial<SliderProps>>(props)

export const thumbProps = createProps<ThumbProps>()(["index", "name"])
export const splitThumbProps = createSplitProps<ThumbProps>(thumbProps)
