"use client"
import { useDockApi } from "./useDockApi"

// https://dockview.dev/docs/api/dockview/panelApi
export const useDockPanel = ({ panelId }: any) => {
  const { getPanel, activePanelId }: any = useDockApi()

  const panel = getPanel(panelId)
  const panelApi = panel?.api
  const panelContainerApi = panel?.containerApi
  const id = panel?.id

  const componentId = panel?.component
  const group = panel?.group
  const groupId = panel?.group.id
  const maximumHeight = panel?.maximumHeight
  const maximumWidth = panel?.maximumWidth
  const minimumHeight = panel?.minimumHeight
  const minimumWidth = panel?.minimumWidth
  const params = panel?.params
  // const renderer = {}
  const title = panel?.title


  //from panel.api
  // const height = panelApi?.height
  // const isActive = panelApi?.isActive
  // const isDisposed = panelApi?.isDisposed
  // const isFocused = panelApi?.isFocused
  // const isGroupActive = panelApi?.isGroupActive
  // const isVisible = panelApi?.isVisible
  // const location = panelApi?.location
  // const renderer = panelApi?.renderer
  // const width = panelApi?.width


  return {
    isPopout: panelApi?.location.type === 'popout',
    panel: panel,
    panelContainerApi,
    componentId: panel?.component,
    group: panel?.group,
    height: panel?.height,
    id: panel?.id,
    isActive: panel?.api.isActive,
    isFocused: panel?.api.isFocused,
    isGroupActive: panel?.api.isGroupActive,
    isVisible: panel?.api.isVisible,
    location: panel?.api.location,
    tabComponent: panel?.tabComponent,
    title: panel?.title,
    width: panel?.width,
    renderer: panel?.renderer,
    params,

    close: () => panel?.api.close(),
    exitMaximized: () => panel?.api.exitMaximized(),
    getParameters: () => panel?.api.getParameters(),
    getWindow: () => panel?.api.getWindow(),
    isMaximized: () => panel?.api.isMaximized(),
    maximize: () => panel?.api.maximize(),
    setActive: () => panel?.api.setActive(),
    setTitle: (title: string) => panel?.api.setTitle(title),
    updateParameters: (parameters: any) => panel?.api.updateParameters(parameters),
    focus: () => panel?.focus(),

    /*
 onActiveChange: {},
  onDidActiveChange: {},
  onDidActiveGroupChange: {},
  onDidConstraintsChange: {},
  onDidConstraintsChangeInternal: {},
  onDidDimensionsChange: {},
  onDidFocusChange: {},
  onDidGroupChange: {},
  onDidLocationChange: {},
  onDidParametersChange: {},
  onDidRendererChange: {},
  onDidSizeChange: {},
  onDidTitleChange: {},
  onDidVisibilityChange: {},
  onWillFocus: {},
  onWillVisibilityChange: {},
     */
  }
}
