import { Suspense } from 'react';
import { Provider } from './provider';
import { CssGuiThemeProvider } from '#components/CssGuiThemeProvider';
import { AppInstanceRenderer } from '#machines/renderers';
import '../styles/code-styles.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Suspense>
          <AppInstanceRenderer actorOptions={undefined}>
            <CssGuiThemeProvider>
              <Provider>{children}</Provider>
            </CssGuiThemeProvider>
          </AppInstanceRenderer>
        </Suspense>
      </body>
    </html>
  );
}
