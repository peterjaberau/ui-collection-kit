import { createMachine, assign, spawnChild, setup } from "xstate"
import { createSystem, defineConfig } from "@chakra-ui/react"
import dataSystemDefaults from "./system.defaults"
import { registry } from "../lib/registry"
import { iconsRegistry } from "../lib/iconsRegistry"
import { examplesRegistry } from "../lib/examplesRegistry"
import { AllIconData } from "../lib/icons/utils"
import debounce from "lodash/debounce"

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

export const sysRegistryMachine: any = setup({
  types: {
    context: {} as any,
    events: {} as any,
  } as any,
}).createMachine({
  initial: "idle",
  context: ({ input }: any) =>
    ({
      registry: dataSystemDefaults.registry,
      ...input,
    }) as any,
  entry: [
    assign(({ context }) => {
      context.registry = registry
    }),
  ],
  states: {
    idle: {
      on: {
        searchComponentEvent: {
          actions: assign(({ context, event }) => {
            const value = event.value
            if (!value || value.length === 0) {
              context.session.searchComponentResult = context.registry
            }

            const debouncedFilter = debounce((value: string) => {
              context.session.searchComponentResult = context.registry.filter((item: any) =>
                item.name.toLowerCase().includes(value.toLowerCase()),
              )
            }, 300)
          }),
        } as any,
      },
    },
  },
})

export const sysIconsRegistryMachine = createMachine({
  context: ({ input }: any) => ({
    registry: dataSystemDefaults.iconsRegistry,
    iconsLib: null,
    ...input,
  }),
  entry: [
    assign(({ context }) => {
      context.registry = iconsRegistry
      context.iconsLib = AllIconData
    }),
  ],
})

export const sysExamplesRegistryMachine = createMachine({
  context: ({ input }: any) => ({
    registry: dataSystemDefaults.examplesRegistry,
    // cacheRegistry: null,
    ...input,
  }),
  entry: [
    assign(({ context }) => {
      context.registry = examplesRegistry

      // context.cacheRegistry = iconsCacheRegistry
    }),
  ],
})

export const sysAppShellMachine = createMachine({
  context: ({ input }: any) => ({
    appShell: dataSystemDefaults.appShell,
    ...input,
  }),
})
