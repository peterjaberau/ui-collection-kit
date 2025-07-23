import { createAnatomy } from "@ui-kit/core-anatomy"

export const anatomy = createAnatomy("tabs").parts("root", "list", "trigger", "content", "indicator")
export const parts = anatomy.build()
