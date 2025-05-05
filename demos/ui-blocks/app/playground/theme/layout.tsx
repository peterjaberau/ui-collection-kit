import { Stack } from "@chakra-ui/react"

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <Stack pos="relative" gap="8" overflow="hidden">
      {children}
    </Stack>
  )
}
