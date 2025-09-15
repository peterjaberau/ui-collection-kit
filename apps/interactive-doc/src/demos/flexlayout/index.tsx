"use client"
import { FlexLayoutProvider } from "./actors/flexlayout.provider"
import { FlexLayoutApp } from "./app"

export const FlexLayoutMain = () => {
  return (
    <FlexLayoutProvider>
      <FlexLayoutApp />
    </FlexLayoutProvider>
  )
}
