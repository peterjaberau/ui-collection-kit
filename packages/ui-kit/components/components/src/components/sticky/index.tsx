"use client"

import { type HTMLUIKitProps, uikit } from "../../styled-system"

export interface StickyProps extends HTMLUIKitProps<"div"> {}

export const Sticky = uikit("div", {
  base: {
    position: "sticky",
    top: 0,
  },
})

Sticky.displayName = "Sticky"
