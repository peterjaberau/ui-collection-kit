import { createAnatomy } from "@ui-collection-kit/anatomy"

export const anatomy = createAnatomy("combobox").parts(
  "root",
  "clearTrigger",
  "content",
  "control",
  "input",
  "item",
  "itemGroup",
  "itemGroupLabel",
  "itemIndicator",
  "itemText",
  "label",
  "list",
  "positioner",
  "trigger",
)
export const parts = anatomy.build()
