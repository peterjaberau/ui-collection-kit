import { createMachine, assign, setup, fromCallback } from "xstate"
import { DockviewApi } from "#dockview"
import defaultConfig from "./dockview.store"

let idCounter = 0
const nextId = () => {
  idCounter += 1
  return idCounter
}

const applyDefaultLayout = (api: DockviewApi, defaultConfig: { panels: any[] }) => {
  if (defaultConfig && defaultConfig.panels) {
    const firstPanel = api.addPanel(defaultConfig.panels[0])
    defaultConfig.panels.slice(1).forEach((panel) => {
      api.addPanel(panel)
    })
    firstPanel.api.setActive()
  }
}

const dockviewApiEvents = fromCallback(({ sendBack, input }) => {
  const { api, defaultConfig } = input as { api: DockviewApi; defaultConfig: { panels: any[] } }

  const disposables = [
    api.onDidAddPanel((event) => sendBack({ type: "dockview.addPanel", payload: event })),
    api.onDidActivePanelChange((event) => sendBack({ type: "dockview.activePanelChange", payload: event })),
    api.onDidRemovePanel((event) => sendBack({ type: "dockview.removePanel", payload: event })),
    api.onDidAddGroup((event) => sendBack({ type: "dockview.addGroup", payload: event })),
    api.onDidMovePanel((event) => sendBack({ type: "dockview.movePanel", payload: event })),
    api.onDidMaximizedGroupChange((event) => sendBack({ type: "dockview.maximizedGroupChange", payload: event })),
    api.onDidRemoveGroup((event) => sendBack({ type: "dockview.removeGroup", payload: event })),
    api.onDidActiveGroupChange((event) => sendBack({ type: "dockview.activeGroupChange", payload: event })),
  ]

  const loadLayout = () => {
    const state = localStorage.getItem("dv-demo-state")
    if (state) {
      try {
        api.fromJSON(JSON.parse(state))
        return
      } catch {
        localStorage.removeItem("dv-demo-state")
      }
      return
    }
    applyDefaultLayout(api, defaultConfig)
  }

  loadLayout()

  return () => {
    disposables.forEach((disposable) => disposable.dispose())
  }
})

export const dockviewApiMachine = setup({
  types: {
    context: {} as any,
    events: {} as any,
  } as any,
  actions: {
    addPanel: assign(({ context, event }: any) => ({
      panels: [...context.panels, event.payload.id],
      logLines: [...context.logLines, { text: `Panel Added ${event.payload.id}`, timestamp: new Date() }],
    })),
    removePanel: assign(({ context, event }: any) => ({
      panels: context.panels.filter((p: string) => p !== event.payload.id),
      logLines: [...context.logLines, { text: `Panel Removed ${event.payload.id}`, timestamp: new Date() }],
    })),
    setActivePanel: assign(({ context, event }: any) => ({
      activePanel: event.payload?.id,
      logLines: [...context.logLines, { text: `Panel Activated ${event.payload?.id}`, timestamp: new Date() }],
    })),
    addGroup: assign(({ context, event }: any) => ({
      groups: [...context.groups, event.payload.id],
      logLines: [...context.logLines, { text: `Group Added ${event.payload.id}`, timestamp: new Date() }],
    })),
    removeGroup: assign(({ context, event }: any) => ({
      groups: context.groups.filter((g: string) => g !== event.payload.id),
      logLines: [...context.logLines, { text: `Group Removed ${event.payload.id}`, timestamp: new Date() }],
    })),
    setActiveGroup: assign(({ context, event }: any) => ({
      activeGroup: event.payload?.id,
      logLines: [...context.logLines, { text: `Group Activated ${event.payload?.id}`, timestamp: new Date() }],
    })),
    movePanel: assign(({ context, event }: any) => ({
      logLines: [...context.logLines, { text: `Panel Moved ${event.payload.panel.id}`, timestamp: new Date() }],
    })),
    setGroupMaximized: assign(({ context, event }: any) => ({
      logLines: [
        ...context.logLines,
        {
          text: `Group Maximized Changed ${event.payload.group.api.id} [${event.payload.isMaximized}]`,
          timestamp: new Date(),
        },
      ],
    })),
    resetLayout: ({ context }) => {
      const { api, defaultConfig } = context
      if (api) {
        try {
          api.clear()
          applyDefaultLayout(api, defaultConfig)
        } catch (err) {
          console.error("failed to reset layout", err)
        } finally {
          localStorage.removeItem("dv-demo-state")
        }
      }
    },
    clearLayout: ({ context }) => {
      context.api?.clear()
    },
    saveLayout: ({ context }) => {
      if (context.api) {
        const state = context.api.toJSON()
        localStorage.setItem("dv-demo-state", JSON.stringify(state))
      }
    },
    loadLayout: ({ context }) => {
      const state = localStorage.getItem("dv-demo-state")
      if (state && context.api) {
        try {
          context.api.fromJSON(JSON.parse(state))
        } catch (err) {
          console.error("failed to load state", err)
          localStorage.removeItem("dv-demo-state")
        }
      }
    },
  },
  actors: {
    dockviewApiEvents,
  },
  guards: {
    // gapCheck: ({ context, event }) => {},
  },
}).createMachine({
  initial: "waitingForApi",
  context: ({ input }: any) => {
    return {
      logLines: [],
      panels: [],
      groups: [],
      api: null,
      activePanel: "",
      activeGroup: "",
      showLogs: false,
      debug: false,
      pending: {
        text: null,
        timestamp: null,
      },
      defaultConfig: defaultConfig,
      ...input,
    }
  },
  states: {
    waitingForApi: {
      on: {
        "api.ready": {
          target: "ready",
          actions: assign({
            api: ({ event }) => event.api,
          }),
        },
      },
    },
    ready: {
      invoke: {
        id: "dockviewApiListener",
        src: "dockviewApiEvents",
        input: ({ context }) => ({ api: context.api, defaultConfig: context.defaultConfig }),
      },
      on: {
        "dockview.addPanel": { actions: { type: "addPanel" } },
        "dockview.removePanel": { actions: { type: "removePanel" } },
        "dockview.activePanelChange": { actions: { type: "setActivePanel" } },
        "dockview.addGroup": { actions: { type: "addGroup" } },
        "dockview.removeGroup": { actions: { type: "removeGroup" } },
        "dockview.activeGroupChange": { actions: { type: "setActiveGroup" } },
        "dockview.movePanel": { actions: { type: "movePanel" } },
        "dockview.maximizedGroupChange": { actions: { type: "setGroupMaximized" } },
        RESET: { actions: { type: "resetLayout" } },
        ADD_PANEL: { actions: { type: "apiAddPanel" } },
        ADD_GROUP: { actions: { type: "apiAddGroup" } },
        CLEAR_LAYOUT: { actions: { type: "clearLayout" } },
        SAVE_LAYOUT: { actions: { type: "saveLayout" } },
        LOAD_LAYOUT: { actions: { type: "loadLayout" } },
      },
    },
  },
})
