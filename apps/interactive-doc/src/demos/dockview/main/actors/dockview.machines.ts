import { createMachine, assign, spawnChild, setup } from "xstate"
import dataStore from "./dockview.store"

export const dockviewRootMachine = createMachine({
  context: ({ input }: any) => ({
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

