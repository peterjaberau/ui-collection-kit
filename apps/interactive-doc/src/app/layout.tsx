import { Provider as ChakraProvider } from "./provider"
import '#demos/dockview/main/dock-view-light.css'
import { Suspense } from "react"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning style={{ display: 'flex', minHeight: '100dvh', position: 'relative'}}>
        <Suspense>
            <ChakraProvider>
              <div style={{ width: '100%' }}>{children}</div>
            </ChakraProvider>
        </Suspense>
      </body>
    </html>
  )
}
