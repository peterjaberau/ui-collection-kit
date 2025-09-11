"use client"
import { DockviewProvider } from "./actors/dockview.provider"
import DockviewApp from "./app"

export const DockViewMain = () => {

  return (
    <DockviewProvider>
      <DockviewApp />
    </DockviewProvider>
  )
}
