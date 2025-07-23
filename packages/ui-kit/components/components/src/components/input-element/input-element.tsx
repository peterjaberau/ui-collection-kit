"use client"

import { type HTMLUIKitProps, uikit } from "../../styled-system"

export interface InputElementProps extends HTMLUIKitProps<"div"> {}

export const InputElement = uikit("div", {
  base: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    zIndex: 2,
    color: "fg.muted",
    height: "full",
    fontSize: "sm",
    px: "3",
  },
  variants: {
    placement: {
      start: {
        insetInlineStart: "0",
      },
      end: {
        insetInlineEnd: "0",
      },
    },
  },
})
