"use client"
import { DockviewProvider } from "./actors/dockview.provider"
import { JsonataProvider } from "#demos/jsonata/actors/jsonata.provider"
import DockviewApp from "./app"

export const DockViewMain = () => {
  return (
    <DockviewProvider>
      <JsonataProvider>
        <DockviewApp />
      </JsonataProvider>
    </DockviewProvider>
  )
}
