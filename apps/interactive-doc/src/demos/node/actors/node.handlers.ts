export const defineDockDisposables = ({ api, sendBack }: any) => {
  return [
    api.onDidAddPanel((event: any) => sendBack({ type: "onDidAddPanel", payload: event })),
    api.onDidRemovePanel((event: any) => sendBack({ type: "onDidRemovePanel", payload: event })),
    api.onDidActivePanelChange((event: any) => sendBack({ type: "onDidActivePanelChange", payload: event })),
    api.onDidMovePanel((event: any) => sendBack({ type: "onDidMovePanel", payload: event })),

    api.onDidAddGroup((event: any) => sendBack({ type: "onDidAddGroup", payload: event })),
    api.onDidRemoveGroup((event: any) => sendBack({ type: "onDidRemoveGroup", payload: event })),
    api.onDidActiveGroupChange((event: any) => sendBack({ type: "onDidActiveGroupChange", payload: event })),
    api.onDidMaximizedGroupChange((event: any) => sendBack({ type: "onDidMaximizedGroupChange", payload: event })),
  ]
}

export const cleanupDockDisposables = ({ disposables }: any) => {
  return () => disposables.forEach((disposable: any) => disposable.dispose())
}

export const applyDefaultLayout = ({ api, defaultConfig }: any) => {
  if (defaultConfig && defaultConfig.panels) {
    const firstPanel = api.addPanel(defaultConfig.panels[0])
    defaultConfig.panels.slice(1).forEach((panel: any) => {
      api.addPanel(panel)
    })
    firstPanel.api.setActive()
  }
}

export const loadLayoutFromLocalStorage = ({ api, key }: any) => {
  const state = localStorage.getItem(key)
  if (state) {
    try {
      api.fromJSON(JSON.parse(state))
      return
    } catch {
      localStorage.removeItem("dv-demo-state")
    }
    return
  }
}
