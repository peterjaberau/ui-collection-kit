"use client"

import { type HTMLUIKitProps, uikit } from "../../styled-system"

export interface StrongProps extends HTMLUIKitProps<"em"> {}

export const Strong = uikit("strong", {
  base: { fontWeight: "semibold" },
})
