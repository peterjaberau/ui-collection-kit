import { createAnatomy } from "@ui-collection-kit/anatomy"

export const anatomy = createAnatomy("tour").parts(
  "content",
  "actionTrigger",
  "closeTrigger",
  "progressText",
  "title",
  "description",
  "positioner",
  "arrow",
  "arrowTip",
  "backdrop",
  "spotlight",
)

export const parts = anatomy.build()
