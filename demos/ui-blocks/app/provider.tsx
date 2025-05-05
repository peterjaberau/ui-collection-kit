"use client"

import { Button, ChakraProvider, Flex } from "@chakra-ui/react"
import { ThemeProvider } from "next-themes"
import { system } from "./theme"
import { Stack } from '@chakra-ui/react'
import { defaultSystem, SuiProvider } from "../../../packages/saas/src/react"
import { useState } from "react"




export const Provider = (props: { children: React.ReactNode }) => {
  const [selectedDesignSystem, setSelectedDesignSystem]: any = useState(defaultSystem)

  return (
    <ChakraProvider value={selectedDesignSystem}>
      <ThemeProvider attribute="class" disableTransitionOnChange>
        <Stack>
          <Flex>
            <Button onClick={() => setSelectedDesignSystem(system)}>Default Theme</Button>
            <Button onClick={() => setSelectedDesignSystem(defaultSystem)}>Saas Theme</Button>
          </Flex>
          {props.children}
        </Stack>
      </ThemeProvider>
    </ChakraProvider>
  )
}
