"use client"
import { NodeProvider } from "./actors/node.provider"
import { JsonataProvider } from "#demos/jsonata/actors/jsonata.provider"
import NodeApp from "./app"

export const Node = () => {
  return (
    <NodeProvider>
      <JsonataProvider>
        <NodeApp />
      </JsonataProvider>
    </NodeProvider>
  )
}
