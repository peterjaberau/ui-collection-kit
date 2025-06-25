import { createAnatomy } from "@ui-collection-kit/anatomy"

export const anatomy = createAnatomy("listbox").parts(
  "label",
  "input",
  "item",
  "itemText",
  "itemIndicator",
  "itemGroup",
  "itemGroupLabel",
  "content",
  "root",
  "valueText",
)
export const parts = anatomy.build()
