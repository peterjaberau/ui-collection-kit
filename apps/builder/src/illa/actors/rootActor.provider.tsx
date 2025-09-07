"use client"
import React from "react"
import { createActorContext } from "@xstate/react"
import { createMachine } from "xstate"
import { rootActorMachine } from "./rootActor.machine"




export const RootActorContext = createActorContext(rootActorMachine)

export const RootActorProvider = ({ children }: any) => {
  return <RootActorContext.Provider>{children}</RootActorContext.Provider>
}
