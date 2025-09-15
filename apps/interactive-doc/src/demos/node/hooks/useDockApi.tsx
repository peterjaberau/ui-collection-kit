"use client"
import { map } from "lodash"
import { useSelector } from "@xstate/react"
import { useDock } from "./useDock"

// https://dockview.dev/docs/api/dockview/overview
export function useDockApi() {
  const { dockRef } = useDock()

  const dockApiRef = dockRef.system.get("dock")

  console.log('---dockApiRef----', {
    dockRef,
    dockApiRef
  })

  const dockApiState: any = useSelector(dockApiRef, (state) => state)
  const dockApiContext = dockApiState.context
  const sendToDockApi = dockApiRef.send

  const api = dockApiContext.api

  const activeGroupId= api?.activeGroup?.id
  const activePanelId= api?.activePanel?.id
  const activeGroup = api?.activeGroup
  const activePanel = api?.activePanel

  const meta = {
    panels: map(api?.panels, "id"),
    groups: map(api?.groups, "id"),
  }

  const groups = api?.groups
  const height= api?.height
  const id= api?.id
  const maximumHeight= api?.maximumHeight
  const minimumHeight= api?.minimumHeight
  const maximumWidth= api?.maximumWidth
  const minimumWidth= api?.minimumWidth

  const panels = api?.panels
  const size = api?.size
  const totalPanels = api?.totalPanels
  const width = api?.width


  const extras = {
    showLogs: dockApiContext.showLogs,
    debug: dockApiContext.debug,
    pending: dockApiContext.pending,
    logLines: dockApiContext.logLines
  }

  return {
    dockApiRef,
    dockApiState,
    dockApiContext,
    sendToDockApi,

    api,
    meta,
    extras,

    activeGroupId,
    activePanelId,
    activeGroup,
    activePanel,
    groups,
    height,
    id,
    maximumHeight,
    minimumHeight,
    maximumWidth,
    minimumWidth,
    panels,
    size,
    totalPanels,
    width,

    addFloatingGroup: (item: any, options: any) => api?.addFloatingGroup(item, options),
    addGroup: (options: any) => api?.getGroup(options),
    addPanel: (options: any) => api?.addPanel(options),
    addPopoutGroup: (item: any, options: any) => api?.addPopoutGroup(item, options),
    clear: () => api?.clear(),
    closeAllGroups: () => api?.closeAllGroups(),
    dispose: () => api?.dispose(),
    exitMaximizedGroup: () => api?.exitMaximizedGroup(),
    focus: () => api?.focus(),
    fromJSON: (data: any) => api?.toJSON(data),
    getGroup: (id: string) => api?.getGroup(id),
    getPanel: (id: string) => api?.getPanel(id),
    hasMaximizedGroup: () => api?.hasMaximizedGroup(),
    layout: (width: number, height: number, force: boolean) => api?.layout(width, height, force),
    maximizeGroup: (panel: any) => api?.maximizeGroup(panel),
    moveToNext: (options: any) => api?.moveToNext(options),
    moveToPrevious: (options: any) => api?.moveToPrevious(options),
    removeGroup: (group: any) => api?.removeGroup(group),
    removePanel: (panel: any) => api?.removePanel(panel),
    toJSON: () => api?.toJSON(),
    updateOptions: (options: any) => api?.updateOptions(options),

    /*
      onDidActiveGroupChange: {},
      onDidActivePanelChange: {},
      onDidAddGroup: {},
      onDidAddPanel: {},
      onDidDrop: {},
      onDidLayoutChange: {},
      onDidLayoutFromJSON: {},
      onDidMaximizedGroupChange: {},
      onDidMovePanel: {},
      onDidOpenPopoutWindowFail: {},
      onDidPopoutGroupPositionChange: {},
      onDidPopoutGroupSizeChange: {},
      onDidRemoveGroup: {},
      onDidRemovePanel: {},
      onUnhandledDragOverEvent: {},
      onWillDragGroup: {},
      onWillDragPanel: {},
      onWillDrop: {},
      onWillShowOverlay: {},
     */

  }
}


const events = {
  onDidActiveGroupChange: {},
  onDidActivePanelChange: {},
  onDidAddGroup: {},
  onDidAddPanel: {},
  onDidDrop: {},
  onDidLayoutChange: {},
  onDidLayoutFromJSON: {},
  onDidMaximizedGroupChange: {},
  onDidMovePanel: {},
  onDidOpenPopoutWindowFail: {},
  onDidPopoutGroupPositionChange: {},
  onDidPopoutGroupSizeChange: {},
  onDidRemoveGroup: {},
  onDidRemovePanel: {},
  onUnhandledDragOverEvent: {},
  onWillDragGroup: {},
  onWillDragPanel: {},
  onWillDrop: {},
  onWillShowOverlay: {},
}
