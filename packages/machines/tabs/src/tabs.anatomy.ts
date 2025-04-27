import { createAnatomy } from "@ui-collection-kit/anatomy"

export const anatomy = createAnatomy("tabs").parts("root", "list", "trigger", "content", "indicator")
export const parts = anatomy.build()
