'use client'
import { FC } from "react"
import { chakra } from "@chakra-ui/react"
import { ModalBodyProps } from "./interface"
import { stopDragAndDrop } from "../utils/stopDragAndDrop"

export const ModalBody: FC<ModalBodyProps> = (props) => {
  const { children, footerHeight } = props
  return (
    <chakra.div
      css={{
        width: "100%",
        height: `calc(100% - 48px - ${`${footerHeight}px`})`,
        cursor: "auto",
        padding: "0 16px",
        overflowY: "auto",
      }}
      onMouseDown={stopDragAndDrop}
    >
      {children}
    </chakra.div>
  )
}
