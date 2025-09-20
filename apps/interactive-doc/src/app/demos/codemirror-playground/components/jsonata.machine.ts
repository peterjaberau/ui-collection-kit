import { createMachine, assign, setup } from "xstate"
import { fromPromise } from "xstate/actors"
import jsonata from "jsonata"
import { getStoredState, saveState } from "./storage"
import { defaultPayload } from "./payload"

// --- INITIAL STATE ---

// This function now handles seeding the state if localStorage is empty
const getInitialState = () => {
  const storedState = getStoredState();

  // If no datasets exist in storage, populate it with the default payload
  if (!storedState.datasets || Object.keys(storedState.datasets).length === 0) {
    const initialState = {
      datasets: {
        'default-data': defaultPayload.data,
      },
      expressionSets: {
        'default-expressions': defaultPayload.expressions,
      },
      lastSelectedDataset: 'default-data',
      lastSelectedExpressionSet: 'default-expressions',
    };
    // Save this initial state to localStorage immediately
    saveState(initialState);
    return initialState;
  }

  return storedState;
};

const initialState: any = getInitialState();
const initialDatasetKey: any = initialState.lastSelectedDataset || null;
const initialDataCode: any = initialDatasetKey
  ? JSON.stringify(initialState.datasets[initialDatasetKey], null, 2)
  : '// Select a dataset to begin';



// --- MACHINE DEFINITION using setup() ---

export const jsonataMachine = setup({
  actors: {
    jsonataEval: fromPromise(async ({ input }: { input: { dataCode: string; expressionCode: string } }) => {
      const { dataCode, expressionCode } = input
      const data = JSON.parse(dataCode)
      const expression = jsonata(expressionCode)
      return await expression.evaluate(data)
    }),
  },
  actions: {
    persistState: ({ context }) => {
      saveState({
        datasets: context.datasets,
        expressionSets: context.expressionSets,
        lastSelectedDataset: context.activeDatasetKey || undefined,
        lastSelectedExpressionSet: context.activeExpressionSetKey || undefined,
      })
    },
  },
}).createMachine({
  id: "jsonata",
  context: {
    datasets: initialState.datasets,
    expressionSets: initialState.expressionSets,
    activeDatasetKey: initialDatasetKey,
    activeExpressionSetKey: initialState.lastSelectedExpressionSet || null,
    dataCode: initialDataCode,
    expressionCode: '// Select an expression',
    resultCode: '// Result will appear here',
    error: null,
  },
  initial: "idle",

  states: {
    idle: {
      on: {
        EXECUTE: "evaluating",
        // Events that should save go to the 'persisting' state
        SELECT_DATASET: {
          target: "persisting",
          actions: assign({
            activeDatasetKey: ({ event }) => event.key,
            dataCode: ({ context, event }) => JSON.stringify(context.datasets[event.key], null, 2),
          }),
        },
        SELECT_EXPRESSION_SET: {
          target: "persisting",
          actions: assign({
            activeExpressionSetKey: ({ event }) => event.key,
            expressionCode: "// Select an expression",
          }),
        },
        SAVE_ACTIVE_DATASET: {
          target: "persisting",
          actions: assign(({ context }) => {
            if (!context.activeDatasetKey) return {}
            try {
              const updatedData = JSON.parse(context.dataCode)
              return {
                datasets: { ...context.datasets, [context.activeDatasetKey]: updatedData },
                error: null,
              }
            } catch (e) {
              console.error("Invalid JSON, not saving:", e)
              return { error: "Invalid JSON format. Not saved." }
            }
          }),
        },
        SAVE_EXPRESSION: {
          target: "persisting",
          actions: assign(({ context, event }) => {
            if (!context.activeExpressionSetKey || !("key" in event) || !event.key) return {}
            const currentSet = context.expressionSets[context.activeExpressionSetKey]
            const updatedExpression = {
              ...currentSet[event.key],
              name: currentSet[event.key]?.name || event.key,
              expression: context.expressionCode,
            }
            return {
              expressionSets: {
                ...context.expressionSets,
                [context.activeExpressionSetKey]: { ...currentSet, [event.key]: updatedExpression },
              },
            }
          }),
        },
        // Events that don't need to save can perform actions and stay in 'idle'
        UPDATE_DATA_CODE: {
          actions: assign({ dataCode: ({ event }) => event.code }),
        },
        UPDATE_EXPRESSION_CODE: {
          actions: assign({ expressionCode: ({ event }) => event.code }),
        },
        LOAD_EXPRESSION: {
          actions: assign({
            expressionCode: ({ context, event }) => {
              if (!context.activeExpressionSetKey) return context.expressionCode
              const set = context.expressionSets[context.activeExpressionSetKey]
              return set[event.key]?.expression || "// Expression not found"
            },
          }),
        },
      },
    },
    evaluating: {
      invoke: {
        id: "jsonataEval",
        src: "jsonataEval",
        input: ({ context }) => ({
          dataCode: context.dataCode,
          expressionCode: context.expressionCode,
        }),
        onDone: {
          target: "persisting", // Go to persisting after evaluation
          actions: assign({
            resultCode: ({ event }) => JSON.stringify(event.output, null, 2),
            error: null,
          }),
        },
        onError: {
          target: "persisting", // Also persist on error
          actions: assign({
            resultCode: "// Evaluation failed",
            error: ({ event }) => (event.error as Error).message,
          }),
        },
      },
    },
    // 👇 1. New state dedicated to persistence
    persisting: {
      // 2. Perform the save action upon entering this state
      entry: "persistState",
      // 3. Immediately and automatically transition back to idle
      always: {
        target: "idle",
      },
    },
  },
})
