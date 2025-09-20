import 'react18-json-view/src/style.css'

import { Inter as FontSans } from 'next/font/google';
import { cn } from '../modules/alignui/utils/cn';
import './globals.css'

import { Provider as ChakraProvider } from "./provider"
import { RootActorProvider } from "#illa/actors/rootActor.provider"
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
