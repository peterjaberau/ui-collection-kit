"use client"

import { type HTMLUIKitProps, uikit } from "../../styled-system"

export interface CenterProps extends HTMLUIKitProps<"div"> {}

/**
 * React component used to horizontally and vertically center its child.
 * It uses the popular `display: flex` centering technique.
 *
 * @see Docs #/center
 */
export const Center = uikit("div", {
  base: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  variants: {
    inline: {
      true: {
        display: "inline-flex",
      },
    },
  },
})

Center.displayName = "Center"
