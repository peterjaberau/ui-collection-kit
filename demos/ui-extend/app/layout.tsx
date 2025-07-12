import { SystemProvider } from '#actors/system.provider';
import { Provider } from './provider';
import { Suspense } from 'react';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Suspense>
          <SystemProvider>
            <Provider>{children}</Provider>
          </SystemProvider>
        </Suspense>
      </body>
    </html>
  );
}
