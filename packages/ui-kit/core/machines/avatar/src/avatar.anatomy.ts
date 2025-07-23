import { createAnatomy } from "@ui-kit/core-anatomy"

export const anatomy = createAnatomy("avatar").parts("root", "image", "fallback")

export const parts = anatomy.build()
