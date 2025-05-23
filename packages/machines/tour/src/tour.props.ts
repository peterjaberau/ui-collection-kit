import { createProps } from "@ui-collection-kit/types"
import { createSplitProps } from "@ui-collection-kit/utils"
import type { TourProps } from "./tour.types"

export const props = createProps<TourProps>()([
  "closeOnEscape",
  "closeOnInteractOutside",
  "dir",
  "getRootNode",
  "id",
  "ids",
  "keyboardNavigation",
  "onFocusOutside",
  "onInteractOutside",
  "onPointerDownOutside",
  "onStatusChange",
  "onStepChange",
  "onStepsChange",
  "preventInteraction",
  "spotlightOffset",
  "spotlightRadius",
  "stepId",
  "steps",
  "translations",
])

export const splitProps = createSplitProps<Partial<TourProps>>(props)
