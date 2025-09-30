'use client'
import { ForwardedRef, forwardRef } from "react"
import { chakra } from "@chakra-ui/react"
import { ModalFooterProps } from "./interface"

import { stopDragAndDrop } from "../utils/stopDragAndDrop"

const ModalFooter = (props: ModalFooterProps, ref: ForwardedRef<HTMLDivElement>) => {
  const { children, hasFooterChildren, canMove } = props

  return (
    <chakra.div
      css={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        position: "relative",
        cursor: "auto",
        padding: "0 16px",
        height: hasFooterChildren ? "auto" : "16px",
        flex: "none",
      }}
      onMouseDown={stopDragAndDrop}
      ref={ref}
    >
      {children}
    </chakra.div>
  )
}

export default forwardRef<HTMLDivElement, ModalFooterProps>(ModalFooter)
