import '#packages/formily/antd/components/common/Container/styles.less'
import '#packages/formily/antd/components/components/ArrayCards/styles.less'
import '#packages/formily/antd/components/components/ArrayTable/styles.less'
import '#packages/formily/antd/components/components/Form/styles.less'
import '#packages/formily/antd/components/components/FormGrid/styles.less'
import '#packages/formily/antd/components/components/Text/styles.less'
import '#packages/formily/setters/components/DataSourceSetter/styles.less'
import '#packages/formily/setters/components/ReactionsSetter/styles.less'

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
