import dataDefault from "./data.default"
import { createMachine, assign } from 'xstate';
import { createSystem, defineConfig } from '@chakra-ui/react';

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
    active: 'default',
    input,
  }),
  states: {
    loading: {
      always: {
        target: 'idle',
        actions: assign(({ context}) => {
          const keys = Object.keys(dataDefault.definitions.styles)
          let library: any = {}
          keys.forEach((key) => {
            const styleDef: any = dataDefault.definitions.styles[key]
            const styleConfig = defineConfig({
              ...styleDef.config,
              cssVarsPrefix: styleDef.prefix
            })
            const style = createSystem(styleConfig)
            library[key] = style
          })
          context.library = library
        })
      }
    },
    idle: {
      on: {
        SET_ACTIVE_STYLE: {
          actions: assign(({ context, event }) => {
            context.active = event.value
          })
        }
      },
    }
  }
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


export const dataTransformerMachine = createMachine({
  context: ({ input }) => ({
    pageSession: dataDefault.pageSession,
    input,
  }),
})
