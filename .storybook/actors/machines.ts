import dataDefault from "./data.default"
import { createMachine, assign } from "xstate"
import { createSystem, defineConfig } from "@chakra-ui/react"

export const stylingMachine = createMachine({
  initial: "loading",
  context: ({ input }: any) => ({
    library: {},
    active: "default",
    input,
  }),
  states: {
    loading: {
      always: {
        target: "idle",
        actions: assign(({ context }: any) => {
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
          actions: assign(({ context, event }: any) => {
            context.active = event.value
          }),
        },
      },
    },
  },
})
