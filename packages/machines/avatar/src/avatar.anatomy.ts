import { createAnatomy } from "@ui-collection-kit/anatomy"

export const anatomy = createAnatomy("avatar").parts("root", "image", "fallback")

export const parts = anatomy.build()
