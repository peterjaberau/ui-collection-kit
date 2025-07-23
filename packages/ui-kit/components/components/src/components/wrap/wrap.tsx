"use client"

import type { Assign } from "@ui-kit/base"
import { forwardRef } from "react"
import type { HTMLUIKitProps, SystemStyleObject } from "../../styled-system"
import { uikit, defineStyle } from "../../styled-system"
import { cx } from "../../utils"

export interface WrapProps
  extends Assign<
    HTMLUIKitProps<"div">,
    {
      justify?: SystemStyleObject["justifyContent"] | undefined
      align?: SystemStyleObject["alignItems"] | undefined
      direction?: SystemStyleObject["flexDirection"] | undefined
    }
  > {}

export const Wrap = forwardRef<HTMLDivElement, WrapProps>(
  function Wrap(props, ref) {
    const { gap = "0.5rem", justify, direction, align, ...rest } = props

    return (
      <uikit.div
        ref={ref}
        display="flex"
        flexWrap="wrap"
        justifyContent={justify}
        alignItems={align}
        flexDirection={direction}
        gap={gap}
        {...rest}
        className={cx("uikit-wrap", props.className)}
      />
    )
  },
)

Wrap.displayName = "Wrap"

/////////////////////////////////////////////////////////////////////////////////

export interface WrapItemProps extends HTMLUIKitProps<"div"> {}

const itemStyle = defineStyle({
  display: "flex",
  alignItems: "flex-start",
})

export const WrapItem = forwardRef<HTMLDivElement, WrapItemProps>(
  function WrapItem(props, ref) {
    return (
      <uikit.div
        ref={ref}
        css={[itemStyle, props.css]}
        {...props}
        className={cx("uikit-wrap__listitem", props.className)}
      />
    )
  },
)
