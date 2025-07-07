import { createMachine, assign, spawnChild, setup } from "xstate"
import { createSystem, defineConfig } from "@chakra-ui/react"
import dataSystemDefaults from "./system.defaults"
import { registry } from '../lib/registry'
import { iconsRegistry } from '../lib/iconsRegistry'



export const sysGlobalsMachine = createMachine({
  context: ({ input }: any) => ({
    globals: dataSystemDefaults.globals,
    ...input,
  }),
})

export const sysStylesMachine = createMachine({
  context: ({ input }: any) => ({
    styles: dataSystemDefaults.styles,
    ...input,
  }),

})

export const sysRegistryMachine = createMachine({
  context: ({ input }: any) => ({
    registry: dataSystemDefaults.registry,
    ...input,
  }),
  entry: [
    assign(({context}) => {
      context.registry = registry
    }),
  ]
})

export const sysIconsRegistryMachine = createMachine({
  context: ({ input }: any) => ({
    registry: dataSystemDefaults.iconsRegistry,
    ...input,
  }),
  entry: [
    assign(({context}) => {
      context.registry = iconsRegistry
    }),
  ]
})

export const sysComponentsMachine = createMachine({
  context: ({ input }: any) => ({
    components: dataSystemDefaults.components,
    ...input,
  }),

})
