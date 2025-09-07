import 'react18-json-view/src/style.css'
import { RootActorProvider } from "#illa/actors/rootActor.provider"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <RootActorProvider>
        {children}
      </RootActorProvider>
    </>
  )
}
