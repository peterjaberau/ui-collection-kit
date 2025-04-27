import { createAnatomy } from "@ui-collection-kit/anatomy"

export const anatomy = createAnatomy("numberInput").parts(
  "root",
  "label",
  "input",
  "control",
  "valueText",
  "incrementTrigger",
  "decrementTrigger",
  "scrubber",
)

export const parts = anatomy.build()
