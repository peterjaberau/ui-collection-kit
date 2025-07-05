"use client"
import { FloatingPanelResize } from "#components/ui-collection-kit"
import { useEffect, useState } from "react"
import { Container, Stack, HStack, Box, Flex, Badge } from "@chakra-ui/react"

export default function Page() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <>
      <FloatingPanelResize />
    </>
  )
}
