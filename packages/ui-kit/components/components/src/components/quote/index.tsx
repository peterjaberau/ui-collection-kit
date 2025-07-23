"use client"

import { type HTMLUIKitProps, uikit } from "../../styled-system"

export interface QuoteProps extends HTMLUIKitProps<"q"> {}

export const Quote = uikit("q", {
  base: {
    fontWeight: "bold",
    lineHeight: "1.2",
  },
})
