import { Provider as ChakraProvider } from "./provider"
import { Suspense } from "react"
import { Bootstrap } from "#lowcoder/bootstrap"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Suspense>
          <Bootstrap>
            <ChakraProvider>{children}</ChakraProvider>
          </Bootstrap>
        </Suspense>
      </body>
    </html>
  )
}
