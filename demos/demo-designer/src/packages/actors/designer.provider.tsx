"use client"
import React from "react"
import { createActorContext } from "@xstate/react"
import { createMachine, spawnChild } from "xstate"
import { registryMachine } from "./machines/machine.registry"
import { engineMachine } from "./machines/machine.engine"
import { treeNodeMachine } from "./machines/core/treenode.machine"

import { designerSchemasMachine } from "./designer.machines"

export const designerMachine = createMachine({
  entry: [
    spawnChild(registryMachine, { systemId: "designer-registry" }),
    spawnChild(engineMachine, { systemId: "designer-engine" }),
    spawnChild(designerSchemasMachine, { systemId: "designer-schemas" }),

    spawnChild(treeNodeMachine, { systemId: "designer-tree" }),
  ],
})

export const DesignerActorContext = createActorContext(designerMachine)

export const DesignerActorProvider = ({ children }: any) => {
  return <DesignerActorContext.Provider>{children}</DesignerActorContext.Provider>
}
