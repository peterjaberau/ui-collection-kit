import 'react18-json-view/src/style.css'
import { Provider as ChakraProvider } from "./provider"
import { RootActorProvider } from "../actors/rootActor.provider"
import { Suspense } from "react"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Suspense>
          <RootActorProvider>
            <ChakraProvider>{children}</ChakraProvider>
          </RootActorProvider>
        </Suspense>
      </body>
    </html>
  )
}
