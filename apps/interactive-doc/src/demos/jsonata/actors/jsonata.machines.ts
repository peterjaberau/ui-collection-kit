import { assign, fromCallback, fromPromise, setup } from "xstate"
import { configDefaults, sourceExample, transformerExample } from "./jsonata.data"
import { traverse } from "#demos/jsonata/lib/object-utils"
import jsonata from "jsonata"
import set from "lodash/set"



export const jsonataRootMachine = setup({
  types: {
    context: {} as any,
    events: {} as any,
  } as any,
  actions: {
    updateErrors: assign(({ context, event }: any) => {
      console.log('--updateErrors----', event)
      context.errors = event.output

    }),
    updateResult: assign(({ context, event }: any) => {
      console.log('--result----', event)
      context.result = event.output

    }),
    actionAssigner: assign(({ context, event }: any) => {

    }),

  },
  actors: {
    generateResult: fromPromise(async ({ input, context }: any) => {
      let result: any = {}

      for (let [key, value, path, parent] of traverse(input.transformer)) {
        if (value === null || typeof value !== "object") {
          const inputValue = await jsonata(value).evaluate(input.source);
          set(result, path, inputValue || null);
        }
      }
      return result
    }),

    validateTransformer: fromPromise(async ({ input, context }: any) => {
      let editorErrors: any = []

      for (let [key, value, path, parent] of traverse(input.transformer)) {
        if (value === null || typeof value !== "object") {
          try {
            await jsonata(value).evaluate(input.source)
          } catch (e: any) {
            editorErrors.push({
              message: `"${e.message}"`,
              severity: 3
            })
          }
        }
      }
      return editorErrors
    })
  },
  guards: {
    guardHandler: ({ context, event }) => {
      return true
    },
  },
}).createMachine({
  initial: "idle",
  context: ({ input }: any) => {
    return {
      source: sourceExample,
      transformer: transformerExample,
      result: {},
      errors: [],
      ...configDefaults,
      ...input,
    }
  },
  states: {
    idle: {
      on: {
        "execute": {
          target: "validatingTransformer",
        },
      },
    },
    validatingTransformer: {
      invoke: {
        id: "validateTransformer",
        src: "validateTransformer",
        input: ({ context }) => {
          return {
            source: context.source,
            transformer: context.transformer,
          }
        },
        onDone: {
          target: "generatingResult",
          actions: ['updateErrors']
        },
        onError: {
          target: "idle",
          actions: ['updateErrors']
        }
      },
    },
    generatingResult: {
      invoke: {
        id: "generateResult",
        src: "generateResult",
        input: ({ context }) => {
          return {
            source: context.source,
            transformer: context.transformer,
          }
        },
        onDone: {
          target: "idle",
          actions: ['updateResult']
        },
        onError: {
          target: "idle",
        }
      },
    },

  },
})
