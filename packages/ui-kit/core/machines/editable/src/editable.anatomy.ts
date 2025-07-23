import { createAnatomy } from "@ui-kit/core-anatomy"

export const anatomy = createAnatomy("editable").parts(
  "root",
  "area",
  "label",
  "preview",
  "input",
  "editTrigger",
  "submitTrigger",
  "cancelTrigger",
  "control",
)
export const parts = anatomy.build()
