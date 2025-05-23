import { createAnatomy } from "@ui-collection-kit/anatomy"

export const anatomy = createAnatomy("carousel").parts(
  "root",
  "itemGroup",
  "item",
  "control",
  "nextTrigger",
  "prevTrigger",
  "indicatorGroup",
  "indicator",
  "autoplayTrigger",
)

export const parts = anatomy.build()
