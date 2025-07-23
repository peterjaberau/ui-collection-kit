"use client"

import { type HTMLUIKitProps, uikit } from "../../styled-system"

export interface EmProps extends HTMLUIKitProps<"em"> {}

export const Em = uikit("em", {
  base: {
    fontStyle: "italic",
  },
})
