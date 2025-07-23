import { createAnatomy } from "@ui-kit/core-anatomy"

export const anatomy = createAnatomy("tagsInput").parts(
  "root",
  "label",
  "control",
  "input",
  "clearTrigger",
  "item",
  "itemPreview",
  "itemInput",
  "itemText",
  "itemDeleteTrigger",
)

export const parts = anatomy.build()
