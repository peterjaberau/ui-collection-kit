'use client'
import { FC } from "react"
import { Stack } from "@chakra-ui/react"
import useMeasure from "react-use-measure"
import { ModalBody } from "./Body"
import ModalFooter from "./Footer"
import { ModalHeader } from "./Header"
import { ModalProps } from "./interface"

export const ModalPanel: FC<ModalProps> = (props) => {
  const { bodyContent, title, footerContent, canMove, w, h, onClose, docLink } =
    props

  const hasFooterChildren =
    (Array.isArray(footerContent) && footerContent.length > 0) ||
    footerContent != null

  const [ref, rect] = useMeasure()

  return (
    <Stack
      gap={0}
      css={{
      width: w != undefined ? `${w}px` : "100%",
      height: h != undefined ? `${h}px` : "100%",
      backgroundColor: "white",
      boxShadow: "0px 4px 8px #20100010,0px 0px 1px #19140035",
      borderRadius: "0.5rem",
      border: "1px solid #e9e8e6",
    }}>
      <ModalHeader
        title={title}
        onClose={onClose}
        canMove={canMove}
        docLink={docLink}
      />
      <ModalBody footerHeight={rect.height}>{bodyContent}</ModalBody>
      <ModalFooter
        hasFooterChildren={hasFooterChildren}
        canMove={canMove}
        ref={ref}
      >
        {footerContent}
      </ModalFooter>
    </Stack>
  )
}

ModalPanel.displayName = "Modal"
