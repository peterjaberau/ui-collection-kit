import { Inter as FontSans } from 'next/font/google';

import { Provider as ChakraProvider } from "./provider"
import '#demos/dockview/main/dock-view-light.css'
import { cn } from '../utils/cn';
import { Suspense } from "react"
import { ThemeProvider } from 'next-themes';
import './globals.css'
const inter = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning
          className={cn(inter.variable, 'antialiased')}


    >
      <body suppressHydrationWarning
            style={{ display: 'flex', minHeight: '100dvh', position: 'relative'}}>
        <Suspense>

            <ChakraProvider>
              <div style={{ width: '100%' }}>{children}</div>
            </ChakraProvider>

        </Suspense>
      </body>
    </html>
  )
}
