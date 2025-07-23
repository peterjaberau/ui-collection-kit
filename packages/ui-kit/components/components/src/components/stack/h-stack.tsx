"use client"

import { forwardRef } from "react"
import { Stack, type StackProps } from "./stack"

/**
 * A view that arranges its children in a horizontal line.
 *
 * @see Docs #/docs/components/stack
 */
export const HStack = forwardRef<HTMLDivElement, StackProps>(
  function HStack(props, ref) {
    return <Stack align="center" {...props} direction="row" ref={ref} />
  },
)
