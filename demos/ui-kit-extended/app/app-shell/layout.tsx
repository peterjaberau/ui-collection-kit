import { SystemProvider } from '#packages/actors/system.provider';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <SystemProvider>
      {children}
    </SystemProvider>
  )
}
