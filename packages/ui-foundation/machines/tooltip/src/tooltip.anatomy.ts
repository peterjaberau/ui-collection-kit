import { createAnatomy } from "@ui-collection-kit/anatomy"

export const anatomy = createAnatomy("tooltip").parts("trigger", "arrow", "arrowTip", "positioner", "content")
export const parts = anatomy.build()
