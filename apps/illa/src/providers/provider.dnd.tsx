"use client"
import { TouchBackend } from "react-dnd-touch-backend"
import { DndProvider } from "react-dnd"



export const ProviderDnd = (props: { children: React.ReactNode }) => {
  return (
    <DndProvider
      backend={TouchBackend}
      options={{
        enableTouchEvents: true,
        enableMouseEvents: true,
      }}
    >
        {props.children}
    </DndProvider>
  )
}
