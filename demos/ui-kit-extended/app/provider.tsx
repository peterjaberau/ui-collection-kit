"use client"
import { ChakraProvider } from "@chakra-ui/react"
import { ThemeProvider } from "next-themes"
import { Stack } from "@chakra-ui/react"
import { useStylingActor } from "#actors/hooks/useStylingActor"
// import { EuiThemeProviderCustom } from "#packages/app-shell/common/providers/ThemeProvider"
import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query"

const queryClient = new QueryClient()

export const Provider = (props: { children: React.ReactNode }) => {
  const { active, activeStyleDef } = useStylingActor()

  return (
    // <EuiThemeProviderCustom>
    <QueryClientProvider client={queryClient}>
      <ChakraProvider value={activeStyleDef}>
        <ThemeProvider attribute="class" disableTransitionOnChange>
          <Stack>{props.children}</Stack>
        </ThemeProvider>
      </ChakraProvider>
    </QueryClientProvider>
    // </EuiThemeProviderCustom>
  )
}
