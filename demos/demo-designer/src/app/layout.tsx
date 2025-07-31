import './styles.css'
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
        style={{
          height: '100%',
          width: '100%',
          margin: 0,
          padding: 0,
          overflow: 'hidden',
        }}
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
