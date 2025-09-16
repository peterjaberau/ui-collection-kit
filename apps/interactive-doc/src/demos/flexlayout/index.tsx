"use client"
import { FlexLayoutProvider } from "./actors/flexlayout.provider"
import { JsonataProvider } from "#demos/jsonata/actors/jsonata.provider"
import { FlexLayoutApp } from "./app"

export const FlexLayoutMain = () => {
  return (
    <JsonataProvider>
      <FlexLayoutProvider>
        <FlexLayoutApp />
      </FlexLayoutProvider>
    </JsonataProvider>
  )
}
