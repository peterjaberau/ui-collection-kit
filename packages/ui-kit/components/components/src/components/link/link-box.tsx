"use client"

import { forwardRef } from "react"
import { type HTMLUIKitProps, uikit } from "../../styled-system"
import { cx } from "../../utils"

export interface LinkOverlayProps extends HTMLUIKitProps<"a"> {}

export const LinkOverlay = forwardRef<HTMLAnchorElement, LinkOverlayProps>(
  function LinkOverlay(props, ref) {
    const { rel, className, ...rest } = props
    return (
      <uikit.a
        {...rest}
        ref={ref}
        className={cx("uikit-linkbox__overlay", className)}
        css={[
          {
            position: "static",
            "&::before": {
              content: "''",
              cursor: "inherit",
              display: "block",
              position: "absolute",
              top: 0,
              left: 0,
              zIndex: 0,
              width: "100%",
              height: "100%",
            },
          },
          props.css,
        ]}
      />
    )
  },
)

export interface LinkBoxProps extends HTMLUIKitProps<"div"> {}

/**
 * `LinkBox` is used to wrap content areas within a link while ensuring semantic html
 *
 * @see Docs #/docs/navigation/link-overlay
 * @see Resources https://www.sarasoueidan.com/blog/nested-links
 */
export const LinkBox = forwardRef<HTMLDivElement, LinkBoxProps>(
  function LinkBox(props, ref) {
    const { className, ...rest } = props

    return (
      <uikit.div
        ref={ref}
        position="relative"
        {...rest}
        className={cx("uikit-linkbox", className)}
        css={[
          {
            /* Elevate the links and abbreviations up */
            "& a[href]:not(.uikit-linkbox__overlay), abbr[title]": {
              position: "relative",
              zIndex: 1,
            },
          },
          props.css,
        ]}
      />
    )
  },
)
