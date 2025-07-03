import { GlobalProvider } from "#actors/provider"
import { Provider } from "./provider"
import { Suspense } from "react"
import { VStack, Box, Theme, Flex } from "@chakra-ui/react"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Suspense>
          <GlobalProvider>
            <Provider>{children}</Provider>
          </GlobalProvider>
        </Suspense>
      </body>
    </html>
  )
}
