import { Provider } from './provider';
import { AppShell, Box } from '@ui-collection-kit/saas/react';
import { AppShellHeader } from '#components/system/app-shell-header';
import { AppInstanceRenderer } from '#machines/renderers';
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
          <AppInstanceRenderer actorOptions={undefined}>
            <Provider>
              <AppShell
                header={
                  <Box height='40px' borderBottomWidth='1px' p='2'>
                    <AppShellHeader />
                  </Box>
                }
                sidebar={
                  <Box width='200px' borderRightWidth='1px' p='2'>
                    Sidebar
                  </Box>
                }
                aside={
                  <Box width='200px' borderLeftWidth='1px' p='2'>
                    Aside
                  </Box>
                }
                footer={
                  <Box height='40px' borderTopWidth='1px' p='2'>
                    Footer
                  </Box>
                }
              >
                <Box p='2'> {children}</Box>
              </AppShell>
            </Provider>
          </AppInstanceRenderer>
        </Suspense>
      </body>
    </html>
  );
}
