import { createMachine, assign, setup, fromCallback, enqueueActions, raise } from "xstate"
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
  console.log('api--json----', api.toJSON())

  const { panels, activeGroup, grid } = api.toJSON()

  return {
    panels, activeGroup, grid
  }

}


export const dockviewApiMachine = setup({
  types: {
    context: {} as any,
    events: {} as any,
  } as any,
  actions: {
    connectToApi: assign(({ context, event }: any) => {
      context.api = event.api
    }),
    mappingWithApi: assign(({ context, event }: any) => {
      console.log("--mappingWithApi----", event)
      context.api.onDidAddPanel(({ event }: any) => raise({ type: "onDidAddPanel", payload: event } as any))
      context.api.onDidRemovePanel(({ event }: any) => raise({ type: "onDidRemovePanel", payload: event } as any))
      context.api.onDidActivePanelChange(({ event }: any) =>
        raise({ type: "onDidActivePanelChange", payload: event } as any),
      )
      // context.api.onDidMovePanel(({event}: any) => raise({ type: "onDidMovePanel", payload: event } as any))

      context.api.onDidAddGroup(({ event }: any) => raise({ type: "onDidAddGroup", payload: event } as any))
      context.api.onDidRemoveGroup(({ event }: any) => raise({ type: "onDidRemoveGroup", payload: event } as any))
      context.api.onDidActiveGroupChange(({ event }: any) =>
        raise({ type: "onDidActiveGroupChange", payload: event } as any),
      )
      // context.api.onDidMaximizedGroupChange(({event}: any) => raise({ type: "onDidMaximizedGroupChange", payload: event } as any))
    }),
    configurePanels: assign(({ context, event }: any) => {
      // load from local storage
      const state = localStorage.getItem("dv-demo-state")
      if (state) {
        try {
          context.api.fromJSON(JSON.parse(state))
          return
        } catch {
          localStorage.removeItem("dv-demo-state")
        }
        return
      }
       applyDefaultLayout(context.api, context.defaultConfig)

    }),

    //done
    addPanelAction: assign(({ context, event }: any) => {
      context.api?.addPanel({
        id: `id_${Date.now().toString()}`,
        component: event.payload?.nested ? "nested" : "default",
        title: `Tab ${nextId()}`,
        renderer: "always",
      })
    }),
    removePanelAction: assign(({ context, event }: any) => {}),
    activePanelChangeAction: assign(({ context, event }: any) => {}),
    movePanelAction: assign(({ context, event }: any) => {}),

    //done
    addGroupAction: assign(({ context, event }: any) => {
      context.api?.addGroup()
    }),
    removeGroupAction: assign(({ context, event }: any) => {}),
    activeGroupChangeAction: assign(({ context, event }: any) => {}),
    maximizedGroupChangeAction: assign(({ context, event }: any) => {}),

    //done
    addPanelCompletion: assign(({ context, event }: any) => {
      context.panels = [...context.panels, event.id]
      context.logLines = [...context.logLines, { text: `Panel Added ${event.id}`, timestamp: new Date() }]
    }),
    //done
    removePanelCompletion: assign(({ context, event }: any) => {
      context.panels = () => {
        const next = [...context.panels]
        next.splice(
          next.findIndex((x: any) => x === event.id),
          1,
        )
        return next
      }
      context.logLines = [...context.logLines, { text: `Panel Removed ${event.id}`, timestamp: new Date() }]
    }),
    //done
    activePanelChangeCompletion: assign(({ context, event }: any) => {
      context.activePanel = event?.id
      context.logLines = [...context.logLines, { text: `Panel Activated ${event.id}`, timestamp: new Date() }]
    }),
    movePanelCompletion: assign(({ context, event }: any) => {}),

    //done
    addGroupCompletion: assign(({ context, event }: any) => {
      context.groups = [...context.groups, event.id]
      context.logLines = [...context.logLines, { text: `Group Added ${event.id}`, timestamp: new Date() }]
    }),
    //done
    removeGroupCompletion: assign(({ context, event }: any) => {
      context.groups = () => {
        const next = [...context.groups]
        next.splice(
          next.findIndex((x: any) => x === event.id),
          1,
        )
        return next
      }
      context.logLines = [...context.logLines, { text: `Group Removed ${event.id}`, timestamp: new Date() }]
    }),
    //done
    activeGroupChangeCompletion: assign(({ context, event }: any) => {
      context.activeGroup = event?.id
      context.logLines = [...context.logLines, { text: `Group Activated ${event.id}`, timestamp: new Date() }]
    }),
    maximizedGroupChangeCompletion: assign(({ context, event }: any) => {}),

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
      activePanel: null,
      activeGroup: null,
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
        onReady: {
          target: "idle",
          actions: enqueueActions(({ enqueue, context, event }) => {
            enqueue("connectToApi")

            enqueue("mappingWithApi")
            enqueue("configurePanels")
          }),
        },
      },
    },

    idle: {
      on: {
        onAddPanel: {
          target: "busy",
          actions: ["addPanelAction"],
        },
        onRemovePanel: {
          target: "busy",
          actions: ["removePanelAction"],
        },
        onActivePanelChange: {
          target: "busy",
          actions: ["activePanelChangeAction"],
        },
        onMovePanel: {
          actions: ["movePanelAction"],
        },

        onAddGroup: {
          target: "busy",
          actions: ["addGroupAction"],
        },
        onRemoveGroup: {
          target: "busy",
          actions: ["removeGroupAction"],
        },
        onActiveGroupChange: {
          actions: ["activeGroupChangeAction"],
        },
        onMaximizedGroupChange: {
          actions: ["maximizedGroupChangeAction"],
        },

        RESET: { actions: { type: "resetLayout" } },
        CLEAR_LAYOUT: { actions: { type: "clearLayout" } },
        SAVE_LAYOUT: { actions: { type: "saveLayout" } },
        LOAD_LAYOUT: { actions: { type: "loadLayout" } },
      },
    },
    busy: {
      on: {
        onDidAddPanel: {
          target: "idle",
          actions: ["addPanelCompletion"],
        },
        onDidRemovePanel: {
          target: "idle",
          actions: ["removePanelCompletion"],
        },
        onDidActivePanelChange: {
          target: "idle",
          actions: ["activePanelChangeCompletion"],
        },
        onDidMovePanel: {
          target: "idle",
          actions: ["movePanelCompletion"],
        },

        onDidAddGroup: {
          target: "idle",
          actions: ["addGroupCompletion"],
        },
        onDidRemoveGroup: {
          target: "idle",
          actions: ["removeGroupCompletion"],
        },
        onDidActiveGroupChange: {
          target: "idle",
          actions: ["activeGroupChangeCompletion"],
        },
        onDidMaximizedGroupChange: {
          target: "idle",
          actions: ["maximizedGroupChangeCompletion"],
        },
      },
    },
  },
})
