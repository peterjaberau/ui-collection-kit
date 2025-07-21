import './styles.css'

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
    {/*<head>*/}
    {/*  <link rel="stylesheet" href="https://designable-antd.formilyjs.org/playground.30312a0e35612156c598.css" precedence="default" />*/}
    {/*</head>*/}
      <body suppressHydrationWarning >
        <Suspense>
          <SystemProvider>
            <Provider>{children}</Provider>
          </SystemProvider>
        </Suspense>
      </body>
    </html>
  );
}
