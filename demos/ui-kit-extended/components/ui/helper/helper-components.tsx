import React from "react"

export function RenderIf({ condition, children }: { condition: boolean; children: React.ReactNode }) {
  return condition ? children : null
}

export function RenderIfNot({ condition, children }: { condition: boolean; children: React.ReactNode }) {
  return condition ? null : children
}
