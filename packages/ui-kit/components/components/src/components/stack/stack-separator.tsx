"use client"

import { type HTMLUIKitProps, uikit } from "../../styled-system"

export interface StackSeparatorProps extends HTMLUIKitProps<"div"> {}

export const StackSeparator = uikit("div", {
  base: {
    borderWidth: 0,
    alignSelf: "stretch",
    borderColor: "inherit",
    width: "auto",
    height: "auto",
  },
})

StackSeparator.displayName = "StackSeparator"
