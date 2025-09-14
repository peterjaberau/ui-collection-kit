import { createMachine, assign, setup, fromCallback } from "xstate"
import { DockviewApi } from "#dockview"
import { configDemo, domainDrivenDock, domainStore} from "./dockview.store"
import { defineDockDisposables, applyDefaultLayout, loadLayoutFromLocalStorage, cleanupDockDisposables } from "./utils"

const defaultConfig = {
  demo: configDemo,
  domainDrivenDock: domainDrivenDock,
  domain: domainStore
}

const dockviewApiEvents = fromCallback(({ sendBack, input }) => {
  const { api, defaultConfig }: any = input

  const disposables = defineDockDisposables({ api, sendBack})

  loadLayoutFromLocalStorage({ api, key: 'dv-demo-state'});
  applyDefaultLayout({ api, defaultConfig})

  return cleanupDockDisposables({ disposables })

})

export const dockviewApiMachine = setup({
  types: {
    context: {} as any,
    events: {} as any,
  } as any,
  actions: {
    addPanel: ({ context, event }: any) => {

      const idCounter = context.idCounter + 1;
      context.idCounter = idCounter;


      const id = event.playload?.id || `id_${Date.now().toString()}`
      const component = event.payload?.nested ? "nested" : "default"
      const title = event.payload?.title || `Tab ${idCounter}`
      const renderer = event.payload?.renderer || 'always'
      const position = event.payload?.position || undefined

      // context.api?.addPanel({
      //   id: `id_${Date.now().toString()}`,
      //   component: event.payload?.nested ? "nested" : "default",
      //   title: `Tab ${idCounter}`,
      //   renderer: "always",
      //
      // })

      context.api?.addPanel({
        id: id,
        component: component,
        title: title,
        renderer: renderer,
        ...(position && { position: position })
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
          applyDefaultLayout({ api, defaultConfig})
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

      panels: [],
      groups: [],

      api: null,
      activePanel: "",
      activeGroup: "",
      // defaultConfig: defaultConfig.domainDrivenDock,
      defaultConfig: defaultConfig.domain.domainConfig.jsonata.dock,

      //extras
      idCounter: 0,
      debug: false,
      logLines: [],
      showLogs: false,
      pending: {
        text: null,
        timestamp: null,
      },

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
