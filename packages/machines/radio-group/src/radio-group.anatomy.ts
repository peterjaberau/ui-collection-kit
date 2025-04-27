import { createAnatomy } from "@ui-collection-kit/anatomy"

export const anatomy = createAnatomy("radio-group").parts(
  "root",
  "label",
  "item",
  "itemText",
  "itemControl",
  "indicator",
)

export const parts = anatomy.build()
