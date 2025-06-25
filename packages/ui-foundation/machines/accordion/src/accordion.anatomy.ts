import { createAnatomy } from "@ui-collection-kit/anatomy"

export const anatomy = createAnatomy("accordion").parts("root", "item", "itemTrigger", "itemContent", "itemIndicator")
export const parts = anatomy.build()
