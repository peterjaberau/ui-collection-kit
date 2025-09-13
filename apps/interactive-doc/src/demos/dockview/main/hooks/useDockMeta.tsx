'use client'
import { useSelector } from "@xstate/react"
import { useDockApi } from "./useDockApi"

export function useDockMeta() {
  const { activeGroupId, activePanelId, meta } = useDockApi()

  const groupsMeta = meta.groups
  const panelsMeta = meta.panels





  return {
    activeGroupId,
    activePanelId,
    groupsMeta,
    panelsMeta,

  }
}
