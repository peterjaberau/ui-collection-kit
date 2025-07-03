import { GlobalProvider } from '../actors/provider'
import { Provider } from './provider';
// import { NavigationBarTop } from "#app/_components/navigation-bar-top"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body suppressHydrationWarning>
          <GlobalProvider>
            <Provider>

                  {children}
            </Provider>
          </GlobalProvider>
      </body>
    </html>
  );
}
