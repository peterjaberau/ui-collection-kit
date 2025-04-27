import { createAnatomy } from "@ui-collection-kit/anatomy"

export const anatomy = createAnatomy("toast").parts(
  "group",
  "root",
  "title",
  "description",
  "actionTrigger",
  "closeTrigger",
)

export const parts = anatomy.build()
