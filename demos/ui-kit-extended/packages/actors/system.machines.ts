import { createMachine, assign, spawnChild, setup } from "xstate"
import { createSystem, defineConfig } from "@chakra-ui/react"
import dataSystemDefaults from "./system.defaults"
import { registry } from '../lib/registry'
import { iconsRegistry } from '../lib/iconsRegistry'
import { examplesRegistry } from '../lib/examplesRegistry'
import { AllIconData } from '../lib/icons/utils'



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
    iconsLib: null,
    ...input,
  }),
  entry: [
    assign(({context}) => {
      context.registry = iconsRegistry
      context.iconsLib = AllIconData
    }),
  ]
})

export const sysExamplesRegistryMachine = createMachine({
  context: ({ input }: any) => ({
    registry: dataSystemDefaults.examplesRegistry,
    // cacheRegistry: null,
    ...input,
  }),
  entry: [
    assign(({context}) => {
      context.registry = examplesRegistry


      // context.cacheRegistry = iconsCacheRegistry
    }),
  ]
})


export const sysComponentsMachine = createMachine({
  context: ({ input }: any) => ({
    components: dataSystemDefaults.components,
    ...input,
  }),

})
