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
    api.onDidAddPanel((event) => sendBack({ type: "onDidAddPanel", payload: event })),
    api.onDidRemovePanel((event) => sendBack({ type: "onDidRemovePanel", payload: event })),
    api.onDidActivePanelChange((event) => sendBack({ type: "onDidActivePanelChange", payload: event })),
    api.onDidMovePanel((event) => sendBack({ type: "onDidMovePanel", payload: event })),

    api.onDidAddGroup((event) => sendBack({ type: "onDidAddGroup", payload: event })),
    api.onDidRemoveGroup((event) => sendBack({ type: "onDidRemoveGroup", payload: event })),
    api.onDidActiveGroupChange((event) => sendBack({ type: "onDidActiveGroupChange", payload: event })),
    api.onDidMaximizedGroupChange((event) => sendBack({ type: "onDidMaximizedGroupChange", payload: event })),
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
    addPanel: ({ context, event }: any) => {
      context.api?.addPanel({
        id: `id_${Date.now().toString()}`,
        component: event.payload?.nested ? "nested" : "default",
        title: `Tab ${nextId()}`,
        renderer: "always",

      })
    },
    addGroup: ({ context }) => {
      context.api?.addGroup()
    },

    // completion
    addPanelCompletion: assign(({ context, event }: any) => ({
      panels: [...context.panels, event.payload.id],
      logLines: [...context.logLines, { text: `Panel Added ${event.payload.id}`, timestamp: new Date() }],
    })),
    removePanelCompletion: assign(({ context, event }: any) => ({
      panels: context.panels.filter((p: string) => p !== event.payload.id),
      logLines: [...context.logLines, { text: `Panel Removed ${event.payload.id}`, timestamp: new Date() }],
    })),
    activePanelChangeCompletion: assign(({ context, event }: any) => ({
      activePanel: event.payload?.id,
      logLines: [...context.logLines, { text: `Panel Activated ${event.payload?.id}`, timestamp: new Date() }],
    })),
    movePanelCompletion: assign(({ context, event }: any) => ({
      logLines: [...context.logLines, { text: `Panel Moved ${event.payload.panel.id}`, timestamp: new Date() }],
    })),
    addGroupCompletion: assign(({ context, event }: any) => ({
      groups: [...context.groups, event.payload.id],
      logLines: [...context.logLines, { text: `Group Added ${event.payload.id}`, timestamp: new Date() }],
    })),
    removeGroupCompletion: assign(({ context, event }: any) => ({
      groups: context.groups.filter((g: string) => g !== event.payload.id),
      logLines: [...context.logLines, { text: `Group Removed ${event.payload.id}`, timestamp: new Date() }],
    })),
    activeGroupChangeCompletion: assign(({ context, event }: any) => ({
      activeGroup: event.payload?.id,
      logLines: [...context.logLines, { text: `Group Activated ${event.payload?.id}`, timestamp: new Date() }],
    })),
    maximizedGroupChangeCompletion: assign(({ context, event }: any) => ({
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
        "onReady": {
          target: "ready",
          actions: assign({
            api: ({ event }) => event.api,
          }),
        },
      },
    },
    ready: {
      invoke: {
        id: "dockviewApiEvents",
        src: "dockviewApiEvents",
        input: ({ context }) => ({ api: context.api, defaultConfig: context.defaultConfig }),
      },
      on: {
        onAddPanel: { actions: { type: "addPanel" } },
        onAddGroup: { actions: { type: "addGroup" } },

        // completion events
        "onDidAddPanel": { actions: { type: "addPanelCompletion" } },
        "onDidRemovePanel": { actions: { type: "removePanelCompletion" } },
        "onDidActivePanelChange": { actions: { type: "activePanelChangeCompletion" } },
        "onDidMovePanel": { actions: { type: "movePanelCompletion" } },
        "onDidAddGroup": { actions: { type: "addGroupCompletion" } },
        "onDidRemoveGroup": { actions: { type: "removeGroupCompletion" } },
        "onDidActiveGroupChange": { actions: { type: "activeGroupChangeCompletion" } },
        "onDidMaximizedGroupChange": { actions: { type: "maximizedGroupChangeCompletion" } },


        onResetLayout: { actions: { type: "resetLayout" } },
        onClearLayout: { actions: { type: "clearLayout" } },
        onSaveLayout: { actions: { type: "saveLayout" } },
        onLoadLayout: { actions: { type: "loadLayout" } },
      },
    },
  },
})
