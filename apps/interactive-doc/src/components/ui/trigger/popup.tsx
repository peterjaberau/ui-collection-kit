import { forwardRef, HTMLAttributes } from "react"
import { createPortal } from "react-dom"
import { css, SerializedStyles } from "@emotion/react"
import { deleteCssProps } from "#components/ui/theme/style"
import { chakra } from "@chakra-ui/react"

function applyPopupContainer(
  top: string,
  left: string,
  zIndex: number | "auto",
  isInViewport?: boolean,
): SerializedStyles {
  return css`
    display: inline-flex;
    position: absolute;
    left: ${left};
    top: ${top};
    z-index: ${zIndex};
    pointer-events: none;
    opacity: ${isInViewport ? "1" : "0"};
  `
}

export interface PopupProps extends HTMLAttributes<HTMLDivElement> {
  [key: string]: any
  top: string
  left: string
  zIndex: number | "auto"
  isInViewport: boolean
}

export const Popup = forwardRef<HTMLDivElement, PopupProps>((props, ref) => {
  const { top, left, zIndex, children, isInViewport, ...otherProps } = props

  return (
    <>
      {createPortal(
        <chakra.div ref={ref} css={applyPopupContainer(top, left, zIndex, isInViewport)} {...deleteCssProps(otherProps)}>
          {children}
        </chakra.div>,
        document.body,
      )}
    </>
  )
})

Popup.displayName = "Popup"
