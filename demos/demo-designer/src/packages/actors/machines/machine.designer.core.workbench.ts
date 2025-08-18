import { createMachine, setup, assign, spawnChild  } from "xstate"

export const coreDesignerWorkbenchMachine = setup({
  actions: {
    switchWorkspace: assign(({ context, event }) => {}),
    addWorkspace: assign(({ context, event }) => {}),
    removeWorkspace: assign(({ context, event }) => {}),
    setActiveWorkspace: assign(({ context, event }) => {}),
    setWorkbenchType: assign(({ context, event }) => {}),
  },
  actors: {},
  guards: {}
}).createMachine({
  context: (({ input }: any) => {
    return {
      workspaces: [],
      currentWorkspace: null,
      activeWorkspace: null,
      type: 'DESIGNABLE'
    }
  }),
  on: {
    'switch:workspace': {
      actions: ['switchWorkspace']
    },
    'add:workspace': {
      actions: ['addWorkspace']
    },
    'remove:workspace': {
      actions: ['removeWorkspace']
    }
  }
})
