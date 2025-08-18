import { createMachine, setup, assign, spawnChild } from "xstate"

export const treeNodeMachine = setup({
  types: {} as any,
  actions: {
    'updateTreeNode': assign(({ context, event }) => {

      console.log('updateTreeNode', event)

      if (event.params?.tree) {
        context.tree = event.params.tree
      }
    })

  },
  actors: {},
  guards: {},
}).createMachine({
  initial: "loading",
  context: ({ input }: any) => {
    return {
      tree: null,
      ...input
    }
  },
  states: {
    loading: {
      always: {
        target: "ready",
      }
    },
    ready: {
      on: {
        'update:tree': {
          actions: ['updateTreeNode'],
        }
      }
    }
  },

})
