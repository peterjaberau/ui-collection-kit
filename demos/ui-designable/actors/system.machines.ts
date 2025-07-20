import { createMachine, assign, spawnChild, setup } from "xstate"
import { createSystem, defineConfig } from "@chakra-ui/react"
import dataSystemDefaults from "./system.defaults"

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
  context: ({ input }: any) =>
    ({
      registry: dataSystemDefaults.registry,
      ...input,
    }) as any,
  entry: [

  ],
})

