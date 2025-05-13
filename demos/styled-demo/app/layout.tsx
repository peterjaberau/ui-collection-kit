import { Provider } from './provider';
import { Suspense } from 'react';
import { NavigationBarTop } from "#app/_components/navigation-bar-top"
import { VStack, Box, Theme } from "@chakra-ui/react"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Suspense>
            <Provider>
              <VStack>
                <NavigationBarTop/>
                <Box>
                  {children}
                </Box>
              </VStack>
            </Provider>
        </Suspense>
      </body>
    </html>
  );
}
