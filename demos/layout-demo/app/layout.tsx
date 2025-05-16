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
            <Provider>
              {children}
            </Provider>
        </Suspense>
      </body>
    </html>
  );
}
