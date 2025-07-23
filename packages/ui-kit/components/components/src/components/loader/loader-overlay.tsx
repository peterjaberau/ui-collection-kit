import { type HTMLUIKitProps, uikit } from "../../styled-system"

export interface LoaderOverlayProps extends HTMLUIKitProps<"div"> {}

export const LoaderOverlay = uikit("div", {
  base: {
    pos: "absolute",
    inset: "0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxSize: "full",
    gap: "2",
  },
})
