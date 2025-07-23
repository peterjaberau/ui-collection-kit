"use client"

import { type HTMLUIKitProps, uikit } from "../../styled-system"

export interface SpacerProps extends HTMLUIKitProps<"div"> {}

/**
 * A flexible flex spacer that expands along the major axis of its containing flex layout.
 * It renders a `div` by default, and takes up any available space.
 *
 * @see Docs #/flex#using-the-spacer
 */
export const Spacer = uikit("div", {
  base: {
    flex: 1,
    justifySelf: "stretch",
    alignSelf: "stretch",
  },
})

Spacer.displayName = "Spacer"
