"use client"
import { AppRoot } from "#packages/app-shell/App"
import { useEffect, useState } from "react"
import { Container, Stack, HStack, Box, Flex, Badge } from "@chakra-ui/react"

export default function Page() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <>
      <AppRoot />
    </>
  )
}
