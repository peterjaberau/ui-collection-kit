import { Provider as ChakraProvider } from './provider';
import { Suspense } from 'react';


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='en'
      suppressHydrationWarning
    >
      <body
        suppressHydrationWarning
        className='bg-bg-white-0 text-text-strong-950'
      >
        <Suspense>
          <ChakraProvider>
            {children}
          </ChakraProvider>
        </Suspense>
      </body>
    </html>
  );
}
