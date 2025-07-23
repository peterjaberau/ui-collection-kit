"use client"

import { forwardRef } from "react"
import {
  type HTMLUIKitProps,
  type SystemStyleObject,
  uikit,
} from "../../styled-system"
import { cx } from "../../utils"

interface ImageOptions {
  /**
   * How the image to fit within its bounds.
   * It maps to css `object-fit` property.
   * @type SystemStyleObject["objectFit"]
   */
  fit?: SystemStyleObject["objectFit"] | undefined
  /**
   * How to align the image within its bounds.
   * It maps to css `object-position` property.
   * @type SystemStyleObject["objectPosition"]
   */
  align?: SystemStyleObject["objectPosition"] | undefined
}

export interface ImageProps extends HTMLUIKitProps<"img", ImageOptions> {}

/**
 * React component that renders an image with support
 * for fallbacks
 *
 * @see Docs #/docs/components/image
 */
export const Image = forwardRef<HTMLImageElement, ImageProps>(
  function Image(props, ref) {
    const { align, fit = "cover", ...rest } = props
    return (
      <uikit.img
        ref={ref}
        objectFit={fit}
        objectPosition={align}
        className={cx("uikit-image", props.className)}
        {...rest}
      />
    )
  },
)
