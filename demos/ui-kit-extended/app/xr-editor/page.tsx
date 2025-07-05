"use client"
import { XREditorApp } from "#packages/xr-editor/App"
import { useEffect, useState } from "react"
import { Container, Stack, HStack, Box, Flex, Badge } from "@chakra-ui/react"

export default function Page() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <>
      <XREditorApp />
    </>
  )
}
