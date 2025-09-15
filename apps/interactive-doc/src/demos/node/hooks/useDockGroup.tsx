"use client"
import { map } from "lodash"
import { useDockApi } from "./useDockApi"

export const useDockGroup = ({ groupId }: any) => {
  const { getGroup, activeGroupId }: any = useDockApi()

  const group = getGroup(groupId)
  const groupApi = group?.api
  const id = group?.id

  const meta = {
    panels:  map(group?.panels, "id"),
  }

  const componentId = group?.component
  const activePanel = group?.activePanel
  const activePanelId = activePanel?.id
  const height = group?.height
  const isActive = group?.isActive
  const isDisposed = group?.isDisposed
  const isVisible = group?.api.isVisible
  const locked = group?.locked
  const maximumHeight = group?.maximumHeight
  const maximumWidth = group?.maximumWidth
  const minimumHeight = group?.minimumHeight
  const minimumWidth = group?.minimumWidth
  const panels = group?.panels
  const params = group?.params
  const priority = group?.priority
  const size = group?.size
  const snap = group?.snap
  const width = group?.width

  const location = groupApi?.location
  const isFocused = groupApi?.isFocused


  return {
    group,
    groupApi,


    id,
    componentId,
    activePanel,
    activePanelId,
    height,
    isActive,
    isDisposed,
    isVisible,
    locked,
    maximumHeight,
    maximumWidth,
    minimumHeight,
    minimumWidth,
    panels,
    params,
    priority,
    size,
    snap,
    width,

    location,
    isFocused,

    getParameters: () => group?.getParameters(),
    setActive: () => group?.setActive(),
    setVisible: (value: boolean) => group?.setVisible(value),
    updateParameters: (parameters: any) => group?.updateParameters(parameters),
    close: () => group?.api.close(),
    exitMaximized: () => group?.api.exitMaximized(),
    getWindow: () => group?.getWindow(),
    isMaximized: () => group?.api.isMaximized(),
    maximize: () => group?.api.maximize(),
    moveTo: (options: any) => group?.moveTo(options),
    setConstraints: (value: any) => group?.setConstraints(value),
    setSize: (event: any) => group?.setConstraints(event),
    focus: () => group?.focus(),

    /*
      onActiveChange: {},
      onDidActiveChange: {},
      onDidActivePanelChange: {},
      onDidConstraintsChange: {},
      onDidConstraintsChangeInternal: {},
      onDidDimensionsChange: {},
      onDidFocusChange: {},
      onDidLocationChange: {},
      onDidParametersChange: {},
      onDidSizeChange: {},
      onDidVisibilityChange: {},
      onWillFocus: {},
      onWillVisibilityChange: {},
     */
  }
}
