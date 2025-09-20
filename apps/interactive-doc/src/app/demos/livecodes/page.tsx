"use client"
// @ts-ignore
import LiveCodes from "livecodes/react"
import { Container, Flex } from "@chakra-ui/react"

const options = {
  config: {
    view: "editor",
    theme: "light",
    // mode: "codeblock",
    editor: "codemirror",
    lineNumbers: true,
    defaultStyles: false

  },
};

export default function Page() {
  return (
    <Flex css={{ height: "100vh", width: "full", bg: "red" }}>
      <LiveCodes
        style={{
          height: "100% !important",
        }}
        {...options}
      />
    </Flex>
  )
}
