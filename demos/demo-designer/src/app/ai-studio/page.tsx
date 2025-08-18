"use client"
import { useEffect, useState } from "react"
import { Box, Stack } from "@chakra-ui/react"
import { Index } from "#components/ui/ai-studio"


export default function Page() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <>
      {mounted && (
        <>
          <Index />
        </>
      )}
    </>
  )
}
