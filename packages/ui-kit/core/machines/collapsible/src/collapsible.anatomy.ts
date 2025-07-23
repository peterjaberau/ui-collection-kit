import { createAnatomy } from "@ui-kit/core-anatomy"

export const anatomy = createAnatomy("collapsible").parts("root", "trigger", "content", "indicator")

export const parts = anatomy.build()
