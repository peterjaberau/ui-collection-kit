import dataDefault from "./data.default"
import { createMachine, assign, spawnChild, setup } from "xstate"
import { createSystem, defineConfig } from "@chakra-ui/react"

export const rootMachine = createMachine({
  context: ({ input }) => ({
    definitions: dataDefault.definitions,
    input,
  }),
})

export const stylingMachine = createMachine({
  initial: "loading",
  context: ({ input }) => ({
    library: {},
    active: "default",
    input,
  }),
  states: {
    loading: {
      always: {
        target: "idle",
        actions: assign(({ context }) => {
          const keys = Object.keys(dataDefault.definitions.styles)
          let library: any = {}
          keys.forEach((key) => {
            const styleDef: any = dataDefault.definitions.styles[key]
            const styleConfig = defineConfig({
              ...styleDef.config,
              cssVarsPrefix: styleDef.prefix,
            })
            const style = createSystem(styleConfig)
            library[key] = style
          })
          context.library = library
        }),
      },
    },
    idle: {
      on: {
        SET_ACTIVE_STYLE: {
          actions: assign(({ context, event }) => {
            context.active = event.value
          }),
        },
      },
    },
  },
})

export const globalSessionMachine = createMachine({
  context: ({ input }) => ({
    globalSession: dataDefault.globalSession,
    input,
  }),
})

export const appSessionMachine = createMachine({
  context: ({ input }) => ({
    appSession: dataDefault.appSession,
    input,
  }),
})

export const pageSessionMachine = createMachine({
  context: ({ input }) => ({
    pageSession: dataDefault.pageSession,
    input,
  }),
})

export const edgePanelMachine = createMachine({
  context: ({ input }: any) => ({
    ...input,
  }),
  initial: "idle",
  states: {
    idle: {
      on: {
        TOGGLE_PIN: {
          actions: assign(({ context }) => {
            context.pinned = !context.pinned
          }),
        },
        RESIZE: {
          actions: assign(({ context, event }) => {
            context.size = Math.max(event.value, context.minSize)
          }),
        },
      },
    },
  },
})

export const layoutMachine = setup({
  actors: {
    edgePanelMachine,
  },
}).createMachine({
  context: ({ input, spawn }: any) => {
    const panels = dataDefault.layout.panels.map((item: any) => {
      return spawn("edgePanelMachine", {
        id: item.id,
        systemId: item.id,
        input: {
          plugin: item.plugin,
          props: item.props,
        },
        ...input,
      })
    })

    return {
      profile: dataDefault.layout.profile,
      panels,
      isReady: true,
    }
  },
})

export const flyoutMachine = createMachine({
  context: ({ input }: any) => ({
    ...input,
  }),
  initial: "idle",
  states: {
    idle: {
      on: {
        resize: {
          actions: assign(({ context, event }) => {
            // context.pinned = !context.pinned
          }),
        },
      },
    },
  },
})

export const flyoutManagerMachine = setup({
  actors: {
    flyoutMachine,
  },
}).createMachine({
  context: ({ input, spawn }: any) => {
    const plugins = dataDefault.flyoutManager.plugins.map((item: any) => {
      return spawn("flyoutMachine", {
        id: item.id,
        systemId: item.id,
        input: item,
        ...input,
      })
    })

    return {
      plugin: dataDefault.flyoutManager.plugin,
      plugins: plugins,
      status: {
        isReady: true
      }
    }
  },
})
