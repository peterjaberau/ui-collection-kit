import { setup, assign, spawnChild  } from "xstate"
import { registryLocales, components } from "../designer.defaults"
import { reSortBehaviors } from "../lib/registryUtils"
import * as icons from "../components/icons"

export const registryMachine = setup({
  actions: {
    registerBehaviors: assign(({ context, event }) => {
      const results = []
      components.forEach((sources) => {
        reSortBehaviors(results, sources)
      })
      context.behaviors = results
    }),
  },
  actors: {},
  guards: {},
}).createMachine({
  initial: 'loading',
  context: ({ input }: any) => {
    return {
      language: "en-us",
      locales: registryLocales,
      icons: icons,
      behaviors: [],
      ...input,
    }
  },
  states: {
    loading: {
      always: {
        target: 'ready',
        actions: ['registerBehaviors']
      }
    },
    ready: {}
  }
})
