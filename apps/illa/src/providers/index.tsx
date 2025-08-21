"use client"
import { ProviderDnd } from "./provider.dnd"
import { ProviderTheme } from "./provider.theme"

export const Providers = (props: { children: React.ReactNode }) => {
  return (
    <>
      <ProviderDnd>
        <ProviderTheme>{props.children}</ProviderTheme>
      </ProviderDnd>
    </>
  )
}
