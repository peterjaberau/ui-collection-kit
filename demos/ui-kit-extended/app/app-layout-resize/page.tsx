"use client"
import { AtlasKitResizeWithAppLayout } from "#components/atlaskit-resize"
import { useEffect, useState } from "react"
import { Container, Stack, HStack, Box, Flex, Badge } from "@chakra-ui/react"

export default function Page() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <>
      <AtlasKitResizeWithAppLayout />
    </>
  )
}
