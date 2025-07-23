import { createAnatomy } from "@ui-kit/core-anatomy"

export const anatomy = createAnatomy("toast").parts(
  "group",
  "root",
  "title",
  "description",
  "actionTrigger",
  "closeTrigger",
)

export const parts = anatomy.build()
