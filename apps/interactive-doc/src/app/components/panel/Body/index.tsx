'use client'
import { FC } from "react"
import { chakra, Stack } from "@chakra-ui/react"
import { ModalBodyProps } from "./interface"
import { stopDragAndDrop } from "../utils/stopDragAndDrop"
import { ScrollArea } from "@chakra-ui/react"

export const ModalBody: FC<ModalBodyProps> = (props) => {
  const { children, footerHeight } = props
  return (
    <chakra.div
      id='movable-body'
      css={{
        width: "100%",
        height: `calc(100% - 48px - ${`${footerHeight}px`})`,
        cursor: "auto",
        padding: "0",
        // overflowY: "auto",
      }}
      onMouseDown={stopDragAndDrop}
    >
      <ScrollArea.Root  size={'sm'}>
        <ScrollArea.Viewport>
          <ScrollArea.Content p={4} >
            {children}
          </ScrollArea.Content>
        </ScrollArea.Viewport>
        <ScrollArea.Scrollbar>
          <ScrollArea.Thumb />
        </ScrollArea.Scrollbar>
        <ScrollArea.Corner />
      </ScrollArea.Root>
    </chakra.div>
  )
}
