"use client"
import Debugger from "./index"
import { LuBug } from "react-icons/lu"
import { useState } from "react"
import { IconButton } from "@chakra-ui/react"

export const DebuggerTrigger = () => {
  const [isOpenDebuggerPanel, setIsOpenDebuggerPanel] = useState(false)

  return (
    <>
      <IconButton
        variant="outline"
        css={{
          position: "fixed",
          top: "50%",
          right: 0,
          borderTopRightRadius: 0,
          borderBottomRightRadius: 0,
          boxShadow: "sm",
        }}
        onClick={() => setIsOpenDebuggerPanel(true)}
      >
        <LuBug />
      </IconButton>

      {isOpenDebuggerPanel && <Debugger onClose={() => setIsOpenDebuggerPanel(false)} />}
    </>
  )
}
