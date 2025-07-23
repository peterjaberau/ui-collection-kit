"use client"

import { type HTMLUIKitProps, uikit } from "../../styled-system"

export interface BoxProps extends HTMLUIKitProps<"div"> {}

/**
 * Box is the most abstract component on top of which other uikit
 * components are built. It renders a `div` element by default.
 *
 * @see Docs #/docs/components/box
 */
export const Box = uikit("div")

Box.displayName = "Box"
