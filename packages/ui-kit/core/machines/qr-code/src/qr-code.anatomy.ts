import { createAnatomy } from "@ui-kit/core-anatomy"

export const anatomy = createAnatomy("qr-code").parts("root", "frame", "pattern", "overlay", "downloadTrigger")

export const parts = anatomy.build()
