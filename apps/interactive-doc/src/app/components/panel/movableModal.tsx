"use client"
import { FC } from "react"
import { Portal } from "@chakra-ui/react"
import { Rnd } from "react-rnd"
import { useWindowSize } from "react-use"
import { ModalPanel } from "./index"
import { MovableModalProps } from "./interface"

export const MovableModal: FC<MovableModalProps> = (props) => {
  const {
    bodyContent,
    title,
    footerContent,
    onClose,
    defaultPosition,
    docLink,
  } = props
  const { width, height } = useWindowSize()

  return (
    <Portal>
      <Rnd
        default={
          defaultPosition ?? {
            x: width / 2 - 200,
            y: height - 300 - 263,
            width: 400,
            height: 263,
          }
        }
        style={{
          zIndex: 10,
          pointerEvents: 'auto',
          opacity: 1,
        }}
        minWidth={400}
        minHeight={263}
        bounds="window"
      >
        <ModalPanel
          title={title}
          bodyContent={bodyContent}
          onClose={onClose}
          footerContent={footerContent}
          canMove
          docLink={docLink}
        />
      </Rnd>
    </Portal>
  )


}

MovableModal.displayName = "MovableModal"
